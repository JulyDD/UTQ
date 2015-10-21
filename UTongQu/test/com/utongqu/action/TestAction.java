package com.utongqu.action;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONArray;

import org.junit.Test;

public class TestAction {

	
	@Test
	public void test() {
		
		String k="[\"1\",\"2\",\"3\"]";
		List<String> list=new ArrayList<String>();
		list.add(k);
		list.add("2");
		list.add("3");
		JSONArray jsonArray=JSONArray.fromObject(list);
		String jsonstr=jsonArray.toString();
		System.out.println(jsonstr);
		
		
	}

}
