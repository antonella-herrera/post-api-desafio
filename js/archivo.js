const URLGET= "https://jsonplaceholder.typicode.com/posts ";

const infoPost ={
    nombre: "Ana", profesion: "Programadora"
}
$(document).ready(function(){
    $('#post').append ('<button id="btn1" onclick="post()">Post</button>');
})
function post(){    $.post(URLGET,infoPost, (respuesta,estado)=>{
    if (estado==="success"){
        $('#posttabla').append(`<tr>
                            <td>  ${respuesta.nombre}</td>
                            <td>  ${respuesta.profesion} </td>
                        </tr>
`)

    };
})

}
