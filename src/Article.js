import React, { useState } from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
// import { MDBIcon } from 'mdbreact'; 

function Article() {

const [click, setclick] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const [showCard, setShowCard] = useState(true);
const [appendItems, setappendItems] = useState([]);


const deleteCard = () => setShowCard(!showCard);
const toggle = () => setIsOpen(!isOpen);

const onClickChange = ()=> {
    setclick(true)
    setappendItems([...appendItems, <Article />]);
}

   
    return (
        <div style={{ textIndent: '20px', marginLeft: '30px', padding: '20px'}}>
           {showCard && <>
            { <Card style={{ backgroundColor: 'whitesmoke', width: '60vw', height: '20vh', display: 'inline-block'}}>
                <CardBody>
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{isOpen ? 'Show All': 'Show Less'} </Button>
                    {/* {isOpen ? <MDBIcon icon="angle-down" /> : <MDBIcon icon="angle-up" />} </Button>    */}
                    <div className="card__buttons" style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button style={{ backgroundColor: 'green'}} onClick={ onClickChange}>Add New Card</Button>
                    <Button style={{ backgroundColor: 'purple'}}>Edit Card</Button>
                    <Button onClick={deleteCard} primary='danger' style={{ backgroundColor: 'red'}} >Delete Card</Button> 
                    </div>
                </CardBody>
            </Card> }
            </> }
            < Collapse isOpen={!isOpen}>        
                { click && !appendItems && <Article style={{ marginLeft: '10px'}} /> }        
                { appendItems.map(( (i, idx) => 
                <Article key={idx} />
                )) }               
            </Collapse>   
        </div>

    )
}

export default Article
