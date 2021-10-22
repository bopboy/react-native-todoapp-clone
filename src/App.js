import { StatusBar, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from './theme'
import Input from './components/Input'
import IconButton from './components/IconButton'
import { icons } from './icons'
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
  const [newTask, setNewTask] = useState("")
  const addTask = () => {
    alert(newTask)
    setNewTask("")
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
          <Task text="Reat Native..." />
          <Task text="Expo..." />
          <Task text="JavaScript..." />
          <Task text="Reat Native..." />
          <Task text="Expo..." />
          <Task text="JavaScript..." />
          <Task text="Reat Native..." />
          <Task text="Expo..." />
          <Task text="JavaScript..." />
          <Task text="Reat Native..." />
          <Task text="Expo..." />
          <Task text="JavaScript..." />
          <Task text="Reat Native..." />
          <Task text="Expo..." />
          <Task text="JavaScript..." />
        </List>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
      </Container>
    </ThemeProvider>
  );
}