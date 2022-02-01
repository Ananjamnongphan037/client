import React from 'react';
import '../App.css';
import { Table, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

// const DeleteUser    =   require('../Components/DeleteUser');


const axios = require('axios');


export default  function Users() {

//Get Users ___________________________________________________________

    const [Users, setUsers] = useState([]);
    const getUsers= async  () => {
        await axios.get(`http://localhost:4000/Users`)
        .then((res) => {
            const Data  =   res.data;
            setUsers(Data);
        })
        .catch(err => err);
    }
    useEffect(() => getUsers());


//Get Users ___________________________________________________________

//Modals Add User ___________________________________________________________
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
    }

    const onSubmit = e => {
        //AXIOS POST DATA  ________________________________
        axios.post(`http://localhost:4000/Users`,data)
            .then((res) => {
                res.send(data);
            })
            .catch(err => err);
            alert('Add User Success');
            setShow(false);
    }


// _________________________________________________________________________________________________

//DELETE USER WHERE ID _____________________________________________________________________________

    const handleChangeD = e => {
        const   ID       =   e.target.value;
            axios.delete(`http://localhost:4000/Users/${ID}`)
                .then((res) => {
                    res.send(ID);
                })
                .catch(err => err);
                alert("DELETE USER NO: "+ ID + " Success !!");
                // e.target.reset();
                // console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
                // expected output: ""2006-01-02T15:04:05.000Z""

        }
        
//DELETE USER WHERE ID _____________________________________________________________________________

//UPDATE USER _____________________________________________________________________________
const [showup, setShowup] = useState(false);
    const handleCloseup = () => setShowup(false);
    const handleShowup = () => setShowup(true);

    const [dataIdup, setDataIdup] = useState([]);

    const [dataup, setDataup] = useState({
        FirstName   :   '',
        LastName    :   '',
        Age         : ''
    })

    const handleChangeUp = e => {
        const   { target }  =   e
        const   { name }    =   target
        const   value       =   target.value
        setDataup({
        ...dataup,
        [name]: value
        })
    }
    
const handleChangeEdit = e => {
    const IDup  =   e.target.value;
    //AXIOS POST DATA  ________________________________
    axios.get(`http://localhost:4000/Users/${IDup}`)
        .then((res) => {
            const IdUp  =   res.data;
            setDataIdup(IdUp);
        })
        .catch(err => err);
        setShowup(true);
}
    

const onSubmitup = e => {
    const   IDEdit   =   e.target.value;
    
    //AXIOS POST DATA  ________________________________
    axios.put(`http://localhost:4000/Users/${IDEdit}`,dataup)
        .then((res) => {
            res.send(dataup);
        })
        .catch(err => err);
        alert('UPDATE DATA USER SUCCESS');
        setShowup(false);

}
        
//UPDATE USER _____________________________________________________________________________
//Set Show & Hide Modals ___________________________________________________________

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    




//Set Show & Hide Modals ___________________________________________________________
// _________________________________________________________________________________________________

    return (
    <div style={{ padding: "5rem 0" }} >
        <Container>
        <Table striped >
            <thead>
                <tr style={{fontFamily: 'cursive'}}>
                    <th> No </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Username </th>
                    <th> <Button color="info" onClick={handleShow} > Add User </Button>{' '} </th>
                </tr>
            </thead>

            <tbody >
            {Users.map ((Users) =>(
                <tr style={{fontFamily: 'cursive'}} key={Users.ID} id={Users.ID} >
                    <th scope="row" > {Users.ID} </th>
                    <td> {Users.FirstName} </td>
                    <td> {Users.LastName} </td>
                    <td> {Users.Age} </td>
                    <td>
                        <Button className="w75" color="warning" value={Users.ID} onClick={handleChangeEdit} > Edit </Button>{' '}
                        <Button className="w75" color="danger" value={Users.ID} onClick={handleChangeD} > Delete </Button>{' '}
                    </td>
                </tr>
            ))}
            </tbody>

            <thead>
                <tr style={{fontFamily: 'cursive'}}>
                    <th> No </th>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Username </th>
                    <th> Actions </th>
                </tr>
            </thead>
        </Table>
        </Container>

{/* Modal Add Users ______________________________________________________________ */}
<>
<Modal show={show} onHide={handleClose}>
    <Modal.Header >
        <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <div >
            <Form inline>
            <div >
                <FormGroup>
                    <Label for="exampleNo" >  </Label>
                </FormGroup>
            </div>

            <div >
                <FormGroup>
                    <Label for="exampleFirstName" >FirstName</Label>
                </FormGroup>
            </div>

            <div >
                <FormGroup>
                    <Label for="exampleLastName" >LastName</Label>
                </FormGroup>
            </div>

            <div >
                <FormGroup>
                    <Label for="exampleAge" >Age</Label>
                </FormGroup>
            </div>
                        
            </Form>
        </div>
        
        <div >
            
        <Form inline onSubmit={onSubmit}>

            <div >
                <FormGroup>
                    <Input type="text" name="FirstName" id="FirstName" onChange={handleChange} placeholder="FirstName" />
                </FormGroup>
            </div>

            <div >
                <FormGroup>
                    <Input type="text" name="LastName" id="LastName" onChange={handleChange} placeholder="LastName" />
                </FormGroup>
            </div>

            <div >
                <FormGroup>
                    <Input type="select" name="Age" id="Age" onChange={handleChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Input>
                </FormGroup>
            </div>
        </Form>
        </div>   

    </Modal.Body>

    <Modal.Footer>
        <Button color="primary" onClick={onSubmit}>
            Save Changes
        </Button>
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
    </Modal.Footer>

</Modal>
</>
{/* Modal Add Users ______________________________________________________________ */}

{/* Modal Update Users ______________________________________________________________ */}

<>
<Modal show={showup} onHide={handleCloseup}>
    <Modal.Header >
        <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>

    <Modal.Body>

        {dataIdup.map((dataIdup) => (
            <Form inline key={dataIdup.ID}>
                <FormGroup>
                    <Label for="exampleNo" > {dataIdup.ID} </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFirstName" > {dataIdup.FirstName} </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleLastName" > {dataIdup.LastName} </Label>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleAge" > {dataIdup.Ag} </Label>
                </FormGroup>
            </Form>
        ))}
            

        {dataIdup.map((dataIdup) => (
            <Form inline onSubmit={onSubmitup} key={dataIdup.ID} >
                    <FormGroup>
                        <Label type="text" name="ID" id="ID"/> {dataIdup.ID}
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="FirstName" id="FirstName" onChange={handleChangeUp} placeholder={dataIdup.FirstName} /> 
                    </FormGroup>

                    <FormGroup>
                        <Input type="text" name="LastName" id="LastName" onChange={handleChangeUp} placeholder={dataIdup.LastName} />
                    </FormGroup>

                    <FormGroup>
                        <Input type="select" name="Age" id="Age" onChange={handleChangeUp}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>

                    <Button color="primary" value={dataIdup.ID} onClick={onSubmitup}>
                        Save Changes
                    </Button>
            </Form>
        ))}
        

    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseup}>
        Close
        </Button>
    </Modal.Footer>

</Modal>
</>

{/* Modal Update Users ______________________________________________________________ */}
    </div>
    )
}