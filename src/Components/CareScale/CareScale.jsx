import React from 'react'

const CareScale = (props) => {

    const range=[1,2,3];
    const scaleType = props.careType === 'light' ? '☀️' : '💧';
    
        return (
            <div>
                {range.map((rangeElem) => props.scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )}
            </div>
        )
    
  
}

export default CareScale;