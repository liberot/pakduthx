class Model {

}

class View {

}

class Controller {

	constructor ( queue ) {

		this.queue = queue;
	}

	notify( message ) {

		this.queue.notify ( message );
	}

	register( subscription ) {

		this.queue.register ( subscription );
	}
	
	facMessage ( title, model ) {

		return new Message( title, model );
	}

	facSubscription ( title, callback ) {

		return new Subscription( title, callback );
	}
}

class Queue {

	constructor () { 

		this.subscriptions = [];
	}

	notify ( message ) {
	
		for( let idx in this.subscriptions ) {

			if( message.title == this.subscriptions[ idx ].title ) {

				this.subscriptions[ idx ].callback( message );
			}
		}
	}

	register( subscription ) {

		this.subscriptions.push( subscription );
	}

}

class Message {

	constructor ( title, model ) {

		this.title = title; 
		this.model = model;
	} 
}

class Subscription {

	constructor ( title, callback ) {

		this.title = title; 
		this.callback = callback;
	} 	
}