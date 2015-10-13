package com.utongqu.dao;

import java.util.List;

import com.utongqu.entity.Users;

public interface UsersDao {

	//用户登录
	public List<Users> login(String username,String password);   
	//查询登录用户资料
	/*public List<Users> findUser(String username);*/
	//用户注册
	public int register(String username,String password);
	
	
	
}
