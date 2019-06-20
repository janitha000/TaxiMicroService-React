import React from 'react'
import Table from '@material-ui/core/Table'

import ProductCategory from './Rows/ProductCategoryRow'
import Productrow from './Rows/ProductRow'

class ProductTable extends React.Component {

    render() {
        return (
            <div>
                <Table>
                <ProductCategory dataColumns ={tableData.columns} />
                <Productrow dataColumns ={tableData.columns} row = {tableData.rows}/>
                </Table>
                
            </div>
        )
    }
}

var tableData = {
    columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
    rows: [{
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'Veterinary Assitance',
        'Cost/Unit': 50,
        'Unit': '1 Hour',
        'Units Requested': 12
    }, {
        'Service': 'foo',
        'Unit': null,
        'Cost/Unit': undefined,
        'Units Requested': 42
    }]
}

export default ProductTable