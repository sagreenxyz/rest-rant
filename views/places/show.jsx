const React = require('react')
const Def = require('../default')

function Show({ place, id }) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated.
        </h3>
    )
    if (place.comments.length) {
        let sumRatings = place.comments.reduce((tot, c) => {
            return tot + c.rating
        }, 0)
        let averageRating = sumRatings / place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <img src={place.pic} alt={place.name} width="300px" />
                <h3>Rating</h3>
                {rating}
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
                <form method="POST" action={`/places/${id}/rant`}>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea name="content" id="content" />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating</label>
                        <input type="range" name="rating" id="rating" min="0" step="1" max="5" />
                    </div>
                    <div>
                        <label htmlFor="rant">Rant?</label>
                        <input type="checkbox" name="rant" id="rant" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </main>
        </Def>
    )
}

module.exports = Show
