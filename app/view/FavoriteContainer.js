Ext.define('Movies.view.FavoriteContainer', {
    //extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    alias: 'widget.favorite-container',

    requires: [
        'Ext.container.Container'
    ],

    layout: {
        type: 'vbox',
        align : 'stretch',
        pack  : 'start',
        padding: '0 0 0 100'
    },

    items: [{
        xtype: 'label',
        itemId: 'labelDesc',
        text: 'Selected Movie description:',
        cls: 'labelDesc',
        margin: '15 0 0 0'
    },{
        xtype: 'container',
        itemId: 'mContainer',
        layout: 'hbox',
        margin: '15 0 0 15'
    }]

});
