export default function reducer(state={
    

},action){
if(action.type==="fetch"){
    return{...state,list:action.payload}
}
return state;
}