class M001Controller extends Controller {

	constructor ( queue ) {

		super ( queue );
	
		this.register( this.facSubscription ( 'Yanxi.MESSAGE', this.update ) );
	
	}

	init () {

		this.notify( this.facMessage ( 'Yanxi.MESSAGE', { date: new Date() } ) ); 
		this.notify( this.facMessage ( 'Yanxi.MESSAGE', { date: new Date() } ) ); 
		this.notify( this.facMessage ( 'Yanxi.MESSAGE', { date: new Date() } ) ); 
		this.notify( this.facMessage ( 'Yanxi.MESSAGE', { date: new Date() } ) ); 
		this.notify( this.facMessage ( 'Yanxi.MESSAGE', { date: new Date() } ) ); 
	}

	update () {

		console.log( 'm001:', arguments );
	}
}