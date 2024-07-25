const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
})

const Item = mongoose.model('Item', itemSchema)

app.get('/items', async (req, res) => {
  const items = await Item.find()
  res.json(items)
})

app.post('/items', async (req, res) => {
  const newItem = new Item(req.body)
  await newItem.save()
  res.status(201).json(newItem)
})

app.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.json(updatedItem)
})

app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id)
  res.json({ message: 'Item deleted' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})


/* basic
const express = require('express);
const app = express();

app.get('/',(req,res) =>{
    res,send("hello World");
    
});


app.listen(3000,() =>{
console.log('server is running  in port  3000')
});


*/

/* post to accept JSON

const express = require(express);
const app = express();
//middlewere
app.use(express.json());

app.post('/data',(req,res) =>{
    res.json(req.body)
    
})

app.listen(3000,() =>{
console.log('server is running  in port  3000')
});

*/