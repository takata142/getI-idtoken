const express = require('express');
//const fetch = require('node-fetch');
const request = require('request');

const app = express();

const PORT = process.env.PORT || 5000;

// express()
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))　
app.post('/api',(req,res)=> getUserInfo(req,res))
app.listen(PORT,()=>console.log(`Listening on ${PORT}`));


const getUserInfo = (req,res) => {
    const data = req.body;
    console.log('id_token:',data.id_token);
   }

// function getUserInfo(req,res){
//     const data = req.body;
//     console.log(data.id_token)
// }

console.log(data.id_token)

const LineNotifyConfig ={
    client_id: `${process.env.LOGIN_CHANNEL_ID}`
}

// console.log(LineNotifyConfig.client_id)

// function get_response(req,res){

//     const idToken = req.body;

//     let headers = {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     };

//     let dataString = 'id_token=' + idToken.id_token;
//     dataString += '&client_id=' + LineNotifyConfig.client_id;

//     let options ={
//         url:'https://api.line.me/oauth2/v2.1/verify',
//         method: 'POST',
//         headers: headers,
//         body: dataString
//     }

//     function callback(error,response,body){
//         if(response.statusCode == 200){
//             console.log(body,"200 OK");
//         }else{
//             console.log("error")
//         }
//     }


//     request(options,callback)

// }


// get_response()