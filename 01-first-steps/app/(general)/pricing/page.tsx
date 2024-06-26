import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Pricing Page',
 description: 'Customers can check our prices',
 keywords: ["Price", "Pricing", "Prices", "Product"]
};

export default function Pricing () {
    return (
        <>
            <span className="text-7xl">Pricing</span>
        </>
    )
}