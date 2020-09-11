import React, { Component } from 'react'
import EmployeeService from "../Services/EmployeeService";
import {Breadcrumb, BreadcrumbItem, Label} from "reactstrap";

export class ListEmployee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){//
        // this.props.history.push(`/admin/view-employee/${id}`);
        console.log(`Hello ${this.state.id}`)
        this.props.history.push(`/admin/view-employee/:id`);
    }

    editEmployee(id){
        //this.props.history.push('/admin/update-employee/2502');
        this.props.history.push(`/admin/update-employee/${id}`);
        console.log(id)
        //this.props.history.push(`/admin/update-employee/$\{id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees : res.data})
        })
    }

    addEmployee(){
        this.props.history.push('./add-employee');
    }

    render() {
        return (
            <div className="content">
                <Breadcrumb>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Employee List</BreadcrumbItem>
                </Breadcrumb>
<br/>
                <h4>List of Employees</h4><br/>
                <div className = "row">
                    <table className = "table table-striped table-bordered ">
                        <thead>
                        <tr>
                            <th> Employee ID </th>
                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Email </th>
                            <th> Date of Birth </th>
                            <th> Mobile Number </th>
                            <th> Designation </th>
                            <th> Username </th>
                            <th> Actions </th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key = {employee.id}>
                                        <td> {employee.id} </td>
                                        <td> {employee.firstname } </td>
                                        <td> {employee.lastname } </td>
                                        <td> {employee.email } </td>
                                        <td> {employee.dob } </td>
                                        <td> {employee.mobile } </td>
                                        <td> {employee.designation } </td>
                                        <td> {employee.username } </td>
                                        <td><button onClick = {() => this.editEmployee(employee.id)} className = "btn btn-info btn-sm"> Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger btn-sm">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info btn-sm">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>

                    </table>
                </div>

            </div>

        )
    }
}

export default ListEmployee