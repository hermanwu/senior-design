/* create a unispon database before you do anything
CREATE DATABASE if not exists Unispon
*/

/*create four tables*/
CREATE TABLE if not exists unispon.USER
(
UserId int NOT NULL UNIQUE,
Username nvarchar(40) NOT NULL,
Password nvarchar(40) NOT NULL,
Email nvarchar(100),
Primary Key (UserId)
);


CREATE TABLE if not exists unispon.Organization
(
OrganizationId int NOT NULL UNIQUE,
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
CompanyId int NOT NULL UNIQUE,
UserId int NOT NULL,
CompanyName nvarchar(100) NOT NULL,
Primary Key (CompanyId),
Foreign Key (UserId) REFERENCES USER(UserId)
);

CREATE TABLE if not exists Unispon.Package
(
PackageId int NOT NULL UNIQUE,
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

INSERT INTO `user`(`UserId`, `Username`, `Password`, `Email`) VALUES (0,'admin','unispon','zwu36@gatech.edu');

INSERT INTO `organization`(`OrganizationId`,`UserId`, `OrganizationSize`, `OrganizationName`, `School`, `OrganizationDescription`) VALUES (0,0,200,'Chinese Student Association','Georgia Tech','Chinese student association is awesome');

INSERT INTO `company`(`companyid`,`UserId`, `CompanyName`) VALUES (0,0,'Liberty Mutual');

INSERT INTO `package`(`packageId`,`PackageName`, `OrganizationId`, `CompanyId`, `Details`, `Price`) VALUES (0,'dragon boat festival',0,null,'boat boat boat',100);