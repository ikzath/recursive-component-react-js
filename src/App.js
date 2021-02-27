import React, { useState } from 'react';
import './App.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Article from './Article';
import {  Navbar, NavbarBrand } from 'reactstrap';


function App() {
  
    const [isOpen, setIsOpen] = useState(false);
    const [appendItems, setappendItems] = useState([]);
    
    const [click, setclick] = useState(false);
    const onClickChange = ()=> {
      setclick(true);
      setIsOpen(!isOpen)
    }

    const appendChild = ()=> {
      setappendItems([...appendItems, <Article />]);
    }


return (
    
  <div>
    <Navbar color="white" light expand="md">
      <NavbarBrand >Recursive Code Challenge</NavbarBrand>      
    </Navbar>

    {<Card style={{ backgroundColor: 'whitesmoke'}}>
        <CardBody>
            <div className="card__buttons" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button color="primary"  onClick={ onClickChange} style={{ marginBottom: '1rem' }}>{ isOpen ? 'Hide All': 'Add/Show Card'}</Button>
            {isOpen && <Button onClick={appendChild} style={{ backgroundColor: 'green'}}>Add New Card</Button> }
            </div>
        </CardBody>
    </Card> }

    < Collapse isOpen={isOpen}>   

            { click &&  <div style={{ marginBottom: '5px' }}>
              <Article />
              </div> }
            
            { appendItems.map(( (i, idx) => 
            <Article key={idx} />
            )) } 
    </Collapse>      
  </div>
  );
}

export default App;
