//2022-12-19 lsy

//console.log("Hello world!")

// var figlet = require('figlet');

// figlet('Hello World!!', function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data)
// });

//http://expressjs.com/ko/starter/hello-world.html

const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    //res.send('<H1>dog!</h1> dog!')
    res.json({'sound': '멍멍'})
})

  app.get('/cat', (req, res) => {
    res.json({'sound': '야옹'})
})

app.get('/user/:id', (req, res) => {
    //http://localhost:3000/user/jocoding
    // const p = req.params
    // console.log(p)

    //http://localhost:3000/user/adsf?q=jo&name=12345678
    const q = req.query
    console.log(q)
    console.log(q.q)

    res.json({'userid': q.q})
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log("index.js" + " : " +name)

    if (name == "dog")
    {
        res.json({'sound':'멍멍'})
    }
    else
    {
        res.json({'sound':'야옹'})
    }
})

//http 메소드 / 요청의 목적, 종류를 알리는 수단
//요청방식 get,post방식
//get - 주소창에 데이터 전달
//post - 주소창이 아니라 내부적으로 요청을 보내는거
//req : Request
//res : Response
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})

//컨트롤C  node -> .exit

//CORS npm 설치해줘야됨