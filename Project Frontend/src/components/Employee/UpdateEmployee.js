import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';
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

export class UpdateEmployee extends Component {
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
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.updateEmployee = this.updateEmployee.bind(this);

    }


    componentDidMount(){
       // alert(this.state.id)
        EmployeeService.getEmployeeById(this.state.id).then( (res) => {

            let employee = res.data;
            this.setState({
                firstname : employee.firstname,
                lastname : employee.lastname,
                email : employee.email,
                address : employee.address,
                dob : employee.dob,
                mobile : employee.mobile,
                gender : employee.gender,
                designation : employee.designation,
                appointfee : employee.appointfee,
                bsalary : employee.bsalary,
                username : employee.username,
                password : employee.password
            });
        });
    }

    updateEmployee = (e) => {
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
            username : this.state.username,
            password : this.state.password
        };
        console.log('employee => ' + JSON.stringify(employee));
        console.log(this.state.id);
       // EmployeeService.updateEmployee(employee, this.state.id).then( res => {
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
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

    changeUsernameHandler = (event) => {
        this.setState({username : event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password : event.target.value});
    }

    cancel(){
        this.props.history.push('/admin/employees');
    }

    render() {
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
                                <h5 className="title">Edit Employee</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>First Name</label>
                                                <Input
                                                    //defaultValue="Heesha"
                                                    //placeholder="Company"
                                                    type="text"
                                                    value={this.state.firstname}
                                                    onChange={this.changeFirstNameHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>Last Name</label>
                                                <Input
                                                    //defaultValue="michael23"
                                                    //placeholder="Lastname"
                                                    type="text"
                                                    value={this.state.lastname}
                                                    onChange={this.changeLastNameHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
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
                                                    //defaultValue="Mike"
                                                    //placeholder="Date"
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
                                                    //defaultValue="Phone"
                                                    //placeholder="Phone"
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
                                                        <Input type="radio" name="exampleRadios1" id="exampleRadios11"
                                                               value={this.state.gender} onChange={this.changeGenderHandler}
                                                               defaultChecked/>Male
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                    <label className="form-check-label">
                                                        <Input type="radio" name="exampleRadios1" id="exampleRadios12"
                                                               value={this.state.gender} onChange={this.changeGenderHandler}/>
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
                                                    //defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                    //placeholder="Home Address"
                                                    type="text"
                                                    value={this.state.address} onChange={this.changeAddressHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label for="Designation">Designation</label>
                                                <Input type="select" name="select" id="Designation"
                                                       value={this.state.designation} onChange={this.changeDesignationHandler}>
                                                    <option>Doctor</option>
                                                    <option>Admin</option>
                                                    <option>Nurse</option>
                                                    <option>Receptionist</option>
                                                    <option>Driver</option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>Basic Salary</label>
                                                <Input
                                                    //defaultValue="Salary"
                                                    placeholder="Rs."
                                                    type="number" disabled
                                                    value={this.state.bsalary} onChange={this.changeBasicsalaryHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Appointment fee</label>
                                                <Input placeholder="Rs."
                                                       type="number"
                                                       value={this.state.appointfee} onChange={this.changeAppointfeeHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>User Name</label>
                                                <Input
                                                    // defaultValue="Username"
                                                    // placeholder="Username"
                                                    type="text"
                                                    value={this.state.username} onChange={this.changeUsernameHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label>Password</label>
                                                <Input
                                                    //defaultValue="Andrew"
                                                    //placeholder="Password"
                                                    type="password"
                                                    value={this.state.password} onChange={this.changePasswordHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" onClick={this.updateEmployee} color="primary" type="submit">
                                    Update
                                </Button>
                                <Button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>
                                    Cancel
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

export default UpdateEmployee;
