import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';

const Modalup= ({open,setOpen}) => {
  const [loading, setLoading] = useState(false);
 

 
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
   
      <Modal
        open={open}
        title="Share With Anyone"
        onOk={handleOk}
     
        onCancel={handleCancel}
        style={{ backgroundColor: "black" }}
        footer={[
         
          <Button key="submit" type="primary" size="large" className='bg-secondary font-bold rounded text-primary w-[100%]' loading={loading} onClick={handleOk}>
            Share
          </Button>,
         
        ]}
      >
       <Input classname='mt-4'/>
       <Input className='mt-4'/>
      </Modal>
 
    </>
  );
};

export default Modalup;