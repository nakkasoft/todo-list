import React, { Component } from 'react';
import ListComponent from './ListComponent';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  id = 0;

  state = {
    input: '',
    color: '#343a40',
    todos: [
    ]
  }
  componentDidMount(){
    this.loadTodosFromLocalstorage();
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값.
    });
  }

  handleCreate = () => {
    const {input, todos, color} = this.state;
    if(input !== ""){
      const tmptodo = todos.concat({
        id: this.id++,
        text: input,
        color: color,
        checked: false
      })

      this.setState({
        input: '', // 인풋 비우고
        // concat 을 사용하여 배열에 추가
        todos: tmptodo
      });

      this.saveTodosToLocalstorage(tmptodo);      
      //this.loadTodosFromLocalstorage();
    }
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });

    this.saveTodosToLocalstorage(nextTodos);
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    const tmptodo = todos.filter(todo => todo.id !== id);
    this.setState({
      todos: tmptodo
    });
  
    this.saveTodosToLocalstorage(tmptodo);
  }

  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  saveTodosToLocalstorage = (todos) => {
    localStorage.setItem('todolist', JSON.stringify(todos));
  }

  loadTodosFromLocalstorage = () => {
    const todolist = JSON.parse(localStorage.getItem('todolist'));
    console.log(todolist);
    if(todolist !== null){
      this.setState({
        todos: todolist
      });
    }
  }

  render() {
    const {input, todos, color} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <ListComponent form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}
        palette={(
          <Palette colors={colors} selected={color} onSelect={handleSelectColor}/>
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </ListComponent>
    );
  }
}

export default App;
