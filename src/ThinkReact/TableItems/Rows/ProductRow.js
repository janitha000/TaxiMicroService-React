import React from 'react'

function ProductRow(props){
    return (
        <tr>
          {props.row.map(function(row) {
            return <td>{row[props.dataColumns]}</td>; })}
        </tr> 
    )
}

export default ProductRow;