import React, { useContext ,useState} from 'react';
import {TransactionContaext} from './transactionContext';



const Child=()=>{
    let {transactions,addTransaction,deleteTransaction,editDesc,editAmount,editBoth}=useContext(TransactionContaext);
    console.log(transactions[0].amount);

    let [newDesc,setDesc]=useState("");
    let [newAmount,setAmount]=useState(0);

    

    const handleAddition=(event)=>{
        event.preventDefault();
        if(Number(newAmount)===0)
        {
            alert("Please enter a correct value...");
            return false;
        }
        addTransaction({
            amount:Number(newAmount),
            desc:newDesc
        })
        setDesc('');
        setAmount(0)
    }

    const getIncome=()=>{
        let income=0;
        for(var i=0;i<transactions.length;i++)
        {
            if(transactions[i].amount>0)
            {
                income=income+transactions[i].amount;
            }
        }
        return income;
    }
    const getExpense=()=>{
        let expense=0;
        for(var i=0;i<transactions.length;i++)
        {
            if(transactions[i].amount<0)
            {
                expense=expense+transactions[i].amount;
            }
        }
        return expense;
    }

    const delete_value=(index)=>{
        let d_value=transactions.splice(index,1);
        deleteTransaction(d_value);


    }

    const edit_value=(index)=>{
        let choice=prompt("Enter which element you Edit:\n [For Desc: Press 'd'] [For Amount: Press 'a'] [For Both: Press 'b'] " )
        
        if(choice==='d'||choice==='D')
        {
            let newdesc=prompt("Update Description:");
            
            editDesc(transactions[index].desc=newdesc)

        }
        else if(choice==='a'||choice==='A')
        {
            let newamount=prompt("Update Amount:");
            
            editAmount(transactions[index].amount=Number(newamount))

        }
        else if(choice==='b'||choice==='B')
        {
            let newdesc=prompt("Update Description:");
            let newamount=prompt("Update Amount:");
            
            editBoth(transactions[index].desc=newdesc,transactions[index].amount=Number(newamount))

        }
        else{
            alert("please Enter valid instruction of Input!!!!")
        }
    }
    return(
        <div className='container'>
            <h2 className='text-center'>Expense Tracker</h2>
            <h3>Your Balance <br />${getIncome()+getExpense()}</h3>

             <div className='expense-container'>
             <h3 id='income'>INCOME <br />${getIncome()}</h3>
             <h3 id='expense'>EXPENSE <br />${getExpense()}</h3>
             </div>

             <h3>History</h3>
             <hr />

             <ul className='transaction-list'>
                 {transactions.map((v,i)=>{
                     return(
                     <li key={i}>

 
                     <span>{v.desc}</span>
                     <span>${v.amount}<button id='delete' onClick={()=>delete_value(i)}>Delete</button><button id='edit' onClick={()=>edit_value(i)}>Edit</button></span>
                 </li>)
                 })
                 
                 }
             </ul>

             <h3>Add new transaction</h3>
             <hr />

             <form className='transaction-form' onSubmit={handleAddition}>
                 <label>
                     <b>Text</b><br/>
                     <input value={newDesc} type='text' placeholder='Enter Text' required='required' onChange={(e)=>setDesc(e.target.value)} />
                 </label>
                 <br /><br />
                 <label>
                     <b>Amount</b><br/>
                     <b>(negative -Expense,positive +Income)</b>
                     <input value={newAmount} type='number' placeholder='Enter Amount' required='required' onChange={(e)=>setAmount(e.target.value)} />
                 </label>
                 <br /><br />
                 <input type='submit' value='Add Transaction' id='submit'/>
             </form>

        </div>
    )
}

export default Child;