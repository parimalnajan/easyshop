export default function reducer(state={
    size:0

},action){
if(action.type==='INC'){
    return{...state, size:++state.size}
}
return state;
}