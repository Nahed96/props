import logo from './logo.svg';
import './App.css';
import Profil from './profil/Profil';


function App() {
    const styl={color:"red",textAlign:'centre'}
   
  
        function handlename(name) {
          alert( {name});
        }
        
       
  return (
    <div className="App" style={styl}>
        <Profil name="Nahed Neji" handlename={handlename}  bio="Intéressé par l‘informatique,
Électronique , je me suis
engagé vers systémes éléctronique et 
communication  afin
d'approfondir ma
connaissance dans cette
branche, et de pouvoir créer
à mon tour des applications
desktop ,des circuits
électroniques ,des robots
téléguidés , programmation
des microcontrôleur…"  profession="Ingénieur génie systèmes électroniques et communication option systèmes embarqués"><img src=" https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg"></img>
</Profil>




    </div>
  
  );
}
Profil.defaultProps={
    name:"le champ est vide",
    bio:"écrire bio",
    professio:"quelle est votre profession",
    children:<p>une image</p>
}

export default App;

