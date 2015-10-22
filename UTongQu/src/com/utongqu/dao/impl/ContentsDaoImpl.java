package com.utongqu.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.utongqu.dao.ContentsDao;
import com.utongqu.db.MyHibernateSessionFactory;
import com.utongqu.entity.Contents;
import com.utongqu.entity.Users;

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

	@Override
	public List<Contents> findContents() {
		Transaction transaction=null;
		try {
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "from Contents order by contentDate desc";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			List<Contents> list= query.list();
			transaction.commit();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}finally{
			if (transaction != null) {
				transaction = null;
			}
		}
	}

	

}
