class M002Controller extends Controller {

	constructor ( queue ) {

		super ( queue );
	
		this.register( this.facSubscription ( 'Yanxi.MESSAGE', this.update ) );

	}

	init () {

	}

	update () {

		console.log( 'm002:', arguments );
	}
}