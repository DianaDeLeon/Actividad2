$(document).on('ready',Iniciar);

function Iniciar(){

    $varFormularioEstudiante=$('#form');
    $varFormularioEstudiante.hide();

    $varFormularioAdmin=$('#formAdmin');
    $varFormularioAdmin.hide();
  

    $varTablasEstudiantes=$('#formularioTablas');
    $varTablasEstudiantes.show();

    $varTablasAdmin=$('#formularioTablasAdmin');
    $varTablasAdmin.show();

    $varBotonListarE=$('#btnListarE');
    $varBotonListarE.on('click',ListarE);
    $varBotonListarE.hide();

    $varBotonListarA=$('#btnListarA');
    $varBotonListarA.on('click',ListarA);
    $varBotonListarA.hide();

    $varBotonAgregarE=$('#btnAgregarE');
    $varBotonAgregarE.on('click',AgregarE);

    $varBotonAgregarA=$('#btnAgregarA');
    $varBotonAgregarA.on('click',AgregarA);

    $varFormularioPromedio=$('#formularioPromedio');
    $varFormularioPromedio.hide();
    $varBotonPromedio=$('#btnPromedio'); 
    $varBotonPromedio.on('click',Promedio)
}

function ListarE(){
    $varFormularioEstudiante.hide();
    $varTablasEstudiantes.show();
    $varBotonAgregarE.show();
    $varBotonPromedio.hide();
}

function ListarA(){
    $varFormularioAdmin.hide();
    $varTablasAdmin.show();
    $varBotonAgregarA.show();
}

function AgregarE(){
    $varTablasEstudiantes.hide();
    $varBotonPromedio.hide();
    $varFormularioEstudiante.show();
    $varBotonListarE.show();
}

function AgregarA(){
    $varTablasAdmin.hide();
    $varFormularioAdmin.show();
    $varBotonListarA.show();
}

function Promedio(){
    $varBotonPromedio.hide();
    $varBotonAgregarE.hide();
    $varTablasEstudiantes.hide();
    $varFormularioPromedio.show();   
}

function ObtenerPromedio(){
    var valorA=document.getElementById("valorA").value;
    var valorB=document.getElementById("valorB").value;
    var valorC=document.getElementById("valorC").value;
    var valorD=document.getElementById("valorD").value;
    var aprobados=0;
    var reprobados=0;
    var arrelo=[valorA,valorB,valorC,valorD];

    for (let i = 0; i < 4; i++) {
        if(arrelo[i]>59){
            aprobados=aprobados+1;
        }
        else if(arrelo[i]<60){
            reprobados=reprobados+1;
        }
      }

    var promedioT=(parseFloat(valorA)+parseFloat(valorB)+parseFloat(valorC)+parseFloat(valorD))/4;
    document.getElementById("promedio").innerHTML=promedioT;
    document.getElementById("aprobadosT").innerHTML=aprobados;
    document.getElementById("reprobadosT").innerHTML=reprobados;

}


var getDataEstudiantes =function(){  
    var carnet =document.getElementById("carnet").value;
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var grado=document.getElementById("grado").value;
    var curso=document.getElementById("curso").value;

    console.log(carnet+" "+nombre+" "+apellido+" "+grado+" "+curso);

    $('#myTableEstudiante tbody').append('<tr class="child"><td>'+carnet+'</td><td>'+nombre+'</td><td>'+apellido+'</td><td>'+grado+'</td><td>'+curso+'</td></tr>');
    Iniciar();
}

var getDataAdmin =function(){   
    var codigo =document.getElementById("codigo").value;
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var curso=document.getElementById("curso").value;

    console.log(codigo+" "+nombre+" "+apellido+" "+curso);

    $('#myTableAdmin tbody').append('<tr class="child"><td>'+codigo+'</td><td>'+nombre+'</td><td>'+apellido+'</td><td>'+curso+'</td></tr>');
    $("#formularioAdmin")[0].reset();
    Iniciar();
}



   





