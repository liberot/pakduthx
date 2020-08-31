class M002Controller extends Controller {

	constructor( queue ) {
		super( queue );
	}

	init() {
		this.register( new Subscription( 'MODEL.SYNCED', this.update ) );
		this.register( new Subscription( 'VERYIMPORTANT_BUTTON.RELEASED', this.update) );
		// this.release( new Subscription ( '_-_____', this.update) );
		// this.releaseAllSubscriptions();

		let fsc = document.createElement( 'a' );
			fsc.setAttribute( 'href', 'javascript:queue.route("VERYIMPORTANT_BUTTON.RELEASED", "Dankeee");' );
			fsc.setAttribute( 'numb', '12345');
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
	}s
}

let m002tmpl = `

<ul>
	<li>{var1st}</li>
	<li>{var2nd}</li>
	<li>{var3rd}</li>
	<li>danke</li>
	<li><a href='javascript:javascript:queue.route("VERYIMPORTANT_BUTTON.RELEASED", "Dankeee");'>danke</a></li>
</li>

`;