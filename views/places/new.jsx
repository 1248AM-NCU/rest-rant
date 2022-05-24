const React = require("react")
const Del = require("../default.jsx")
function New() {
    return (
        <Del>
            <main>
                <h1>Create new place</h1>
                <form>
                    <label htmlFor="name">Restaurant Name</label>
                    <input type="text" id="name"></input>
                    <label htmlFor="year">Year Established</label>
                    <input type="number" id="year"></input>
                    <label htmlFor="img">Picture</label>
                    <input type="image" id="img"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </main>
        </Del>
    )
}

module.exports = New