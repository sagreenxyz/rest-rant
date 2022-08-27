const React = require('react')
const Def = require('../default')

function Show({ place }) {
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <img src={place.pic} alt={place.name} width="300px" />
                <h3>Rating</h3>
                <p>Not Rated</p>
                <h3>Description</h3>
                <p>Located in {place.city}, {place.state} and serving {place.cuisines}</p>
                <h3>Comments</h3>
                <p>No comments yet!</p>
            </main>
        </Def>
    )
}

module.exports = Show