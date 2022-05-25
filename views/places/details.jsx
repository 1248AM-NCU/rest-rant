const React = require("react")
const Def = require("../default.jsx")

function details(data){
    return(
        <Def>
        <h1>Place details</h1>
        <img src={data.img} alt="Image of restaurant"></img>
        <h2>{data.name}</h2>
        <p>Located in {data.state}, {data.city}</p>
        <p>Serves {data.food}</p>
        <p>Established in {data.year}</p>
        </Def>
    )
}

module.exports = details