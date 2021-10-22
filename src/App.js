import { StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from './theme'
import Input from './components/Input'
import Task from './components/Task'

const Container = styled.SafeAreaView`
  flex:1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: flex-start;
`
const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color:${({ theme }) => theme.main};
  width:100%;
  align-items: flex-end;
  padding: 0 20px;
`
const List = styled.ScrollView`
  flex:1;
  width:${({ width }) => width - 40}px;
`
export default function App() {
  const width = Dimensions.get('window').width

  const tempData = {
    1: { id: '1', text: 'React Native', completed: false },
    2: { id: '2', text: 'Expo', completed: true },
    3: { id: '3', text: 'JavaScript', completed: false },
  }
  const [tasks, setTasks] = useState(tempData)
  const [newTask, setNewTask] = useState("")
  const addTask = () => {
    if (newTask.length < 1) return
    const id = Date.now().toString()
    const newTaskObject = { [id]: { id, text: newTask, completed: false } }
    alert(newTask)
    setNewTask("")
    setTasks({ ...tasks, ...newTaskObject })
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>TODO LIST</Title>
        <Input
          placeholder="Add a Task..."
          value={newTask} onChangeText={text => setNewTask(text)}
          onSubmitEditing={addTask}
        />
        <List width={width}>
          {Object.values(tasks).reverse().map(item => <Task key={item.id} text={item.text} />)}
        </List>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
      </Container>
    </ThemeProvider >
  );
}