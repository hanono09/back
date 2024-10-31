import fs from "fs"
export let favoritos = (data) => {
    
   
    let favoritos = JSON.parse(fs.readFileSync("./favoritos.json", "utf-8"));
   favoritos.push(data)
   fs.writeFileSync("./favoritos.json", favoritos)
   return "Cargado correctamente"
   };
 
 
 