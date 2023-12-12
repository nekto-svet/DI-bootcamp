--Part I----------------------------------------------------
-- 1.Create 2 tables : Customer and Customer profile. They have a One to One relationship.
CREATE TABLE customer(
	id serial PRIMARY KEY, 
	first_name varchar(100) NOT NULL,
	last_name varchar(100) NOT NULL 
	)

CREATE TABLE customer_profile (
	id serial PRIMARY KEY, 
	isLoggedIn BOOLEAN NOT NULL DEFAULT false, 
	customer_id int NOT NULL UNIQUE REFERENCES  customer(id)
	)
--2.Insert those customers
INSERT INTO customer (first_name, last_name)
VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive')

--3.Insert those customer profiles, use subqueries
-- I thinl here I didnt understand what exersise want me to do
INSERT INTO customer_profile (customer_id)
VALUES (1), (2)
UPDATE customer_profile SET isLoggedIn = true WHERE customer_id = 1

--4.Use the relevant types of Joins to display:
-----The first_name of the LoggedIn customers
SELECT first_name FROM customer
INNER JOIN customer_profile
ON customer_profile.customer_id = customer.id
WHERE isLoggedIn = true

-----All the customers first_name and isLoggedIn columns 
--- even the customers those who don’t have a profile.
SELECT first_name, isLoggedIn  FROM customer
LEFT JOIN customer_profile
ON customer_profile.customer_id = customer.id

----The number of customers that are not LoggedIn
SELECT COUNT(*) FROM customer
INNER JOIN customer_profile
ON customer_profile.customer_id = customer.id
WHERE isLoggedIn = false


--Part II:----------------------------------------------
--1.Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE book(
	book_id SERIAL PRIMARY KEY, 
	title varchar(100) NOT NULL,
	author varchar(100) NOT NULL 
	)
	
--2. Insert
INSERT INTO book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'), ('Harry Potter', 'J.K Rowling'), ('To kill a mockingbird', 'Harper Lee')

--3. Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. 
--Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE student (
	student_id SERIAL PRIMARY KEY, 
	name varchar(100) NOT NULL UNIQUE, 
	age int CHECK (age BETWEEN 1 AND 15)
	)
	
--4.Insert
INSERT INTO student (name, age)
VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14)


--5. Create a table named Library...
CREATE TABLE library (
	book_fk_id integer REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_id integer REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date date
	)

--6.Add 4 records in the junction table, use subqueries
INSERT INTO library (book_fk_id, student_id, borrowed_date)
VALUES (1,1,'15/02/2022'), (2,4,'03/03/2021'), (1,2,'23/05/2021'), (2,4,'12/08/2021')

--7. Display the data
-- Select all the columns from the junction table
SELECT * FROM library

-- Select the name of the student and the title of the borrowed books
SELECT name, title FROM student
INNER JOIN library
ON library.student_id = student.student_id
INNER JOIN book
ON book.book_id = library.book_fk_id

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(age) FROM student
INNER JOIN library
ON library.student_id = student.student_id
WHERE book_fk_id = 1

-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM student WHERE name = 'Bob'
SELECT * FROM library
-- rows wit Bob deleted becase of 'ON DELETE CASCADE' setting