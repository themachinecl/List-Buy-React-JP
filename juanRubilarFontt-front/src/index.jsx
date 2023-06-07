import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM  from 'react-dom/client';
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode> 
         <Provider store={store}> 
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter> 
         </Provider>  
     </React.StrictMode>
)




