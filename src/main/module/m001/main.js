class M001Controller extends Controller {

	constructor ( queue ) {

		super ( queue );
	
		this.register( this.facSubscription ( 'M002.INITED', this, 'update' ) );
	}

	init () {

		this.notify( this.facMessage ( 'M001.INITED', { date: new Date() } ) ); 
	}

	update () {

		console.log( 'm001:update: ', arguments[ 0 ] );

		let model = {};
			model.var1st = 'affi';
			model.var2nd = new Date();
			model.var3rd = new Date().getTime();

		document.write( this.fillTemplate( m001tmpl, model ) ); 
		
		this.notify( this.facMessage ( 'M001.UPDATED', { date: new Date() } ) ); 

	}
}

let m001tmpl = `

<ul>
	<li>{var1st}</li>
	<li>{var2nd}</li>
	<li>{var3rd}</li>
	<li>affe</li>
	<li>affe</li>
</li>




`;

let model = {};

