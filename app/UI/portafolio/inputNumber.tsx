'use client'
import { useState } from "react";

export const InputNumber = ({ onValueChange, value }: { onValueChange: any, value: number }) => {

    const handleValueChange = (newValue: number) => {
        onValueChange(newValue);
    };

    return (
        <div className="flex flex-col gap-1 items-center w-32 max-w-[11rem]">
            <p className="text-tiny uppercase">Cantidad</p>
            <div className="flex w-full justify-between items-center">
                <button
                    type="button"
                    className="rounded-full text-primary transition-all duration-100 hover:scale-150 text-center focus:outline-none"
                    onClick={() => handleValueChange(value <= 10 ? 1 : value - 10)}
                >
                    &#9664;
                </button>
                <button
                    type="button"
                    className="bg-primary p-1 rounded-full text-white transition-all duration-300 hover:bg-sky-600 hover:rotate-180 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-400"
                    onClick={() => handleValueChange(value <= 1 ? value : value - 1)}
                >
                    <svg className="w-3 h-3 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                </button>

                <input
                    type="text"
                    className="w-10 font-bold text-primary bg-transparent text-center text-sm focus:ring-blue-500"
                    value={value}
                    min={1}
                    max={1000}
                    disabled={true}
                />
                <button
                    type="button"
                    className="bg-primary p-1 rounded-full text-white transition-all duration-300 hover:bg-sky-600 hover:rotate-180 dark:hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 dark:focus:ring-sky-400"
                    onClick={() => handleValueChange(value + 1)}
                >
                    <svg className="w-3 h-3 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                </button>
                <button
                    type="button"
                    className="rounded-full text-primary transition-all duration-100 hover:scale-150 text-center focus:outline-none"
                    onClick={() => handleValueChange(value < 6 ? 10 : value + 10)}
                >
                    &#9654;
                </button>
            </div>
        </div>
    );
};
