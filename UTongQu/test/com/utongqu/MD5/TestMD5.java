package com.utongqu.MD5;

import static org.junit.Assert.*;

import java.security.MessageDigest;

import org.junit.After;
import org.junit.Test;

import com.utongqu.util.MD5;

public class TestMD5 {

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void test() {

		System.out.println(MD5.getPassMD5("12345"));
	}

}
