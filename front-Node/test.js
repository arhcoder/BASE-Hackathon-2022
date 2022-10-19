const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

BlogPost.create({
    title: 'The Mythbuster’s Guide to Saving Money on Energy Bills',
    body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.Energy - saving is one of my favourite money topics, because once you get past the boring bullet- point lists, a whole new world of thrifty nerdery opens up.You know those bullet - point lists.You start spotting them everything at this time of year. They go like this: '
}, (error, blogpost) => {
        console.log(error, blogpost)
    })

//////node test.js

   // To select all documents in BlogPosts collection
BlogPost.find({}, (error, blogspot) =>{
console.log(error,blogspot)
})

//The query filter parameter determines the select criteria
BlogPost.find({
title:'The Mythbuster’s Guide to Saving Money on Energy Bills'
}, (error, blogspot) =>{
console.log(error,blogspot)
})

//Or, to find all documents in BlogPosts collection with ‘ The ’ in the title, we
BlogPost.find({
title:/The/}, (error, blogspot) =>{
console.log(error,blogspot)
})

//unique id _id, we use the findById method:
var id = "5cb436980b33147489eadfbb";
BlogPost.findById(id, (error, blogspot) =>{
console.log(error,blogspot)
})

//To update a record, we use findByIdAndUpdate where we provide id as the
//first argument and the fields/values to be updated in the second argument.
var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndUpdate(id,{
title:'Updated title'
}, (error, blogspot) =>{
console.log(error,blogspot)
})


//To delete a record, we use the findByIdAndDelete where we provide id 
var id = "5cb436980b33147489eadfbb";
BlogPost.findByIdAndDelete(id, (error, blogspot) =>{
console.log(error,blogspot)
})