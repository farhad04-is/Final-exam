import React, { createContext, useEffect, useState } from 'react'

export const WhislistContext=createContext()

function WhislistProvider({children}) {

    const local=localStorage.getItem("whislist")
    const [whislist,setwhislist]=useState(local ? JSON.parse(local):[])

    useEffect(()=>{
    localStorage.setItem('whislist',JSON.stringify(whislist))
    },[whislist])

    function addwhislist(x) {
      let obj=whislist.find((item)=>item._id===x._id)


      if(obj){
        return

      }else{
      setwhislist([...whislist,x])
      }
                   
    }
let value={
    whislist,addwhislist
}
  return (
   <WhislistContext.Provider value={value}>
{children}
   </WhislistContext.Provider>
  )
}

export default WhislistProvider
