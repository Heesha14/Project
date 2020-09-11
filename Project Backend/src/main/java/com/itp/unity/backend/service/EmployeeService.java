package com.itp.unity.backend.service;

import com.itp.unity.backend.domain.Employee;
import com.itp.unity.backend.model.EmployeeModel;
import com.itp.unity.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public interface EmployeeService {

    public List<Employee> getAllEmployees();
    public Employee getEmployeeById(Long id);
    public boolean addEmployee(Employee employeeModel);
    public boolean deleteEmployee(Long id);
    public boolean updateEmployee(Long id, Employee employeeModel);
    public List<Employee> findByFirstnameContaining(String firstname);
    public List<Employee> findByDesignation(String designation);

    }
