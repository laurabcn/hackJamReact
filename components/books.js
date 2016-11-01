import React, {Component} from 'react';

class Books extends Component {
    render() {
        return (
            <section className = { this.props.className }>
                { this.props.booksList.map(book => <li key={ book.title }><img src={ book.cover }/></li>) }
            </section>
        )
    }
}

export default Books;