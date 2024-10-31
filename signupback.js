import fs from "fs";


// Guardar inf usuario

export let signUp = (data)=>{
   let usuario = JSON.parse(fs.readFileSync("./usuarios.json", "utf-8"));
   if (!usuario.usuario.includes(data.usuario)) {
      usuario.push(data);
      fs.writeFileSync("usuarios.json", JSON.stringify(usuario));
      return "Usuario cargado correctamente"
   }else{
      return "Ese usuario ya existe"
   }
}






  
   

   