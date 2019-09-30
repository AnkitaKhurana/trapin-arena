import React from 'react';
import QuickBuilder from '../Games/QuickBuilder/quickBuilder';


function Games(props) {
 
    switch(props.gameId){
        case 'some-game' : return <QuickBuilder/>;
        default : return <QuickBuilder/>
    }

}

export default Games;
