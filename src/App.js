import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppNav from "./Components/AppNav";
import ErrorNotification from './Components/ErrorNotification';
import Loader from "../src/Components/Loader";
const HomeView = lazy(() =>
    import("./Components/HomeView" /* webpackChunkName: "home" */)
);

export default function App() {
    return (
        <>
            <ErrorNotification />
            <AppNav />
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path="/" exact component={HomeView} />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        </>
    );
}