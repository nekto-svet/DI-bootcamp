-- 1
SELECT * FROM customer
-- 2
SELECT first_name|| ' ' ||last_name as  full_name FROM customer
-- 3
SELECT DISTINCT create_date FROM customer
-- 4
SELECT * FROM customer ORDER BY first_name DESC
-- 5
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC
-- 6
SELECT address, phone FROM address WHERE district = 'Texas'
-- 7
SELECT * FROM film WHERE film_id in (15, 150)
-- 8
SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'The Last Emperor'
-- 9
SELECT film_id, title, description, length, rental_rate FROM film WHERE title LIKE 'Th%'
-- 10
SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10
-- 11
SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10

-- 12
SELECT first_name, last_name, amount, payment_date  
FROM customer
INNER JOIN payment 
ON customer.customer_id = payment.customer_id 
ORDER BY payment_id ASC
	
-- 13
SELECT title FROM film 
LEFT JOIN inventory ON film.film_id = inventory.film_id
WHERE inventory.film_id IS NULL

-- 14
SELECT city, country FROM city
INNER JOIN country ON country.country_id = city.country_id

-- 15
SELECT customer.customer_id, first_name, last_name, amount, payment_date, staff_id 
FROM customer 
INNER JOIN payment 
ON customer.customer_id = payment.customer_id
ORDER BY staff_id


