CREATE TABLE savings_accounts (
    account_id   NUMBER PRIMARY KEY,
    customer_id  NUMBER,
    balance      NUMBER(10, 2)
);
INSERT INTO savings_accounts VALUES (201, 1, 10000);
INSERT INTO savings_accounts VALUES (202, 2, 7500);
INSERT INTO savings_accounts VALUES (203, 3, 5000);

COMMIT;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR acc IN (SELECT account_id, balance FROM savings_accounts) LOOP
        UPDATE savings_accounts
        SET balance = balance + (balance * 0.01)
        WHERE account_id = acc.account_id;

        DBMS_OUTPUT.PUT_LINE('Interest applied to Account ID: ' || acc.account_id);
    END LOOP;

    COMMIT;
END;

BEGIN
    ProcessMonthlyInterest;
END;

CREATE TABLE employees (
    emp_id        NUMBER PRIMARY KEY,
    name          VARCHAR2(100),
    department    VARCHAR2(50),
    salary        NUMBER(10, 2)
);

INSERT INTO employees VALUES (1, 'John', 'Sales', 30000);
INSERT INTO employees VALUES (2, 'Jane', 'Sales', 32000);
INSERT INTO employees VALUES (3, 'Mark', 'HR', 28000);

COMMIT;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    dept_name IN VARCHAR2,
    bonus_percent IN NUMBER
) IS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * (bonus_percent / 100))
    WHERE department = dept_name;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || dept_name);

    COMMIT;
END;

BEGIN
    UpdateEmployeeBonus('Sales', 10);
END;

CREATE TABLE bank_accounts (
    account_id   NUMBER PRIMARY KEY,
    customer_id  NUMBER,
    balance      NUMBER(10,2)
);

INSERT INTO bank_accounts VALUES (301, 1, 5000);
INSERT INTO bank_accounts VALUES (302, 1, 2000);

COMMIT;

CREATE OR REPLACE PROCEDURE TransferFunds (
    from_account_id IN NUMBER,
    to_account_id IN NUMBER,
    amount IN NUMBER
) IS
    from_balance bank_accounts.balance%TYPE;
BEGIN
    SELECT balance INTO from_balance
    FROM bank_accounts
    WHERE account_id = from_account_id;

    IF from_balance < amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
        RETURN;
    END IF; 
    UPDATE bank_accounts
    SET balance = balance - amount
    WHERE account_id = from_account_id; 
    UPDATE bank_accounts
    SET balance = balance + amount
    WHERE account_id = to_account_id;

    DBMS_OUTPUT.PUT_LINE('Transfer successful: ' || amount || ' transferred.');

    COMMIT;
END;


BEGIN
    TransferFunds(301, 302, 1000);
END;






