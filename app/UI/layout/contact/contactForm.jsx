"use client"
import { CopyText } from "@/app/UI/gerenal/copyText";
import { Input, Textarea, Snippet } from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import './style.css'
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope  } from "react-icons/fa6";

export default function ContactUsForm() {
  const FormTitle = `If you're contacting us about a recent order, 
  kindly include you order number in your message for quicker assistance`;

  return (
    <div className="bg-contacts w-screen flex flex-wrap md:flex-nowrap gap-5  items-center h-[600px] bg-contact">

      <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="text-center text-white text-[20px] w-full md:w-2/4 mx-5"
      >
        <p className=" ">
          If you have inquiries about fundraisers, donations, events, or
          collaborations, please reach out to us via email or contact:
        </p>
        
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex gap-2 items-center"><FaPhone/><CopyText text="emuna@gmail.com"/></div>
            <div className="flex gap-2 items-center"><FaEnvelope /><CopyText text="565465424"/></div>
          </div>
          
        
        
        <h1 className="text-white text-lg font-bold mt-5">{FormTitle}</h1>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-wrap  mb-6 md:mb-0 gap-4 bg-gray-100 rounded-lg p-4 shadow-xl px-5 mx-5"
      >
        <div className="flex flex-wrap w-full justify-center md:gap-0  md:flex-nowrap  md:gap-10">
          <Input type="text" color='primary' variant="underlined" label="*Name" />
          <Input type="email" color='primary' variant="underlined" label="*Email" />
        </div>

        <Input type="text" color='primary' variant="underlined" label="Phone number" />

        <Textarea
          color='primary'
          variant="underlined"
          labelPlacement="outside"
          placeholder="*Enter your comment"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0 "
        />

        <div className="flex w-full justify-end">
          <Button className="bg-black text-white">Send Mesagge</Button>
        </div>
      </motion.div>
    </div>
  );
}
