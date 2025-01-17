const express = require('express');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT; 
        
         // Middlewares
         this.middlewares();

         // Rutas de mi aplicación
         this.routes();
    }

    middlewares() {

       
        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
        this.app.use('/api',(req,res)=>{
            res.send('Hello word');
        });
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',this.port)
        })
    }
   
}




module.exports = Server;
