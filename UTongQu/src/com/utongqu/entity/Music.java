package com.utongqu.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity                                      //音乐表/暂时忽略
public class Music {

	private int musicID;                    //music id
	private String musicOldName;            //music old name
	private String musicNewName;            //music new name
	private String musicImg;                //music head
	private String musicSinger;             //music singer
	private Date uploadTime;                //upload Time

	//Getters and Setters
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getMusicID() {
		return musicID;
	}
	public void setMusicID(int musicID) {
		this.musicID = musicID;
	}
	public String getMusicOldName() {
		return musicOldName;
	}
	public void setMusicOldName(String musicOldName) {
		this.musicOldName = musicOldName;
	}
	public String getMusicNewName() {
		return musicNewName;
	}
	public void setMusicNewName(String musicNewName) {
		this.musicNewName = musicNewName;
	}
	public String getMusicImg() {
		return musicImg;
	}
	public void setMusicImg(String musicImg) {
		this.musicImg = musicImg;
	}
	public String getMusicSinger() {
		return musicSinger;
	}
	public void setMusicSinger(String musicSinger) {
		this.musicSinger = musicSinger;
	}
	public Date getUploadTime() {
		return uploadTime;
	}
	public void setUploadTime(Date uploadTime) {
		this.uploadTime = uploadTime;
	}
	
	//空构造方法
	public Music(){
		
	}
	//带全属性构造方法
	public Music(int musicID, String musicOldName, String musicNewName,
			String musicImg, String musicSinger, Date uploadTime) {
		super();
		this.musicID = musicID;
		this.musicOldName = musicOldName;
		this.musicNewName = musicNewName;
		this.musicImg = musicImg;
		this.musicSinger = musicSinger;
		this.uploadTime = uploadTime;
	}
	//toString方法
	@Override
	public String toString() {
		return "Music [musicID=" + musicID + ", musicOldName=" + musicOldName
				+ ", musicNewName=" + musicNewName + ", musicImg=" + musicImg
				+ ", musicSinger=" + musicSinger + ", uploadTime=" + uploadTime
				+ "]";
	}
	
		
}
