module.exports = {
    attributes:
    {
        title: {
            type: 'string',
            required: true
        },
        author: {
            type: 'string',
            required: true
        },
        pages: {
            type: 'number'
        },
        genre: {
            type: 'string'
        },
        // add a reference to Shelf
        bookshelf: {
            collection: 'shelf',
            via: 'bookshelves'
        },
        // add a reference to User
        reader: {
            model: 'User'
        }
    }
};