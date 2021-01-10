const TransactionReducer=((state,action)=>{
    switch(action.type){
        case "ADD":{
            return [action.payload ,...state]
        }
        case 'Delete':{
            return [state]
        }
        case 'Desc':{
            return [state]
        }
        case 'Amount':{
            return [state]
        }
        case 'Both':{
            return [state]
        }
        default:{
            return state;
        }
    }    
})

export default TransactionReducer;