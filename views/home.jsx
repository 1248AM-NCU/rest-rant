const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>REST-rant</h1>
        <div>
          <a href="/places"><img class="rounded mx-auto d-block" src="/images/food.jpg" alt="Quiche?" /></a>
          <div>
            Photo by <a href="https://www.flickr.com/photos/27312908@N05">Brenda Godinez</a> on <a href="https://wordpress.org/openverse/image/0ab85653-1c06-46aa-99b1-1070b1afe326/">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  )
}


module.exports = home