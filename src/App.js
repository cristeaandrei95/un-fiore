import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import store from "./store";

import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import About from "./Pages/About";
import ThankYou from "./Pages/ThankYou";
import NotFound from "./Pages/NotFound";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Drawer from "./Components/Drawer/Drawer";

export default function App() {
    const [drawer, setDrawer] = useState(false);
    return (
        <Provider store={store}>
            <Router>
                <Drawer drawer={drawer} setDrawer={setDrawer} />
                <div>
                    <div className={styles.page}>
                        <Header setDrawer={setDrawer} />
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/checkout">
                                <Checkout />
                            </Route>
                            <Route path="/thank-you">
                                <ThankYou />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}
