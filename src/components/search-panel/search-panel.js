import { Component } from "react"

import "./search-panel.css"

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: "",
    }
  }

  onUpdateSearch = (event) => {
    const term = event.target.value
    this.setState({ term })
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        value={this.state.term}
        onChange={this.onUpdateSearch}
        placeholder="Найти сотрудника"
      />
    )
  }
}

export default SearchPanel
