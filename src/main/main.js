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

	facSubscription ( title, ref, callback ) {

		return new Subscription( title, ref, callback );
	}
}

class Queue {

	constructor () { 

		this.subscriptions = [];
	}

	notify ( message ) {
	
		for( let idx in this.subscriptions ) {

			if( message.title == this.subscriptions[ idx ].title ) {

				// refraff
				this.subscriptions[ idx ]
					.ref[ this.subscriptions[idx].callback ]
						( message )
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

	constructor ( title, ref, callback ) {

		this.title = title; 
		this.ref = ref;
		this.callback = callback;
	} 	
}