package com.utongqu.action;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.utongqu.dao.ContentsDao;
import com.utongqu.dao.impl.ContentsDaoImpl;
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

	public String addContent() throws Exception{
		response.setContentType("text/html;charset=UTF-8");
		String responseStr = "";
		int uid=Integer.parseInt(request.getParameter("uid"));
		String image=request.getParameter("image");
		String content=request.getParameter("contents");
		System.out.println(uid);
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
				c.setContentUID(uid);
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
	
}
