const heading = React.createElement("h1", {id: "heading"}, "Hello world from react!");

const nestedHeading = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child1"}, "This is child 1"),
    React.createElement("div", {id: "child2"}, "This is child 2")
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(nestedHeading)