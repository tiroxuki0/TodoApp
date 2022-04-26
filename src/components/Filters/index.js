import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import filtersSlice from "./filtersSlice";
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("All");
  const [priorities, setPriorities] = useState();

  const handleChangeSearch = (e) => {
    dispatch(filtersSlice.actions.searchFilter(e.target.value));
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFilter(e.target.value));
  };

  const handleChangePriorities = (e) => {
    setPriorities(e);
    dispatch(filtersSlice.actions.prioritiesFilter(e));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          onChange={(e) => handleChangeSearch(e)}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={(e) => handleChangeStatus(e)}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: "bold", marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: "100%" }}
          value={priorities}
          onChange={(e) => handleChangePriorities(e)}
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
      </Col>
    </Row>
  );
}
