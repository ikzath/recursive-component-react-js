import React, { useState, useEffect } from 'react';
import {Collapse, Button, CardBody, Card } from 'reactstrap';


function Article() {

const [click, setclick] = useState(false);
const [isOpen, setIsOpen] = useState(false);
// const [description, setdescription] = useState('');
const [showCard, setShowCard] = useState(true);
const [appendItems, setappendItems] = useState([]);


const deleteCard = () => setShowCard(!showCard);
const toggle = () => setIsOpen(!isOpen);

const onClickChange = ()=> {
    setclick(true)
    setappendItems([...appendItems, <Article />]);
}

    // useEffect(() => {
    //     appendItems.pop();
    // }, [])

const appendCHild = ()=> {
    // setappendItems([...appendItems, <Article />]);
  }

    return (
        <div style={{ textIndent: '20px'}}>
           {showCard && <>
            { <Card style={{ backgroundColor: 'yellow', width: '45vw', height: '20vh', display: 'inline-block'}}>
                <CardBody>
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Catergory </Button>
                    {/* <input style={{ backgroundColor: 'white'}} /> */}
                    <div className="card__buttons" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button style={{ backgroundColor: 'green'}} onClick={ onClickChange}>Add New Card</Button>
                    <Button style={{ backgroundColor: 'purple'}}>Edit Card</Button>
                    <Button onClick={deleteCard} primary='danger' style={{ backgroundColor: 'red'}} >Delete Card</Button> 
                    </div>
                </CardBody>
            </Card> }
            </> }
            < Collapse isOpen={!isOpen}>        
            { click && !appendItems && <Article /> }        
            { appendItems }               
            </Collapse>   
        </div>

    )
}

export default Article
