//------------------------------------------------------------
//importations nécessaires au fonctionnement de l'application
//------------------------------------------------------------

// importer express
 import express from 'express'; 

// importer dirname,fileURLToPath 
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';

// importer router 
import {router} from './Router/routerPages.js';



// créer une application
const app = express ();

// trouver le répertoire absolu
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);                                       // C:\Users\galin\OneDrive\Desktop\CrudNodeJsBasic   

// utilisation du dossier public
app.use(express.static(join(__dirname,'public')));

// EJS
app.set("view engine",'ejs');
app.set("views",join(__dirname,'views','pages'));

//utiliser  router
app.use('/',router);

// error 404
app.use('/',(req,res,next)=>{
   res.status(404).render('404')
});
                                              

// écoutez le serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, ()=>{
   console.log(`server listening on: http://localhost:${PORT}`)
});