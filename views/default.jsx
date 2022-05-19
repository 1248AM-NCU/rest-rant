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
                <p>This is from Default</p>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def