const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jakeshim:20110196@boilerplate.tlc9o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
      useFindAndModify: false
    }).then(() => console.log('MongoDB Connected...'))
      .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})