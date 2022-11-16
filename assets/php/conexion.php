<?php
    // Bloque try catch
    try{
        // Sentencias a ejecutar 
        // hasta encontrar un error

        $db = new PDO('mysql:host=45.56.79.157;dbname=trinidadcorpipsa_prueba','trinidadcorpipsa_prueba','Mizaki1211');
        // echo "Conexion exitosa";
    }
    catch(Exception $e){
        // Sentencias que se ejecutan
        // al encontrar el error
        die($e->getMessage());
    }
?>