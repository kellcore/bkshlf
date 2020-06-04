module.exports = {
    attributes:
    {
        username:
        {
            type: 'string',
            unique: true,
            required: true
        },
        password:
        {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            unique: true,
            required: true
        },
        shelf: {
            collection: 'shelf',
            via: 'shelves'
        },
        // reference to Book
        readers: {
            collection: 'book',
            via: 'reader'
        }
    }
}