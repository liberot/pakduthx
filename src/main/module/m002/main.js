class M002Controller extends Controller {

	constructor( queue ) {
		super( queue );
	}

	init() {
		this.register( this.facSubscription( 'MODEL.SYNCED', this.update ) );
		this.register( this.facSubscription( 'VERYIMPORTANT_BUTTON.RELEASED', this.update) );
		this.release( this.facSubscription ( '_-_____', this.update) );
		// this.releaseAllSubscriptions();

		let fsc = document.createElement( 'a' );
			fsc.setAttribute( 'href', 'javascript:queue.route("VERYIMPORTANT_BUTTON.RELEASED", "Dankeee");' );
			fsc.appendChild( document.createTextNode('tollo') );
		
		document.body.appendChild( fsc );
	}

	update() {
		console.log( 'm002:update(): ', arguments[ 0 ] );

		let model = {};
			model.var1st = '_________-----_-_-:::???';
			model.var2nd = new Date();
			model.var3rd = new Date().getTime();

		let fsc = document.createElement( 'div' );
			fsc.innerHTML = this.fillTemplate( m002tmpl, model );
		
		document.body.appendChild( fsc );
	}

	bllflf( event ) {
		console.log( 'm002:bllflf(): ', event );
	}
}

let m002tmpl = `

<ul>
	<li>{var1st}</li>
	<li>{var2nd}</li>
	<li>{var3rd}</li>
	<li>affe</li>
	<li>affe</li>
</li>

`;