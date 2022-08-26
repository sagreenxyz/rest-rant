const React = require('react')

function Def(props) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = Def
