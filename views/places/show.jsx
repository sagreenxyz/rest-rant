const React = require('react')
const Def = require('../default')

function Show({ place, id }) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <img src={place.pic} alt={place.name} width="300px" />
                <h3>Rating</h3>
                <p>Not Rated</p>
                <h3>Description</h3>
                <h4>
                   {place.showEstablished()}
                </h4>
                <h4>
                    Serving {place.cuisines}
                </h4>
                <h3>Comments</h3>
                {comments}
                <a href={`/places/${id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = Show