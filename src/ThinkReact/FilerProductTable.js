import React from 'react'

import SearchBar from './TableItems/SearchBar'
import ProductTable from './TableItems/ProductTable'

class FilterProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText : '',
            stockOnly : true
        }

        this.onFilterChanged = this.onFilterChanged.bind(this)
    }

    onFilterChanged(e){
        this.setState({ filterText : e.target.value})
    }

    render(){
        return(
            <div>
                <SearchBar filterText = {this.state.filterText} stockOnly = {this.state.stockOnly} onFilterChanged = {this.onFilterChanged}/>
                <ProductTable filterText = {this.state.filterText} stockOnly = {this.state.stockOnly}/>

                <h3> Filter value: {this.state.filterText}</h3>
            </div>

            
        )
    }
}

export default FilterProductTable