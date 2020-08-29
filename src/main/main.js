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
		subscription.ref = this;
		this.queue.register ( subscription );
	}

	unregister( subscription ) {
		this.queue.unregister ( subscription );
	}
	
	facMessage ( title, model ) {
		return new Message( title, model );
	}

	facSubscription ( title, ref, callback ) {
		return new Subscription( title, ref, callback );
	}

	fillTemplate ( template, model ) {
		let vars = template.match(/\{(.{1,32}?)\}/g);
		let view = template;
		for( var idx in vars ){
			let index = vars[ idx ];
			let title = vars[ idx ].replace( /[\{\}]/g, '' );
			let value = model[ title ];
			if( null != title && null != value ) {
				view = view.replace( index, value );
			}
		}
		return view;
	}

	sync ( model ) {
		let ref = this;
		let service = '';
		let req = new XMLHttpRequest();
			req.open( 'POST', service, true );
			req.setRequestHeader( 'Content-type', 'application/json' );
			req.onreadystatechange = function() {
				if( 4 == req.readyState && 200 == req.status ) {
					ref.notify( ref.facMessage( 'MODEL.SYNCED', req.responseText ) );
				}
			}
		req.send( model );
	}
}

class Queue {

	constructor () { 
		this.subscriptions = [];
	}

	notify ( message ) {
		for( let idx in this.subscriptions ) {
			if( message.title == this.subscriptions[ idx ].title ) {
				message.ref = this.subscriptions[ idx ].ref;
				this.subscriptions[idx].callback( message );
			}
		}
	}

	register( subscription ) {
		this.subscriptions.push( subscription );
	}

	unregister( subscription ) {
		for( var idx in this.subscriptions ) {
			console.log(subscription, this.subscriptions[ idx ]);
			if ( subscription == this.subscriptions[ idx ] ) {
				console.log ( subscription ); 
			}
		}
	}

	route( title, model ) {
		this.notify( new Message( title, model ) );
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