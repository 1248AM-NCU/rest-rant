const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <body style={{backgroundColor: "#0079d8"}}>
      <main>
        <div>
          <img src="/images/BSoD.png" alt="BSoD" />
        </div>
        <div style={{fontFamily:"Arial", color:"white", position:"relative", left:"130px"}}>No, this page does not simply exist</div>
      </main>
    </body>
  )
}


module.exports = error404
