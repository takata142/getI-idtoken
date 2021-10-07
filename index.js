const express = require('express');
//const fetch = require('node-fetch');
const request = require('request');

const app = express();

const PORT = process.env.PORT || 5000;

//express
// express()
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))　
app.post('/api',(req,res)=> get_response(req,res))
app.listen(PORT,()=>console.log(`Listening on ${PORT}`));


function get_response(req,res) {
  const data = req.body;
  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
//Line 指定のやり取り
  var postData = `id_token=${data.id_token}&client_id=${process.env.LOGIN_CHANNEL_ID}`;
  console.log(data.id_token)

  var options = {
    url: 'https://notify-bot.line.me/oauth/token',
    method: 'POST',
    headers: headers,
    body: postData
  };

  function callback(error, response) {
    if (response.statusCode == 200) {
      //push_to_db(body, data)
      console.log("200 OK")
    } else {
      console.error('error',error)
    }
  }
    //nodejs module,callback
  return request(options, callback);

}
console.log(get_response())