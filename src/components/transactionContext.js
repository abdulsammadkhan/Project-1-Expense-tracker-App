import React,{createContext,useReducer} from 'react';
import TransactionReducer from './transactionReducer';
let initialtransactions=[
    {amount:500,desc:'cash'},
    {amount:-40,desc:'Book'},
    {amount:100,desc:'Camera'},
    {amount:-200,desc:'Check'}
]

export const TransactionContaext=createContext(initialtransactions);
export const TransactionProvider=({children})=>{
    let [state,dispatch]=useReducer(TransactionReducer,initialtransactions);

     function addTransaction(transobj){
        dispatch({
            type:'ADD',
            payload:{amount:transobj.amount,desc:transobj.desc}
        })

    }
    function deleteTransaction(transDelete){
        dispatch({
            type:'Delete',
            payload:transDelete
        })
    }
    function editDesc(transobj){
        dispatch({
            type:'Desc',
            payload:transobj
        })

    }
    function editAmount(transobj){
        dispatch({
            type:'Amount',
            payload:transobj
        })

    }
    function editBoth(desc_v,amount_v){
        dispatch({
            type:'Both',
            payload:{amount:amount_v,desc:desc_v}
        })

    }

    return(
        <TransactionContaext.Provider value={
            {
                transactions:state,
                addTransaction,
                deleteTransaction,
                editDesc,
                editAmount,
                editBoth
            }
        }>
            {children}
        </TransactionContaext.Provider>
    )
}
