package com.itp.unity.backend.domain;

import javax.persistence.*;

import javax.validation.constraints.*;

@Entity
@Table(name = "employees")
@SequenceGenerator(name="seq_emp_id", initialValue=2500, allocationSize=5000)
public class Employee {

	@Id
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_emp_id")
	private long id;

	@NotNull
	@NotEmpty(message = "First name is required")
	@Column(name = "first_name")
	private String firstname;


	@NotNull
	@NotEmpty(message = "Last name is required")
	@Column(name = "last_name")
	private String lastname;

	@NotNull
	@NotEmpty(message = "Email is required")
	@Email(message = "Email is invalid")
	@Column(name = "email")
	private String email;

	@Column(name = "address")
	private String address;

	//@Pattern(regexp = "^[0-3][0-9]/[0-3][0-9]/(?:[0-9][0-9])?[0-9][0-9]$",message="Date input is invalid for a birth date")
	@Column(name = "date_of_birth")
	private String dob;

	@Pattern(regexp="^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$",message="Mobile number is invalid")
	@Column(name = "phone_number")
	private String mobile;

	@Column(name = "gender")
	private String gender;

	@NotNull
	@Column(name = "designation")
	private String designation;

	@NotNull
	@NotEmpty(message = "Username is required")
	@Size(min=2, max=15)
	@Column(name = "username")
	private String username;

	@Column(name = "qualification")
	private String qualification;

	@Column(name = "appointment_fee")
	private int appointfee;

	@Column(name = "basic_salary")
	private int bsalary;

	//@Pattern(regexp="\"^(?=.*\\\\d).{4,8}$\"",message="Password is invalid")
	@Column(name = "password")
	private String password;


	public Employee() {
		super();
	}


	/**
	 * @param id
	 * @param firstname
	 * @param lastname
	 * @param email
	 * @param address
	 * @param dob
	 * @param mobile
	 * @param gender
	 * @param designation
	 * @param username
	 * @param qualification
	 * @param appointfee
	 * @param bsalary
	 * @param password
	 */
	public Employee(long id, String firstname, String lastname, String email, String address, String dob, String mobile,
					String gender, String designation, String username, String qualification, int appointfee, int bsalary,
					String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.address = address;
		this.dob = dob;
		this.mobile = mobile;
		this.gender = gender;
		this.designation = designation;
		this.username = username;
		this.qualification = qualification;
		this.appointfee = appointfee;
		this.bsalary = bsalary;
		this.password = password;
	}


	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}


	/**
	 * @param id the id to set
	 */
	public void setId(long id) {
		this.id = id;
	}


	/**
	 * @return the firstname
	 */
	public String getFirstname() {
		return firstname;
	}


	/**
	 * @param firstname the firstname to set
	 */
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	/**
	 * @return the lastname
	 */
	public String getLastname() {
		return lastname;
	}


	/**
	 * @param lastname the lastname to set
	 */
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}


	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}


	/**
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}


	/**
	 * @param address the address to set
	 */
	public void setAddress(String address) {
		this.address = address;
	}


	/**
	 * @return the dob
	 */
	public String getDob() {
		return dob;
	}


	/**
	 * @param dob the dob to set
	 */
	public void setDob(String dob) {
		this.dob = dob;
	}


	/**
	 * @return the mobile
	 */
	public String getMobile() {
		return mobile;
	}


	/**
	 * @param mobile the mobile to set
	 */
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	/**
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}


	/**
	 * @param gender the gender to set
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}


	/**
	 * @return the designation
	 */
	public String getDesignation() {
		return designation;
	}


	/**
	 * @param designation the designation to set
	 */
	public void setDesignation(String designation) {
		this.designation = designation;
	}


	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}


	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}


	/**
	 * @return the qualification
	 */
	public String getQualification() {
		return qualification;
	}


	/**
	 * @param qualification the qualification to set
	 */
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	/**
	 * @return the appointfee
	 */
	public int getAppointfee() {
		return appointfee;
	}


	/**
	 * @param appointfee the appointfee to set
	 */
	public void setAppointfee(int appointfee) {
		this.appointfee = appointfee;
	}


	/**
	 * @return the bsalary
	 */
	public int getBsalary() {
		return bsalary;
	}


	/**
	 * @param bsalary the bsalary to set
	 */
	public void setBsalary(int bsalary) {
		this.bsalary = bsalary;
	}


	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}


	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}



}
