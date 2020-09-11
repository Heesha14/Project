package com.itp.unity.backend.model;

public class ResponseModel {

    private int message_code;
    private String message;
    private Object obj;

    public ResponseModel(int message_code, String message, Object obj) {
        super();
        this.message_code = message_code;
        this.message = message;
        this.obj = obj;
    }

    public int getMessage_code() {
        return message_code;
    }
    public void setMessage_code(int message_code) {
        this.message_code = message_code;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public Object getObj() {
        return obj;
    }
    public void setObj(Object obj) {
        this.obj = obj;
    }



}
