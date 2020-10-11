const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.send('Hello Faiza!')
})

app.get('/faiza', (req, res) => {
    res.send('Faiza <3!')
})
app.get("/html", function(req, res){
    res.render('index');
});

app.use(express.static('./index.html'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})