import React from 'react';
import Todo_part from './Todo_part';
import { useEffect, useState } from "react";
import './Todo_list.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Todo_list = (props) => {
  const [todoist, settodoist] = useState(null);
  useEffect(() => {
    var ID = localStorage.getItem('id');
    axios.get(`http://localhost:3005/api/all_todo/${ID}`)
      .then(function (response) {
        console.log(response.data);
        settodoist(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);

  return (
    <>
      <div >

      <Link to={{ pathname: `/Add_newTask` }} class="text-decoration-none" style={{ "color": "black"}}>
        <button type="button" style={{"marginLeft":"200px","marginTop":"20px" }} className="d-block btn btn-info">
          Add New Task </button>
      </Link>
      <br/>
        {todoist ? (todoist.map((t, index) =>

          <Todo_part key={t._id} todo={t} />
        )) : (<h2>Not Found</h2>)}


      </div>

      
    </>
  );
}

export default Todo_list;