const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [
                React.createElement(
                    "h1",
                    {},
                    "this is h1 tag",
                ),
                React.createElement(
                    "h2",
                    {},
                    "this is h2 tag"
                )
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement(
                    "h3",
                    {},
                    "this is h3 tag",
                ),
                React.createElement(
                    "h4",
                    {},
                    "this is h4 tag"
                )
            ]
        )
    ]
)

ReactDOM.render(parent, document.getElementById("root"));