const React = require('React')

function Def (html) 
{
    return(
        <html>
            <head>
                <title>
                    My very Title
                </title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def