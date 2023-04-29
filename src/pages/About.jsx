import React from "react";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/nav/Footer";
import SectionAbout from "../components/about/SectionAbout";
import { Whatsapp } from "../lib/Whatsapp";
export default function About() {
    return (
        <>
            <div className=" grid grid-cols-12">
                <section className="col-span-10 col-start-2">
                    <Navbar />
                    <SectionAbout />
                    <Whatsapp />
                    <Footer />
                </section>
            </div>
        </>
    );
}
