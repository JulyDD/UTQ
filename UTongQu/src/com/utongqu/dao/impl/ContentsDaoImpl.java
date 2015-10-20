package com.utongqu.dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.utongqu.dao.ContentsDao;
import com.utongqu.db.MyHibernateSessionFactory;
import com.utongqu.entity.Contents;

public class ContentsDaoImpl implements ContentsDao {

	@Override
	public boolean addContent(Contents content) {
		Transaction tx=null;
		try{
			Session session=MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			tx=session.beginTransaction();
			session.save(content);
			tx.commit();
			return true;
		}catch(Exception ex){
			ex.printStackTrace();
			tx.commit();
			return false;
		}finally{
			if(tx!=null){
				tx=null;
			}
		}
	}

	

}
