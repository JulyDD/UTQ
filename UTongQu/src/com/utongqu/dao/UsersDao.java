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
	//查找用户by用户名
	public List<Users> findUsersByUsername(String username);
	//修改头像
	public int updateUserFace(String face,String username);
	//修改密码
	public int updateUserPassword(String password,String username);
	//修改密码前先核对密码
	public int findUserPassword(String password,String username);
	
}
