

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./detailShopping.css"
import mercadoLibreApi from "../../utils/api/mercadoLibreApi";
import LoginMenu from "../login/login";
import {useLocation} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const DetailShopping = () => {

  const navigate = useNavigate();
  const { state : {objShopping } } = useLocation();
  const [msjShipmentId, setMsjShipmentId] = useState("-");
  const [msjTransactionId, setMsjTransactionId] = useState("-");
  const [title, setTitle]  = useState("");  
  const [subtitle, setSubtitle] = useState("");


  const handleReturn = () => { navigate('/profile/')  }

    useEffect(() => { 
          async function getShipmentId() {
          const response = await mercadoLibreApi.get("/getShipment/"+ objShopping.shipment_id)
          setMsjShipmentId(response.data.status);

      }
    getShipmentId();
    }, []);

    useEffect(() => { 
        async function getTransactionId() {
        const response = await mercadoLibreApi.get("/getPayment/"+ objShopping.transaction_id)
        setMsjTransactionId(response.data.status);
    }
      getTransactionId();
    }, []);
  

    useEffect(() => { 
      setTitle("Challenger Details Mercado Libre");
      setSubtitle("Juan Paulo Rubilar Fontt");
  }, []);



    return (
      <>
       <Container>
              <Row> <Col >     <LoginMenu title={title} subtitle={ subtitle} /> </Col>  </Row>
              <Row> <h4> Estado de la compra </h4></Row>
              <Row>   <Col >   { new Date().toDateString(new Date()) }  </Col>  </Row>
              <Row >              
              <Card style={{ width: '80%' }}>
                <Card.Img  src={objShopping?.image} style={{ width: '15%' }} />
                <Card.Body>
                  <Card.Title> { objShopping.title }</Card.Title>
                  <Card.Text>
                    Vendedor :{ objShopping.seller.id } - { objShopping.seller.nickname}
                  </Card.Text>
                  <Card.Text>
                    Id de la compra : { objShopping.purchase_id}
                  </Card.Text>
                    <Card.Text>
                    { new Date().toDateString(objShopping.date) }
                    </Card.Text>

                    <Card.Text>
                    Precio :{ objShopping.cost.total} - { objShopping.cost.currency}   
                    </Card.Text>

                    <Card.Text>
                    Cantidad :{ objShopping. amount }  
                    </Card.Text>

                    <Card.Text>
                    Estado del envío:  { msjShipmentId == "cancelled" ? "Cancelada" : msjShipmentId }
                    </Card.Text>

                   <Card.Text>  
                    Estado del envío:  { msjTransactionId == "rejected" ? "Rechazada" : msjTransactionId  }
                   </Card.Text>
                   
                   <Button variant="primary" onClick={() => handleReturn()} >Go Home </Button>
                </Card.Body>
              </Card>
              </Row>
        </Container>
      </>        
    )
}

export default DetailShopping;
