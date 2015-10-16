package com.utongqu.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                                  //内容表
public class Contents {

	private int contentID;               //内容的id
	private int contentUID;              //发布内容的用户的id
	private String image;                //内容附带的image;
	private String content;              //内容 
	private String contentDate;            //发布内容的时间

	//Getters and Setters
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getContentID() {
		return contentID;
	}
	public void setContentID(int contentID) {
		this.contentID = contentID;
	}
	public int getContentUID() {
		return contentUID;
	}
	public void setContentUID(int contentUID) {
		this.contentUID = contentUID;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getContentDate() {
		return contentDate;
	}
	public void setContentDate(String contentDate) {
		this.contentDate = contentDate;
	}
	//空构造方法
	public Contents(){
		
	}
	//带全属性构造方法
	public Contents(int contentID, int contentUID, String image,
			String content, String contentDate) {
		super();
		this.contentID = contentID;
		this.contentUID = contentUID;
		this.image = image;
		this.content = content;
		this.contentDate = contentDate;
	}
	@Override
	public String toString() {
		return "Contents [contentID=" + contentID + ", contentUID="
				+ contentUID + ", image=" + image + ", content=" + content
				+ ", contentDate=" + contentDate + "]";
	}
	
	//toString方法
	
	
	
	
}
