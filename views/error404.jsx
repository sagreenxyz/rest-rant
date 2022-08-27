const React = require('react')
const Def = require('./default')

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <div>
                    <img src="/images/dropped-ice-cream-cone.jpg" alt="Dropped Ice Cream Cone" width="500px" />
                </div>
                <p>Oops, sorry...  We can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = Error404
