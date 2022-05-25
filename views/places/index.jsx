const React = require("react")
const Def = require("../default.jsx")

function index(data) {
    let placesFormatted = data.places.map(
        (place, index) => {
            return (
                <div className="col-sm-6">
                    <h2>{place.name}</h2>
                    <p className="text-center">
                    {place.food}
                    </p>
                    <a href={`/places/${index}`}>
                        <img src={place.img} alt={place.name}></img>
                    </a>
                    <p className="text-center">
                        Located in {place.city}, {place.state}
                    </p>
                </div>
            )
        }
    )
    return (
        <Def>
            <main>
                <h1>Establish a new favorite establishment here</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index