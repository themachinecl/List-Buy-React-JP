import AddShoppingAction from "../actions/shoppingAction";

const initialState = { userInfo : {
   level:"",
   name :"",
   profile_image:"" ,
   surname : "",
   user_id : 0
}};

export const shoppingReducer = (state = initialState , action  ) => {
  
    switch (action.type) {
      case '[User]' : 
          return { ...state, userInfo : action.payload  }               
      default: 
          return initialState
      
    }

  }
