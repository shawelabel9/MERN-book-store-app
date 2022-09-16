const express = require('express')
const router = express.Router()
const Book = require('../../models/Books')

router.get('/test',(req,res) => res.send('testing book route'))

router.get('/',(req,res)=>{
    Book.find()
        .then(books=>res.json(books))
        .catch(err=> res.status(404).json({nobooksfound: 'No book found'}))
})

router.get('/:id', (req,res) => {
    Book.findById(req.params.id)
        .then(book=>res.json(book))
        .catch(err=>res.status(404).json({noBookFound: 'No book found'}))
})

router.post('/',(req,res) => {
    Book.create(req.body)
        .then(book=>res.json("Book was successfully created"))
        .catch(err=> res.status(400).json({error: "unable to add"}))
})
router.put('/:id',(req,res) => {
    Book.findByIdAndUpdate(req.params.id,req.body)
        .then(book => res.json({msg: "book successfully updated"}))
        .catch(err => res.json({error: "unable to update"}))
})

router.delete('/:id', (req,res) => {
    Book.findByIdAndRemove(req.params.id,req,body)
        .then(book => res.json({msg: "book successfully deleted"}))
        .catch(err => res.json({err: "unable to delete"}))
})


module.exports = router