var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content= {
    
    
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
            </p>`,
    
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

app.get('/article1',function(req,res){
  res.send(createTemplate(content));
});

app.get('/article2',function(req,res){
   res.send('Hi u r in article 2'); 
});

app.get('/article3',function(req,res){
   res.send('Hi u r in article 3'); 
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
