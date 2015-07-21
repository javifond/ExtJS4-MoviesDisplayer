Ext.define('Movies.store.MoviesStoreDetail', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],
    id: 'detailsStore',
    model: 'Movies.model.MovieDetail',
    proxy:{
        type: 'jsonp',
        url: 'http://www.omdbapi.com',
        noCache: false,
        pageParam: undefined,
        startParam: undefined,
        limitParam: undefined,
        reader: {
            type: 'json',
            getData: function(data) {
                return data;
            }
        }
    },
    autoLoad: false
});
