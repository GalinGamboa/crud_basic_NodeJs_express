import express from 'express';

export const router = express.Router();

import { Mascota } from '../models/mascota.js';
console.log(Mascota)

router.get('/', async (req,res)=>{
   try {
      const arrayAnimaux = await Mascota.find();
      console.log(arrayAnimaux);
      res.render('index.ejs',{
         arrayAnimaux
      })

   } catch (error) {
      console.log(error)
   }


   
})



