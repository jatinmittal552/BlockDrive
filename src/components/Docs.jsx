import React from 'react'
import Navbar from './Navbar'

import upload from "../assets/upload.png"

import { Button } from 'antd'
import Upload from 'antd/es/upload/Upload'
import { InboxOutlined } from '@ant-design/icons'
import friend from "../assets/friend.png"
import remove from "../assets/remove.png"
import Footer from "../components/Footer.jsx";
import { Link } from 'react-router-dom'
const Docs = () => {
  return (
 <div  className="bg-primary h-full px-6 md:px-[4rem] font-poppins overflow-x-hidden overflow-y-hidden">
<Navbar />
<main className='flex ps-2 mt-4' >
<img src={friend} style={{width:"500px",height:"300px",borderRadius:"10px"}} data-aos="fade-right" />
<div classname="flex flex-col pl-10" style={{color:"rgba(255, 255, 255, 0.7)",marginLeft:"40px"}} data-aos="fade-left">
  <h1 className='text-2xl'>Upload Images</h1>
  <p classname="text-dimWhite ">hwllo</p>
  <div className="drag h-[100px] w-[400px]">
  <Upload.Dragger 
  listType='picture' 
  multiple={true} 
  style={{height:"1200px"}} >
    <p className="ant-upload-drag-icon">
      <InboxOutlined style={{color:""}}/>
    
    
    <p className="ant-upload-text  text-dimWhite" style={{color:"rgba(255, 255, 255, 0.7)"}}>
      Click or drag file to this area to upload</p>
      <p></p>
   </p>

</Upload.Dragger>
  </div>

</div>
    </main>
    <main className='flex ps-2 mt-4 ' data-aos="fade-up">
<div classname="flex flex-col pl-10" style={{color:"rgba(255, 255, 255, 0.7)",marginLeft:"20px"}}>
  <h1 className='text-2xl w-[300px]'>Share with your friends</h1>
  <p classname="text-dimWhite ">hwllo</p>
  <Link to="/share">
 <button  className='bg-secondary text-primary' style={{width:"300px",height:"40px",fontWeight:"500",borderRadius:"5px"}}>
  Share with friends</button>
  </Link> 
</div>
<img src={upload} style={{marginLeft:"200px",width:"500px",height:"300px",borderRadius:"10px"}} />
    </main>
    <main className='flex ps-2 mt-4 '  data-aos="zoom-in">
    <img src={remove} style={{width:"500px",height:"300px",borderRadius:"10px"}} />
<div classname="flex flex-col pl-10" style={{color:"rgba(255, 255, 255, 0.7)",marginLeft:"40px"}}>
  <h1 className='text-2xl w-[300px]'>Remove Shared Access</h1>
  <p classname="text-dimWhite ">hwllo</p>
  <Link to="/remove">
  
  <button  className='bg-secondary text-primary' style={{width:"300px",height:"40px",fontWeight:"500",borderRadius:"5px"}}>
    Remove Access</button>
    </Link>
</div>

   
    </main>
  <div>
  <Footer />
  </div>

    
  </div>
  )
}

export default Docs