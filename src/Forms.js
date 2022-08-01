import {React,useState} from 'react'
import css from './Forms.css'

const Forms = () => {
  
    const[FirstName,setFirstName]=useState("");
    const[LastName,setLastName]=useState("");
     const[City,setCity]=useState("");
    const[Country,setCountry]=useState("");
    const[Data,setData]=useState([]);
    const click=(shouldAddAtStart)=>{
        if(FirstName && LastName && City && Country){

    
        let NewEntry={FirstName:FirstName,LastName:LastName,City:City,Country:Country};
         if(shouldAddAtStart){
            setData([NewEntry,...Data]);
            }
            else{
                setData([...Data,NewEntry]);}
                setFirstName("");
                setLastName("");
                setCity("");
                setCountry("");
            
            }
         else{
            alert("please fill the Details")
        }
    }
 
  return (
    <div className ="form">

<form onSubmit={(e)=>e.preventDefault()} className="forms" >

        <label className='fnamee' > First_Name</label>
        <input type="text" placeholder=" Ex. John" className='fname'  value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/><br/><br/><br/>
        <label className='lnamee' >Last_Name</label>
        <input type="text" placeholder=" Ex. Sharma" className='lname' value={LastName} onChange={(e)=>setLastName(e.target.value)}/><br/><br/><br/>
        <label className='cityy'>City</label>
        <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder=" Ex. Delhi" value={City} className="city"></input>
        
             <br/><br/><br/>
        <label className='countryy'  >Country</label>
        <input type="text" placeholder="Ex. India" className='country'  value={Country} onChange={(e)=>setCountry(e.target.value)}></input>
        <div className='button'>
             <button className='add' onClick={click.bind(this,true)}>Add_First</button>
         <button className='submit' onClick={click.bind(this,false)}>ADD_Last</button>
         </div>
           </form>
         
         {
            Data && Data.length>0 && (
                <table className="table">
                    <thead  className='tablee'>
                        <tr className="tableee">
                            <td className="tables">S.NO.</td>
                            <td className="tables">FirstName</td>
                            <td className="tables">lastName</td>
                            <td className="tables">City </td>
                            <td className="tables">Country</td>
                        </tr>
                    </thead>
                    <tbody>
                   { 
                        Data.map((curelm,id)=>{
                            return(
                                <tr key={id} className="tables">
                                    <td className="tables">{id+1}</td>
                                    <td className="tables">{curelm.FirstName}</td>
                                    <td className="tables">{curelm.LastName}</td>
                                    <td className="tables">{curelm.City}</td>
                                    <td className="tables">{curelm.Country}</td>
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

