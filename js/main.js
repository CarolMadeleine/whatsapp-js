var posts = [];
window.addEventListener("load",function() {
  var inputMensaje = document.getElementById("mensajes");
  var chat = document.getElementById("chat");
  var iconoLab = document.querySelectorAll("li")[1].previousSibling;
  

 inputMensaje.addEventListener("keypress", function(e){
    envio(e);
  });

function envio(e) {
  var enterPress = e.keyCode;   
  if(e.keyCode == 13) {
  mensajeWtsp();
    return true;
  }
}

function mensajeWtsp(){
  var postWtsp = document.createElement("div");
    postWtsp.classList.add("w-message","w-message-out");
    chat.appendChild(postWtsp);
  var post = document.createElement("div");
    post.classList.add("w-message-out", "w-message-text");
    post.innerText = inputMensaje.value;
    inputMensaje.value = "";
    postWtsp.insertBefore(post, postWtsp.childNodes[0]);
  var mensaje = document.createElement("p");
    mensaje.innerText = inputMensaje.value;
    post.insertBefore(mensaje, post.childNodes[1]);
  var horaActual = new Date ();
  var hora = horaActual.getHours();
  var minuto = horaActual.getMinutes();
  var horaContenedor = document.createElement("span");
  horaContenedor.classList.add("time")
  horaContenedor.innerHTML= hora + ":"+ minuto;
  post.insertBefore(horaContenedor, post.childNodes[2]);
}
function opciones(){
  // iconoLab.setAttribute("id", "primerIcono");
  iconoLab.classList.add("primerIcono");
}
opciones();
});
  
















// mensajeInput.addEventListener("keypress", function(e) {
//         envioEnter(e);
//     })

//     function envioEnter(e) {
//         var enterPress = e.keyCode;    
//         // var chat = textoChat.value;
//         if(e.keyCode == 13) {
//             cajaMensaje.insertBefore(mensajeChat, cajaMensaje.childNodes[0]);
//             mensajeChat.insertBefore(document.createTextNode(mensajeInput.value),mensajeChat.childNodes[0]);
//             contenedorChat.appendChild(cajaMensaje)
//             mensajeInput.value = "";
//             return true; // returning false will prevent the event from bubbling up.
//         }
//     }
//   }

// inputMensaje.addEventListener("keypress", ingreso);
//   function ingreso(e){
//     e.preventDefault();
//       var Ucode=e.keyCode? e.keyCode : e.charCode
//       if (Ucode == 13){
//         mensajeWtsp();
//       }
//   }

// inputMensaje.addEventListener("keypress", ingreso.value);

// inputMensaje.onkeypress = function() {
//   myFunction();
// }
// };

// function myFunction(e) {
//       var Ucode=e.keyCode? e.keyCode : e.charCode
//       if (Ucode == 13){
//         mensajeWtsp();
//               //Tu codigo o funcion aqui
//               //Ejemplo: login();
//       }
// }
  // function ingreso(e){ //Al apretar enter
  //   e.preventDefault();
  //     var Ucode=e.keyCode? e.keyCode : e.charCode
  //     if (Ucode == 13){
  //       mensajeWtsp();
  //             //Tu codigo o funcion aqui
  //             //Ejemplo: login();
  //     }
  // }

  
// window.addEventListener("load",function() {
//   var iconoTexto = document.getElementById("icTexto");
//   var iconoCita= document.getElementById("icCita");
//   var iconoEnlace = document.getElementById("icEnlace");
//   var iconoNotas = document.getElementById("icNotas");
//   var  cajas = document.createElement("section");
//   cajas.setAttribute("id", "cajas");
//   cajas.classList.add("cajas");
//   document.body.appendChild(cajas);

//   iconoTexto.addEventListener("click", function(){
//     boxTexto();
//   });
// });
