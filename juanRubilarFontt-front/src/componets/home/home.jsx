
import { useEffect , useState } from "react";
import Shopping from "../shopping/shopping";
import UserCard from "../userCard/userCard";
import mercadoLibreApi from "../../utils/api/mercadoLibreApi";
import LoginMenu from "../login/login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux'  
import AddShoppingAction from "../../utils/actions/shoppingAction";

const Home = () => {
 
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [title, setTitle]  = useState("Challenger Mercado Libre");  
  const [subtitle, setSubtitle] = useState("Juan Paulo Rubilar Fontt");

  useEffect(() => { 
      async function getUser() {
          const response = await mercadoLibreApi.get("/getUser")
          dispatch(AddShoppingAction(response.data));
      }
      getUser().catch(error => { setError(error) });
  }, []);

  useEffect(() => { 
    setTitle("Challenger Home Mercado Libre");
    setSubtitle("Juan Paulo Rubilar Fontt");
}, []);


  if (error) console.log("getUser " + error);


    return (
    <>
        <Container>
              <Row>
                <Col >     <LoginMenu title={title} subtitle={subtitle} /> </Col>
              </Row>
              <Row>
                <Col md={3}>  <UserCard  /> </Col>
                <Col md={9}>  <Shopping  /> </Col>
              </Row>
            </Container>
         </>
    )
}

export default Home;
