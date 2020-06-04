module.exports = {
    attributes:
    {
        title:
        {
            type: 'string',
            required: true
        },
        description:
        {
            type: 'string'
        },
        total:
        {
            type: 'number'
        },
        // add reference to User
        shelves: {
            model: 'User'
        },
        //add reference to Book
        bookshelf: {
            collection: 'book',
            via: 'books'
        }
    }
};