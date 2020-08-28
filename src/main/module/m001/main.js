class M001Controller extends Controller {

	constructor ( queue ) {

		super ( queue );
	
		this.register( this.facSubscription ( 'M002.INITED', this, 'update' ) );
	}

	init () {

		this.notify( this.facMessage ( 'M001.INITED', { date: new Date() } ) ); 
	}

	update () {

		console.log( 'm001:', arguments );
	}
}