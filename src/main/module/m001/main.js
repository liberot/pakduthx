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
		document.write( m001tmpl ); 
		
		this.notify( this.facMessage ( 'M001.UPDATED', { date: new Date() } ) ); 

	}
}

let m001tmpl = `

<ul>
	<li>affe</li>
	<li>affe</li>
	<li>affe</li>
	<li>affe</li>
	<li>affe</li>
</li>




`;

let model = {};

