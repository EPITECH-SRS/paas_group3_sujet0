CREATE TABLE IF NOT EXISTS data_sample (
	id SERIAL,
	message VARCHAR
);

INSERT INTO data_sample VALUES ( 1, '{ "message": "Hello World" }');
