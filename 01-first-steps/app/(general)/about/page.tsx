import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ["About Page", "Lapini", "Info"]
};

export default function About () {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}