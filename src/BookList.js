import React from 'react'
import books from './books.json'

class BookList extends React.Component {
  constructor(){
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(evt){
    console.log(evt.target.value)
    this.setState({
      value: evt.target.value
    })
  }



  render() {
    const books = this.props.books
    return (
      <div className="Books">
        <input className="input is-large" type="text" placeholder="Filter The List" 
          value={this.state.value} onChange={this.handleChange.bind(this)} />
        <ul className="menu-list">
       { books.map((b)=> {
          if (this.state.value === ''){
          return <li><a href={`/books/${b._id}`}>{b.title}</a></li>}
          else {
            if (b.title.includes(this.state.value))
            return <li><a href={`/books/${b._id}`}>{b.title}</a></li>
          }
       })}
        </ul>
      </div>
    )
  }
}

export default BookList