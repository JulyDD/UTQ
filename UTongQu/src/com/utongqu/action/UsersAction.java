package com.utongqu.action;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.struts2.interceptor.validation.SkipValidation;

import com.utongqu.dao.UsersDao;
import com.utongqu.dao.impl.UsersDaoImpl;
import com.utongqu.entity.Users;


public class UsersAction extends SuperAction  {

	private Users users;
	public Users getUsers() {
		return users;
	}
	public void setUsers(Users users) {
		this.users = users;
	}
	
	//用户登录Action
	public String login(){
		UsersDao udao=new UsersDaoImpl();
		//System.out.println("Action:"+users.getUsername());
		List<Users> userinfo=udao.login(users.getUsername() , users.getPassword() );
		System.out.println(userinfo);
		if(userinfo.size()>0){
			session.setAttribute("userinfo", userinfo);
			System.out.println("完毕cg-----");
			return SUCCESS;
			
			}else{
				System.out.println("完毕sb-----");
				 return LOGIN; 
				}
	}
	
	//用户注销action
	@SkipValidation
	public String loginout(){
		System.out.println("action:begin");
		if(session.getAttribute("userinfo")!=null){
			System.out.println("action:ok");
			session.removeAttribute("userinfo");
		}
		return "loginout_success";
	}
	
	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd : HH:mm:ss");
	//SimpleDateFormat bir=new SimpleDateFormat("yyyy-MM-dd");
	Date date=new Date();
	//保存注册用户并补充部分资料Action
	public String register() throws Exception{
		System.out.println(users.getPasswordConfirmation());
		System.out.println(users.getPassword());
		UsersDao udao=new UsersDaoImpl();
		int size=udao.findUserName(users.getUsername());
		System.out.println(size);
		if(1>size){
			if(users.getPassword().equals(users.getPasswordConfirmation())){
				users.setJoinDate(sdf.format(date));
				users.setLastLoginDate(sdf.format(date));
				users.setFace("head-one.jpg");
				boolean bRet=udao.register(users);
				if(bRet){
					List<Users> usersinfo=new ArrayList<Users>();
					usersinfo.add(users);
					session.setAttribute("userinfo", usersinfo);
				}
	        }
		}
         return "register";  
	}
	
	public String namereg="^[0-9a-zA-Z]{4,16}$";
	//判断用户是否存在
	public String findUserName() throws Exception {	       
		String username = request.getParameter("username");
		System.out.println(username);
		response.setContentType("text/html;charset=UTF-8");
		String responseStr = "";
		System.out.println(namereg.matches(username));
		if(username.matches(namereg)){
			UsersDao udao=new UsersDaoImpl();
			int size=udao.findUserName(username);
			System.out.println(size);
			if (0<size) {
				responseStr ="{'msg':'该用户名已经被注册了哦','iRet':'-1'}";
			} else {
				responseStr ="{'msg':'该用户名可以用哦','iRet':'1'}";
			}
			response.getWriter().print(responseStr);
			return null;
		}else{
			responseStr ="{'msg':'用户名须为4—16位的英文字母或数字','iRet':'0'}";
		}
		response.getWriter().print(responseStr);
		return null;
	} 
	
	//进入写童趣页面
	public String enterTheWritingPage(){
		return "WritingPage";
	}
	
	//进入账户设置页面
	public String enterTheToolsPage(){
		return "toolsPage";
	}
	
	//修改用户基本资料
	public String updateUserBasicInfo() throws Exception{
		String username = request.getParameter("username");
		int gender =Integer.parseInt(request.getParameter("gender"));
		String birthday = request.getParameter("birthday");
		String address = request.getParameter("address");
		String job = request.getParameter("job");
		UsersDao udao=new UsersDaoImpl();
		String responseStr = "";
		int iRet=udao.updateUserBasicInfo(gender, birthday, address, job, username);
		if (0<iRet) {
			responseStr ="{'msg':'修改成功'}";
		} else {
			responseStr ="{'msg':'未能修改'}";
		}
		response.getWriter().print(responseStr);
		return null;
	}
	

}

