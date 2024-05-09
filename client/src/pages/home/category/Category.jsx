import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'
import JobCard from "./jobcard/JobCard";
import axios from "axios";
const Category = () => {
const [job,setJob]=useState([])


useEffect(()=>{

//axios data fetching
const getData=async ()=>{
try{
  const data=await axios('data.json')
  setJob(data.data)
}catch{


  console.log('hii i am error')
}


}

//return getData
getData()
},[])

//cl
console.log(job)
//grapic desgin


  return (
    <div className="my-6">
    <marquee behavior='' direction=" left" className='my-5 bg-green-400  text-red-500 font-bold'>{new Date().toLocaleString()}</marquee>
      <Tabs>
        <TabList>
          <Tab>Web development</Tab>
          <Tab>Digital marketing</Tab>
          <Tab>Graphics design</Tab>
        </TabList>
        <TabPanel className='flex flex-col gap-4 md:flex-row my-8 justify-between lg:flex-row'>

     
{
job.filter( w=>w.job_title ==='WebDevelopment').map(web=>

  <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
  <div className='flex items-center justify-between'>
    <span className='text-xs font-light text-gray-800 '>
{web.job_title}
    </span>
    <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
{/* daate */}
    {new Date().toDateString()}
    </span>
  </div>

  <div>
    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>

    </h1>

    <p title={web.description} className='mt-2 text-sm text-gray-600 '>
{web.description.slice(0,60)}
    </p>
    <p className='mt-2 text-sm font-bold text-gray-600 '>
      Range: $100 - $150
    </p>
  </div>
</div>
)

}
</TabPanel>
  
   
                {/* job card Digital marketing  */}
        <TabPanel  className='flex flex-col gap-4 md:flex-row my-8 justify-between lg:flex-row'>

{
job.filter(d=> d.job_title=== 'DigitalMarketin').map(gra=>

  <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
  <div className='flex items-center justify-between'>
    <span className='text-xs font-light text-gray-800 '>
{gra.job_title}
    </span>
    <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>

    </span>
  </div>

  <div>
    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>

    </h1>

    <p className='mt-2 text-sm text-gray-600 '>
      Lorem ipsum dolor sit adipisicing elit...
    </p>
    <p className='mt-2 text-sm font-bold text-gray-600 '>
      Range: $100 - $150
    </p>
  </div>
</div>
)

}


          <h1>Any Conten 2</h1>        </TabPanel>
                {/* job card  Graphics design*/}

        <TabPanel  className='flex flex-col gap-4 md:flex-row my-8 justify-between lg:flex-row'>
       
{
  job.filter(gra=>gra.job_title=== 'GrapicsDesign').map(gra=>
    <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
    <div className='flex items-center justify-between'>
      <span className='text-xs font-light text-gray-800 '>
  {gra.job_title}
      </span>
      <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
  
      </span>
    </div>
  
    <div>
      <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
  
      </h1>
  
      <p className='mt-2 text-sm text-gray-600 '>
        Lorem ipsum dolor sit adipisicing elit...
      </p>
      <p className='mt-2 text-sm font-bold text-gray-600 '>
        Range: $100 - $150
      </p>
    </div>
  </div>



  )
}

        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
