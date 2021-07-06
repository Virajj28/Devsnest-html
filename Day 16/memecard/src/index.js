import React from "react";
import ReactDOM from "react-dom";

function App() {
    return(
        <div>
            <h1>Hello! Good Morning</h1>
            <p>from nervebody</p>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
    )
    // closing tag can be used when u want to pass something in between.