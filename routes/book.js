const express = require('express');
const router = express.Router();
const Books = require('../models/Books');

//GET ALL BOOKS
router.get('/', async (req, res) => {
    try {
        const books = await Books.find();
        res.json(books);
    } catch(err){
        res.json({message:err});
    }
});

//ADD BOOK
router.post('/', (req, res) => {
    const books = new Books({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
    });

    books.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
});

//SPECIFIC POST

router.get('/:bookId', async (req, res) => {
    try{
        const book = await Books.findById(req.params.bookId);
        res.json(book)
    } catch(err){
        res.json({message: err});
    }
})

//DELETE SPECIFIC POST
router.delete('/:bookId', async (req, res) => {
    try{
        const removedBook = await Books.remove({_id: req.params.bookId})
        res.json(removedBook)
    } catch(err){
        res.json({message: err});
    }
})
module.exports = router;