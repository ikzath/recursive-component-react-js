import React, { useState } from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';


    function Article() {

        const [click, setclick] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
        const [showCard, setShowCard] = useState(true);
        const [appendItems, setappendItems] = useState([]);
        const toggle = () => setIsOpen(!isOpen);

        const deleteCard = () => {
            setShowCard(!showCard);
            setappendItems([]);
        }

        const onClickChange = ()=> {
            setclick(true)
            setappendItems([...appendItems, <Article />]);
        }

   
    return (

        <div style = {{ marginLeft: '20px'}}>
           {showCard &&  <div style={{ textIndent: '5px', padding: '5px',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>        


            { <Card style={{ backgroundColor: 'whitesmoke', width: '45vw', height: '13vh' }}>
                <CardBody>
                    <div className="card__buttons" style={{ display: 'flex', justifyContent: 'space-around' }}> 
                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{isOpen ? 'Show All': 'Show Less'} </Button>
                    <Button style={{ backgroundColor: 'green',  marginBottom: '1rem'}} onClick={ onClickChange}>Add New Card</Button>
                    <Button style={{ backgroundColor: 'purple',  marginBottom: '1rem'}}>Edit Card</Button>
                    <Button onClick={deleteCard} style={{ backgroundColor: 'red',  marginBottom: '1rem'}} >Delete Card</Button> 
                    </div>
                </CardBody> 
            </Card> }
            </div> }
            < Collapse isOpen={!isOpen}>        
                { click && !appendItems && <Article /> }        
                { appendItems.map(( (i, idx) => 
                <Article key={idx} />
                )) }               
            </Collapse>   
        </div>
    )
}

export default Article
