const React = require('React')

function Def (html) 
{
    return(
        <html>
            <head>
                <title>
                    My very Title
                </title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <p>This is from Default</p>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def