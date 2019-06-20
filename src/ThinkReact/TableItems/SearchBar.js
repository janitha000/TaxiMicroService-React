import React from 'react'
import { Checkbox } from 'material-ui';


    function SearchBar (props){
        return(
            <div>
                <input type="text" value={props.filterText} onChange = {props.onFilterChanged}/> <br />
                <input type="checkbox" checked = {props.stockOnly}/> <p>Only show products in stock </p>
            </div>
        )
    }


export default SearchBar



