class M002Controller extends Controller {

	constructor ( queue ) {

		super ( queue );
	
		this.register( this.facSubscription ( 'M001.INITED', this, 'update' ) );
	}

	init () {

		this.notify( this.facMessage ( 'M002.INITED', { date: new Date() } ) ); 
	}

	sync () {

		console.log( 'm002:sync: ', arguments );
	}

	update () {

		console.log( 'm002:update: ', arguments );
	}
}