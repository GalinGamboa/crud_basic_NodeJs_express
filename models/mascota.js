import mongoose from "mongoose";
const Schema = mongoose.Schema;
const  mascotaShema = new Schema(
   {
      nom: String,
      description:String
   }
)

// créer model

export const Mascota = mongoose.model('Mascota',mascotaShema);