import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Form } from "react-bootstrap";

function DataCha() {
  //
  const { dataCha, dataFilter, dataFilterV2, setDataFilter, setDataFilterV2 } =
    useContext(DataContext);
  //
  const [checkedUsers, setCheckedUsers] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedUsers((prev) => [...prev, value]);
      const newCheckUser = [...checkedUsers, value];

      setDataFilter(newCheckUser);
    } else {
      setCheckedUsers((prev) => prev.filter((it) => it != value));
      const newCheckUser = checkedUsers.filter((it) => it != value);

      if (newCheckUser.length > 0) {
        setDataFilter(newCheckUser);
      } else {
        setDataFilter(dataFilterV2);
      }
    }
  };

  return (
    <div>
      <h4>FILTERS BY BRAND</h4>
      {dataCha.map((user) => (
        <Form.Check
          key={user.id}
          type="checkbox"
          label={user.name}
          value={user.id}
          onChange={(e) => handleChange(e)}
        />
      ))}
    </div>
  );
}
export default DataCha;