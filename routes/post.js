const express = require('express')
const router = express.Router()
const Post = require('../model/Post')


//htttp://localhost:5000/api/post (GET)
router.get('/' , async (req , res) => {
    
    const posts = await Post.find({})
    console.log(posts)
    res.status(200).json(posts)
    

})

//htttp://localhost:5000/api/post (POST)
router.post('/' , async (req , res) => {
    const postData = {
        title : req.body.title,
        text: req.body.text
    }

    const post = new Post(postData)

    await post.save()
    res.status(201).json(post)

})

//htttp://localhost:5000/api/post/? (DELETE)
router.delete('/:id' , async (req , res) => {

    await Post.remove({_id: req.params.id})
    res.status(200).json({message : 'удалено'})


})



module.exports = router