import React from "react";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

class Salary extends React.Component {
    render() {
        return (
            <div className="content">

                <Breadcrumb>
                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Salary</BreadcrumbItem>
                </Breadcrumb>

            </div>
        )
    }
}

export default Salary;
