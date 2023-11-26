import express from 'express';
export const router = express.Router();

router.get('/',(req,res)=>{
   res.render('index.ejs',{
      arrayAnimaux : [
            {id:'01', nom:'Coco',description:'Coco descricption'},
            {id:'02', nom:'Gasper',description:'Gasper descricption'},
            {id:'01', nom:'Michi',description:'Michi descricption'},
            {id:'02', nom:'Scooby',description:'Scooby descricption'}
      ]
   })
})



