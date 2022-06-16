import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AppNav from "./Components/AppNav";

const HomeView = lazy(() =>
    import("./Components/HomeView" /* webpackChunkName: "home" */)
);

export default function App() {
    return (
        <>
            <AppNav />
            <Suspense
                fallback={
                    <Loader
                        type="ThreeDots"
                        color="teal"
                        height={130}
                        width={130}
                        style={{
                            textAlign: "center",
                        }}
                    />
                }
            >
                <Switch>
                    <Route path="/" exact component={HomeView} />
                    <Redirect to="/" />
                </Switch>
            </Suspense>
        </>
    );
}