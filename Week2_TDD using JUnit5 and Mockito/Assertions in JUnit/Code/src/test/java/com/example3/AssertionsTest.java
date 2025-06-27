package com.example3;
import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {
    @Test
    public void testAssertions() { 
        assertEquals("Sum check failed", 5, 2 + 3); 
        assertTrue("Expected true condition", 5 > 3); 
        assertFalse("Expected false condition", 5 < 3);
 
        Object obj1 = null;
        assertNull("Expected null object", obj1);
 
        Object obj2 = new Object();
        assertNotNull("Expected non-null object", obj2);
 
        String a = "hello";
        String b = "hello";
        assertSame("Expected same object reference", a, b);
 
        String x = new String("world");
        String y = new String("world");
        assertNotSame("Expected different object references", x, y);
}
}
