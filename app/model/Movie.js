Ext.define('Movies.model.Movie', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'Title',  type: 'string'},
        {name: 'imdbID',   type: 'string'}
    ]
});
