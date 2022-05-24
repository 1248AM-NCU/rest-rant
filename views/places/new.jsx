const React = require("react")
const Del = require("../default.jsx")
function New() {
    return (
        <Del>
            <main>
                <h1>Create new place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Restaurant Name</label>
                        <input type="text" id="name" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year Established</label>
                        <input type="number" id="year"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="img">Picture</label>
                        <input type="url" id="img"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="food">Cuisines</label>
                        <input type="text" id="food" required></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit"></input>

                </form>
            </main>
        </Del>
    )
}

module.exports = New