/*
brew install postgresql@16
brew services start postgresql@16
psql postgres

CREATE DATABASE test_db;
\c test_db;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    done BOOLEAN DEFAULT false
    );

INSERT INTO tasks (title) VALUES ('walk'), ('jump');
INSERT INTO tasks (title, done) VALUES ('DELETE', true);

SELECT * FROM tasks;

UPDATE tasks SET done = true WHERE id = 1;
UPDATE tasks SET done = true WHERE id % 2 = 0;

DELETE FROM tasks WHERE id != 2;
*/
