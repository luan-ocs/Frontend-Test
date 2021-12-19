import React, { useContext, useEffect } from "react";
import axios from "axios";
import { ListContext } from "../../provider/ListProvider";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import TaskList from "../TaskList";

import { Container, ButtonDiv, Button } from "./styles";

function Board() {
  const { lists, setLists } = useContext(ListContext);

  useEffect(() => {
    axios.get("http://localhost:3001/lists").then((response) => {
      setLists(response.data);
    });
  }, []);

  let listsId  =  0;

  lists.forEach((element) => {
    if(element.id > listsId) {
        listsId = element.id
    }
  })

  const addList = () => {
    let newList = {
      title: "",
      tasks: [],
      createdAt: new Date(),
      id: listsId+1
    };
    listsId++;
    console.log(listsId)
    let newLists = [...lists];
    newLists.push(newList);
    axios.post("http://localhost:3001/lists", newList);
    setLists(newLists);
  };

  return (
    <Container>
      {lists.map((taskList, index) => (
        <TaskList key={taskList.createdAt} taskList={taskList} />
      ))}
      <ButtonDiv>
        <Button onClick={(e) => addList()}>
          <Add />
        </Button>
      </ButtonDiv>
    </Container>
  );
}

export default Board;
