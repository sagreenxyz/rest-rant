const React = require('react')
const Def = require('../default')

function Index({ places }) {
    const placesMap = places.map((place) => {
        return (
            <div className="col-sm-4">
                <h2 className="text-center">
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img className="mx-auto d-block" src={place.pic} alt={place.name} width="300px" />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places Page</h1>
                <div className="row">
                    {placesMap}
                </div>
            </main>
        </Def>
    )
}

module.exports = Index
