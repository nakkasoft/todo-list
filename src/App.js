import React, { Component } from 'react';
import ListComponent from './ListComponent';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
import firebase from 'firebase';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

const config = {
  apiKey: "AIzaSyDHO5e_paBM4vUHzvpm402nmZioUZ49cfA",
  authDomain: "todo-list-e3734.firebaseapp.com",
  databaseURL: "https://todo-list-e3734.firebaseio.com",
  projectId: "todo-list-e3734",
  storageBucket: "todo-list-e3734.appspot.com",
  messagingSenderId: "120737067435"
};

class App extends Component {

  lastId = 0;
  id = 0;

  state = {
    input: '',
    color: '#343a40',
    todos: [
    ]
  }

  componentDidMount(){
    firebase.initializeApp(config);
    this.loadTodosFromLocalstorage();
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const {input, todos, color} = this.state;
    if(input !== ""){
      var tmptodo = [];
      tmptodo = tmptodo.concat({
        id: this.lastId++,
        text: input,
        color: color,
        checked: false
      },...todos)

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

    if(selected.checked == true) return; // Checked 상태면 아무동작 안함. Spec.

    const tmptodo = todos.filter(todo => todo.id !== id);

    //const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
/*
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };
*/
    const tmptodo2 = tmptodo.concat({
      id: selected.id,
      text: selected.text,
      color: selected.color,
      checked: true
    })

    this.setState({
      todos: tmptodo2
    });

    this.saveTodosToLocalstorage(tmptodo2);
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

  saveTodosToLocalstorage = (todolist) => {
    //localStorage.setItem('todolist', JSON.stringify(todolist));
    firebase.database().ref().update({
      todos: todolist
    });
    firebase.database().ref().update({
      lastId: this.lastId
    });
  }

  setTodosState = (todolist) => {
    if(todolist !== null){
      this.setState({
        todos: todolist
      });
    }
  }

  loadTodosFromLocalstorage = () => {
    firebase.database().ref('/todos').once('value').then((snapshot) => {
      var todolist = snapshot.val();
      //console.log(todolist);
      this.setTodosState(todolist);
    });

    firebase.database().ref('/lastId').once('value').then((snapshot) => {
      this.lastId = snapshot.val();
    });

    //const todolist = JSON.parse(localStorage.getItem('todolist'));
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
