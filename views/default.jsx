const React = require('react')

function Def(props) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                {props.children}
            </body>
        </html>
    )
}

module.exports = Def
