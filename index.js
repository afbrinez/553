const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.listen(3000, () => {
  console.log('Server is running on port 3000')
});



mongoose.connect('mongodb+srv://feliand1997:xfIKOiZl7dM0Je3q@553.sfi0x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=553')
.then(() => {
  console.log('Connected to database')

  app.get('/', (req, res) => {
    res.send('Hello from node api')
  });
  
  app.get('/orders', (req, res) => {
    res.send('here gonna stay the orders')
  });
})
.catch(() => {
  console.log('Connection fail')
})