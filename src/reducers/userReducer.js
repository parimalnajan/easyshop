
export default function reducer(state={

},action){
if(action.type==="TEST"){
    return{...state,testmsg:action.payload}
}
return state;
}

