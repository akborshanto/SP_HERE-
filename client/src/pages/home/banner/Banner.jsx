import React, { useEffect, useState } from 'react'
import useCustom from '../../../hook/custom'
import Heading from '../../../hook/Heading'

const Banner = () => {
const  service=useCustom()
console.log(service)
  return (
    <div>

    <Heading heading='This IS My Slider'></Heading>
    {
service.map(data=><h1>{data.job_title}</h1>)


    }

    </div>
  )
}

export default Banner
