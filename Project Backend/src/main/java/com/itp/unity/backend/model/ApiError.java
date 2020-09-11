package com.itp.unity.backend.model;

import org.springframework.http.HttpStatus;

import java.util.Arrays;
import java.util.List;

public class ApiError {

    private HttpStatus status;
    private String message;
    private List<String> errors;

    public ApiError(HttpStatus status, List<String> errors,String message) {
        super();
        this.status = status;
        this.errors = errors;
		this.message = message;
    }

	public ApiError(HttpStatus status,String error, String message) {
		super();
		this.status = status;
		this.message = message;
		errors = Arrays.asList(error);
	}

	public ApiError(HttpStatus status, List<String> errors) {
		super();
		this.status = status;
		this.errors = errors;
	}

//	public ApiError(HttpStatus badRequest, List<String> errors, String localizedMessage) {
//	}

	/**
	 * @return the status
	 */
	public HttpStatus getStatus() {
		return status;
	}

	/**
	 * @param status the status to set
	 */
	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	/**
	 * @return the message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @param message the message to set
	 */
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * @return the errors
	 */
	public List<String> getErrors() {
		return errors;
	}

	/**
	 * @param errors the errors to set
	 */
	public void setErrors(List<String> errors) {
		this.errors = errors;
	}
}
