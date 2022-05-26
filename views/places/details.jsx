const React = require("react")
const Def = require("../default.jsx")

function details(data) {
    return (
        <Def>
            <h1>Place details</h1>
            <img className="detailImg" src={data.place.img} alt="Image of restaurant"></img>
            <h2>{data.place.name}</h2>
            <p>Located in {data.place.state}, {data.place.city}</p>
            <p>Serves {data.place.food}</p>
            <p>Established in {data.place.year}</p>
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