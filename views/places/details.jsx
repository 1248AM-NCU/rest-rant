const React = require("react")
const Def = require("../default.jsx")

function details(data) {
    return (
        <Def>
            <h1>Place details</h1>
            <img className="detailImg" src={data.place.pic} alt="Image of restaurant"></img>
            <h2>{data.place.name}</h2>
            <h2>Description</h2>
            <h3>
                {data.place.showEstablished()}
            </h3>
            
            <h4>Serving {data.place.food}</h4>
            <a href={`${data.index}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.index}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
        </Def>
    )
}

module.exports = details