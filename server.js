
var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express();

const PORT  = process.env.PORT || 5000;





app.use(express.json());

app.use(cors())
// For dealing in json
// app.use(express.urlencoded({ extended: true }));




if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'frontend','build')))
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}


app.listen(PORT, () => {
    console.log('Server is runnning on', PORT)
})

module.exports = app;


return (
    <div style={{ width: "700px", height: "500px" }}>

      <ReactFlow elements={elements}  />
    </div>
  );