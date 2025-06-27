CREATE TABLE customers (
    customer_id   NUMBER PRIMARY KEY,
    name          VARCHAR2(100),
    age           NUMBER,
    interest_rate NUMBER(5,2),
    balance       NUMBER(10,2),
    isVIP         VARCHAR2(5)
);
CREATE TABLE loans (
    loan_id       NUMBER PRIMARY KEY,
    customer_id   NUMBER,
    due_date      DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
INSERT INTO customers VALUES (1, 'Alice', 65, 7.5, 12000, 'FALSE');
INSERT INTO customers VALUES (2, 'Bob', 45, 8.0, 9500, 'FALSE');
INSERT INTO customers VALUES (3, 'Charlie', 70, 6.5, 11000, 'FALSE');
INSERT INTO customers VALUES (4, 'Diana', 55, 7.0, 5000, 'FALSE');
INSERT INTO loans VALUES (101, 1, SYSDATE + 10);  -- Due in 10 days
INSERT INTO loans VALUES (102, 2, SYSDATE + 40);  -- Due in 40 days
INSERT INTO loans VALUES (103, 3, SYSDATE + 25);  -- Due in 25 days

COMMIT;
BEGIN
    FOR rec IN (SELECT customer_id, interest_rate, age FROM customers WHERE age > 60) LOOP
        UPDATE customers
        SET interest_rate = interest_rate - 1
        WHERE customer_id = rec.customer_id;

        DBMS_OUTPUT.PUT_LINE('1% discount applied to Customer ID: ' || rec.customer_id);
    END LOOP;

    COMMIT;
END;

BEGIN
    FOR rec IN (SELECT customer_id, balance FROM customers WHERE balance > 10000) LOOP
        UPDATE customers
        SET isVIP = 'TRUE'
        WHERE customer_id = rec.customer_id;

        DBMS_OUTPUT.PUT_LINE('Customer ID ' || rec.customer_id || ' promoted to VIP.');
    END LOOP;

    COMMIT;
END;
SELECT * FROM customers;

BEGIN
    FOR rec IN (
        SELECT l.loan_id, l.customer_id, c.name, l.due_date
        FROM loans l
        JOIN customers c ON l.customer_id = c.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Dear ' || rec.name || 
            ', your loan (ID: ' || rec.loan_id || 
            ') is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;





