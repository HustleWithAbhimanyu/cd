import logo from './logo.svg';

import React, { useContext, } from 'react';
import { ThemeContext } from './Context/ThemeChanger';
import './App.css';

function App() {

//const[toggle,setToggle]=useState(false)

const{toggle, toggleTheme} =useContext(ThemeContext);

  return (
    <div className={toggle ?"App":"App dark"}>
      <h1> Practice 1</h1>

      <div className="Coontainer">
            
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
            
            <button className="up"onClick={toggleTheme}>Click Me To Toggle </button>
            <div className="buttom">
            <input value="" placeholder="Type Me"/>
            <button>Click Me </button>
            </div>
      </div>
    </div>
  );
}

export default App;
