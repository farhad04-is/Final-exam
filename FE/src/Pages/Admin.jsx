import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import {  Link } from "react-router-dom";
function Admin() {


  const [data,setdata]=useState([])
const [orginal,setorginal]=useState([])

      async function AllData() {
          let resp=await axios.get("http://localhost:3000/")
          setdata(resp.data)
          setorginal(resp.data)
      }

      async function Deleteee(x) {
        await axios.delete("http://localhost:3000/"+x)
        AllData()
      }
       
         useEffect(()=>{
           AllData()
            },[])

            function Search(e) {
           let deyer=e.toLowerCase()
           
           
           if(deyer){
            let filterli=orginal.filter((item)=>item.productName.toLowerCase().includes(deyer))
               setorginal([...filterli])
           }
           else{
            setorginal([...data])
           }
              
            }

function Herif(params) {
  if(params==="AZ"){
    let deyer=orginal.toSorted((a,b)=>a.productName.localeCompare(b.productName))
    setorginal(deyer)
  }
  else{
    let deyer=orginal.toSorted((a,b)=>b.productName.localeCompare(a.productName))
    setorginal(deyer)
  }
   
}
function qiymetAraliqi(params) {
  if(params==="1-100"){
    let deyer=orginal.toSorted((a,b)=>a.price-b.price)
    setorginal(deyer)
  }
  else{
    let deyer=orginal.toSorted((a,b)=>b.price-a.price)
    setorginal(deyer)
  }
   
}
            
  return (
<>
<title>Admin</title>
<input type="text" placeholder='Search' onChange={(e)=>{Search(e.target.value)}}  />

<button onClick={()=>{qiymetAraliqi("1-100")}} >artan qiymet</button>
<button onClick={()=>{qiymetAraliqi("100-1")}}>azalan qiymet</button>
<button  onClick={()=>{Herif("AZ")}}>A-z</button>
<button   onClick={()=>{Herif("ZA")}}>Z-A</button>
<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
    {
      orginal.map((x)=>{
      return  <tr key={x._id}>
        <td>{x._id}</td>
        <td>{x.imageUrl}</td>
        <td>{x.productName}</td>
        <td>{x.price}</td>
     <td> <button onClick={()=>{Deleteee(x._id)}} >delete</button></td>
   <td> <Link to={`/update/${x._id}`}><button>Update</button></Link>  </td>
      </tr>
      })
    }

      </tbody>
    </Table>
    <Link to="/addadmin">AddProduct</Link>
</>
    

      )
}

export default Admin
