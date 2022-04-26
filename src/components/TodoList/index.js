import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import todoListSlice from "./todoListSlice";
import { useSelector } from "react-redux";
import { todoListRemaining } from "../../redux/selectors";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const todoList = useSelector(todoListRemaining);

  const handleAddTodo = () => {
    const todoItem = {
      id: uuidv4(),
      name: todo,
      priority: priority,
      completed: false,
    };
    dispatch(todoListSlice.actions.addTodo(todoItem));
    setTodo("");
    setPriority("Medium");
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => {
          return (
            <Todo
              key={todo.id}
              name={todo.name}
              priority={todo.priority}
              completed={todo.completed}
            />
          );
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={(e) => setPriority(e)}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
