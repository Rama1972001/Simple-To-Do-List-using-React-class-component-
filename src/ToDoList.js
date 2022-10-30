import * as React from 'react';
import './ToDoForm.css';
class Form extends React.Component {

  state = {
    name: "",
    desc: "",
    lists: [],


  };


  render() {

    return (
      <div className="first">
        <h1>ToDoList</h1>
        <input type="text" value={this.state.name}
          onChange={this.handleChange.bind(this, 'name')} />
       <br></br>
       
        <textarea type="text" value={this.state.desc}
          onChange={this.handleChange.bind(this, 'desc')} />
       
       <br></br>
        <button className="add" onClick={this.handleAddClick.bind(this)}>Add</button>
        
        <button className="clear" onClick={() => this.clearAll()}>Clear</button>
        <ul className='todo_wrapper'>
          {this.state.lists.map((data, key) => (
            <li className='todo_item' key={key.id}>

              {data.name} : {data.desc}

              <button onClick={() => this.onDeleteTask(data.id)}>Remove</button>


            </li>
          ))}
        </ul>
      </div>
    );
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }
  // function to remove a todo item from the todo array
  onDeleteTask = (itemId) => {
    this.setState({
      lists: [...this.state.lists].filter((id) => id.id !== itemId),
    });
  };

  clearAll = () => {
    this.setState({
      lists: []
    })
  }
  handleAddClick() {
    if (!this.state.name.length) {
      return;
    }
    this.setState({
      name: "", desc: "", id: Date.now(),
      lists: [...this.state.lists, this.state],
    });
  }
}

export default Form;