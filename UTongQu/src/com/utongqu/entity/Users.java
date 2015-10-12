package com.utongqu.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                           //用户表
public class Users {
 
	private int uid;              //user id  
	private String username;      //user login-name
	private String password;      //user login-password
	private String face;          //user face-image
	private int gender;           //user sex
	private Date birthday;        //user birthday / age
	private String address;       //user address
	private String job;           //user job
	private String email;         //user email
	private Date joinDate;        //user joinDate
	private Date lastLoginDate;   //user last login date
	private String question;      //密保问题
	private String answer;        //密保答案
	
	//Getters and Setters
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFace() {
		return face;
	}
	public void setFace(String face) {
		this.face = face;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public Date getLastLoginDate() {
		return lastLoginDate;
	}
	public void setLastLoginDate(Date lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
	}
	
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	//空构造方法
	public Users(){
		
	}
	//带全属性构造方法
	public Users(int uid, String username, String password, String face,
			int gender, Date birthday, String address, String job,
			String email, Date lastLoginDate, Date joinDate, String question,
			String answer) {
		super();
		this.uid = uid;
		this.username = username;
		this.password = password;
		this.face = face;
		this.gender = gender;
		this.birthday = birthday;
		this.address = address;
		this.job = job;
		this.email = email;
		this.lastLoginDate = lastLoginDate;
		this.joinDate = joinDate;
		this.question = question;
		this.answer = answer;
	}
	
	//toString 方法
	@Override
	public String toString() {
		return "Users [uid=" + uid + ", username=" + username + ", password="
				+ password + ", face=" + face + ", gender=" + gender
				+ ", birthday=" + birthday + ", address=" + address + ", job="
				+ job + ", email=" + email + ", lastLoginDate=" + lastLoginDate
				+ ", joinDate=" + joinDate + ", question=" + question
				+ ", answer=" + answer + "]";
	}
	
	
		
	
	
	
	
	
	
	
}
