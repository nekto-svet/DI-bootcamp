SELECT id, name, price FROM items ORDER BY price
SELECT id, name, price FROM items WHERE price >= 80 ORDER BY price
SELECT username, userlastname FROM customers ORDER BY username ASC LIMIT 3 
SELECT userlastname FROM customers ORDER BY userlastname DESC