import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { WhislistContext } from "../Context/WhislistProvider";
import { BasketContext } from "../Context/BasketProvider";
import NavMainHeader from "../Components/navMainHeader";
import SECTION2 from "../Components/SECTION2";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
function Home() {
  const [data, setdata] = useState([]);

  const { addwhislist } = useContext(WhislistContext);

  const { AddBasket } = useContext(BasketContext);

  async function AllData() {
    let resp = await axios.get("http://localhost:3000/");
    setdata(resp.data);
  }

  useEffect(() => {
    AllData();
  }, []);
  return (
    <>
      <title>Home</title>

      <NavMainHeader />
      <SECTION2 />

      <Container>
    <Row> 

{
    data.map((x)=>{
       return <Card style={{ width: '18rem' }} key={x._id}>
        <Card.Img variant="top" src={x.imageUrl} />
        <Card.Body>
          <Card.Title>{x.productName}</Card.Title>
          <Card.Text>
          {x.price}
          </Card.Text  >
       <div style={{gap:"10px"}}>
       <Button variant="primary" onClick={()=>{addwhislist(x)}}>addwhislist</Button>
       <Button variant="primary" onClick={()=>{AddBasket(x)}}>AddBasket</Button>
       </div>
        </Card.Body>
      </Card>
    })
}
    </Row>
  </Container>
    </>
  );
}

export default Home;
