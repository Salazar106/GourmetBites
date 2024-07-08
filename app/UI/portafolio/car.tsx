"use client";
import { useCartFunctions } from '@/app/Lib/catalog/cartFunctions';
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaBuyNLarge, FaCartShopping, FaTrash,FaBasketShopping } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';


const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity } = useCartFunctions();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleOpen = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };


    return (
        <div>
            <Badge content={cart.length} shape="circle" color="primary">
                <Button
                    radius="full"
                    isIconOnly
                    variant="light"
                    onClick={handleOpen}
                >
                    <FaCartShopping size={20} />
                </Button>
            </Badge>

            {isMenuOpen ? (
                <div className='fixed flex top-0 right-0 w-full h-[100vh] bg-gray-400 bg-opacity-90 z-50 transition-all duration-500'>
                    <div className='w-[20%] md:w-1/2 h-[100vh]' onClick={handleOpen}></div>
                    <motion.div 
                        className=' bg-white w-[80%] md:w-1/2 h-[100vh] '
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >

                        <div className='flex flex-nowrap justify-between p-2 overflow-y-auto'>
                            <h1 className="text-2xl font-bold">Carrito</h1>
                            <Button
                                isIconOnly
                                className="p-1 bg-transparent"
                                onClick={handleOpen}
                            >
                                <FaTimes size={20} />
                            </Button>
                        </div>
                        <div className='h-[90vh] p-2 max-h-[80vh] overflow-y-auto'>
                            {cart.length > 0 ? cart.map(item => (
                                <li key={item.id} className="flex justify-between items-center mb-4 ">
                                    <Image src='/imgs/logo.jpg' alt={item.title} width={50} height={50} className="w-16 h-16 object-cover" />
                                    <div className="flex-1 ml-4">
                                        <p className="font-bold">{item.title}</p>
                                        <p className="text-sm">{item.description}</p>
                                        <p className="font-bold">${item.precio}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                    </div>
                                    <Button
                                        className="bg-red-500 text-white p-2 rounded-full"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </li>
                            )): <div className="text-center text-black">Tu carrito esta vacio</div>}
                        </div>
                        <div className='mt-5'>
                            <Button
                                className={`bg-primary w-[calc(100%-2rem)] text-white p-2 rounded-full ${cart.length === 0 ? "opacity-50" : ""}`}
                                onClick={() => alert("ir a pagar")}
                                disabled={cart.length === 0}
                            >
                                Ir a pagar <FaBasketShopping />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            ) : ""}


        </div>
    );
};

export default Cart;
