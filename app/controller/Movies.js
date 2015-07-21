 Ext.define("Movies.controller.Movies", {
     extend: "Ext.app.Controller",

     requires: [
     	'Movies.view.SearchContainer',
     	'Movies.view.FavoriteContainer',
     	'Movies.store.MoviesStore'
     ],

     refs: [{
		ref: 'MyComboBox',
    	selector: '[itemId=myComboBox]'
	}],

     init: function() {
     	this.control({
			'[itemId=myComboBox]': {
				render: this.onComboRender
			}
		});
     },
     onComboRender: function(combo){
     	var allMovies = this.getStore('MoviesStore');
     	allMovies.on('load', this.printMovies, this);
     	combo.bindStore(allMovies);
     },
     printMovies: function () {
        console.log ('Rendered');
     }
 });
