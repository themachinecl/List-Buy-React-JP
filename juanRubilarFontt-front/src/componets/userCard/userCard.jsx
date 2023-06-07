import { useState, useEffect } from "react";
import mercadoLibreApi from "../../utils/api/mercadoLibreApi";
import { useSelector } from 'react-redux'
import Alert from 'react-bootstrap/Alert';

const UserCard = () => {
  
  const state = useSelector(state => state)
  const {shoppingReducer : { userInfo}} = state;
  const [userInfoRestrictions, setuserInfoRestrictions] = useState(0);
  const [dataLevel, setDataLevel] = useState(0);
  const [error, setError] = useState(null);


  useEffect(() => { 
    if(userInfo.user_id !== (null || undefined || 0) ) 
     {
         async function getLevel() {
            const response = await mercadoLibreApi.get("/getLevel/" + userInfo.level )
            setDataLevel(response.data);
           }
        getLevel().catch(error => {
          setError(error);
        });
      }
  }, [userInfo]);


  useEffect(() => { 

    if(userInfo.user_id !== (null || undefined || 0) )  {
        async function getUserRestrictions() {
          const response = await mercadoLibreApi.get("/getUserRestrictions/"+ userInfo.user_id )
          setuserInfoRestrictions(response.data[0]);
            }
        getUserRestrictions().catch(error => {
          setError(error);
        });
      }
  }, [userInfo]);

  if (error) console.log("getUserRestrictions " + error);
  if (error) console.log("getLevel " + error);

    return (

      <>

      <div  className ="card">
        <img src={userInfo?.profile_image} alt="Avatar" width="100%" className="center" /> 
        <div>
            <Alert  variant="primary"> Nombre : { userInfo?.name } - Apellido: { userInfo?.surname}  </Alert>
        </div>

        <p className ="title">Level : { userInfo?.level } </p>
        <p className ="title">Nivel Mercado Puntos : </p>
          <p> { dataLevel?.description }  </p>
          <p> { dataLevel?.level_id } </p>

        <p className ="title">Restricciones : </p>
          <div>
            { userInfoRestrictions?.type == "warning" ?
             <Alert  variant="warning"> {userInfoRestrictions?.message}
            </Alert> : ""    
            }
            </div>
         
          

        <p><button>Challenger Menu</button></p>
        <a href="/profile"><i className ="fa fa-facebook"></i></a> 
      </div>
      </>
    )
}

export default UserCard;
