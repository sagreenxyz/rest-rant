const React = require('react')
const Def = require('../default')

function New_Form() {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines" required />
                        </div>
                        <div className="form-group col-sm-6 col-md-4 col-lg-3">
                            <label for="founded">Founded Year</label>
                            <input className="form-control" id="founded" name="founded" />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def>
    )
}

module.exports = New_Form
