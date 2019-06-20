import React from 'react'

function ProductCategory(props) {
    return (
        <thead>
            <tr>
                {props.dataColumns.map(function (column) {
                    return <th>{column}</th>;
                })}
            </tr>
        </thead>
    )
}

export default ProductCategory;