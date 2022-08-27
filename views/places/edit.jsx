const React = require('react')
const Def = require('../default.jsx')

function Edit_Form({ place, id }) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${id}?_method=PUT`}>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" defaultValue={place.name} required />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic" defaultValue={place.pic} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" defaultValue={place.city} />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" defaultValue={place.state} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisines} required />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label for="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Save" />
                </form>
            </main>
        </Def>
    )
}

module.exports = Edit_Form