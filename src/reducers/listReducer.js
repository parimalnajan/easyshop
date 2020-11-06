export default function reducer(state={
    

},action){
if(action.type==='TEST'){
    return{...state, testmsg2:"im a secondary reducer!"}
}
return state;
}