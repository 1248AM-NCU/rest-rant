const React = require("react")
const Del = require("../default.jsx")
function New() {
    return (
        <Del>
            <main>
                <h1>Create new place</h1>
                <form className="row" method="POST" action="/places">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="name">Restaurant Name</label>
                        <input className="form-control" type="text" id="name" name="name" required></input>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <div className="form-group col-sm-4">
                            <label htmlFor="year">Founded Year</label>
                            <input
                                type="number"
                                className="form-control"
                                id="year"
                                name="year"
                                value={new Date().getFullYear()} />
                        </div>

                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="pic">Picture</label>
                        <input className="form-control" type="url" id="pic" name="pic"></input>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="city">City</label>
                        <input className="form-control" type="text" id="city" name="city"></input>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="state">State</label>
                        <input className="form-control" type="text" id="state" name="state"></input>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="food">Cuisines</label>
                        <input className="form-control" type="text" id="food" name="food" required></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit"></input>
                </form>
            </main>
        </Del>
    )
}

module.exports = New