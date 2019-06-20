import React from 'react'
import Table from '@material-ui/core/Table'

function DriverTable() {
    return (
        <Table>
            <TableHeaders />
            {/* <TableRows /> */}
        </Table>
    )
}

function TableHeaders() {
    return (
        <thead>
            <tr>{tableHeaders.columns.map(function (column) {
                return <th>{column}</th>;
            })}</tr>
        </thead>
    )
}

// var TableRows = TableData.data.map(function(row){
//     return (
//         <tr>
//             {tableHeaders.columns.map(function(column){
//                 return <td>{row[column]}</td>;
//             })}
//         </tr>
//     )
// });

var tableHeaders = {
    columns: [
        'First Name',
        'Last Name',
        'NIC',
        'Age'
    ]

}

var TableData = {
    data: {
        'First Name': "Janitha",
        'Last Name': "Tennakoon",
        'NIC': "90334343",
        'Age': 29
    }
}


export default DriverTable;