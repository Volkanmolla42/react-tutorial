// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const TodoList = () => {
  const [List, setList] = useState([{ todo: 'Wash dishes' }, { todo: 'Do homework' }])

  const HandleAddTodo = () => {
    const todoValue = document.getElementById('todoInput').value
    setList((l) => [...l, { todo: todoValue }])
    document.getElementById('todoInput').value = ''
  }

  const HandleDelete = (index) => {
    setList(List.filter((_, i) => i !== index))
  }

  const HandleMoveUp = (index) => {
    if (index > 0) {
      const updatedList = [...List]
      ;[updatedList[index], updatedList[index - 1]] = [updatedList[index - 1], updatedList[index]]
      setList(updatedList)
    }
  }
  const HandleMoveDown = (index) => {
    if (index < List.length - 1) {
      const updatedList = [...List]
      ;[updatedList[index], updatedList[index + 1]] = [updatedList[index + 1], updatedList[index]]
      setList(updatedList)
    }
  }

  return (
    <div>
      <h1>To-Do-List</h1>
      <input type='text' name='' id='todoInput' />
      <button className='add-button' onClick={HandleAddTodo}>
        Add
      </button>

      <div className='todo-container'>
        {List.map((El, index) => {
          return (
            <div className='todoItem' key={index}>
              {El.todo}
              <div>
                <button className='button delete-button' onClick={() => HandleDelete(index)}>
                  Delete
                </button>
                <button className='button' onClick={() => HandleMoveUp(index)}>
                  👆
                </button>
                <button className='button' onClick={() => HandleMoveDown(index)}>
                  👇
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
