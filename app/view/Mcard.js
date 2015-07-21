Ext.define('Movies.view.Mcard', {
    extend: 'Ext.view.View',
    alias: 'widget.mcard',
    requires: ['Movies.store.MoviesStoreDetail', 'Ext.button.Button'],

    store: 'MoviesStoreDetail',
    tpl: new Ext.XTemplate(
    			'<tpl for=".">',
					'<div class="card-container border">',
						'<div>',
							'<div class="border"><img src={Poster}></div>',
							'<div id="descriptions" class="description">',
								'<h3>{Title}</h3>',
								'<p><span>Year: </span>{Year}</p>',
								'<p><span>Plot: </span>{Plot}</p>',
							'</div>',
							'<div><button>Remove</button></div>',
						'</div>',
					'</div>',
				'</tpl>'
	            ),
    itemSelector: 'div.card-container',
    emptyText: 'No Information Available',
    width: '210px',
    listeners: {
    	viewready: function() {
    		var removeBtn = this.getEl().down('button');
    		// removeBtn.on('click', Ext.bind(function(event, target){
    		// 	this.destroy();
    		// }, this));
    		removeBtn.on('click', (function(event, target){
    			this.destroy();
    		}).bind(this));
    	}
    }
});
