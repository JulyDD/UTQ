package com.utongqu.action;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestAction {

	public String namereg="^[0-9a-zA-Z]{4,16}$";
	@Test
	public void test() {
		if("123".matches(namereg)){
			System.out.println("{'msg':'test-OK'}");
		}else{
			System.out.println("{'msg':'用户名须为4—16位的英文字母或数字'}");
		}
		/*System.out.println("1234".matches(namereg));*/
	}

}
