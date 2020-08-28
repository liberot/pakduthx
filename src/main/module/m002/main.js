class M002Controller extends Controller {

	constructor ( queue ) {

		super ( queue );
	
		this.register( this.facSubscription ( 'M001.INITED', this, 'update' ) );
		this.register( this.facSubscription ( 'M001.UPDATED', this, 'sync' ) );
	}

	init () {

		this.notify( this.facMessage ( 'M002.INITED', { date: new Date() } ) ); 
	}

	sync () {

		console.log( 'm002:sync: ', arguments[ 0 ] );
	}

	update () {

		console.log( 'm002:update: ', arguments[ 0 ] );
	}
}