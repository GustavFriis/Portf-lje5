
DROP TABLE IF EXISTS cafes;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS favourites;

CREATE TABLE cafes (
CafeID INTEGER  NOT NULL AUTO_INCREMENT,
PriceRange ENUM("low","medium","high"),
Cozy ENUM("loW","medium","high"),
Postcode INTEGER(4),
Address VARCHAR(50),
Size INTEGER,
Wifi BOOLEAN,
CafeName VARCHAR(50),
PRIMARY KEY(CafeID)
);

CREATE TABLE users (
UserID INTEGER  NOT NULL AUTO_INCREMENT,
UserName VARCHAR(50),
UserMail VARCHAR(50),
PRIMARY KEY(UserID)
);

CREATE TABLE favourites(
UserID INTEGER,
CafeID INTEGER
);

INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (1, "medium", "high", "1171", "Fiolstræde 10",70, FALSE, "Paludan Bog og Cafe");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (2, "low", "low", "2200", "Rantzsausgade 2",90, TRUE, "Darcy's Kaffe");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (3, "medium", "medium", "1466", "Rådhusstræde 13",100, TRUE, "Bastard Café");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (4, "high", "high", "1453", "Sankt Peders Stræde 31",50, TRUE, "Buzz Kaffebar");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (5, "high", "medium", "2200", "Sortedamn Dossering 21",80, TRUE, "Café 22");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (6, "low", "high", "1260", "Bredgade 45",70, TRUE, "Mormors");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (7, "high", "high", "1364", "Nørre Farimagsgade 55",90, TRUE, "Feel Good");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (8, "low", "medium", "1350", "Øster Voldgade 5",80, TRUE, "Riccos Kaffebar");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (9, "high", "low", "1630", "Vesterbrogade 3",130, TRUE, "Joe & The Juice");
INSERT INTO cafes(CafeID, PriceRange, Cozy, Postcode, Address, Size, Wifi, CafeName) VALUES (10, "medium", "medium", "2000", "Sløjfen 2",70, FALSE, "Vintage Coffee");

Insert into cafe_database.users (UserName, UserMail) Values ('Sarah','sarahbp@gmail.com');
Insert into cafe_database.users (UserName, UserMail) Values ('Morten','MortenA@gmail.com');
Insert into cafe_database.users (UserName, UserMail) Values ('kaffeElsker27','DanielRS@gmail.com');
Insert into cafe_database.users (UserName, UserMail) Values ('Mogens-Ole','gammelfisker@gmail.com');
Insert into cafe_database.users (UserName, UserMail) Values ('KasparM','Kaspar467@gmail.com');
Insert into cafe_database.users (UserName, UserMail) Values ('Gertud','gertrudhenriksen@outlook.com');
Insert into cafe_database.users (UserName, UserMail) Values ('Leif','ericsson@outlook.com');
Insert into cafe_database.users (UserName, UserMail) Values ('Lars','LLarsen@gmail.com');
Insert into cafe_database.users (UserName, UserMail) Values ('Jørgen','Jandersen@gmail.com');
Insert into cafe_database.users (UserName, UserMail) Values ('Chano','fysikmanden@gmail.com');