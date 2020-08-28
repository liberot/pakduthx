class M002Controller extends Controller {

	constructor ( queue ) {

		super ( queue );
	
		this.register( this.facSubscription ( 'M001.INITED', this, 'update' ) );
		this.register( this.facSubscription ( 'M001.UPDATED', this, 'syncModel' ) );
		this.register( this.facSubscription ( 'MODEL.SYNCED', this, 'bllflf' ) );
	}

	init () {

		this.notify( this.facMessage ( 'M002.INITED', { date: new Date() } ) ); 
	}

	syncModel () {

		console.log( 'm002:syncModel(): ', arguments[ 0 ] )
		this.sync( { date: new Date() } );
	}

	update () {

		document.write( m002tmpl );
		console.log( 'm002:update(): ', arguments[ 0 ] );
	}

	bllflf () {

		console.log( 'm002:bllflf(): ', arguments[ 0 ] );
	}
}




let m002tmpl = `

<div>NYUCEE</div>

<ul>
	<li>123</li>
</ul>






`;

