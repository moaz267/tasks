import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Banner from "./components/banner/Banner";
import CustomerSection from "./components/customerSection/CustomerSection";
export default function App() {
    return (
        <div>
            <div></div>
            {/* <Navbar /> */}
            <Banner />
            <CustomerSection />
            <Footer />
        </div>
    );
}
