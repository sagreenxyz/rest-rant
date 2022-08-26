const React = require('react')
const Def = require('../default')

function Index({ places }) {
    const placesMap = places.map(place => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name} width="300px" />
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places Page</h1>
                {placesMap}
            </main>
        </Def>
    )
}

module.exports = Index