'use client'

import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { InputNumber } from "./inputNumber";
import { FaCartPlus, FaEye } from "react-icons/fa";
import ProductModal from "./modal";
import { formatCurrency } from "@/app/Lib/generalFunction";
import { useCartFunctions } from "@/app/Lib/catalog/cartFunctions";
import { Product } from "whatsapp-web.js";

export const SellCard = ({ data }:any) => {
    const { addToCart } = useCartFunctions();

    const [loading, setLoading] = useState(true);
    const [quantities, setQuantities] = useState(data.map(() => 1));
    const [totalValue, setTotalValue] = useState(0);
    const [totals, setTotals] = useState(data.map((item:any )=> item.precio));


    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Simula una carga de datos de 2 segundos
      }, []);

    const handleValueChange = (index: number, newValue: number) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newValue;
        setQuantities(newQuantities);

        const newTotals = [...totals];
        newTotals[index] = newValue * data[index].precio;
        setTotals(newTotals);

        setTotalValue(newQuantities[index] * data[index].precio);
    };

    const handleSubmit = (index: number) => {
        console.log(`${data[index].title}:`, quantities[index]);
        setQuantities(quantities.map(() => 1));
        setTotals(data.map((item:any) => item.precio));

    };
    

    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {data.map((item: any, index: number) => (
                <Card key={item.id} className="py-4 bg-white">
                    <CardBody className="overflow-visible py-2 flex justify-center w-full">
                        <Image
                            isZoomed
                            alt="Card background"
                            className="object-cover rounded-xl"
                            // src='/imgs/js.svg'
                            src="https://nextui.org/images/hero-card-complete.jpeg"
                            width={270}
                        />
                    </CardBody>
                    <CardHeader className="w-full pb-0 pt-2 px-4 flex-col items-start cursor-default">
                        <div className="w-full flex items-center justify-between">
                            <p className="text-large uppercase font-bold">{item.title}</p>
                            <ProductModal data={item}/>
                        </div>
                        {/* <small className="text-default-500 ">{item.description}</small> */}
                        <div className="flex w-full h-20 justify-between items-center">
                            <div>
                                <p className="text-tiny"><strong>Valor Unitario</strong></p>
                                <p>{formatCurrency(item.precio)}</p>
                            </div>
                            <InputNumber 
                                onValueChange={(newValue:any) => handleValueChange(index, newValue)} 
                                value={quantities[index]} 
                            />
                        </div>
                        <div className="flex w-full  justify-between items-center">
                            <p className="w-1/2">Total Producto:</p>
                            <p className="text-black font-bold w-1/2 text-center"> {formatCurrency(totals[index])}</p>
                        </div>
                        <Button 
                            className="w-full" 
                            color="primary" 
                            endContent={<FaCartPlus />}
                            onClick={() => addToCart({ ...item, quantity: quantities[index] })}
                        >
                            Agregar al carrito 
                        </Button>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
};
