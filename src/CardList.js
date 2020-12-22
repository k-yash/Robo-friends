import React from 'react';
// import{ robots} from './robots.js';
import Card from './Card';

const CardList = ({robots})=>{
    return(
        robots.map((user,i) => {
            return(
                <Card key = {i} id = {user.id} name = {user.name} email = {user.email}/>
            )
        })
        
    );
}

export default CardList;