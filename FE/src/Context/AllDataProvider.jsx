// import React, { createContext, useEffect, useState } from 'react'

// import axios from "axios"

// export const AllDataContext=createContext()

// function AllDataProvider({children}) {
 
//     const [data,setdata]=useState([])

//     async function AllData() {
//         let resp=await axios.get("http://localhost:3000/")
//         setdata(resp.data)
//     }
//     let value={
//         data,AllData,setdata
//     }
//     useEffect(()=>{
//         AllData()
//     },[])
 
//     return (
//    <AllDataContext.Provider value={value}>
//     {children}
//    </AllDataContext.Provider>
//   )
// }

// export default AllDataProvider
