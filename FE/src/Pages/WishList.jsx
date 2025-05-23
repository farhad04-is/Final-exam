import React, { useContext } from 'react'
import { WhislistContext } from '../Context/WhislistProvider'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function WishList() {
  const {whislist}=useContext(WhislistContext)
    return (
      <Container>
      <Row> 
  
  {
      whislist.map((x)=>{
         return <Card style={{ width: '18rem' }} key={x._id}>
          <Card.Img variant="top" src={x.imageUrl} />
          <Card.Body>
            <Card.Title>{x.productName}</Card.Title>
            <Card.Text>
            {x.price}$
            </Card.Text>
          
          </Card.Body>
        </Card>
      })
  }
      </Row>
    </Container>
    )
  
}

export default WishList
