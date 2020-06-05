module.exports = {

    allBooks: async function (req, res) {
        let myBooks = await Book.find();

        res.send(myBooks);
    },

    createBook: async function (req, res) {

        const title = req.body.title
        const author = req.body.author
        const pages = req.body.pages
        const genre = req.body.genre

        let newBook = await Book.create({ title: title, author: author, pages: pages, genre: genre }).fetch();

        res.send(newBook);

    },

    oneBook: async function (req, res) {
        const bookId = req.param('bookId');
        let oneBook = await Book.findOne(bookId);

        res.send(oneBook);
    },

    editBook: async function (req, res) {
        const bookId = req.param('bookId');
        const title = req.body.title
        const author = req.body.author
        const pages = req.body.pages
        const genre = req.body.genre

        let editBook = await Book.updateOne(bookId)
            .set({ title: title, author: author, pages: pages, genre: genre });

        res.send(editBook);
    },

    deleteBook: async function (req, res) {
        const bookId = req.param('bookId');

        let deleteBook = await Book.destroyOne(bookId);

        console.log(deleteBook);

        res.send(deleteBook);
    }

}