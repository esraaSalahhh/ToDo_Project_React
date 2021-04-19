import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';


const todo_part = (props) => {
    var markk=false;
    const { todo } = props;
    markk=todo.status;

    console.log(todo);
    const Delete = (e) => {
        axios.delete(`http://localhost:3005/api/delete_todo/${todo._id}`)
            .then(function (response) {
                console.log(response);
                window.location.reload(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const Mark = (e) => {
        axios.put(`http://localhost:3005/api/mark_todo/${todo._id}`)
            .then(function (response) {
                console.log(response);
                // markk=response.data.status;
                window.location.reload(true);

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(markk);

    return (

        <>
        <br/>
            <Row>
                <Col xl="2"></Col>
                <Col xl="7">
                    <div key={todo._id}  >
                    <p style={{ textDecoration: markk ? 'line-through' : 'none', color: markk ? '#8c8c8c' : 'black' }}>  {todo.text}</p>
                    
                </div>
                </Col>
                <Col xl="1">
                <button className="d-block btn btn-info" onClick={Mark} style={{"marginLeft":"50px"}}>
                <i class="fas fa-check"></i>
                 </button>
                
                </Col>
                <Col xl="1">
                <button className="d-block btn btn-info" onClick={Delete}  >
                <i class="fas fa-trash-alt"></i>
                 </button>
                
                </Col>
                <Col xl="1">
             
                
                </Col>
                
            </Row>
            <hr/>







        </>
    );
}

export default todo_part;