import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.scss";
import store from "./store";

import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import About from "./Pages/About/About";
import ThankYou from "./Pages/ThankYou/ThankYou";
import NotFound from "./Pages/NotFound/NotFound";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import FAQ from "./Pages/FAQ/FAQ";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Drawer from "./Components/Drawer/Drawer";

export default function App() {
    const [drawer, setDrawer] = useState(false);
    return (
        <Provider store={store}>
            <Router>
                <Drawer drawer={drawer} closeDrawer={() => setDrawer(false)} />
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
                            <Route path="/multumim">
                                <ThankYou />
                            </Route>
                            <Route path="/despre-noi">
                                <About />
                            </Route>
                            <Route path="/termeni-si-conditii">
                                <TermsAndConditions />
                            </Route>
                            <Route path="/intrebari-frecvente">
                                <FAQ />
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
