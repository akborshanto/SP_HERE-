import React, { useEffect, useState } from 'react'

const useCustom = () => {
const [service,setService]=useState([])
useEffect(()=>{

fetch('data.json')
.then(res=>res.json())
.then(dat=>setService(dat))


},[])

return service
}

export default useCustom
