module.exports = {

    allBooks: async function (req, res) {
        let myBooks = await Book.find();
        // console.log(myBooks);
        res.send(myBooks);
    },

    create: async function (req, res) {

        const title = req.body.title
        const author = req.body.author
        const pages = req.body.pages
        const genre = req.body.genre

        let newBook = await Book.create({ title: title, author: author, pages: pages, genre: genre }).fetch();
        console.log(newBook);
        res.send(newBook);

    },

    oneBook: async function (req, res) {
        const bookId = req.param('bookId');
        let oneBook = await Book.findOne(bookId);
        console.log(oneBook);
        res.send(oneBook);
    }

    // to-do:
    // update using id, delete route
}