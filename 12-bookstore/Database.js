module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    saveAuthor(author) {
        this.#storage.authors.push(author)
    }

    findBookByName(bookName) {
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book) {
        const booksExists = this.findBookByName(book.name)
        if (!booksExists) {
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity) {
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    findPosterByName(posterName) {
        return this.#storage.posters.find(p => p.name === posterName)
    }

    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists) {
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removepostersFromStock(posterName, quantity) {
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    saveUser(user) {
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if(!userExists) {
            this.#storage.users.push(user)
        }
    }

    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage() {
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}