import React from 'react';

 function BoilingVerdict(props) {
    if(props.celsius > 100){
        return <p>The water would boil</p>
    }
    else{
        return <p>The water will not boil</p>
    }
}



export default BoilingVerdict;