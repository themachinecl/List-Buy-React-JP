import { Route, Routes } from "react-router-dom";
import Home from "../componets/home/home"
import DetailShopping from "../componets/detailShopping/detailShopping";

export const AppRouter = () => {

    return (
        <>
                <Routes> 
                        <Route path="/profile" element= { <Home/>} />
                        <Route path="/details/:idSH" element= { <DetailShopping/>} /> 
                </Routes>
        </>
    )
}


export default AppRouter;