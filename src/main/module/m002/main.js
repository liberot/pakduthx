class M002Controller extends Controller {

	constructor () {

		super();
	
		this.register( this.facSubscription ( 'Yanxi.MESSAGE', this.update ) );

	}

	init() {

	}

	update() {

		console.log( '>>>', arguments );
	}
}