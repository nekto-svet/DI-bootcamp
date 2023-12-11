CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab

-- Q1. 
-- In imput will be 3: count of rows with id 5,6 and 7
SELECT COUNT(*)
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- I don't understand why result is 0

-- Q2.
-- Result will be 2, because it will count id6 and id7
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

-- Q3. 
-- -- Result will be 2, because it will count id6 and id7
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- still don't unerstand 
-- SELECT id FROM SecondTab == 5, null
-- SELECT id FROM FirstTab == 5,6,7,null
-- 6,7 not in 5,null
-- apparently if we have NULL it can't be compared at all, so NOT IN doesn't works?

-- Q4. 
-- Result will be 2, because it will count id6 and id7
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
