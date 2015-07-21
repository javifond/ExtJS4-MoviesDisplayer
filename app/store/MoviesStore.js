Ext.define('Movies.store.MoviesStore', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],

    model: 'Movies.model.Movie',
    proxy:{
        type: 'jsonp',
        url: 'http://www.omdbapi.com',
        noCache: false,
        pageParam: undefined,
        startParam: undefined,
        limitParam: undefined,
        reader: {
            type: 'json',
            root: 'Search',
            getData: function(data) {
                return data;
            }
        }
    },
    autoLoad: false
});
