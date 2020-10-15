const express = require('express');
const router = express.Router();
const Books = require('../models/Books');

//GET ALL BOOKS
router.get('/', async (req, res) => {
    try {
        const books = await Books.find();
        res.json("All books");
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
        res.json("Book has been added successfully");
    })
    .catch(err => {
        res.json({message: err});
    })
});

//SPECIFIC POST

router.get('/:bookId', async (req, res) => {
    try{
        const book = await Books.findById(req.params.bookId);
        res.json("Get specific book")
    } catch(err){
        res.json({message: err});
    }
})

//UPDATE
router.patch('/:bookId', async (req, res) => {
    try{
        const payload = req.body;
        const updatedBook = await Books.updateOne(
            {_id: req.params.bookId},
            {...payload}
        );
        res.json("Book had been updated")
    } catch(err){
        res.json({message: err});
    }
})

//DELETE SPECIFIC POST
router.delete('/:bookId', async (req, res) => {
    try{
        const removedBook = await Books.remove({_id: req.params.bookId})
        res.json("Book had been deleted successfully")
    } catch(err){
        res.json({message: err});
    }
})

module.exports = router;