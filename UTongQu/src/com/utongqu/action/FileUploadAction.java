package com.utongqu.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import com.utongqu.dao.UsersDao;
import com.utongqu.dao.impl.UsersDaoImpl;
import com.utongqu.entity.Users;

public class FileUploadAction extends SuperAction {

	private File upload;                  //用来封装上传的文件    bug? 似乎只能为upload
	private String uploadFileContentType;     //用来封装上传文件的类型
	private String uploadFileName;            //用来封装上传文件的文件名
	private String savePath;                  //动态设置文件上传目录
	private String username;
	//Getter and Setter
	
	public String getUploadFileContentType() {
		return uploadFileContentType;
	}
	public File getUpload() {
		return upload;
	}
	public void setUpload(File upload) {
		this.upload = upload;
	}
	public void setUploadFileContentType(String uploadFileContentType) {
		this.uploadFileContentType = uploadFileContentType;
	}
	public String getUploadFileName() {
		return uploadFileName;
	}
	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}
	public String getSavePath() {
		return savePath;
	}
	public void setSavePath(String savePath) {
		this.savePath = savePath;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String execute() throws Exception{
		response.setContentType("text/html;charset=UTF-8");
		String responseStr = "";
		System.out.println(this.getUsername());
		System.out.println(savePath);
		System.out.println(this.getUploadFileName());
		try{
			if(!new File(savePath).isDirectory())
				new File(savePath).mkdirs();
			InputStream is=new FileInputStream(upload);//文件输入流
			String uploadPath=ServletActionContext.getServletContext().getRealPath(savePath);//设置文件上传目录
			System.out.println(uploadPath);
			File toFile=new File(uploadPath,this.getUploadFileName());//设置目标文件
			OutputStream os=new FileOutputStream(toFile);//创建一个输出流
			byte[] buffer=new byte[1024];//设置缓存
			int length=0;
			//读取uploadFile文件输出到toFile文件中
			while((length=is.read(buffer))>0){    
				os.write(buffer, 0, length);
				
			}
			is.close();//关闭输入流
			os.close();//关闭输出流
			UsersDao udao=new UsersDaoImpl();
			int iRet=udao.updateUserFace(this.getUploadFileName(), username);
			if (iRet>0) {
				List<Users> list=udao.findUsersByUsername(username);
				if(list.size()>0){
					session.setAttribute("userinfo", list);
					responseStr ="{\"msg\":\"更新成功了哦\",\"img\":\""+this.getUploadFileName()+"\"}";
				}else{
					responseStr ="{\"msg\":\"更新失败了哦\",\"img\":\""+this.getUploadFileName()+"\"}";
				}
			} else{
				responseStr ="{\"msg\":\"更新失败了哦\",\"img\":\""+this.getUploadFileName()+"\"}";
			}
		}catch(Exception e){
			e.printStackTrace();
		}
		response.getWriter().print(responseStr);
		return null;
	}
	
}
