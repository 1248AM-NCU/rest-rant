const React = require("react")
const Def = require("../default.jsx")

function details({data}) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
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
            <h2>Comments</h2>
            {comments}
            <form method="POST" action={`/places/${data.place._id}/comment`}>
                <div className="rep">
                    <label htmlFor="author">Your Name</label>
                    <input type="text" id="author" name="author"></input>
                </div>
                <div className="rep">
                    <label htmlFor="content">Comment</label>
                    <input type="textarea" id="content" name="content"></input>
                </div>
                <div className="rep">
                    <label htmlFor="stars">Star Rating</label>
                    <input type="number" id="stars" name="stars" step="0.5" min="0" max="5"></input>
                </div>
                <div className="rep">
                    <label htmlFor="rant">Rant!</label>
                    <input type="checkbox" id="rant" name="rant" defaultChecked></input>
                </div>
                <button type="submit">Submit comment</button>
            </form>
            <a href={`${data.index}/edit`} className="btn btn-warning">
                Edit
            </a>
            <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </form>
        </Def>
    )
}

module.exports = details

