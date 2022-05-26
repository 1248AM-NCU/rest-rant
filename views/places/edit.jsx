const React = require("react")
const Def = require("../default.jsx")

function edit(data) {
    console.log("render edit")
    return (
        <Def>
            <h1>Edit place</h1>
            <form method="POST" action={`/places/${data.index}?_method=PUT`}>
                <div className="form-group">
                    <label htmlFor="name">Restaurant Name</label>
                    <input className="form-control" type="text" id="name" name="name" required value={data.place.name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Year Established</label>
                    <input className="form-control" type="number" id="year" name="year" value={data.place.year}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="img">Picture</label>
                    <input className="form-control" type="text" id="img" name="img" value={data.place.img}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" type="text" id="city" name="city" value={data.place.city}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control" type="text" id="state" name="state" value={data.place.state}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="food">Cuisines</label>
                    <input className="form-control" type="text" id="food" name="food" required value={data.place.food}></input>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit"></input>
            </form>
        </Def>
    )
}

module.exports = edit