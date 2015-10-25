package com.utongqu.service.impl;

import java.text.SimpleDateFormat;
import java.util.List;

import com.utongqu.dao.ContentsDao;
import com.utongqu.dao.UsersDao;
import com.utongqu.dao.impl.ContentsDaoImpl;
import com.utongqu.dao.impl.UsersDaoImpl;
import com.utongqu.entity.Contents;
import com.utongqu.entity.PageBean;
import com.utongqu.service.ContentService;

public class ContentServiceImpl implements ContentService
{
    private ContentsDao cdao=new ContentsDaoImpl();
    
    /**
     * pageSize为每页显示的记录数
     * page为当前显示的网页
     */
    @Override
    public PageBean getPageBean(int pageSize, int page)
    {
        PageBean pageBean = new PageBean();
        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd : HH:mm:ss");
        String hql = "from Contents order by contentDate desc";
        
        int allRows = cdao.getAllRowCount(hql);
        System.out.println("allRows:"+allRows);
        int totalPage = pageBean.getTotalPages(pageSize, allRows);
        System.out.println("totalPag:"+totalPage);
        int currentPage = pageBean.getCurPage(page);
        System.out.println("currentPage:"+currentPage);
        int offset = pageBean.getCurrentPageOffset(pageSize, currentPage);
        System.out.println("offset:"+offset);
        List<Contents> contentList = cdao.queryByPage(hql, offset, pageSize);
        for(int i=0;i<contentList.size();i++){
			UsersDao udao=new UsersDaoImpl();
			String face=udao.findFaceByUserName(contentList.get(i).getContentUser());
	        contentList.get(i).setContentUserFace(face);
	        contentList.get(i).setStrDate(sdf.format(contentList.get(i).getContentDate()));
	        contentList.get(i).setDislike(0);
	        contentList.get(i).setLike(0);
	        contentList.get(i).setComment(0);
		}
        pageBean.setList(contentList);
        pageBean.setAllRows(allRows);
        pageBean.setCurrentPage(currentPage);
        pageBean.setTotalPage(totalPage);
        
        return pageBean;
    }
}
