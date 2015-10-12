package com.utongqu.db;

import static org.junit.Assert.*;

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
	
	@Test
	public void testSaveUsers(){
		Session session=MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
		session.beginTransaction();
		Users u1=new Users();
		u1.setUid(2);
		u1.setUsername("test");
		u1.setPassword("111111");
		u1.setJoinDate(new Date());
		u1.setBirthday(new Date());
		u1.setGender(-1);
		u1.setFace("1"+new Date()+".jpg");		
		session.save(u1);
		session.getTransaction().commit();
	}
	

}
