import React,{useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
function App() {
  const [todoList ,settodoList] = useState([
{ id: 1, title: 'I love Easy Frontend! 😍 ' },
{ id: 2, title: 'We love Easy Frontend! 🥰 ' },
{ id: 3, title: 'They love Easy Frontend! 🚀 ' },
]);

function handleTodoClick(todo) {
  console.log(todo)
  const  index =todoList.findIndex(x=> x.id === todo.id);
  if(index<0) return;

  const newTodoList =[...todoList];
  newTodoList.splice(index, 1);
  settodoList(newTodoList);
}

  return (
    <div className="App">

      <TodoList onTodoClick={handleTodoClick} todos={todoList} />
    </div>
  );
}

export default App;
