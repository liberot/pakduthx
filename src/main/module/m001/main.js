class M001Controller extends Controller {

	constructor( queue ) {
		super( queue );
	}

	init() {
		document.write( m001tmpl ); 
	}

	update() {
		console.log( arguments[ 0 ] );
	}
}

let m001tmpl = `

<div>NYUCEE</div>

<ul>
	<li>123</li>
</ul>

`;
