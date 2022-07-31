import {React,useState} from 'react'
import css from './Forms.css'

const Forms = () => {
    const[Amount,setAmount]=useState('');
    const [Remark,setRemark]=useState('');
    const [Date,setDate]=useState("");
    const[Option,setOption]=useState("Cash");
    const[Data,setData]=useState([]);
    const click=()=>{
        if(Amount && Date && Option){

        let Newent={Amount:Amount,Remark:Remark,Date:Date,Payment:Option};
             setData([...Data,Newent]);
             setAmount("");
             setRemark("");
             setDate("");
             setOption("Cash");
            console.log(Newent);
            }
         else{
            alert("please fill the Details")
        }
    }
    const cancel=()=>{
        setAmount("");
        setRemark("");
        setDate("01/01/2022");
        setOption("Cash")
    }
  return (
    <div className ="form">

<form onSubmit={(e)=>e.preventDefault()} className="forms" >
<h3 className='header'>Receipt Details</h3>  
        <label className='date' > Date *</label>
        <input type="Date" placeholder="Enter Date" className='dates'  value={Date} onChange={(e)=>setDate(e.target.value)}/><br/><br/><br/>
        <label className='amount' >Amount *</label>
        <input type="number" placeholder="Enter Amount (in INR)" className='amounts' value={Amount} onChange={(e)=>setAmount(e.target.value)}/><br/><br/><br/>
        <label className='payment'>Payment Mode</label>
         <select className='select' onChange={(e)=>setOption(e.target.value)} ><option>Cash</option>
         <option value="cheque" >Cheque</option>
         <option value="Net Banking">Net Banking</option>
         <option  value="UPI"> UPI</option>
             </select>
        
             <br/><br/><br/>
        <label className='remark'  >Remark</label>
        <input type="text" placeholder="Enter Remark" className='remarks'  value={Remark} onChange={(e)=>setRemark(e.target.value)}></input>
        <div className='button'>
             <button className='cancel' onClick={cancel}>CANCEL<br/>(ESC)</button>
         <button className='submit' onClick={click}>SUBMIT <br/>(Ctrl + s)</button>
         </div>
           </form>
         
         {
            Data && Data.length>0 && (
                <table className="showDataa" >
                    <thead >
                        <tr className='showData' >
                            <td>S.NO.</td>
                            <td>Date</td>
                            <td> Amount</td>
                            <td>Payment </td>
                            <td >Remark</td>
                        </tr>
                    </thead>
                    <tbody>
                   { 
                        Data.map((curelm,id)=>{
                            return(
                                <tr key={id} className="showData" >
                                    <td>{id+1}</td>
                                    <td>{curelm.Date}</td>
                                    <td> {curelm.Amount}</td>
                                    <td>{curelm.Payment}</td>
                                    <td>{curelm.Remark}</td>
                                </tr>
               
                            )
                           
                           })
                    }


                        
                    </tbody>
                </table>
            )
         }
      
    </div>
  )
}

export default Forms
