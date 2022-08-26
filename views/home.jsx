const React = require('react')
const Def = require('./default')

function Home() {
    return (
        <Def>
            <main>
                <h1>Home Page</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="Chia Fruit Drink" width="500px" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home
