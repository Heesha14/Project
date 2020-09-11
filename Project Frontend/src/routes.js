/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Employee from "./views/Employee";
import Salary from "./views/Salary";
import AddEmployee from "./components/Employee/AddEmployee";
import ListEmployeeComponent, {ListEmployee} from "./components/Employee/ListEmployee";
import {UpdateEmployee} from "./components/Employee/UpdateEmployee";
import ViewEmployee from "./components/Employee/ViewEmployee";
import SearchEmployeeName from "./components/Employee/SearchEmployeeName";
import SearchEmployeeDesignation from "./components/Employee/SearchEmployeeDesignation";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/add-employees",
    name: "Employee",
    rtlName: "الرموز",
    icon: "tim-icons icon-single-02",
    component: AddEmployee,
    layout: "/admin"
  },
  {
    path: "/salary",
    name: "Salary",
    rtlName: "الرموز",
    icon: "tim-icons icon-money-coins",
    component: Salary,
    layout: "/admin"
  },
  {
    path: "/expense",
    name: "Expenditure",
    rtlName: "الرموز",
    icon: "tim-icons icon-chart-bar-32",
    layout: "/admin"
  },

  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  },
  {
    path: "/employees",
    rtlName: "ار تي ال",
    //icon: "tim-icons icon-world",
    component: ListEmployee,
    layout: "/admin"
  },
  {
    path: "/update-employee",
    key : "/:id",
    name: "Check",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: UpdateEmployee,
    layout: "/admin"
  },

  {
    path: "/view-employee",
    name: "Check2",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: ViewEmployee,
    layout: "/admin"
  }



];
export default routes;
