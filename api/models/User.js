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
            required: true,
            protect: true
        },
        email: {
            type: 'string',
            unique: true,
            required: true,
            isEmail: true
        },
        shelf: {
            collection: 'shelf',
            via: 'onshelf'
        },
        // reference to Book
        readers: {
            collection: 'book',
            via: 'reader'
        }
    }
}