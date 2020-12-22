import React, {useState} from 'react';



const SearchTab = ({searchChange}) =>{
    return(
        <input className='pa3 ba b--green bg-lightest-blue br4 ma3' onChange={searchChange} placeholder="Search Robot"/>
    )
}
export default SearchTab;