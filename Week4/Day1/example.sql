

-- SELECT * FROM products

-- DELETE FROM products WHERE id = 3

-- UPDATE products SET  name = 'iPad14', description = '12-92309234' WHERE id = 1

-- SELECT name, price FROM products WHERE name like 'iC%' -- or '%w%'(middle), or '%r'(ends with)

-- SELECT name, price FROM products WHERE price between 500 and 700

-- SELECT name, price FROM products WHERE name in ('iPad', 'iCar')

-- SELECT name, price FROM products WHERE price <= 800 ORDER BY name desc

-- SELECT name, price FROM products WHERE price <= 650 -- or use == or !=

-- SELECT name, price FROM products WHERE name = 'iCar'

-- SELECT name, price FROM products WHERE id =1 --particular row

-- SELECT name as nameprod FROM products --to gave alias

-- SELECT name || ' ' || description FROM products --- in one colmn

-- SELECT * FROM products -- better NOT USE

-- SELECT name, id FROM products --better chose particular colums


-- INSERT INTO products (name, price, description)
-- VALUES ('iPad', 600, 'bla bla bla'), 
-- ('iWath', 700, 'blaaaa'),
-- ('iCar', 100000, 'bleeee')

-- INSERT INTO products (name, price)
-- VALUES ('iPhone', 800)

-- CREATE TABLE products (
-- 	id serial PRIMARY KEY,
-- 	name varchar (255) NOT NULL,
-- 	price integer NOT NULL,
-- 	description varchar (1000)
-- )


-- CREATE TABLE accounts (
-- 	user_id serial PRIMARY KEY,
-- 	username varchar (58) UNIQUE NOT NULL,
-- 	password varchar (58) NOT NULL,
-- 	email varchar (255) UNIQUE NOT NULL,
-- 	create_on timestamp not null default now(),
-- 	last_login timestamp
-- )


-- CREATE TABLE new_table (
-- 	id serial PRIMARY KEY,
-- 	email varchar(255) UNIQUE NOT NULL,
-- 	password varchar(1000),
-- 	created_date timestamp
-- )


