import {React,useState} from 'react'
import remove from "../assets/remove.png"
import Modalup from "../components/Modal"
const Share = () => {
     const [open, setOpen] = useState(false);
  return (
    <div className='bg-primary overflow-y-hidden' style={{height:"35.6rem"}}>
      <h1 className='text-dimWhite text-4xl pl-[40%] pt-4'>Uploaded Images </h1>
      <div>
      <img src={remove} />
     
      <button className='bg-secondary text-primary h-8 w-[100px] text-center font-bold rounded'
       onClick={()=>setOpen(true)}>Share</button>
       <Modalup open={open} setOpen={setOpen}/>
      </div>
        </div>
  )
}
export default Share