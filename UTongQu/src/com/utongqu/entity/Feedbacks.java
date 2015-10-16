package com.utongqu.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                                  //反馈&处理表
public class Feedbacks {

	private int fid;                     //反馈id
	private int feedbackUID;             //反馈者id
	private String feedbackContent;      //反馈内容
	private String feedbackDate;           //反馈日期
	private int processingMID;           //处理者id
	private String processingContent;    //处理内容
	private String processingDate;         //处理时间

	//Getters and Setters
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getFid() {
		return fid;
	}
	public void setFid(int fid) {
		this.fid = fid;
	}
	public int getFeedbackUID() {
		return feedbackUID;
	}
	public void setFeedbackUID(int feedbackUID) {
		this.feedbackUID = feedbackUID;
	}
	public String getFeedbackContent() {
		return feedbackContent;
	}
	public void setFeedbackContent(String feedbackContent) {
		this.feedbackContent = feedbackContent;
	}
	public String getFeedbackDate() {
		return feedbackDate;
	}
	public void setFeedbackDate(String feedbackDate) {
		this.feedbackDate = feedbackDate;
	}
	public int getProcessingMID() {
		return processingMID;
	}
	public void setProcessingMID(int processingMID) {
		this.processingMID = processingMID;
	}
	public String getProcessingContent() {
		return processingContent;
	}
	public void setProcessingContent(String processingContent) {
		this.processingContent = processingContent;
	}
	public String getProcessingDate() {
		return processingDate;
	}
	public void setProcessingDate(String processingDate) {
		this.processingDate = processingDate;
	}
	
	//空构造方法
    public Feedbacks(){
    	
    }	
    //带全属性构造方法
	public Feedbacks(int fid, int feedbackUID, String feedbackContent,
			String feedbackDate, int processingMID, String processingContent,
			String processingDate) {
		super();
		this.fid = fid;
		this.feedbackUID = feedbackUID;
		this.feedbackContent = feedbackContent;
		this.feedbackDate = feedbackDate;
		this.processingMID = processingMID;
		this.processingContent = processingContent;
		this.processingDate = processingDate;
	}
    //toString方法
	@Override
	public String toString() {
		return "Feedbacks [fid=" + fid + ", feedbackUID=" + feedbackUID
				+ ", feedbackContent=" + feedbackContent + ", feedbackDate="
				+ feedbackDate + ", processingMID=" + processingMID
				+ ", processingContent=" + processingContent
				+ ", processingDate=" + processingDate + "]";
	}
	
	
	
	
}
