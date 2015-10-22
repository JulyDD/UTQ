package com.utongqu.db;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.hibernate.tool.hbm2ddl.SchemaExport;
import org.junit.Test;

import com.utongqu.entity.Users;
import com.utongqu.util.MD5;


public class TestMyHibernateSessionFactory {

	private static SessionFactory sessionFactory;

	@Test
	public void testSchemaExport(){
		//创建配置对象
		Configuration cfg = new Configuration().configure();
		
		StandardServiceRegistryBuilder standardServiceRegistryBuilder =
				new StandardServiceRegistryBuilder().applySettings(cfg.getProperties());
		
		StandardServiceRegistry standardServiceRegistry = standardServiceRegistryBuilder.build();
		
		sessionFactory = cfg.buildSessionFactory(standardServiceRegistry);
		//创建session对象
		Session session=sessionFactory.getCurrentSession();
		//创建SchemaExport对象
		SchemaExport export=new SchemaExport(cfg);
		
		export.create(true,true);
	}
	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd : HH:mm:ss");
	SimpleDateFormat bir=new SimpleDateFormat("yyyy-MM-dd");
	Date date=new Date();
	@Test
	public void testSaveUsers(){
		Session session=MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
		session.beginTransaction();
		Users u1=new Users();
		u1.setUid(1);
		u1.setUsername("test");
		u1.setPassword(MD5.getPassMD5("111111"));
		u1.setJoinDate(sdf.format(date));
		u1.setBirthday(bir.format(date));
		u1.setGender(-1);
		u1.setFace("2.jpg");	
		
		Users u2=new Users(2, "zhangsan", MD5.getPassMD5("111111"), "111.jpg", 0, bir.format(date), "不知道", "不知道", "123@qq.com", sdf.format(date), sdf.format(date),sdf.format(date), "你是谁", "我是我");
		Users u3=new Users(3, "july",MD5.getPassMD5("111111") , "1.jpg", 0, bir.format(date), "不知道", "不知道", "231@qq.com", sdf.format(date), sdf.format(date),sdf.format(date), "你是谁", "我是我");
		session.save(u1);
		session.save(u2);
		session.save(u3);
		session.getTransaction().commit();
	}
	

}
