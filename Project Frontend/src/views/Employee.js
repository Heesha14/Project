import React from "react";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import Salary from "./Salary";

class Employee extends React.Component {
    cancel(){
        this.props.history.push('/admin/salary');
    }

    render() {
        return (
            <div className="content">
                <Breadcrumb>
                    <BreadcrumbItem><a href="#Salary">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/admin/salary#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Employee</BreadcrumbItem>
                </Breadcrumb>


                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>




            </div>
        )
    }
}

export default Employee;





//
// import React, { Component } from 'react'
//
// export class UpdateEmployeeComponent extends Component {
//     constructor(props) {
//         super(props)
//
//         this.state = {
//
//         }
//     }
//
//
//     render() {
//         return (
//             <div>
//
//             </div>
//         )
//     }
// }
//
// export default UpdateEmployeeComponent