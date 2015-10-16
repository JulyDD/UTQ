package com.utongqu.dao;

import java.util.List;

import com.utongqu.entity.Users;

public interface UsersDao {

	//用户登录  & 资料查找
	public List<Users> login(String username,String password);   
	//用户注册
	public boolean register(Users user);
	//查找用户名是否存在
	public int findUserName(String username);
	//修改基本资料
	public int updateUserBasicInfo(int gender,String birthday,String address,String job,String username);
	
}
