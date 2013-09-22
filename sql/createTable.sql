/* create a unispon database before you do anything
CREATE DATABASE if not exists Unispon
*/

/*create four tables*/
CREATE TABLE if not exists unispon.USER
(
UserId int NOT NULL AUTO_INCREMENT UNIQUE,
Username nvarchar(40) NOT NULL UNIQUE,
Password nvarchar(40) NOT NULL,
Email nvarchar(100) UNIQUE,
Primary Key (UserId)
);


CREATE TABLE if not exists unispon.Organization
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

CREATE TABLE if not exists Unispon.Company
(
CompanyId int NOT NULL AUTO_INCREMENT UNIQUE,
UserId int NOT NULL,
CompanyName nvarchar(100) NOT NULL,
Primary Key (CompanyId),
Foreign Key (UserId) REFERENCES USER(UserId)
);

CREATE TABLE if not exists Unispon.Package
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

INSERT INTO `user`(`Username`, `Password`, `Email`) VALUES ('admin','unispon','zwu36@gatech.edu');

INSERT INTO `organization`(`UserId`, `OrganizationSize`, `OrganizationName`, `School`, `OrganizationDescription`) VALUES (1,200,'Chinese Student Association','Georgia Tech','Chinese student association is awesome');

INSERT INTO `company`(`UserId`, `CompanyName`) VALUES (1,'Liberty Mutual');

INSERT INTO `package`(`PackageName`, `OrganizationId`, `CompanyId`, `Details`, `Price`) VALUES ('dragon boat festival',1,null,'boat boat boat',100);