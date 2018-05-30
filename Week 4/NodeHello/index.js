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



// app.use('/about', (req, res) =>{
//     res.send('This is about us page!');
// });

// app.use('/login', (req, res) => {
//     res.send('This is login page!');
// });

app.use('/public',express.static('files'));

app.use(/*default*/ (req, res)=>{
    res.status(404).sendFile(__dirname + '/404.jpg');
});

// app.use('/', (req, res) => {
//     var query = req.query;
//     var name = query.name;
//     res.status(200);
//     if (name) {
//         res.write('Hello ' + name + '! How is out there?');
//     } else {
//         res.write('Welcome Guest!');
//     }
//     res.end();
// });



app.listen(3000, () => {
    console.log('Listening on port 3000');
});