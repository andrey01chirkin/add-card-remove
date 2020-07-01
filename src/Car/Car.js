import React from 'react';
import { Button } from 'reactstrap';

export default props => (
    <div className='car'>
        <div className='image'>
            <img src={props.src}></img>
        </div>
        <div className='description'>
            <h1 className="headline">{props.heading}</h1> 
            <p className='desc'>{props.description}</p>
            <Button outline color="primary" className='submit'>
                <div className='btn_text'>Подробнее</div>
            </Button>
        </div>
    </div>    
)