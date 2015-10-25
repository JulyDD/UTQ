package com.utongqu.dao.impl;

import java.util.List;

import org.hibernate.Query;
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

	/**
     * 通过hql语句得到数据库中记录总数
     */
    @Override
    public int getAllRowCount(String hql)
    {
       Session session=MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
       Transaction tx = null;
        int allRows = 0;
        try
        {
            tx = session.beginTransaction();
            
            Query query = session.createQuery(hql);
            
            allRows = query.list().size();
            
            tx.commit();
            
        }
        catch (Exception e)
        {
            if(tx != null)
            {
                tx.rollback();
            }
            
            e.printStackTrace();
        }
        finally
        {
        	if(tx!=null){
				tx=null;
			}
        }
        
        return allRows;
    }
    /**
     * 使用hibernate提供的分页功能，得到分页显示的数据
     */
    @SuppressWarnings("unchecked")
    @Override
    public List<Contents> queryByPage(String hql, int offset, int pageSize)
    {
    	Session session=MyHibernateSessionFactory.getsSessionFactory().getCurrentSession();
        Transaction tx = null;
        List<Contents> list = null;
        
        try
        {
            tx = session.beginTransaction();
            
            Query query = session.createQuery(hql).setFirstResult(offset).setMaxResults(pageSize);
            
            list = query.list();
            
            tx.commit();
            
        }
        catch (Exception e)
        {
            if(tx != null)
            {
                tx.rollback();
            }
            
            e.printStackTrace();
        }
        finally
        {
        	if(tx!=null){
				tx=null;
			}
        }
        
        
        return list;
    }

}
