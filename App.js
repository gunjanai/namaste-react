import React from "react";
import ReactDOM from "react-dom"

const reactElement = (
    <h1>
        Hello world from JSX!
    </h1>
)

const FunctionalComponent = () => (<h1>Hello world from functional component!</h1>)

const FunctionalComponent2 = () => {
    return <h1>Hello world from functional component 2</h1>
}

const ComponentComposition = () => {
    return (
        <>
            <h1>This is component composition</h1>
            <h2>See this code for different functional component calling ways</h2>
            <FunctionalComponent />
            <FunctionalComponent2></FunctionalComponent2>
            {FunctionalComponent()}
            {reactElement}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<ComponentComposition />)