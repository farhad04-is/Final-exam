import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BasketContext } from '../Context/BasketProvider';

function Basket() {

const {basket,setbasket}=useContext(BasketContext)

function artan(x) {
  let obj=basket.find((item)=>item._id===x._id)
  console.log(obj);
  
  if(obj){
obj.count++
setbasket([...basket])
  }

}
function azalan(x) {
  let obj=basket.find((item)=>item._id===x._id)

 if(obj.count===1){
return
 }
 else{
  obj.count--
setbasket([...basket])
 }
}
    return (
      
<>
<title>basket</title>
<Container>
    <Row> 

{
    basket.map((x)=>{
       return <Card style={{ width: '18rem' }} key={x._id}>
        <Card.Img variant="top" src={x.imageUrl} />
        <Card.Body>
          <Card.Title>{x.productName}</Card.Title>
          <Card.Text>
          {x.price}
          </Card.Text>
          <Button variant="primary" onClick={()=>{azalan(x)}}>-</Button> {x.count *x.price }  <Button variant="primary" onClick={()=>{artan(x)}}>+</Button>
        </Card.Body>
      </Card>
    })
}
    </Row>
  </Container>
</>
  )
}

export default Basket
