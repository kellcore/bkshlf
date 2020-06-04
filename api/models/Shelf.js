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
        onshelf: {
            model: 'User'
        },
        //add reference to Book
        bookshelves: {
            collection: 'book',
            via: 'bookshelf'
        }
    }
};