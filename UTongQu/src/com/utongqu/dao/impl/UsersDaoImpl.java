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
	public boolean register(Users user) {
		// TODO Auto-generated method stub
		Transaction tx=null;
		try{
			Session session=MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			tx=session.beginTransaction();
			session.save(user);
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
	public int findUserName(String username) {
		Transaction transaction=null;
		System.out.println("userdao:"+username);
		try {
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "select count(username) from Users where username =?";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			query.setParameter(0, username);
			int size=(int)(long)query.uniqueResult();
			transaction.commit();
			return size;
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}finally{
			if (transaction != null) {
				transaction = null;
			}
		}

	}

	@Override
	public int updateUserBasicInfo(int gender, String birthday, String address,
			String job,String username) {
		Transaction transaction=null;
		try {
			System.out.println(username);
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "update Users u set u.gender=?,u.birthday=?,u.address=?,u.job=? where u.username=?";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			query.setParameter(0, gender);
			query.setParameter(1, birthday);
			query.setParameter(2, address);
			query.setParameter(3, job);
			query.setParameter(4, username);
			int iRet=query.executeUpdate();
			transaction.commit();
			return iRet;
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}finally{
			if (transaction != null) {
				transaction = null;
			}
		}
	}

	@Override
	public List<Users> findUsersByUsername(String username) {
		Transaction transaction=null;
		System.out.println("userdao:"+username);
		try {
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "from Users where username =?";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			query.setParameter(0, username);
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
	public int updateUserFace(String face, String username) {
		Transaction transaction=null;
		try {
			System.out.println(username);
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "update Users u set u.face=? where u.username=?";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			query.setParameter(0, face);
			query.setParameter(1, username);
			int iRet=query.executeUpdate();
			transaction.commit();
			return iRet;
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}finally{
			if (transaction != null) {
				transaction = null;
			}
		}
	}

	@Override
	public int updateUserPassword(String password, String username) {
		Transaction transaction=null;
		try {
			System.out.println(username);
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "update Users u set u.password=? where u.username=?";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			query.setParameter(0, password);
			query.setParameter(1, username);
			int iRet=query.executeUpdate();
			transaction.commit();
			return iRet;
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}finally{
			if (transaction != null) {
				transaction = null;
			}
		}
	}

	@Override
	public int findUserPassword(String password, String username) {
		Transaction transaction=null;
		try {
			Session session = MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
			String hql =  "select count(password) from Users where username =? and password=?";
			transaction = session.beginTransaction();
			Query query = session.createQuery(hql);
			query.setParameter(0, username);
			query.setParameter(1, password);
			int size=(int)(long)query.uniqueResult();
			transaction.commit();
			return size;
		} catch (Exception e) {
			e.printStackTrace();
			return -1;
		}finally{
			if (transaction != null) {
				transaction = null;
			}
		}
	}

	
	
	
}
