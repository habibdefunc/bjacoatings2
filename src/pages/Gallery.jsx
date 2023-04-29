import React from "react";
import Card from "../components/gallery/Card";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import { Whatsapp } from "../lib/Whatsapp";

export default function Gallery() {
    return (
        <>
            <div className=" grid grid-cols-12">
                <section className="col-span-10 col-start-2">
                    <Navbar />
                    <Card />
                    <Whatsapp />
                    <Footer />
                </section>
            </div>
        </>
    );
}
