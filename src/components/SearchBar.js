import React from 'react'

class SearchBar extends React.Component{

    state={
        text: ''
    }

    onInputChange= event =>{
        this.setState({
            text: event.target.value
        })
    }

    onFormSubmit = event =>{
        event.preventDefault()
        this.props.onFormSubmit(this.state.text)
    }

    render(){
        return(
            <div>
                <h3 style={{textAlign: 'center', color: 'red',marginTop:'5px'}}>Mini Youtube</h3>
            <div className="search-bar ui segment" style={{marginTop: '20px', marginBottom: '20px',border:'2px solid black', background:'linear-gradient(to top,lightblue,lightgreen)'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h3>Search</h3>
                        <input 
                        type="text"
                        value={this.state.text}
                        onChange={this.onInputChange}        
                        />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default SearchBar