Ext.define("Movies.controller.MoviesDetails", {
     extend: "Ext.app.Controller",
     requires: [
        'Movies.view.SearchContainer',
     	'Movies.view.FavoriteContainer',
     	'Movies.store.MoviesStoreDetail',
        'Movies.view.Mcard'
     ],
     // views: ['SearchContainer', 'FavoriteContainer', 'Mcard'],
     // stores: ['MoviesStoreDetail'],
     refs: [{
            ref: 'MyComboBox',
            selector: '[itemId=myComboBox]'
        },{
            ref:'name',
            selector: '[itemId=name]'
        },{
            ref: 'favs',
            selector: 'favorite-container'
        },{
            ref: 'mcontent',
            selector: '[itemId=mContainer]'
        }],

     init: function() {
     	this.control({
			'[itemId=addButton]': {
				click: function() {
					this.requestMovie();
				}
			}
		});
     },
     requestMovie: function () {
     	var actualImdbId = this.getMyComboBox().getValue(),
            jsonToSend = {
                'i': actualImdbId
            },
            newStore = Ext.create('Movies.store.MoviesStoreDetail'),
            //newStore = this.getStore('MoviesStoreDetail');
            newCard =  Ext.create('Movies.view.Mcard', {
                store: newStore
            });
            //newStore.on('load', this._onRetriveMovieInfo, this);
        newStore.load({
            params:{
                i: jsonToSend
            },
            callback: this._onRetriveMovieInfo.bind(this, newCard)
        });
     },
     _onRetriveMovieInfo: function (newCard, records, operation, success) {
        //Gather the information
        // var title = records[0].get('Title'),
        //     year = records[0].get('Year'),
        //     plot = records[0].get('Plot'),
        //     poster = records[0].get('Poster');

        //this.getName().setText(title);
        //this.getCard().show();
       //this.getFavs().add(newCard);
       this.getMcontent().add(newCard);
     }
 });
