package com.utong.dao.impl;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.*;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.utongqu.dao.UsersDao;
import com.utongqu.dao.impl.UsersDaoImpl;
import com.utongqu.db.MyHibernateSessionFactory;
import com.utongqu.entity.Users;


public class TestUsersDaoImpl {

private static SessionFactory sf;
	
	@BeforeClass
	public static void beforeClass() {
		sf =MyHibernateSessionFactory.getsSessionFactory() ;
	}
	@AfterClass
	public static void afterClass() {
		sf.close();
	}
	/*@Test
	public void testUsersLogin() {
		Users u=new Users();
		u.setUid(3);
		u.setUsername("july");
		u.setPassword("111111");
		UsersDao udao=new UsersDaoImpl();
		assertThat(udao.login(u.getUsername(),u.getPassword()),is(1));
	}*/
	
	@Test
	public void testFindUserName(){
	     UsersDao udao=new UsersDaoImpl();
	     int size=udao.findUserName("july1");
	     System.out.println(size);
	}

}
