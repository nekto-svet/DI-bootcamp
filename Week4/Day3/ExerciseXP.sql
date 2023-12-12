--  Exercise 1: DVD Rental-------------------------------------------
--1 Get a list of all the languages, from the language table.
SELECT name FROM language

--2 Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT title, description, name FROM film
LEFT JOIN language 
ON language.language_id = film.language_id

--3 Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT title, description, name FROM film
RIGHT JOIN language 
ON language.language_id = film.language_id

--4 Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
	new_film_id serial PRIMARY KEY,
	new_film_name varchar(500) NOT NULL
	)

INSERT INTO new_film (new_film_name)
VALUES ('The Last Emperor'),('The Walking Castle'), ('Golda'), ('You Don`t Mess with the Zohan')

--5 Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review (
	id serial PRIMARY KEY,
	new_film_id integer NOT NULL REFERENCES new_film (new_film_id) ON DELETE CASCADE, 
	language_id integer NOT NULL REFERENCES language (language_id) ON DELETE SET NULL, 
	title VARCHAR (100),
	score integer check (score between 1 and 10),
	review_text text,
	last_update date
	)
--6 Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (new_film_id, language_id, title, score, last_update, review_text)
VALUES (1,1,'Life is stranger, and nastier, than fiction.', 8, '16/04/2009', 'Director: Bernardo Bertolucci. Entertainment grade: C+. History grade: C–. Puyi became emperor of China two months before his third birthday in 1908. Following the 1911 revolution, a republic was declared and he abdicated. The tumultuous political history of China from that point on defined Puyi`s life. He was made emperor of the Japanese puppet state of Manchukuo in the 1930s, captured by the Red Army in 1945, "re-educated" by Mao Zedong`s administration, and finally persecuted during the Cultural Revolution. It`s not bad on the political history of China, but Puyi`s personal life was a lot nastier than The Last Emperor lets on.'),
(2,3, '`Castle` nothing to howl about', 4, '9/05/2005', 'I can`t recommend the film, and yet I know if you admire Miyazaki as much I do you`ll want to see it, anyway. When his movies are working and on those rare occasions when they are not, Miyazaki nevertheless is a master who, frame by frame, creates animated compositions of wonderment. Pete Docter (writer of "Toy Story") and John Lasseter (director of "Toy Story"), his great American supporters, have supervised the English dubbing; online anime sites say however the Japanese voices are more in character. In the meantime, the big screen is the only way to appreciate the remarkable detail of the Castle, which becomes one of the great unique places in the movies.')

SELECT new_film_name, name, score FROM new_film
INNER JOIN customer_review 
ON new_film.new_film_id = customer_review.new_film_id
INNER JOIN language
ON language.language_id = customer_review.language_id

--7 Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE new_film_id=2
SELECT * FROM customer_review

-- Exercise 2 : DVD Rental-------------------------------------------------------------

-- 1.Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = 2
WHERE film_id = 45

SELECT title, name FROM film 
INNER JOIN language
ON language.language_id = film.language_id
WHERE film_id = 45
--sorry, "Attraction Newton" now just on Italian

--2. Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--There is fk customer_adress and it means that inserting new customer depends on tables adress, city and country

--3. We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review
--It doesnt need extra checking because there are no tables with fk that depend on 'customer_review'.

--4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(*) FROM rental WHERE return_date > NOW()

--5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT title, rental_rate FROM film
INNER JOIN inventory
ON inventory.film_id = film.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
WHERE return_date > '12/08/2005' --because our DVD rental doesn't work many years I used another date instead of NOW()
ORDER BY rental_rate DESC
LIMIT 30

--6. Your friend is at the store, and decides to rent a movie. 
--He knows he wants to see 4 movies, but he can’t remember their names. 
--Can you help him find which movies he wants to rent?
-----1. The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT title FROM category
INNER JOIN film_category
ON category.category_id = film_category.category_id
INNER JOIN film
ON film_category.film_id = film.film_id
INNER JOIN film_actor
ON film_actor.film_id = film.film_id
INNER JOIN actor
ON actor.actor_id = film_actor.actor_id
WHERE first_name = 'Penelope' AND last_name = 'Monroe' 
AND name = 'Sports' --I sppose that a sumo wrestler should be in this category

-------2. A short documentary (less than 1 hour long), rated “R”.
SELECT title FROM category
INNER JOIN film_category
ON category.category_id = film_category.category_id
INNER JOIN film
ON film_category.film_id = film.film_id
WHERE name = 'Documentary'
AND length < 60
AND rating = 'R'

-------3. A film that his friend Matthew Mahan rented. 
-- He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
SELECT DISTINCT title FROM film
INNER JOIN inventory
ON inventory.film_id = film.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
INNER JOIN payment
ON payment.customer_id = rental.customer_id
INNER JOIN customer
ON customer.customer_id = payment.customer_id
WHERE first_name = 'Matthew' AND last_name = 'Mahan'
AND rental_rate > 4.00
AND return_date BETWEEN '28/07/2005' and '01/08/2005'

---------4. His friend Matthew Mahan watched this film, as well. 
--It had the word “boat” in the title or description, 
--and it looked like it was a very expensive DVD to replace.
SELECT title FROM film
INNER JOIN inventory
ON inventory.film_id = film.film_id
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
INNER JOIN payment
ON payment.customer_id = rental.customer_id
INNER JOIN customer
ON customer.customer_id = payment.customer_id
WHERE first_name = 'Matthew' AND last_name = 'Mahan'
AND title ILIKE '%bo%'
--there are no films with 'boat' at all so I changed if just for experiment
ORDER BY rental_rate DESC -- it found just one film,  but because of condition
-- 'it looked like it was a very expensive' I sorted output







