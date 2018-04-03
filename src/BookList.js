import React from 'react'

class BookList extends React.Component {

    state = { inputValue: '' }
  
  handleFilterChange(evt){
    this.setState({
      inputValue: evt.target.value
    })
  }

  render() {
    const books = this.props.books
    const filteredBooks = books.filter((b) => {
      return b.title.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    return (
      <div className="Books">
        <input className="input is-large" type="text" placeholder="Filter The List" 
           onChange={this.handleFilterChange.bind(this)} />
        <ul className="menu-list">
       { filteredBooks.map((b)=> {
            return <li key={b._id}><a href={`/books/${b._id}`}>{b.title}</a></li>
       })}
        </ul>
      </div>
    )
  }
}

export default BookList