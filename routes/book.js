const express = require('express');
const router = express.Router();

const Books = require('../models/Book');

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
        res.json({
            message: "Book has been added successfully",
            added: true
        });
    })
    .catch(err => {
        res.json({message: err});
    })
});

//SPECIFIC POST
router.get('/:bookId', async (req, res) => {
    try{
        await Books.findById(req.params.bookId);
        res.json({
            message: "Get specific book"
        })
    } catch(err){
        res.json({message: err});
    }
})

//UPDATE
router.patch('/:bookId', async (req, res) => {
    try{
        const payload = req.body;
        await Books.updateOne(
            {_id: req.params.bookId},
            {...payload}
        );
        res.json({
            message: "Book had been updated",
            updated: true
        })
    } catch(err){
        res.json({message: err});
    }
})

//DELETE SPECIFIC POST
router.delete('/:bookId', async (req, res) => {
    try{
        await Books.remove({_id: req.params.bookId})
        res.json({
            message: "Book had been deleted successfully",
            deleted: true
        })
    } catch(err){
        res.json({message: err});
    }
})

module.exports = router;
