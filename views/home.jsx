const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/food.jpg" alt="Quiche?" />
          <div>
            Photo by <a href="https://www.flickr.com/photos/27312908@N05">Brenda Godinez</a> on <a href="https://wordpress.org/openverse/image/0ab85653-1c06-46aa-99b1-1070b1afe326/">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}


module.exports = home