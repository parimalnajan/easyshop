export default function reducer(state={
    userid:3

},action){
if(action.type==='INC'){
    return{...state,userid:state.userid+1}
}
return state;
}