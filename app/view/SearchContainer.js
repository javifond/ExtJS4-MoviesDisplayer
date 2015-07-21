Ext.define('Movies.view.SearchContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.search-container',

    requires: [
        'Ext.layout.container.VBox',
        'Ext.layout.container.Fit',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    layout: {
        type: 'vbox',
        align : 'stretch',
        pack  : 'start'
    },
    margin: '10',
    items: [
    {
        xtype: 'combobox',
        itemId: 'myComboBox',
        fieldLabel: 'Search Movie',
        queryMode: 'remote',
        queryCaching: false,
        queryParam: 's',
        queryDelay: 200,
        displayField: 'Title',
        valueField: 'imdbID',
        labelAlign: 'top',
        flex: 1
    },{
        xtype: 'button',
        text : 'Add my movie',
        itemId: 'addButton',
        heigth: 35
    }]
});
