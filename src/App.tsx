import React from "react";
import "./index.css";
import "./App.css";
import { Header } from "./components/Header";
import { FormPersonal } from "./components/form.personal";
import { FormAccess } from "./components/formAccess";

function App() {
    return (
        <div className="App">
            <Header />
            <FormPersonal />
            <FormAccess />
        </div>
    );
}

export default App;