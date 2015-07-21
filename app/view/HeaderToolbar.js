Ext.define('Movies.view.HeaderToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.header-toolbar',
    //Here brings all elements that we need to use for our view
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.button.Button',
        'Ext.toolbar.Fill',
        'Ext.form.Label'
    ],

    ui: 'header',
    defaultButtonUI: 'header-toolbar',
    //Instance all previous elements according our necessities
    items: [{
        xtype: 'label',
        itemId: 'appLogo',
        cls: 'MOV-logo',
        html: '&#160;'
    },{
        xtype: 'tbtext',
        itemId: 'appTitle',
        renderTpl: '<span class="MOV-logo-text">Movies</span>'
    },{
        xtype: 'tbfill'
    },{
        xtype: 'tbseparator'
    }, {
        xtype: 'button',
        scale: 'medium',
        itemId: 'goFullScreen',
        iconCls: 'MOV-button-fullscreen-off',
        enableToggle: true
    }]
});
