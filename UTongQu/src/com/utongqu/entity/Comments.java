package com.utongqu.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                                //评论表
public class Comments {

	private int commentID;             //评论id
	private int ContentID;             //所属内容id
	private int commentUID;            //评论人id
	private String comment;            //评论内容 
	private String commentDate;          //评论时间
	private boolean like;              //是否喜欢
	private boolean dislike;           //是否不喜欢

	//Getters and Setters
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getCommentID() {
		return commentID;
	}
	public void setCommentID(int commentID) {
		this.commentID = commentID;
	}
	public int getContentID() {
		return ContentID;
	}
	public void setContentID(int contentID) {
		ContentID = contentID;
	}
	public int getCommentUID() {
		return commentUID;
	}
	public void setCommentUID(int commentUID) {
		this.commentUID = commentUID;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getCommentDate() {
		return commentDate;
	}
	public void setCommentDate(String commentDate) {
		this.commentDate = commentDate;
	}
	public boolean isLike() {
		return like;
	}
	public void setLike(boolean like) {
		this.like = like;
	}
	public boolean isDislike() {
		return dislike;
	}
	public void setDislike(boolean dislike) {
		this.dislike = dislike;
	}
	
	//空构造方法
	public Comments(){
		
	}
	//带全属性构造方法
	public Comments(int commentID, int contentID, int commentUID,
			String comment, String commentDate, boolean like, boolean dislike) {
		super();
		this.commentID = commentID;
		ContentID = contentID;
		this.commentUID = commentUID;
		this.comment = comment;
		this.commentDate = commentDate;
		this.like = like;
		this.dislike = dislike;
	}
	//toString方法
	@Override
	public String toString() {
		return "Comments [commentID=" + commentID + ", ContentID=" + ContentID
				+ ", commentUID=" + commentUID + ", comment=" + comment
				+ ", commentDate=" + commentDate + ", like=" + like
				+ ", dislike=" + dislike + "]";
	}
	
	
	
	
}
