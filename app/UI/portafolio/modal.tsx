'use client'
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { FaCartPlus, FaEye } from "react-icons/fa";
import { InputNumber } from "../portafolio/inputNumber";
import { formatCurrency } from "@/app/Lib/generalFunction";
import { Carousel } from "./carouse;";
// import { formatCurrency } from "@/app/lib/generalFunction";


export default function ProductModal({ data }: any) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [backdrop, setBackdrop] = React.useState('opaque')
    const [quantities, setQuantities] = useState(1);
    const [totalValue, setTotalValue] = useState(0);
    const [totals, setTotals] = useState(data.precio);


    const handleValueChange = (newValue: number) => {
        const newQuantities = quantities;
        setQuantities(newQuantities);

        const newTotals = newValue * data.precio;
        setTotals(newTotals);

        setTotalValue(newQuantities * data.precio);
    };

    const handleSubmit = (index: number) => {
        // console.log(`${data[index].title}:`, quantities[index]);
        setQuantities(1);
        setTotals(data.map((item: any) => item.precio));

    };

    const handleOpen = (backdrop: string) => {
        setBackdrop('blur')
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">

                <Button
                    isIconOnly
                    variant="flat"
                    onPress={() => handleOpen('blur')}
                    className="capitalize bg-transparent text-primary transition-all hover:scale-150"
                >
                    <FaEye />
                </Button>

            </div>
            <Modal
                backdrop='blur'
                isOpen={isOpen}
                onClose={onClose}
                className="bg-slate-800"
                scrollBehavior='inside'
                size="4xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{data.title}</ModalHeader>
                            <ModalBody>
                                <Carousel />

                                <small className="text-default-500 ">{data.description}</small>
                                <div className="flex w-full h-20 justify-between items-center">
                                    <div>
                                        <p className="text-large"><strong>Valor Unitario</strong></p>
                                        <p>{formatCurrency(data.precio)}</p>
                                    </div>
                                    <InputNumber
                                        onValueChange={(newValue: any) => handleValueChange(newValue)}
                                        // value={quantities[index]}
                                        value={1}
                                    />
                                </div>
                                <div className="flex w-full  justify-between items-center">
                                    <p className="w-1/2">Total Producto:</p>
                                    <p className="text-white font-bold w-1/2 text-center"> {formatCurrency(totals)}</p>
                                </div>
                                
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    className="w-full"
                                    color="primary"
                                    endContent={<FaCartPlus />}
                                    // onClick={() => handleSubmit(index)}
                                >
                                    Agregar al carrito
                                </Button>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
