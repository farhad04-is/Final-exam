import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = 3000
app.use(express.json())
app.use(cors())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get('/:id', async (req, res) => {
    let {id}=req.params
    const deyer= await Products.findById(id)
  res.send(deyer)
})

app.get('/', async (req, res) => {
    
    const deyer= await Products.find()
  res.send(deyer)
})
app.delete('/:id', async (req, res) => {
    const {id}=req.params
    const deyer= await Products.findByIdAndDelete(id)
  res.send(deyer)
})
app.put('/:id', async (req, res) => {
    const {body}=req
    const deyer= await Products.findByIdAndUpdate(id,body)
  res.send(deyer)
})
app.post('/', async (req, res) => {
    const {body}=req
    const deyer= await Products.create(body)
  res.send(deyer)
})
const Product = new mongoose.Schema({
    imageUrl:String,
    productName:String,
    price:Number
  });

  const Products = mongoose.model('Product', Product);


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.iq05qmm.mongodb.net/').then(()=>console.log('condected')
  );


}