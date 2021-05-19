import styled from 'styled-components';

const All = ({todos, setTodos}) => {
  
  const allset = () => {
    const newTodos = todos.map((todo) => {
      todo.completed = true;
      return todo;
    })
    setTodos(newTodos)
  }
  const allDelete = () => {
    setTodos(todos.filter(todo => todo.completed !== true))
  }
  return (
    <StyledDiv>
      <div className='all' primary>
        <button className='btn btn-primary delete' onClick={allset}>全選択</button>
        <button className='btn btn-primary delete' onClick={allDelete}>選択した項目を削除</button>
      </div>
    </StyledDiv>
  )
}

export default All;

const StyledDiv = styled.div`
    margin: 10px 25%;
`