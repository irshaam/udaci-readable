import React, { Component } from 'react';
import './App.css';
import { fetchCategories } from './helpers/api'
import { connect } from 'react-redux'
import { receiveCategories } from './actions'


class App extends Component {
   
    componentDidMount(){
        const { dispatch } = this.props
        
        fetchCategories()
            .then((categories) => dispatch(receiveCategories(categories)))
    
    }
    render(){
        const { categories } = this.props

        return (
            <div>
                <ul>    
                    {categories.map((category) => console.log(category))}
                   
                </ul>
            </div>
        )
    }
}

function mapStateToProps(categories){
    return categories
}

export default connect(mapStateToProps)(App)
