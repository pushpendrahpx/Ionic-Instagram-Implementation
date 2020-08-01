const initial = {
    name:'Dummy User'
}
export const userReducer = (state = initial, action:any) => {
    switch (action.type) {
       
       case 'ADD_USER': 
          return {...action.payload};
   
       default:
         return state;
    }
 };


 
 export default userReducer