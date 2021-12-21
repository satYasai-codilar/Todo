import React,{useState} from 'react'

import './App.css';

import Form from './Components/Form';

function App() {

  const [isActive, setActive] = useState("false");

const themeChange = () =>{
  setActive(!isActive);
  var img1=document.getElementById('image');
  
  if (img1.src.match("images/icon-moon.svg")  ) {
    img1.src = "images/icon-sun.svg";

    document.body.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
    document.body.style.backgroundColor= '#25273c';
    document.body.querySelector('.todo-list-wrapper').style.boxShadow = "0 35px 50px rgb(0 0 0 / 50%)";
    document.body.querySelector('.todo-list-wrapper').style.backgroundColor = "#25273c";
    document.body.querySelector('.todo-input').style.color = "white";
    
    document.querySelector('.todo-footer').style.backgroundColor="#25273c";
    document.querySelector('.form-inner').style.backgroundColor="#25273c";
    


}
else {
    img1.src = "images/icon-moon.svg";
 
    document.body.style.backgroundColor='white';
    document.body.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
    document.body.querySelector('.todo-list-wrapper').style.boxShadow = "0 35px 50px rgb(194 195 214 / 50%)";
    document.body.querySelector('.todo-input').style.color = "black";
    document.querySelector('.todo-footer').style.backgroundColor="white";
    document.querySelector('.form-inner').style.backgroundColor="white";
 
}

}
  
  return (
   <>
   
   <div className="container">
     <div className="main-container" >
     
      <div className="header">
            <h1>TODO</h1>
          
            <img src="images/icon-moon.svg" id="image" onClick={themeChange}/>
            
        </div>
      <Form isActive={isActive} setActive={setActive}/>

     </div>
   </div>
   </>
  );
}

export default App;
