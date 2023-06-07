

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import mercadoLibreApi from "../../utils/api/mercadoLibreApi";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Shopping = () => {
  
  const navigate = useNavigate()
  const state = useSelector(state => state)
  const {shoppingReducer : { userInfo}} = state;
  const [dataGetUserPurchases, setGetUserPurchases] = useState([]);
  const [error, setError] = useState(null);

  const handleDetails = (objShopping) => {
    navigate('/details/'+objShopping.purchase_id, { state : { objShopping }} )
  }

  useEffect(() => { 
      if(userInfo.user_id !== (null || undefined || 0) ) 
       {
          async function getShipmentId() {
          const response = await mercadoLibreApi.get("/getUserPurchases/"+ userInfo.user_id)
          setGetUserPurchases(response.data.data);     
        }
        getShipmentId().catch(error => {
          setError(error);
        });
      }
  }, [userInfo]);
    
  if (error) console.log("getShipmentId " + error);


    return (

      <>
     <div> 
      <Table striped bordered hover>
            <thead>
              <tr>
                <th> #Id </th>
                <th> Título del ítem</th>
                <th> Precio </th>
                <th> Cantidad</th>
                <th> Fecha de compra </th>
                <th> Detalle </th>
              </tr>
            </thead>
            <tbody>
             {
                dataGetUserPurchases?.map((val, key) => {
                  return (
                    <tr key={key}>
                    <td >{  val.purchase_id } </td>
                    <td >{  val.title } </td>
                    <td >{  val.purchase_id } </td>
                    <td >{  val.amount } </td>
                    <td >{  new Date().toDateString(val.date) } </td>
                    <td > <Button variant="primary" size="sm" onClick={() =>  handleDetails(val)}> Ver Compra </Button>  </td>
                </tr>
                )
              })}
            </tbody>
          </Table>

          </div>
      </>
    )
}

export default Shopping;
