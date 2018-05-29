var express = require('express');
var app = express();

// app.use('/',(req, res)=>{
//     //set the status of response
//     res.status(200)
//     res.type('.html')
//     res.write('<h1>Hello World!</h1>')
//     res.write('<p>Good to see you.</p>')
//     res.end();
// });

app.use('/', (req,res) => {
    var query = req.query;
    var name = query.name;

    res.status(200);

    if(name){
        res.write('Hello ' + name + '! How is out there?');
    }
    else{
        res.write('Welcome Guest!');
    }

    res.end();
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});