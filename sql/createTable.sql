/* create a unispon database before you do anything
CREATE DATABASE if not exists Unispon
*/

/*create four tables*/
CREATE TABLE if not exists User
(
UserId int NOT NULL AUTO_INCREMENT UNIQUE,
Username nvarchar(40) NOT NULL UNIQUE,
Password nvarchar(70) NOT NULL,
Email nvarchar(100) UNIQUE,
Primary Key (UserId)
);


CREATE TABLE if not exists Organization
(
OrganizationId int NOT NULL AUTO_INCREMENT UNIQUE,
UserId int NOT NULL,
OrganizationSize int,
OrganizationName nvarchar(100) NOT NULL,
School nvarchar(50) NOT NULL,
OrganizationDescription longtext,
Primary Key (OrganizationId),
Foreign Key (UserId) REFERENCES USER(UserId)
);

CREATE TABLE if not exists Company
(
CompanyId int NOT NULL AUTO_INCREMENT UNIQUE,
UserId int NOT NULL,
CompanyName nvarchar(100) NOT NULL,
CompanyDescription longtext,
Primary Key (CompanyId),
Foreign Key (UserId) REFERENCES USER(UserId)
);

CREATE TABLE if not exists Package
(
PackageId int NOT NULL AUTO_INCREMENT UNIQUE,
PackageName nvarchar(100) NOT NULL,
OrganizationId int NOT NULL,
CompanyId int,
Details longtext,
Price double NOT NULL,
Primary Key (PackageId),
Foreign Key (CompanyId) REFERENCES Company(CompanyId),
Foreign Key (OrganizationId) REFERENCES Organization(OrganizationId)
);

/* create context*/

INSERT INTO `User`(`Username`, `Password`, `Email`) VALUES ('LM','unispon','zwu36@gatech.edu');
INSERT INTO `User`(`Username`, `Password`, `Email`) VALUES ('CSA','unispon','cding9@gatech.edu');

INSERT INTO `Organization`(`UserId`, `OrganizationSize`, `OrganizationName`, `School`, `OrganizationDescription`) VALUES (9,200,'Chinese Student Association','Georgia Tech','Chinese student association is awesome');

INSERT INTO `Company`(`UserId`, `CompanyName`) VALUES (3,'Liberty Mutual');


INSERT INTO `Package`(`PackageName`, `OrganizationId`, `CompanyId`, `Details`, `Price`) VALUES ('dragon boat festival',6,null,'boat boat boat',100);
INSERT INTO `Package`(`PackageName`, `OrganizationId`, `CompanyId`, `Details`, `Price`) VALUES ('New Year Celebration',6,null,'New Year, New Year New Year', 200);