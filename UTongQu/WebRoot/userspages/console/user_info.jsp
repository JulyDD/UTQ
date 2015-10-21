<%@page import="java.text.SimpleDateFormat"%>
<%@page import="java.text.DateFormat"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags" %>
                   <div class="pic images" style="width:270px">
                       <s:if test="null==#session.userinfo"><img src='images/111.jpg'  /></s:if>
                        <s:else><img src='images/<s:property value="#session.userinfo.get(0).face"/>'  /></s:else>
                        
                        <div class="imginfo">
                          <div class="imsg" >
                             <p style="width:250px; margin:0 auto;">
                               <span style="font-size:20px; ">
                               <s:if test="null==#session.userinfo">未登录</s:if>
                               <s:else><s:property value="#session.userinfo.get(0).username"/></s:else></span>
                             </p>
      
                         </div>
                       </div>
                      
                       <div class="imginfo" >
                          <div style="width:160px; margin:0 auto;">
                            <div class="imsg">
                             <p> <span> 上次登录：</span></p>
                              <p class="time">
                                 <s:if test="null==#session.userinfo">
                                 <% Date date=new Date(); 
                                    DateFormat df = new SimpleDateFormat("yyy-MM-dd HH:mm:ss");
                                    String Date = df.format(date);%>
                                 <%=Date%></s:if>
                                 <s:else><s:property value="#session.userinfo.get(0).lastLoginDate"/></s:else>
                              </p>
                            </div>
                          </div>
                          
                       </div>
                       
                      </div>