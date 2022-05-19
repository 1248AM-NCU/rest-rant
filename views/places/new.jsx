const React = require("react")
const Def = require("../default.jsx")
function New(){
    return(
        <Def>
            <h1>Create new place</h1>
            <form>
                <label for="name">Restaurant Name</label>
                <input type="text" id="name"></input>
                <label for="year">Year Established</label>
                <input type="number" id="year"></input>
                <label for="img">Picture</label>
                <input type="image" id="img"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </Def>
    )
}

module.exports = New