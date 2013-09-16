CREATE TABLE if not exists USER
(
UserId int NOT NULL AUTO_INCREMENT,
Username nvarchar(40) NOT NULL,
Password nvarchar(40) NOT NULL,
Email nvarchar(100),
Primary Key (UserId)
);


CREATE TABLE if not exists Organization
(
OrganizationId int NOT NULL AUTO_INCREMENT,
UserId int NOT NULL,
OrganizationSize int,
OrganizationName nvarchar(100) NOT NULL,
School nvarchar(50) NOT NULL,
OrganizationDescription nvarchar(200),
Primary Key (OrganizationId),
Foreign Key (UserId) REFERENCES USER(UserId)
);

CREATE TABLE if not exists Company
(
CompanyId int NOT NULL AUTO_INCREMENT,
UserId int NOT NULL,
CompanyName nvarchar(100) NOT NULL,
Primary Key (CompanyId),
Foreign Key (UserId) REFERENCES USER(UserId)
);

CREATE TABLE if not exists PackageTable
(
PackageId int NOT NULL AUTO_INCREMENT,
PackageName nvarchar(100) NOT NULL,
OrganizationId int NOT NULL,
CompanyId int,
Details nvarchar(200),
Price double NOT NULL,
Primary Key (PackageId),
Foreign Key (CompanyId) REFERENCES Company(CompanyId),
Foreign Key (OrganizationId) REFERENCES Organization(OrganizationId)
);