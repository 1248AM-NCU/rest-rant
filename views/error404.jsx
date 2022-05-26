const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <body style={{backgroundColor: "#0079d8"}}>
      <main>
        <div>
          <a href="/places">
          <img src="/images/BSoD.png" alt="BSoD" />
          </a>
        </div>
        <div style={{fontFamily:"Arial", color:"white", position:"relative", left:"130px"}}>No, this page does not simply exist. Click the image to return.</div>
      </main>
    </body>
  )
}


module.exports = error404
