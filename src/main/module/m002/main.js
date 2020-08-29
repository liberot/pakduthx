class M002Controller extends Controller {

	constructor ( queue ) {
		super ( queue );
	}

	init () {
		this.register( this.facSubscription ( 'MODEL.SYNCED', this.update ) );
		this.register( this.facSubscription ( '_-_____', this.update) );
		// this.unregister( this.facSubscription ( '_-_____', this.update) );
		
		let fsc = document.createElement( 'a' );
			fsc.setAttribute( 'href', 'javascript:queue.route("_-_____");' );
			fsc.appendChild( document.createTextNode('tollo') );
		
		document.body.appendChild( fsc );
	}

	update ( event ) {
		console.log( 'm002:update(): ', event );

		let thiss = event.ref;
	
		let model = {};
			model.var1st = ':::???';
			model.var2nd = new Date();
			model.var3rd = new Date().getTime();

		let fsc = document.createElement( 'div' );
			fsc.innerHTML = thiss.fillTemplate( m002tmpl, model );
		
		document.body.appendChild( fsc );
	}

	bllflf ( event ) {
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