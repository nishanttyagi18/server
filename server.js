const express = require('express')
const app = express()
const cors = require('cors')

// const options = {
//     'Access-Control-Allow-Origin':'https://geekforgeeks.org'
// }
// app.use(cors(options))

app.get('/', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')

    res.send('Served successfully!')
})

const PORT = 3000;

app.listen(PORT, ()=> console.log('server running'))