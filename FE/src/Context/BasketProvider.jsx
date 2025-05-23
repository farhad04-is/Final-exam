import React, { createContext, useEffect, useState } from 'react'

export const BasketContext=createContext()

function BasketProvider({children}) {

     const local=localStorage.getItem("baskett")
      const [basket,setbasket]=useState(local ? JSON.parse(local):[])
  

          useEffect(()=>{
          localStorage.setItem('baskett',JSON.stringify(basket))
          },[basket])


          function AddBasket(x) {
            
            let obj=basket.find((item)=>item._id===x._id)
            if(obj){
          obj.count++
          setbasket([...basket])
            }
            else{
          setbasket([...basket,{...x,count:1}])    
            }
          }
          let value={
            basket,AddBasket,setbasket
          }
  return (
<BasketContext.Provider value={value}>
  {children}
</BasketContext.Provider>
  )
}

export default BasketProvider
