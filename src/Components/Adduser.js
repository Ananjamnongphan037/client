import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';

const axios = require('axios');

export default  function Adduser() {

//INPUT ___________________________________________________________

    const [data, setData] = useState({
        FirstName: '',
        LastName: '',
        Age: ''
  })

  const handleChange = e => {
    const   { target }  =   e
    const   { name }    =   target
    const   value       =   target.value
    setData({
      ...data,
      [name]: value
    })
    console.log(data);
  }

  const onSubmit = e => {

    e.preventDefault()

//AXIOS POST DATA  ________________________________
    axios.post(`http://localhost:4000/Users`,data)
        .then((res) => {
            res.send(data);
        })
        .catch(err => err);
        console.log('submit Add User', data);
        alert('Add User Success');
        e.target.reset();
  }

// RELOAD PAGE
    const refreshPage = ()=>
        {
        window.location.reload();
        }

//   useEffect(() => input(), []);

// _________________________________________________________________________________________________

    return (
        <div>
        <Form inline onSubmit={onSubmit}>
        <FormGroup>
                <Label for="exampleFirstName" hidden>FirstName</Label>
                <Input type="text" name="FirstName" id="FirstName" onChange={handleChange} placeholder="FirstName" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="exampleLastName" hidden>LastName</Label>
                <Input type="text" name="LastName" id="LastName" onChange={handleChange} placeholder="LastName" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Input type="select" name="Age" id="Age" onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <Button color="primary" type="submit" onClick={refreshPage} >Submit</Button>
        </Form>
        </div>
    )
}
