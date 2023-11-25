// importation express
import express from 'express'; 
// créer une application
const app = express ();


// écoutez le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, ()=>{
   console.log(`server listening on: http://localhost:${PORT}`)
})