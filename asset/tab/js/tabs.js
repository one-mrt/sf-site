;( function( window ) {
	
	'use strict';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function sfTab( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	sfTab.prototype.options = {
		start : 0
	};

	sfTab.prototype._init = function() {
		// tabs elems
		this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
		// content items
		this.items = [].slice.call( this.el.querySelectorAll( '.sf-tab-content > section' ) );
		// current index
		this.current = -1;
		// init events
		this._initEvents();
	};

	sfTab.prototype._initEvents = function() {
		var self = this;
		this.tabs.forEach( function( tab, idx ) {
			tab.addEventListener( 'click', function( ev ) {
				ev.preventDefault();
				for(var i = 0; i < self.tabs.length; i++) {
					self.tabs[i].classList.remove('active');
					self.items[i].classList.remove('active');
				}
				self._show( idx );
			});
		});
	};

	sfTab.prototype._show = function( idx ) {
		if( this.current >= 0 ) {
			this.tabs[ this.current ].classList.remove('active');
			this.items[ this.current ].classList.remove('active');
		}
		// change current
		if(idx != null) {
			this.current = idx;
			this.tabs[idx].classList.add('active');
			this.items[idx].classList.add('active');
		}
		
	};

	// add to global namespace
	window.sfTab = sfTab;

})( window );



    ;(function() {
        window.addEventListener('DOMContentLoaded', function() {
			[].slice.call( document.querySelectorAll( '.sf-tab' ) ).forEach( function( el ) {
				new sfTab( el );
			});
		});
    })();
