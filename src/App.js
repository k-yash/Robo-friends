import React, {useState} from 'react';
import CardList from './CardList';
import SearchTab from './SearchTab'
import{ robots} from './robots.js';
import './App.css';

const App = () => {

    const [robo, setRobo] = useState(robots);
    const onSearchChange=(event)=>{

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
        });  

        setRobo(filteredRobots);
    }

    return(
        <div className="tc">
            <h1 className="f1" >ROBO FRIENDS</h1>
            <SearchTab  searchChange = {onSearchChange}/>
            <hr></hr>
            <CardList robots = {robo}/>
        </div>
    )
}

export default App;