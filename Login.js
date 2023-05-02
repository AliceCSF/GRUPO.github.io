
var usuarios = [
   {
       "login": "Médico",
       "senha": "123"
   },
   {
       "login": "Paciente",
       "senha": "1234"
   },
   {
       "login": "Administrador",
       "senha": "12345"
   }
];
/* 
   function logar()  {

      var login = document.getElementById('login').value;
      var senha = document.getElementById('senha').value;
     
      if (login == "Administrador" && senha == "12345" ) {
         window.alert("Acessando conta...");
       window.location.href="adm.html";
      } 

      if (login == "Administrador" && senha != "12345" ) {

window.alert("Usuário ou senha incorretos");
         
        }

   
   }
   */
   function logar2()  {

      var login = document.getElementById('login').value;
      var senha = document.getElementById('senha').value;
      if (login == usuarios[0].login && senha == usuarios[0].senha) {
         window.alert("Acessando conta...");
         window.location.href = "me.html";
     } else if (login == usuarios[1].login && senha == usuarios[1].senha) {
         window.alert("Acessando conta...");
         window.location.href = "paci.html";
     } else if ((login == usuarios[2].login) && (senha == usuarios[2].senha)) {
         window.alert("Acessando conta...");
         window.location.href = "adm.html";
     } else {
         window.alert("Usuário ou senha incorretos: " + login + ' ' + senha);
     }
 
 
 }
  /*
   function logar3()  {

      var login = document.getElementById('login').value;
      var senha = document.getElementById('senha').value;
     
   if (login == "Paciente" && senha == "1234"  ) {
      window.alert("Acessando conta...");
      window.location.href="me.html";
     } 
     if (login == "Paciente" && senha != "1234" ) {

      window.alert("Usuário ou senha incorretos");
               
               
              }
      
     }

*/




   
      
            
         