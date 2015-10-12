package com.utongqu.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                           //管理员表
public class Managers {

	private int mid;              //manager id
	private String managerName;   //manager login name
	private String password;      //manager login password
	private String email;         //manager email *
	private Date joinDate;        //manager join date
	private int Level;            //manager level
	private String face;          //manager face-image
	private int gender;           //manager sex
	private Date birthday;        //manager birthday / age
	private String address;       //manager address
	private String job;           //manager job
	private Date lastLoginDate; //manager last login date
	private String question;      //密保问题
	private String answer;        //密保答案

	//Getters and Setters
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(Date joinDate) {
		this.joinDate = joinDate;
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
	public Date getLastLoginDate() {
		return lastLoginDate;
	}
	public void setLastLoginDate(Date lastLoginDate) {
		this.lastLoginDate = lastLoginDate;
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
	public int getLevel() {
		return Level;
	}
	public void setLevel(int level) {
		Level = level;
	}
	//空构造方法
	public Managers(){
		
	}
	//带全属性构造方法
	public Managers(int mid, String managerName, String password, String email,
			Date joinDate, int level, String face, int gender, Date birthday,
			String address, String job, Date lastLoginDate, String question,
			String answer) {
		super();
		this.mid = mid;
		this.managerName = managerName;
		this.password = password;
		this.email = email;
		this.joinDate = joinDate;
		Level = level;
		this.face = face;
		this.gender = gender;
		this.birthday = birthday;
		this.address = address;
		this.job = job;
		this.lastLoginDate = lastLoginDate;
		this.question = question;
		this.answer = answer;
	}
	
	
	//toString 方法
	@Override
	public String toString() {
		return "Managers [mid=" + mid + ", managerName=" + managerName
				+ ", password=" + password + ", email=" + email + ", joinDate="
				+ joinDate + ", Level=" + Level + ", face=" + face
				+ ", gender=" + gender + ", birthday=" + birthday
				+ ", address=" + address + ", job=" + job + ", lastLoginDate="
				+ lastLoginDate + ", question=" + question + ", answer="
				+ answer + "]";
	}
	
}
