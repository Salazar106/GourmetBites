"use client";
import { useCartFunctions } from '@/app/Lib/catalog/cartFunctions';
import { Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FaBuyNLarge, FaCartShopping, FaTrash,FaBasketShopping } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { formatCurrency } from '@/app/Lib/generalFunction';

const Cart: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, calculateTotal  } = useCartFunctions();
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
                        className=' bg-slate-200 w-[80%] md:w-1/2 h-[100vh] '
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                    >

                        <div className='flex flex-nowrap justify-between p-2 overflow-y-auto'>
                            <h1 className="text-2xl font-bold">Carrito</h1>
                            <Button
                                isIconOnly
                                className="fixed p-1 right-2 bg-transparent hover:scale-150"
                                onClick={handleOpen}
                            >
                                <FaTimes size={20} />
                            </Button>
                        </div>
                        <div className='bg-slate-200 h-[85vh] p-2 max-h-[75vh] overflow-y-auto'>
                            {cart.length > 0 ? cart.map(item => (
                                <div key={item.id} className="bg-white rounded-lg flex justify-between shadow-2xl items-center mb-2 p-2 ">
                                    <Image src='/imgs/logo.jpg' alt={item.title} width={70} height={70} className="w-1/4 h-16 object-cover" />
                                    <div className="flex flex-wrap md:flex-nowrap justify-between text-start ml-4 w-[65%]">
                                        <div>
                                            <p className="font-bold underline md:text-xl">{item.title}</p>
                                            <p className="">Unidad: {formatCurrency(item.precio)}</p>
                                            <p>Cantidad: {item.quantity}</p>
                                        </div>
                                        <div className='flex flex-col justify-end'>
                                            <p className='font-bold'>subtotal: {formatCurrency(item.quantity * item.precio)}</p>
                                        </div>
                                    </div>
                                    <Button
                                        isIconOnly
                                        className="bg-trasparent text-black p-2 rounded-full hover:scale-150"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </div>
                            )): <div className="text-center text-black">Tu carrito esta vacio</div>}
                        </div>
                        <div className='flex flex-col items-center gap-3 mt-3 bg-slate-200 '>
                            <p>Total: {formatCurrency(calculateTotal())}</p>
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
