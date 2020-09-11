package com.itp.unity.backend.controller;

import com.itp.unity.backend.domain.Employee;
import com.itp.unity.backend.model.EmployeeModel;
import com.itp.unity.backend.model.ResponseModel;
import com.itp.unity.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/medical/")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public @ResponseBody ResponseEntity<List<Employee>> getAllEmployees() {
        try {
            return new ResponseEntity<>(employeeService.getAllEmployees(), HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @PostMapping("/employees")
    public @ResponseBody ResponseEntity<?> createEmployee(@Valid @RequestBody Employee employeeModel) {
        try {
            if (employeeModel != null) {
                if (employeeService.addEmployee(employeeModel)) {
                    return new ResponseEntity<Object>(new ResponseModel(200, "Record Successfully Saved", employeeModel),HttpStatus.OK);
                } else {
                return new ResponseEntity<Object>(new ResponseModel(502, "Record not Saved", null), HttpStatus.BAD_GATEWAY);
            }
            } else{
                    return new ResponseEntity<Object>(new ResponseModel(417, "Employee Cannot be empty", null), HttpStatus.EXPECTATION_FAILED);
            }
        } catch (Exception e) {
            return new ResponseEntity<Object>(new ResponseModel(422, "Error occurred when adding employee", null),HttpStatus.UNPROCESSABLE_ENTITY);
        }

    }


    @DeleteMapping("/employees/{id}")
    public @ResponseBody ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        try {
            if (employeeService.deleteEmployee(id)) {
                return new ResponseEntity<String>("Employee with id "+id+" successfully deleted", HttpStatus.OK);
            } else {
                return new ResponseEntity<String>("Employee with id " +id+ " doesnt'exist", HttpStatus.UNPROCESSABLE_ENTITY);
            }
        } catch (Exception e) {
            return new ResponseEntity<String>("Error occured when deleting employee with id "+id, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping("/employees/{id}")
    public @ResponseBody ResponseEntity<?> updateEmployee(@PathVariable Long id,
                                                                 @Valid @RequestBody Employee employeeModel) {
        try {
            if (employeeModel != null) {
                if (employeeService.updateEmployee(id,employeeModel)) {
                    return new ResponseEntity<Object>(new ResponseModel(200, "Record Successfully Updated", employeeModel),HttpStatus.OK);
                } else {
                    return new ResponseEntity<Object>(new ResponseModel(400, "Employee not updated", null), HttpStatus.BAD_REQUEST);
                }
            } else{
                return new ResponseEntity<Object>(new ResponseModel(400, "Employee Cannot be empty", null), HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            return new ResponseEntity<Object>(new ResponseModel(422, "Error occurred when updating employee", null),HttpStatus.UNPROCESSABLE_ENTITY);
        }

    }

    @GetMapping("/employees/{id}")
    public @ResponseBody ResponseEntity<?> getEmployeeById(@PathVariable Long id) {

        try {
            if (employeeService.getEmployeeById(id) != null) {
                return new ResponseEntity<>(employeeService.getEmployeeById(id), HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Employee with id " +id + " doesn't exist", HttpStatus.BAD_REQUEST);
            }

        } catch (Exception e) {
            return new ResponseEntity<>("Error in finding employee with id "+id, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/employees/name")
    public  @ResponseBody ResponseEntity<?> findByFirstname(@RequestParam(required = false) String firstname) {
        try {
            List<Employee> employee = new ArrayList<>();
            employee = employeeService.findByFirstnameContaining(firstname);
            if(employee != null) {
                return new ResponseEntity<Object>(new ResponseModel(200, "Employees with first name "+firstname, employee),HttpStatus.OK);

            }else{
                return new ResponseEntity<Object>(new ResponseModel(200, "Couldnt find employees with first name "+firstname, null),HttpStatus.BAD_REQUEST);
            }

        } catch (Exception e) {
            return new ResponseEntity<Object>(new ResponseModel(200, "Error in finding "+firstname, null),HttpStatus.UNPROCESSABLE_ENTITY);

        }



    }

    @GetMapping("/employees/job")
    public  @ResponseBody ResponseEntity<?> findByDesignation(@RequestParam(required = false) String designation) {
        try {
            List<Employee> employee = new ArrayList<>();
            employee = employeeService.findByDesignation(designation);
            if(employee != null) {
                return new ResponseEntity<Object>(new ResponseModel(200, "Employee with designation "+designation, employee),HttpStatus.OK);

            }else{
                return new ResponseEntity<Object>(new ResponseModel(200, "Couldnt find employees with designation "+designation, null),HttpStatus.BAD_REQUEST);
            }

        } catch (Exception e) {
            return new ResponseEntity<Object>(new ResponseModel(200, "Error in finding "+designation, null),HttpStatus.UNPROCESSABLE_ENTITY);

        }

    }



}


   