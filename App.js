const heading = React.createElement(
    "h1",{
        id:"heading"
    },"Hello world")
const root = ReactDOM.createRoot(document.getElementById("root"))
const parent= React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"child"},"hh1 tag"),React.createElement("h2",{id:"child"},"h2 tag")]),
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{id:"child"},"hh1 tag"),React.createElement("h2",{id:"child"},"h2 tag")])])

root.render(parent)