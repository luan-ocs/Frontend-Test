import React, { useState } from "react";
import {
  Container,
  TaskHeader,
  CompleteButton,
  DescButton,
  Description,
} from "./styles";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";
import { UpArrow } from "@styled-icons/boxicons-solid/UpArrow";
import { Done } from "@styled-icons/material/Done";
import { Trash } from "@styled-icons/bootstrap/Trash";
import axios from "axios";

function Task({ data, setTasks, list, index}) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [done, setDone] = useState(data.done);

  const changeTitle = (value) => {
    
    let newList = {...list};
    let newTask = data;
    newTask.title = value;

    newList.tasks[index] = newTask;

    axios.put("http://localhost:3001/lists/" + newList.id, newList)

    setTitle(value)
  
  }

  const changeDesc = (value) => {

    let newList = {...list};
  
    let newTask = data;
    newTask.description = value;

    newList.tasks[index] = newTask;

    axios.put("http://localhost:3001/lists/" + newList.id, newList)

    setDescription(value)

  }

  const changeDone = () => {

    let newList = {...list};
  
    let newTask = data;

    newTask.done = !newTask.done;

    newList.tasks[index] = newTask;

    axios.put("http://localhost:3001/lists/" + newList.id, newList)

    setDone(newTask.done)

  }

  const deleteTask = () => {

    let newList = list
    newList.tasks = newList.tasks.filter((item) => item.createdAt !== data.createdAt)
    axios.put("http://localhost:3001/lists/" + newList.id, newList)
    setTasks(newList.tasks)
  }

  return (
    <Container>
      <TaskHeader>
        <CompleteButton onClick={e => changeDone()}>{done ? <Done /> : ""}</CompleteButton>
        <input
          type="text"
          value={title}
          onChange={e => changeTitle(e.target.value)}
        />
        <DescButton onClick={(e) => setModal(!modal)}>
          {modal ? <UpArrow /> : <DownArrow />}
        </DescButton>
      </TaskHeader>
      {modal ? (
        <Description>
          <Trash onClick={(e) => deleteTask()} />
          <label htmlFor="description">descrição</label>
          <textarea id="description" value={description} onChange={e => changeDesc(e.target.value)} />
        </Description>
      ) : (
        ""
      )}
    </Container>
  );
}

export default Task;
