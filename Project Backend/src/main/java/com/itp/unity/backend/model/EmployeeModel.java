package com.itp.unity.backend.model;

public class EmployeeModel {
	
	private long id;
	
	private String firstname;

	private String lastname;
	
	private String email;
	
	private String address;
	
	private String dob;
	
	private String mobile;
	
	private String gender;
	
	private String designation;
	
	private String username;
	
	private String qualification;
	
	private int appointfee;
	
	private int bsalary;
	
	private String password;

	
	public EmployeeModel() {
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
	public EmployeeModel(long id, String firstname, String lastname, String email, String address, String dob,
			String mobile, String gender, String designation, String username, String qualification, int appointfee,
			int bsalary, String password) {
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


	@Override
	public String toString() {
		return "EmployeeModel [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", email=" + email
				+ ", address=" + address + ", dob=" + dob + ", mobile=" + mobile + ", gender=" + gender
				+ ", designation=" + designation + ", username=" + username + ", qualification=" + qualification
				+ ", appointfee=" + appointfee + ", bsalary=" + bsalary + ", password=" + password + "]";
	}
	
}
