Ext.define('Movies.model.MovieDetail', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'Title',  type: 'string'},
        {name: 'Year',   type: 'string'},
        {name: 'Plot',   type: 'string'},
        {name: 'Poster',   type: 'string'}
    ]
});
