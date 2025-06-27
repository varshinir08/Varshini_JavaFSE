package com.example4;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator; 
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator instance created.");
    }
 
    @After
    public void tearDown() {
        calculator.clearMemory();
        System.out.println("Teardown: Memory cleared.");
    }

    @Test
    public void testAddition() { 
        int a = 10;
        int b = 20;

         int result = calculator.add(a, b);

         assertEquals("Addition result incorrect", 30, result);
    }

    @Test
    public void testSubtraction() {
        int a = 50;
        int b = 15;

         int result = calculator.subtract(a, b);
         assertEquals("Subtraction result incorrect", 35, result);
}
}
