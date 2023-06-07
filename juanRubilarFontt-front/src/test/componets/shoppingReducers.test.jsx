import { shoppingReducer } from '../../utils/reducers/shoppingReducer';

describe(' Test  reducer : shoppingReducer ', () => {

    const initialState = { userInfo : {
        level:"",
        name :"",
        profile_image:"" ,
        surname : "",
        user_id : 0
     }};
     
   
    test( "return initialState  shoppingReducer", () => {

            const newState = shoppingReducer( initialState , {})
            expect(newState).toStrictEqual(initialState)
      
    });

    test( "Add Action shoppingReducer", () => {
         const action = {   
            type :'[User]',
            payload : { 
                level:"ORO",
                name :"name",
                profile_image:"perfi.jpg" ,
                surname : "surname",
                user_id : 2,
             } } 
            
        const newState = shoppingReducer( initialState , action)
        expect(Object.keys(newState.userInfo).length).toBe(5);
        expect(newState.userInfo).toStrictEqual(action.payload);

});

})