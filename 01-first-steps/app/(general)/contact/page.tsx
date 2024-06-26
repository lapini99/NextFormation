import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Contact Page',
 description: 'Page to contact us',
 keywords: ["Contact Page", "Email"]
};

export default function Contact () {
    return (
        <>
            <span className="text-7xl">Contact</span>
        </>
    )
}