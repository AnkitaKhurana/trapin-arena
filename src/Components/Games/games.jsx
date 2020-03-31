import React from 'react';
import QuickBuilder from '../Games/QuickBuilder/quickBuilder';


function Games(props) {
    console.log(props)
    switch(props.gameId){
        case 'fishing' : return <QuickBuilder/>;
        default : return <React-Fragment/>
    }

}

export default Games;
