import React from 'react';
import ReactDOM from 'react-dom/client';
import Api from './apifeacth/Api';













const root = ReactDOM.createRoot(document.getElementById('root'));

function Greet(){
  return <div>
 <Api />
       
  </div>
}




root.render(<Greet />);

