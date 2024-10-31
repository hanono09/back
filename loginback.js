import fs from "fs";


// Guardar inf usuario




 export let login = (data) => {
    
   
   let usuarios = JSON.parse(fs.readFileSync("./usuarios.json", "utf-8"));
   let usuarioEncontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === data.email && usuarios[i].password === data.password) { 
            usuarioEncontrado = usuarios[i];
            break;
         }
      }
  
      // Verifica si se encontró el usuario y si la contraseña coincide
      if (usuarioEncontrado) {
          console.log("Inicio de sesión exitoso");
      } else {
          console.log("Usuario o contraseña incorrectos");
      }
  };


