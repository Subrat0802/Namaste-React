    
    
    // const heading = React.createElement("h1", {}, "Hello World");

    // ReactDOM.render(heading, document.getElementById("root"));


    //https://github.com/Subrat0802/Namaste-React.git



    //nested elements

    const parent = React.createElement(
        "div",
        {id: "parent"},
        [
            React.createElement(
                "div",
                {id: "child1"},
                [
                    React.createElement(
                    "h1",
                    {},
                    "Hello i'm h1 tag"
                ),
                    React.createElement(
                    "h2",
                    {},
                    "Hello i'm h2 tag"
                )
                ]
            ),
            React.createElement(
                "div",
                {id: "child2"},
                [
                    React.createElement(
                    "h1",
                    {},
                    "Hello i'm h1 tag"
                ),
                    React.createElement(
                    "h2",
                    {},
                    "Hello i'm h2 tag"
                )
                ]
            )
        ]
    )

    ReactDOM.render(parent, document.getElementById("root"));
