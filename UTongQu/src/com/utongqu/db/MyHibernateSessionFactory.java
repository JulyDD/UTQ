package com.utongqu.db;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;

public class MyHibernateSessionFactory {

	private static SessionFactory sessionFactory;

	// 单例模式
	private MyHibernateSessionFactory() {
	}

	public static SessionFactory getsSessionFactory() {
		if (sessionFactory == null) {
			Configuration cfg = new Configuration().configure();
			
			StandardServiceRegistryBuilder standardServiceRegistryBuilder =
					new StandardServiceRegistryBuilder().applySettings(cfg.getProperties());
			
			StandardServiceRegistry standardServiceRegistry = standardServiceRegistryBuilder.build();
			
			sessionFactory = cfg.buildSessionFactory(standardServiceRegistry);
			return sessionFactory;
		} else {
			return sessionFactory;
		}
	}
	
}
