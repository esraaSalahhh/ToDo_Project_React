import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';




const Add_newTask = (props) => {
  
    var ID = localStorage.getItem('id');

    const [AddForm, setAddForm] = useState({
        text: "",
    });

    const [formErrors, setFormErros] = useState({
        textErrors: null,
    });

    const handleFormChange = (e) => {
        console.log(e.target.value, e.target.name)
        setAddForm({
            text: e.target.name === 'text' ? e.target.value : AddForm.text,
        });
       
        setFormErros({
            textErrors: e.target.name === 'text' ? (e.target.value.length === 0) ?"this field is required":null: formErrors.textErrors,
        });
    };
    const handleFormSubmit = () => {
        console.log(AddForm);
        const { text } = AddForm;
        setAddForm({
            textErrors: text.length > 0 ? null : "This field is required",
        });
        


        if(formErrors.textErrors===null){
            axios.post('http://localhost:3005/api/add_todo',{
                _userId    : ID,
                text : AddForm.text ,
              }
        )
            .then(function (response) {
                console.log(response);
                props.history.push(`/Todo_list`);

            })
            
            .catch(function (error) {
                console.log(error);
            });

    }
    else{
    }
    };


    return (

        <>

            <Container dir="auto" style={{textAlign: 'start'}}>
                <br /><br />

                <div class="row" style={{ "margin-top": "20px", "height": "390px" }}>
                    <div class="col-lg-12 col-md-12 col-sm-12 divstyle">
                        <h3 style={{ "margin-top": "10px" }}>Add your Task</h3><hr />       
                <br />
                <input
                    onChange={handleFormChange}
                    placeholder="Text"
                    name="text"
                    className={`form-control mt-4 mb-4 ${formErrors.textErrors ? "border-danger" : ""
                        }`}
                    value={AddForm.text}
                />
                <small className="text-danger"> {formErrors.textErrors}</small>
               
                
                <br/><br/>
                <button className="d-block btn btn-info"
                 onClick={handleFormSubmit}
                 >
                    submit
      </button>

                    </div>
                </div>
            </Container>
        </>
    );
}

export default Add_newTask;