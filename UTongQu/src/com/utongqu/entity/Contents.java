package com.utongqu.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity                                  //内容表
public class Contents {

	private int contentID;               //内容的id
	//private int contentUID;              //发布内容的用户的id
	private String contentUser;          //发布内容的用户
	private String image;                //内容附带的image;
	private String content;              //内容 
	private Date contentDate;            //发布内容的时间
     
	//非数据表字段
	private String contentUserFace;       //发表内容的用户的头像
	private int like;                     //统计喜欢的人数
	private int dislike;                  //统计不喜欢的人数
	private int comment;                  //统计评论的人数
	private String strDate;            //发布内容的时间
	@Transient
	public String getContentUserFace() {
		return contentUserFace;
	}
	public void setContentUserFace(String contentUserFace) {
		this.contentUserFace = contentUserFace;
	}
	@Transient
	public int getLike() {
		return like;
	}
	public void setLike(int like) {
		this.like = like;
	}
	@Transient
	public int getDislike() {
		return dislike;
	}
	public void setDislike(int dislike) {
		this.dislike = dislike;
	}
	public int getComment() {
		return comment;
	}
	public void setComment(int comment) {
		this.comment = comment;
	}
	//Getters and Setters
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getContentID() {
		return contentID;
	}
	public void setContentID(int contentID) {
		this.contentID = contentID;
	}
	public String getContentUser() {
		return contentUser;
	}
	public void setContentUser(String contentUser) {
		this.contentUser = contentUser;
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
	public Date getContentDate() {
		return contentDate;
	}
	public void setContentDate(Date contentDate) {
		this.contentDate = contentDate;
	}
	public String getStrDate() {
		return strDate;
	}
	public void setStrDate(String strDate) {
		this.strDate = strDate;
	}
	//空构造方法
	public Contents(){
		
	}
	//带全属性构造方法
	public Contents(int contentID, String contentUser, String image,
			String content, Date contentDate) {
		super();
		this.contentID = contentID;
		this.contentUser = contentUser;
		this.image = image;
		this.content = content;
		this.contentDate = contentDate;
	}
	//toString方法
	@Override
	public String toString() {
		return "Contents [contentID=" + contentID + ", contentUser="
				+ contentUser + ", image=" + image + ", content=" + content
				+ ", contentDate=" + contentDate + "]";
	}
	
	
	
	
}
