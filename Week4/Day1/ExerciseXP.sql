-- CREATE TABLE students (
-- 	id serial PRIMARY KEY,
-- 	first_name varchar (58) NOT NULL,
-- 	last_name varchar (58) NOT NULL,
-- 	birth_date date NOT NULL
-- )

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Marc', 'Benichou', '02/11/1998'), 
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'), 
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980')

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Sveta', 'Livshits', '26/02/1993')

-- SELECT * FROM students
-- SELECT * FROM students WHERE id =2
-- SELECT * FROM students WHERE last_name = 'Benichou' and first_name = 'Marc'
-- SELECT * FROM students WHERE last_name = 'Benichou' or first_name = 'Marc'
-- SELECT * FROM students WHERE first_name ILIKE '%a%'
-- SELECT * FROM students WHERE first_name ILIKE 'a%'
-- SELECT * FROM students WHERE first_name LIKE '%a'
-- SELECT * FROM students WHERE first_name LIKE '%a%'
-- SELECT * FROM students WHERE id in (1,3)

-- SELECT * FROM students WHERE birth_date >= ' 1/01/2000'

