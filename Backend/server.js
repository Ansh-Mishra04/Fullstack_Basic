import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//    res.send("Server Is Ready") 
// });

app.get('/data',(req,res)=>{
    const data=[
        {
            id: 1,
            title: 'Ansh',
            content: 'Mishra'
        },
        {
            id: 2,
            title: 'Love',
            content: 'Babbar'
        },
        {
            id: 3,
            title: 'Anuj',
            content: 'Bhaiya'
        },
        {
            id: 4,
            title: 'Khushi',
            content: 'Shrivastava'
        },
        {
            id: 5,
            title: 'Atharva',
            content: 'Sahu'
        }
    ];
    res.send(data);
});



const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});