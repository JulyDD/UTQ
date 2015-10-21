package com.utongqu.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import net.sf.json.JSONArray;

import com.utongqu.dao.ContentsDao;
import com.utongqu.dao.UsersDao;
import com.utongqu.dao.impl.ContentsDaoImpl;
import com.utongqu.dao.impl.UsersDaoImpl;
import com.utongqu.entity.Contents;
import com.utongqu.entity.Users;

public class ContentsAction extends SuperAction {

	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd : HH:mm:ss");//时间格式化
	private Contents content;

	public Contents getContent() {
		return content;
	}
	public void setContent(Contents content) {
		this.content = content;
	}
    //写内容
	public String addContent() throws Exception{
		response.setContentType("text/html;charset=UTF-8");
		String responseStr = "";
		String contentUser=request.getParameter("contentUser");
		String image=request.getParameter("image");
		String content=request.getParameter("contents");
		System.out.println(contentUser);
		System.out.println(image);
		System.out.println(content);
		try{
			if(image.equals("undefined")){
				responseStr ="{\"msg\":\"发张图片呗\"}";
			}else if(content.equals(null)&&"".equals(content)){
				responseStr ="{\"msg\":\"说点什么呗\"}";
			}else{
				Date date=new Date();
				//时间日期格式化
				SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd : HH:mm:ss");
				Contents c=new Contents();
				c.setContentUser(contentUser);
				c.setImage(image);
				c.setContent(content);
				c.setContentDate(sdf.format(date));
				ContentsDao cdao=new ContentsDaoImpl();
				boolean bRet=cdao.addContent(c);
				if(bRet){
					
					responseStr ="{\"msg\":\"写成功了哦\"}";
				}else{
					responseStr ="{\"msg\":\"写失败了哦\"}";
				}
			}
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		response.getWriter().print(responseStr);
		return null;
	}
	
	
	String data="{\"data\":[{\"img\":\"0\",\"content\":\"1\",\"title\":\"2\",\"headpic\":\"3\",\"person\":\"4\",\"time\":\"5\",\"like\":\"6\",\"dislike\":\"7\",\"comment\":\"8\"}]}";
	
	//获取内容
	public String findAllContents() throws Exception{
		response.setContentType("text/html;charset=UTF-8");
		String responseStr = "";
		try{
			ContentsDao cdao=new ContentsDaoImpl();
			List<Contents> contentList=cdao.findContents();
			for(int i=0;i<contentList.size();i++){
				UsersDao udao=new UsersDaoImpl();
				String face=udao.findFaceByUserName(contentList.get(i).getContentUser());
				System.out.println(face);
		        contentList.get(i).setContentUserFace(face);
		        contentList.get(i).setDislike(0);
		        contentList.get(i).setLike(0);
		        contentList.get(i).setComment(0);
			}
			
			
			JSONArray jsonArray = JSONArray.fromObject(contentList);
			String jsonData=jsonArray.toString();
			responseStr="{\"data\":"+jsonData+"}";
			System.out.println(responseStr);
		}catch(Exception ex){
			ex.printStackTrace();
		}
		response.getWriter().print(responseStr);
		return null;
	}
	
}
