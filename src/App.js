import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";

import { Home } from "./Pages/Home";
import { Checkout } from "./Pages/Checkout";
import { About } from "./Pages/About";
import { ThankYou } from "./Pages/ThankYou";
import { NotFound } from "./Pages/NotFound";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Drawer from "./Components/Drawer/Drawer";

export default function App() {
    const [cart, updateCart] = useState({});
    const [drawer, setDrawer] = useState(false);
    return (
        <Router>
            <Drawer drawer={drawer} setDrawer={setDrawer} />
            <div>
                <div className={styles.page}>
                    <Header
                        cart={cart}
                        updateCart={updateCart}
                        setDrawer={setDrawer}
                    />
                    <Switch>
                        <Route exact path='/'>
                            <Home updateCart={updateCart} />
                        </Route>
                        <Route path='/checkout'>
                            <Checkout cart={cart} />
                        </Route>
                        <Route path='/ThankYou'>
                            <ThankYou />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/*'>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}
