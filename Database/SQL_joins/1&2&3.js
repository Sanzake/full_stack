/*
SELECT tasks.title, users.name FROM tasks 
JOIN users ON tasks.user_id = users.id;

SELECT tasks.title, users.name FROM tasks
LEFT JOIN users ON tasks.user_id = users.id;

SELCT users.name, COUNT(*) FROM tasks WHERE done = false GROUP BY user_id;
*/
