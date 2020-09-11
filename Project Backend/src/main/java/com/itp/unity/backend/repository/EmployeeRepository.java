package com.itp.unity.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.itp.unity.backend.domain.Employee;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByFirstnameContaining(String firstname);
    List<Employee> findByDesignation(String designation);

}
