
import './App.css';

function App() {
  return (
    <div className="App">
      <form name="login"> 
     <table width="200" border="0"> 
       <tr> 
         <th scope="row"><h2>Usuario</h2></th> 
         <td><span class="cnt"> 
           <input name="usuario" type="text" class="Input" value="" size="20" /> 
         </span></td> 
       </tr> 
       <tr> 
         <th height="33" scope="row"><h2>Clave</h2></th> 
         <td><span class="cnt"> 
           <input name="password" type="password" class="Input" value="" size="20" /> 
         </span></td> 
         <td><span class="cnt"> 
           <input value="Entrar" target="_parent" onclick="Login()" type="button" class="boton"/> 
         </span></td> 
       </tr> 
       <tr> 
         <th scope="row"><input type="reset" name="Borrar" id="Borrar" value="Reset" class="boton" /></th> 
       </tr> 
     </table> 
</form> 
    </div>
  );
}

export default App;
