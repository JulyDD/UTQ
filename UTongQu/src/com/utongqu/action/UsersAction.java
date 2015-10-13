package com.utongqu.action;

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
	
	
	
}
