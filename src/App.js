import React from "react";
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
import Contact from "./Pages/Contact/Contact";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Drawer from "./Components/Drawer/Drawer";
import Navigation from "./Components/Navigation/Navigation";

const App = () => (
    <Provider store={store}>
        <Router>
            <Drawer
                inside={<Navigation />}
                outside={({ isDrawerOpen, setIsDrawerOpen }) => (
                    <>
                        <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
                        <div className={styles.page}>
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
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                                <Route path="/*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </div>
                        <Footer />
                    </>
                )}
            ></Drawer>
        </Router>
    </Provider>
);

export default App;
