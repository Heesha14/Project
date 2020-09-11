import React, { Component } from 'react'
import EmployeeService from "../Services/EmployeeService";
import "assets/css/employee.css";
import {
    Breadcrumb,
    BreadcrumbItem, Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader, CardText,
    Col,
    Form,
    FormGroup,
    Input,
    Row
} from "reactstrap";
import {ListEmployeeComponent} from "./ListEmployee";

class Employee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            address : '',
            dob : '',
            mobile : '',
            gender : '',
            designation : '',
            appointfee : '',
            bsalary : '',
            qualification : '',
            username : '',
            password : '',

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeDesignationHandler = this.changeDesignationHandler.bind(this);
        this.changeAppointfeeHandler = this.changeAppointfeeHandler.bind(this);
        this.changeBasicsalaryHandler = this.changeBasicsalaryHandler.bind(this);
        this.changeQualificationHandler = this.changeQualificationHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this);
        //this.enableField = this.enableField.bind(this);
        this.baseState = this.state;


    }

    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };


    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            address : this.state.address,
            dob : this.state.dob,
            mobile : this.state.mobile,
            gender : this.state.gender,
            designation : this.state.designation,
            appointfee : this.state.appointfee,
            bsalary : this.state.bsalary,
            qualification : this.state.qualification,
            username : this.state.username,
            password : this.state.password
        };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/admin/employees');
        });

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstname : event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastname : event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email : event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address : event.target.value});
    }

    changeDobHandler = (event) => {
        this.setState({dob : event.target.value});
    }

    changeMobileHandler = (event) => {
        this.setState({mobile : event.target.value});
    }

    changeGenderHandler = (event) => {
        this.setState({gender : event.target.value});
    }

    changeDesignationHandler = (event) => {
        this.setState({designation : event.target.value});
    }

    changeBasicsalaryHandler = (event) => {
        this.setState({bsalary : event.target.value});
    }

    changeAppointfeeHandler = (event) => {
        this.setState({appointfee : event.target.value});
    }
    changeQualificationHandler = (event) => {
        this.setState({qualification : event.target.value});
    }
    changeUsernameHandler = (event) => {
        this.setState({username : event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password : event.target.value});
    }

    handleReset = () => {
        this.setState(this.baseState)
    }


    // enableField  = () =>
    // {
    //     let checkBox = document.getElementById("exampleRadios11");
    //     let checkBox3 = document.getElementById("exampleRadios12");
    //     if (checkBox.checked === false)
    //     {
    //         console.log("ccc")
    //         document.getElementById("bsalary").disabled = true;
    //     }
    //
    //     if (checkBox.checked === true)
    //     {
    //         console.log("ddd")
    //         document.getElementById("bsalary").disabled = false;
    //
    //     }
    //     if (checkBox3.checked === false)
    //     {
    //         console.log("aaa")
    //         document.getElementById("appointfee").disabled = true;
    //
    //     }
    //
    //     if (checkBox3.checked === true)
    //     {
    //         console.log("bbb")
    //         document.getElementById("appointfee").disabled = false;
    //     }
    //
    //
    // }


    render() {
        const { isPasswordShown } = this.state;
        return (
            <div className="content">

                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Employee</BreadcrumbItem>
                </Breadcrumb>

                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Add Employee</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>First Name *</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.firstname}
                                                    onChange={this.changeFirstNameHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>Last Name *</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.lastname}
                                                    onChange={this.changeLastNameHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address *
                                                </label>
                                                <Input placeholder="example@gmail.com"
                                                       type="email"
                                                       value={this.state.email}
                                                       onChange={this.changeEmailHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>Date of Birth</label>
                                                <Input
                                                    type="date"
                                                    value={this.state.dob}
                                                    onChange={this.changeDobHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Phone number</label>
                                                <Input
                                                    type="phone"
                                                    value={this.state.mobile}
                                                    onChange={this.changeMobileHandler}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Gender</label><br/>
                                            <FormGroup check inline className="form-check-radio">

                                                <label className="form-check-label">
                                                    <Input type="radio" name="gender" id="exampleRadios11"
                                                        // value={this.state.gender} onChange={this.changeGenderHandler}
                                                        // defaultChecked/>Male
                                                           value="Male" onChange={this.changeGenderHandler}/>Male

                                                    <span className="form-check-sign"></span>
                                                </label>
                                                <label className="form-check-label">
                                                    <Input type="radio" name="gender" id="exampleRadios12"
                                                           value="Female" onChange={this.changeGenderHandler}/>
                                                        Female
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Address</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.address} onChange={this.changeAddressHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label for="Designation">Designation *</label>
                                                <Input type="select" name="select" id="Designation"
                                                       value={this.state.designation} onChange={this.changeDesignationHandler}>
                                                    <option>Select....</option>
                                                    <option id = "doctor">Doctor</option>
                                                    <option id = "admin">Admin</option>
                                                    <option id = "nurse">Nurse</option>
                                                    <option>Receptionist</option>
                                                    <option>Driver</option>
                                                </Input>


                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>Basic Salary (EXCLUDE DOCTORS)</label>
                                                <Input
                                                    placeholder="Rs." id = "bsalary"
                                                    type="number"
                                                    value={this.state.bsalary} onChange={this.changeBasicsalaryHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Appointment fee (ONLY DOCTORS)</label>
                                                <Input placeholder="Rs." id = "appointfee"
                                                       type="number"
                                                       value={this.state.appointfee} onChange={this.changeAppointfeeHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>Qualification</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.qualification}
                                                    onChange={this.changeQualificationHandler}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>User Name *</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.username} onChange={this.changeUsernameHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Password *</label>
                                                <Input
                                                    type={isPasswordShown ? "text" : "password"}
                                                    value={this.state.password} onChange={this.changePasswordHandler}
                                                />
                                                <i
                                                    className="fa fa-eye password-icon"
                                                    onClick={this.togglePasswordVisiblity}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" onClick={this.saveEmployee} color="primary" type="submit">
                                    Save
                                </Button>
                                <Button className="btn-fill" onClick={this.handleReset.bind(this)}color="primary" type="reset">
                                    Reset
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/emilyz.jpg")}
                                        />
                                        <h5 className="title">Mike Andrew</h5>
                                    </a>
                                    <p className="description">Ceo/Co-Founder</p>
                                </div>
                                <div className="card-description">
                                    Do not be scared of the truth because we need to restart the
                                    human foundation in truth And I love you like Kanye loves
                                    Kanye I love Rick Owens’ bed design but the back is...
                                </div>
                            </CardBody>
                            <CardFooter>
                                <div className="button-container">
                                    <Button className="btn-icon btn-round" color="facebook">
                                        <i className="fab fa-facebook" />
                                    </Button>
                                    <Button className="btn-icon btn-round" color="twitter">
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button className="btn-icon btn-round" color="google">
                                        <i className="fab fa-google-plus" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }

}

export default Employee;
