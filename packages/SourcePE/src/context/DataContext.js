import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataCha, setDataCha] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [dataFilterV2, setDataFilterV2] = useState([]);
  const [filterFollowCondition, setFilterFollowCondition] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //
    axios.get("http://localhost:9999/brands").then((res) => {
      //
      setDataCha(res.data);
      //
      setDataFilter(res.data.map((user) => user.id.toString()));
      setDataFilterV2(res.data.map((user) => user.id.toString()));
    });
    //
    axios
      .get("http://localhost:9999/employees")
      .then((res) => setDataList(res.data));
  }, []);

  // const changeStatus = (id) => {
  //   const todo = todos.find((todo) => todo.id === id);
  //   todo.completed = !todo.completed;
  //   axios.put(`http://localhost:9999/todo/${id}`, todo).then(() => {
  //     setTodos(todos.map((t) => (t.id === id ? todo : t)));

  //     alert("Change suscess.");
  //   });
  // };

  const getNameCha = (id) => {
    const cha = dataCha.find((it) => it.id == id);

    return cha;
  };

  const deleteData = (id) => {
    const dataDelete = dataList.find((it) => it.id == id);
    // axios.delete(`http://localhost:9999/products`, dataDelete).then(() => {
      
    // });

    setDataList(dataList.filter((t) => (t.id != id)));
  };

  const addData = (data) => {
    axios.post(`http://localhost:9999/todo`, data).then(() => {
      setDataList(prev => [...prev, data]);
    });
  }

  return (
    <DataContext.Provider
      value={{
        dataCha,
        dataList,
        dataFilter,
        dataFilterV2,
        filterFollowCondition,
        cart,
        setDataCha,
        setDataList,
        setDataFilter,
        setDataFilterV2,
        setFilterFollowCondition,
        getNameCha,
        setCart,
        deleteData
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
