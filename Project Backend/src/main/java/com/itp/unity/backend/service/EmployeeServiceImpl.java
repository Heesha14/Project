package com.itp.unity.backend.service;

import com.itp.unity.backend.domain.Employee;
import com.itp.unity.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        List<Employee> employeeList = new ArrayList<>();
        try {
            employeeList = employeeRepository.findAll();
            return employeeList;
        } catch (Exception e) {
            return null;
        }
    }

    public Employee getEmployeeById(Long id) {
        Employee employee = new Employee();
        try {
            employee = employeeRepository.findById(id).get();
            return employee;
        } catch (Exception e) {
            return null;
        }
    }

    public boolean addEmployee(Employee employeeModel) {
        Employee employee = new Employee();
        employee.setFirstname(employeeModel.getFirstname());
        employee.setLastname(employeeModel.getLastname());
        employee.setEmail(employeeModel.getEmail());
        employee.setAddress(employeeModel.getAddress());
        employee.setDob(employeeModel.getDob());
        employee.setMobile(employeeModel.getMobile());
        employee.setGender(employeeModel.getGender());
        employee.setQualification(employeeModel.getQualification());
        employee.setDesignation(employeeModel.getDesignation());
//        employee.setAppointfee(employeeModel.getAppointfee());
//        employee.setBsalary(employeeModel.getBsalary());
        if (employeeModel.getDesignation().equalsIgnoreCase("Doctor")){
        	employee.setAppointfee(employeeModel.getAppointfee());
        	employee.setBsalary(0);
        }
        else if (employeeModel.getDesignation() != "Doctor"){  
        	  employee.setAppointfee(0);
        	  employee.setBsalary(employeeModel.getBsalary());
        } 
        employee.setUsername(employeeModel.getUsername());
        employee.setPassword(employeeModel.getPassword());
        try {
            employeeRepository.save(employee);
            return true;
        } catch (Exception e) {
            return false;
        }
    }




    public boolean deleteEmployee(Long id) {
        Employee employee = new Employee();
        try {
            employee = employeeRepository.findById(id).get();
            employeeRepository.delete(employee);
            return true;
        }catch(Exception e) {
            return false;
        }
    }

    public boolean updateEmployee(Long id, Employee employeeModel) {
        Optional<Employee> employ = employeeRepository.findById(id);
        if (employ.isPresent()) {
            Employee employee = employ.get();

            //.orElseThrow(() -> new ResourceNotFoundException("Employee doesnt exist with id : " + id));
            try {
                employee.setFirstname(employeeModel.getFirstname());
                employee.setLastname(employeeModel.getLastname());
                employee.setEmail(employeeModel.getEmail());
                employee.setAddress(employeeModel.getAddress());
                employee.setDob(employeeModel.getDob());
                employee.setMobile(employeeModel.getMobile());
                employee.setGender(employeeModel.getGender());
                employee.setQualification(employeeModel.getQualification());
                employee.setDesignation(employeeModel.getDesignation());
                if (employeeModel.getDesignation().equalsIgnoreCase("Doctor")){
                	employee.setAppointfee(employeeModel.getAppointfee());
                	employee.setBsalary(0);
                }
                else if (employeeModel.getDesignation() != "Doctor"){  
                	  employee.setAppointfee(0);
                	  employee.setBsalary(employeeModel.getBsalary());
                } 
                employee.setUsername(employeeModel.getUsername());
                employee.setPassword(employeeModel.getPassword());

                Employee updateEmployee = employeeRepository.save(employee);
                return true;

            } catch (Exception e) {
                return false;
            }
        } else {
            return false;
        }
    }


    public List<Employee> findByFirstnameContaining(String firstname) {
        try {
            List<Employee> employee = new ArrayList<>();
            employeeRepository.findByFirstnameContaining(firstname).forEach(employee::add);
            return employee;
        }catch(Exception e) {
            return null;
        }

    }

    public List<Employee> findByDesignation(String designation) {
        try {
            List<Employee> employee = new ArrayList<>();
            employeeRepository.findByDesignation(designation).forEach(employee::add);
            return employee;

        }catch(Exception e) {
            return null;
        }
    }



}
