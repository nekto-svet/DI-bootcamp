CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL
);

INSERT INTO 
    products (price, name)
VALUES
    (700, 'iPad'),
    (800,'iPhone'),
    (600,'iWatch'),
    (900,'iCar');
	
CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR (500),
	product_id integer NOT NULL REFERENCES products (id) ON DELETE SET NO ACTION, 
	--я могу назначить референс так (ON DELETE необяз. можно ON DELETE SET NULL, можно без него)
	-- или так
-- 	CONSTRAINT fk_product --это просто название foreign key of product
-- 		FOREIGN KEY (product_id)
-- 			REFERENCES products(id)
);

INSERT INTO 
    products_desc (description, product_id)
VALUES
	('Amazing iPad' ,1),
	('Great iPhone' ,2),
	('Best iWatch' ,3),
	('Fastest car ever iCar' ,4);
	
SELECT * FROM products


--TABLE RELATIONS-----------------------------------------------
-- before there was one to many
--ONE TO ONE

CREATE TABLE users (
	id serial PRIMARY KEY,
	username varchar(50) UNIQUE NOT NULL,
	password varchar(100) NOT NULL
	)

CREATE user_profile(
	profile_id serial PRIMARY KEY,
	user_id int UNIQUE NOT NULL REFERENSE users(user_id) --because its unique so it can be jus one
	-- so ITS ONE TO ONE CONNECTION
	first_name varchar(50) NOT NULL
	)

--ONE TO MANY
CREATE TABLE users (
	id serial PRIMARY KEY,
	username varchar(50) UNIQUE NOT NULL,
	password varchar(100) NOT NULL
	)
	
CREATE TABLE post (
	post_id serial PRIMARY KEY,
	user_id int REFERENSE users(user_id) --not unique cause user can have many posts
	post varchar (1000)
)

--MANY TO MANY
CREATE TABLE students (
	stu_id serial PRIMARY KEY,
	stu_name varchar(50) NOT NULL,
	stu_last_name varchar(50) NOT NULL
	)
	
INSERT 
	
CREATE TABLE courses (
	course_id serial PRIMARY KEY,
	course_name varchar(50) NOT NULL
	)
INSERT INTO students (stu_name, stu_last_name)
VALUES ('Bla', 'LastName'),('BlaBla', 'LastNameLast'), ('BlaBlaBla', 'LastNameLastName') 

INSERT INTO courses (course_name)
VALUES ('C1'),('C2'), ('C3'), ('C4')

CREATE TABLE student_course (
	id serial PRIMARY KEY,
	student_id int NOT NULL REFERENCES students(stu_id),
	course_id int NOT NULL REFERENCES courses(course_id)
	)

SELECT * FROM students
SELECT * FROM courses

INSERT INTO student_course (student_id, course_id)
	VALUES (4,1),(4,2), (2,2), (2,3), (2,4),(3,2), (3,3)
	
SELECT stu_name, course_name
FROM students
INNER JOIN student_course ON students.stu_id = student_course.student_id
INNER JOIN courses ON courses.course_id = student_course.course_id



--FUNCTIONS---------------

-- CREATE [OR REPLACE] FUNCTION f_name (parameters)
-- 	RETURN return_type
-- 	LANGUAGE plpgsql
-- AS
-- $$
-- DECLARE
-- 	---var name
-- BEGIN
-- 	--code \ logic
-- END
-- $$

CREATE FUNCTION get_film_count (len_from int, len_to int ) 
--or I can put here ", OUT film_cont integer" AND DONT NEED RETURN. or INOUT if we take and get one param
	RETURNS int
	LANGUAGE plpgsql
AS
$$
DECLARE --if i put OUT in paramrters I dont need this
	film_count integer;
BEGIN
	SELECT COUNT(1) INTO film_count
	FROM film
	WHERE LENGTH BETWEEN len_from AND len_to;
	
	RETURN film_count; --ISNT NEEDED if we use OUT in parameters
END;
$$

SELECT get_film_count (40,80)



