import { configureStore } from '@reduxjs/toolkit'
import { shoppingReducer } from '../utils/reducers/shoppingReducer';  

export default configureStore({
  reducer: {
    shoppingReducer: shoppingReducer,
  },
})
