const initial = {
    name:'Pushpendra Vishwakarma'
}
export const dosample = (state = initial, action:any) => {
    switch (action.type) {
       
       case 'SAMPLE_ACTION': 
          return {...state, name:action.payload};
   
       default:
         return state;
    }
 };


 
 export default dosample