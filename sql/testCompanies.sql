INSERT INTO user (Username, Password, Email)
VALUES ('company1', 'testtest', 'companyemail1@email.com'),
('company2', 'testtest', 'companyemail2@email.com'),
('company3', 'testtest', 'companyemail3@email.com'),
('company4', 'testtest', 'companyemail4@email.com'),
('company5', 'testtest', 'companyemail5@email.com'),
('organization1', 'testtest', 'organizationemail1@email.com'),
('organization2', 'testtest', 'organizationemail2@email.com'),
('organization3', 'testtest', 'organizationemail3@email.com'),
('organization4', 'testtest', 'organizationemail4@email.com'),
('organization5', 'testtest', 'organizationemail5@email.com');

SELECT @last := LAST_INSERT_ID();

INSERT INTO company (UserId, CompanyName, CompanyDescription)
VALUES (@last, 'Test Company1', 'This is our company, Test Company1.'),
(@last+1, 'Test Company2', 'This is our company, Test Company2.'),
(@last+2, 'Test Company3', 'This is our company, Test Company3.'),
(@last+3, 'Test Company4', 'This is our company, Test Company4.'),
(@last+4, 'Test Company5', 'This is our company, Test Company5.');

INSERT INTO organization (UserId, OrganizationSize, OrganizationName, School, OrganizationDescription)
VALUES (@last+5, '1', 'Test Organization1', 'Georgia Tech', 'This is our organization, Organization1.'),
(@last+6, '2', 'Test Organization2', 'Georgia Tech', 'This is our organization, Organization2.'),
(@last+7, '3', 'Test Organization3', 'Georgia Tech', 'This is our organization, Organization3.'),
(@last+8, '4', 'Test Organization4', 'Georgia Tech', 'This is our organization, Organization4.'),
(@last+9, '5', 'Test Organization5', 'Georgia Tech', 'This is our organization, Organization5.');

