Ext.define('Movies.view.Viewport', {
    extend: 'Fflib.view.PanelPort',
    alias: 'widget.movies-viewport',
    requires: [
        'Ext.layout.container.Fit',
        'Ext.layout.container.Border',
        'Movies.view.SearchContainer',
        'Movies.view.FavoriteContainer',
        'Movies.view.HeaderToolbar'
    ],

    layout: {
        type: 'hbox'
    },
    //Fixed elements in the view
    dockedItems: [{
        dock: 'top',
        xtype: 'header-toolbar'
    }],
    //Here are the two main containers in the app
    items: [{
        xtype: 'search-container',
        //Defines a static width for this container
        width: 300
    },
    {
        xtype: 'favorite-container'
    }]
});
