"use client"
import { Image, NavbarItem } from "@nextui-org/react";
import { useState } from "react";
import { MdDescription } from "react-icons/md";
import { motion, useInView } from "framer-motion";


export default function AboutPage() {
	const [isOpen, setIsOpen] = useState(false)
	
	const list = { initial:{ opacity: 0, scale: 0.5 }, animate:{ opacity: 1, scale: 1 }, transition:{ duration: 0.5 } }
	const item = { hidden: { x: -10, opacity: 0 } }

	const data=[
		{
			tittle:"OUR STORY", 
			description:[
				{
					title:"",
					description:`Emuna Candles is more than just a brand;
					it's a story of courage, passion, and creativity that began 
					with the Martinez family's journey from the lush landscapes 
					of Colombia to the bustling city of Toronto, Canada. Inspired
					by the rich traditions of candle-making and a desire to 
					infuse spaces with positive energy, Emuna was born in 2021.`,
				}
			],
			img:`/imgs/Imagen1.png`,
			justify:"",
			directionText:'-100%',
			directionImg:'100%'
		},
		{
			tittle:"Why Choose Emuna?", 
			description:[
				{
					title:`Authenticity`,
					description:`: Our candles are handcrafted with love and expertise,
					reflecting the heritage and dedication of our Colombian roots.`
				},
				{
					title:`Quality`,
					description:`: We use only the finest beeswax and natural ingredients, 
					ensuring a clean and long-lasting burn for your enjoyment.`
				},
				{
					title:`EnergyInfusion`,
					description:`: Each candle is designed to not only brighten your 
					space but also to promote positivity and tranquility, creating a sanctuary
					wherever it is lit.
					Join the Emuna Family by choosing Emuna Candles, you are not just purchasing
					a product; you are embracing a story of resilience and innovation. Let our 
					candles be a beacon of light and energy in your life's journey.`
				}
			],
			img:`/imgs/Imagen2.png`,
			justify:"flex-row-reverse",
			directionText:'100%',
			directionImg:'-100%'
		},
		{
			tittle:"VISION",
			description:[
				{
					title:"",
					description:`At Emuna, we believe in the power of light to 
					transform environments and uplift spirits. Our candles go beyond 
					illumination; they are crafted with intention, combining pure 
					beeswax and carefully selected essential oils to create a sensory 
					experience that nurtures the soul.`,
				}
			], 
			img:`/imgs/Imagen3.png`,
			justify:"",
			directionText:'-100%',
			directionImg:'100%'
		},
	]

	const title=`Welcome to Emuna Candles, where tradition meets
	 innovation, and light blends with energy to create moments 
	 of warmth and harmony in your life.`

	return (
		<div>
			<motion.h1
				initial={{ opacity: 0, y: "-100%" }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-[18px] md:text-[25] text-primary mb-5 font-bold"
			>
				{title}
			</motion.h1>

			<div className="flex flex-wrap justify-center gap-20">
				{data.map((item,index)=>(

					<div key={index} className={`flex items-center justify-center gap-20 ${item.justify}`}>
						<motion.div
							initial={{ opacity: 0, x: item.directionText }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
						>
							<h1 className="text-3xl mb-4 font-bold text-black">{item.tittle}</h1>
							{item.description && item.description.map((item, index)=>(
								<div key={index} className="flex flex-row text-start">
									<p><strong>{item.title}</strong> {item.description}</p>
								</div>
							))}
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: item.directionImg }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
							className="hidden md:block relative"
						>
							<Image src={item.img} alt="Ejemplo" width={900} height={400} />
						</motion.div>
					</div>

				))}
			</div>
		</div>
	);
}
