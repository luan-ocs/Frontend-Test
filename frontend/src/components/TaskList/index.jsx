import React, { useState, useContext } from "react";
import axios from "axios";
import { Container, AddButton, TaskHeader } from "./styles";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { Trash } from "@styled-icons/bootstrap/Trash";
import Task from "../Task";
import { ListContext } from "../../provider/ListProvider";

function TaskList({ taskList }) {
  const { lists, setLists } = useContext(ListContext);
  const [listData, setListData] = useState(taskList);
  const [title, setTitle] = useState(listData.title);
  const [tasks, setTasks] = useState(taskList.tasks);

  const addTask = () => {
    let newTasks = [...tasks];
    newTasks.push({
      id: newTasks.length,
      title: "",
      desc: "",
      done: false,
      createdAt: new Date(),
    });
    let newTaskList = { ...listData };
    newTaskList.tasks = newTasks;
    axios.put(`http://localhost:3001/lists/${taskList.id}`, newTaskList);
    setTasks(newTasks);
  };

  const changeTitle = (value) => {
    let newListData = listData;
    newListData.title = value;
    axios.put("http://localhost:3001/lists/" + listData.id, newListData);
    setTitle(value);
  };

  const deleteList = () => {
    let newLists = [...lists];
    newLists = newLists.filter((e) => e.createdAt !== listData.createdAt);
    axios.delete("http://localhost:3001/lists/" + listData.id);
    setLists(newLists);
  };

  return (
    <Container>
      <TaskHeader>
        <input
          type="text"
          name="Title"
          id="title"
          value={title}
          onChange={(e) => changeTitle(e.target.value)}
        />
        <Trash
          onClick={(e) => {
            deleteList();
          }}
        />
      </TaskHeader>
      <ul>
        {tasks.map((task, index) => (
          <Task
            data={task}
            index={index}
            key={task.createdAt}
            list={listData}
            setTasks={setTasks}
          />
        ))}
      </ul>
      <AddButton>
        <Add onClick={(e) => addTask()} />
      </AddButton>
    </Container>
  );
}

export default TaskList;
