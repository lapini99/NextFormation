"use client";
import { useState } from "react";

export const CartCounter = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        counter > 0 ? setCounter(counter - 1) : null;
    }

    return (
        <>
            <span className="text-9xl"> {counter} </span>
            <div className="flex">
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={decreaseCounter}>
                    -1
                </button>
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
                    onClick={increaseCounter}>
                    +1
                </button>
            </div>
        </>
    )
}
