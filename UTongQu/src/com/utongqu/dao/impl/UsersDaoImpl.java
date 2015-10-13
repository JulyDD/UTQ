package com.utongqu.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.utongqu.dao.UsersDao;
import com.utongqu.db.MyHibernateSessionFactory;
import com.utongqu.entity.Users;


public class UsersDaoImpl implements UsersDao {

	@Override
	public List<Users> login(String username, String password) {
		Transaction transaction=null;
		System.out.println("userdao:"+username);
		try {
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "from Users where username =?  and password =?";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			query.setParameter(0, username);
			query.setParameter(1, password);
			List<Users> list= query.list();
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

	@Override
	public int register(String username, String password) {
		// TODO Auto-generated method stub
		return 0;
	}

	/*@Override
	public List<Users> findUser(String username) {
		// TODO Auto-generated method stub
		Transaction tx=null;
		List<Users> list=null;
		String hql="";
		try{
			Session session=MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			tx=session.beginTransaction();
			hql="from Users where username =?";
			Query q=session.createQuery(hql);
			q.setParameter(0,username);
			list =q.list();
			tx.commit();
			return list;
		}catch(Exception ex){
			ex.printStackTrace();
			tx.commit();
			return list;
		}finally{
			if(tx!=null){
				tx=null;
			}
		}
	}*/

	

}
