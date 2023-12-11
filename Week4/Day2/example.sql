-- CREATE TABLE products (
-- 	id serial PRIMARY KEY,
-- 	name varchar (255) NOT NULL,
-- 	price integer NOT NULL
-- )

-- INSERT INTO products (name, price)
-- VALUES ('iPad', 600), 
-- ('iWath', 700),
-- ('iCar', 100000)

-- CREATE TABLE product_descr (
-- 	id serial PRIMARY KEY,
-- 	description varchar (500),
-- 	product_id integer NOT NULL
-- )

-- INSERT INTO product_descr (description, product_id) 
-- VALUES ('Amazing iPad', 1),
-- ('Great iPhone', 2),
-- ('Best iCar', 3)


SELECT * FROM products
INNER JOIN product_descr ON products.id = product_descr.product_id

SELECT * FROM address

SELECT * FROM customer
INNER JOIN address ON customer.address_id = address.address_id