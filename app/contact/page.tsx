"use client"
import { GoogleMapDirection } from "@/app/UI/layout/contact/googleMaps"
import ContactUsForm from "@/app/UI/layout/contact/contactForm"
import Script from 'next/script';
import {motion} from "framer-motion"

export default function ContactPage() {

    const variants = ["flat", "bordered", "underlined", "faded"];
    return (
        <div>
            <ContactUsForm />
            <div className=" mt-28 md:mt-0  rounded-[15px] ">
                <div className="mt-5 mb-5 text-primary text-lg font-bold">
                    <h1 className="text-[30px]">Find Us</h1>
                </div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1, }}
                    transition={{ duration: 0.5 }}
                    className="px-20 mb-20"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.104184548698!2d-79.27187384637521!3d43.80731344741487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d13876263ebb%3A0xa1c0e116da123f1d!2s5001%20Finch%20Ave%20E%2C%20Scarborough%2C%20ON%20M1S%205J9%2C%20Canad%C3%A1!5e1!3m2!1ses!2sco!4v1713973751549!5m2!1ses!2sco"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                </motion.div>
            </div>
        </div>
    )
}