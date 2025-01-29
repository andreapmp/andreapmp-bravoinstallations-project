import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Closet } from "./pages/closet";
import { Garage } from "./pages/garage";
import { Laundry_Room } from "./pages/laundry_room";
import { Office } from "./pages/office";
import { Pantry } from "./pages/pantry";
import { About_Us } from "./pages/about_us";
import { Contact_Us } from "./pages/contact_us";
import { Get_quote } from "./pages/get_quote";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Closet />} path="/closet-design" />
                        <Route element={<Garage />} path="/garage-design" />
                        <Route element={<Laundry_Room />} path="/laundry-room-design" />
                        <Route element={<Office />} path="/office-design" />
                        <Route element={<Pantry />} path="/pantry-design" />
                        <Route element={<About_Us />} path="/about_us" />
                        <Route element={<Contact_Us />} path="/contact_us" />
                        <Route element={<Get_quote />} path="/get_quote" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
