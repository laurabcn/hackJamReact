import React, {Component} from 'react';

class Sidemenu extends Component {
    constructor(){
        super();
        this.search = this.search.bind(this);
        this.closeSideBar = this.closeSideBar.bind(this);
    }
    closeSideBar () {
        this.setState({
            navClosed: false
        });
    }

    search (input) {
        console.log(input.target.value);
    }

    render() {
        return (
            <div className={ this.props.className }>
                <form>
                    <div className="filter-block">
                        <h4>Search</h4>

                        <div className="filter-content">
                            <input type="search" placeholder="title, price..." onChange={ this.onChange }/>
                        </div>
                    </div>

                </form>
                <a href="#0" className="close" onClick={ this.closeSideBar }>Close</a>
            </div>
        )
    }
}

export default Sidemenu;
