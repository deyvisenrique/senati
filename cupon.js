function cup(){
    if (document.getElementById('cupon').value =="FERIADO"){
        b="290"
        a="30" 
        r= b - a
        document.getElementById('mensaje').innerHTML ='Cupon de Feriado ';
        document.getElementById('prec').innerHTML = '$'+ a ;
        document.getElementById('preci').innerHTML = '$'+r ;
    }
    if (document.getElementById('cupon').value =="DIAS-RR"){
        b="290"
        a="33" 
        r= b - a
        document.getElementById('mensaje').innerHTML ='Cupon de Dias -RR';
        document.getElementById('prec').innerHTML ='$'+a;
        document.getElementById('preci').innerHTML ='$'+r;
        
    }
    if (document.getElementById('cupon').value =="BIENVENIDO"){
        b="290"
        a="10" 
        r= 90*(290/100)
        document.getElementById('mensaje').innerHTML ='Cupon de Bienvenido';
        document.getElementById('prec').innerHTML ='$'+a;
        document.getElementById('preci').innerHTML ='$'+r;
    }
   
}