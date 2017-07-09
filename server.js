var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content = {
    
    article1: {
        
       title:'Article1|Anitha A V',
       heading:'Article1',
       date:'July 3 2017',
       content:`<p>
                Hi this is anitha...
                Hi this is anitha...Hi this is anitha...
                Hi this is anitha...Hi this is anitha...
            </p>
            <ol>
                <li>
                    Dosa
                </li>
                <li>
                    Idly
                </li>
            </ol>
            <p>
                 Hi this is anitha...
                Hi this is anitha...Hi this is anitha...
                Hi this is anitha...Hi this is anitha...
            </p>`
        
    },
  article2: {
        
       title:'Article2|Anitha A V',
       heading:'Article2',
       date:'July 4 2017',
       content:`<p>
              Menucard
            </p>
            <ol>
                <li>
                    Dosa
                </li>
                <li>
                    Idly
                </li>
            </ol>
            <p>
                 Hi this is anitha...
                Hi this is anitha...Hi this is anitha...
                Hi this is anitha...Hi this is anitha...
            </p>`
        
    },  
    article3: {
        
       title:'Article3|Anitha A V',
       heading:'Article3',
       date:'July 7 2017',
       content:`<p>
              Menucard
            </p>
            <ol>
                <li>
                    Haleem
                </li>
                <li>
                    Roast
                </li>
            </ol>
            <p>
                 Hi this is anitha...
                Hi this is anitha...Hi this is anitha...
                PISTA HOUSE
            </p>`
        
    } 
    
   
    
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
    </head>
    <body>
        <div>
            <a href="/">HOME</a>
        </div>
        
        <hr>
        <h3>
            ${heading}
        </h3>
       <link href="/ui/style.css" rel="stylesheet" />
        <div>
            ${date}
        </div>
        <div class='Ani'>
           ${content}
        </div>
    </body>
</html>

`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articlename',function(req,res){
    articlename=res.params.articlename;
  res.send(createTemplate(content(articlename)));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
