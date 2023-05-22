
-- Products Table

DROP TABLE IF EXISTS Product CASCADE;

CREATE TABLE Product (
    PROD_ID SERIAL PRIMARY KEY, -- Serial for Auto-Increment Feature
    PROD_Name VARCHAR (40) NOT NULL,
    PROD_Price DECIMAL(10,2) NOT NULL,
    PROD_TotalQuantity INT NOT NULL,
    PROD_TotalValue Decimal(10,2) NOT NULL,
    PROD_Description VARCHAR (300) NOT NULL
);
  
-- Functions

Create or replace function getProductCount() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select count(*) into var from Product; 
	   return var;  
	End;  
$$; 

Create or replace function getProductAverageTotalValue() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select AVG(PROD_TotalValue) into var from Product; 
	   return var;  
	End;  
$$;  

Create or replace function getProductTotalValue() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select SUM(PROD_TotalValue) into var from Product; 
	   return var;  
	End;  
$$;  

Create or replace function getProductTotalQuantity() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select SUM(PROD_TotalQuantity) into var from Product; 
	   return var;  
	End;  
$$;  

-- Trigger / Procedure

CREATE OR REPLACE FUNCTION updateProductTotalValue() RETURNS TRIGGER LANGUAGE PLPGSQL AS
$$
	BEGIN
		UPDATE Product
			SET PROD_TotalValue = PROD_TotalQuantity * PROD_Price
			WHERE PROD_ID = NEW.PROD_ID;
			
		RETURN NEW;
	END;
$$;

CREATE OR REPLACE TRIGGER tr_updateProductTotalValue
  AFTER INSERT OR UPDATE
  ON Product
  FOR EACH ROW
  EXECUTE PROCEDURE updateProductTotalValue();

-- Inserts

INSERT INTO Product(PROD_ID, PROD_Name, PROD_Price, PROD_TotalQuantity, PROD_Description, PROD_TotalValue)
VALUES (1, 'Product 1', 12.99, 100, 'Description for Product 1', 1299.00),
       (2, 'Product 2', 23.50, 200, 'Description for Product 2', 4700.00),
       (3, 'Product 3', 15.00, 150, 'Description for Product 3', 2250.00),
       (4, 'Product 4', 8.75, 80, 'Description for Product 4', 700.00),
       (5, 'Product 5', 11.20, 120, 'Description for Product 5', 1344.00),
       (6, 'Product 6', 16.50, 160, 'Description for Product 6', 2640.00),
       (7, 'Product 7', 9.99, 90, 'Description for Product 7', 899.10),
       (8, 'Product 8', 18.00, 180, 'Description for Product 8', 3240.00),
       (9, 'Product 9', 20.25, 202, 'Description for Product 9', 4090.50),
       (10, 'Product 10', 14.50, 145, 'Description for Product 10', 2102.50);














-- Product to Product Links Table

DROP TABLE IF EXISTS ProductToProductLink CASCADE;

CREATE TABLE ProductToProductLink (
   	PROD_SRC_ID INT,
	PROD_DEST_ID INT,
	PROD_TO_PROD_Description varchar (300) NOT NULL,
	
	PRIMARY KEY (PROD_SRC_ID,PROD_DEST_ID),
	FOREIGN KEY (PROD_SRC_ID) REFERENCES Product(PROD_ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (PROD_DEST_ID) REFERENCES Product(PROD_ID)ON UPDATE CASCADE ON DELETE CASCADE
);

-- Functions

Create or replace function getProductToProductLinkCount(srcId int) returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select count(*) into var from ProductToProductLink
	   	where PROD_SRC_ID = srcId;
	   return var;  
	End;  
$$;


Create or replace function getProductToProductLinks(srcId int) 
	returns TABLE (PROD_NAME varchar) language plpgsql as  
$$
	Begin  
	   return (select PROD_NAME from ProductToProductLink 
			   		INNER JOIN Product ON SRC_PROD_ID = PROD_ID
			   		where PROD_SRC_ID = srcId);
	End;  
$$; 

-- Inserts

INSERT INTO ProductToProductLink(PROD_SRC_ID, PROD_DEST_ID, PROD_TO_PROD_Description)
VALUES (1, 2, 'Product 1 is linked to Product 2'),
       (2, 3, 'Product 2 is linked to Product 3'),
       (3, 4, 'Product 3 is linked to Product 4'),
       (4, 5, 'Product 4 is linked to Product 5'),
       (5, 6, 'Product 5 is linked to Product 6'),
       (6, 7, 'Product 6 is linked to Product 7'),
       (7, 8, 'Product 7 is linked to Product 8'),
       (8, 9, 'Product 8 is linked to Product 9'),
       (9, 10, 'Product 9 is linked to Product 10'),
       (10, 1, 'Product 10 is linked to Product 1');













-- Ingredients Table

DROP TABLE IF EXISTS Ingredient CASCADE;

CREATE TABLE Ingredient (
    ING_ID SERIAL NOT NULL,
    ING_Description VARCHAR (300) NOT NULL,
    ING_TotalQuantity DECIMAL(5,3) NOT NULL,
    ING_Unit VARCHAR (10) NOT NULL,

    PRIMARY KEY (ING_ID)
);

-- Functions

Create or replace FUNCTION getIngredientCount() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select count(*) into var from Ingredient; 
	   return var;  
	End;  
$$; 

Create or replace FUNCTION getIngredientUnitCount() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select COUNT(DISTINCT ING_Unit) into var from Ingredient; 
	   return var;  
	End;  
$$;  

Create or replace FUNCTION getIngredientTotalQuantity() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select SUM(ING_TotalQuantity) into var from Ingredient; 
	   return var;  
	End;  
$$;  

-- Inserts

INSERT INTO Ingredient(ING_ID, ING_Description, ING_TotalQuantity, ING_Unit)
VALUES (1, 'Ingredient 1 Description', 100.00, 'kg'),
       (2, 'Ingredient 2 Description', 200.00, 'kg'),
       (3, 'Ingredient 3 Description', 150.00, 'kg'),
       (4, 'Ingredient 4 Description', 80.00, 'kg'),
       (5, 'Ingredient 5 Description', 120.00, 'kg'),
       (6, 'Ingredient 6 Description', 160.00, 'kg'),
       (7, 'Ingredient 7 Description', 90.00, 'kg'),
       (8, 'Ingredient 8 Description', 180.00, 'kg'),
       (9, 'Ingredient 9 Description', 202.00, 'kg'),
       (10, 'Ingredient 10 Description', 145.00, 'kg');










-- Ingredients to Product Table

DROP TABLE IF EXISTS ProductToIngredient CASCADE;

CREATE TABLE ProductToIngredient (
    ING_ID INT NOT NULL,
    PROD_ID INT NOT NULL,
	PRODTOING_unit VARCHAR (20) NOT NULL,
	PRODTOING_Quantity  decimal(5,3) NOT NULL,
	PRODTOING_Description  VARCHAR (30) NOT NULL,
	
	PRIMARY KEY (ING_ID,PROD_ID),
	FOREIGN KEY (ING_ID) REFERENCES Product(PROD_ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (PROD_ID) REFERENCES Ingredient(ING_ID)ON UPDATE CASCADE ON DELETE CASCADE
);

-- Views

CREATE VIEW Product_To_Ingredient_Details AS
  SELECT ING_DESCRIPTION, PROD_NAME, PRODTOING_Quantity, PRODTOING_unit, PRODTOING_description
  FROM ProductToIngredient 
  	NATURAL JOIN Product
	NATURAL JOIN Ingredient;

-- Functions

Create  or replace function getProductToIngredientCount(prodId int) returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select count(*) into var from ProductToIngredient where PROD_ID = prodId; 
	   return var;  
	End;  
$$; 

-- Inserts

INSERT INTO ProductToIngredient(ING_ID, PROD_ID, PRODTOING_unit, PRODTOING_Quantity, PRODTOING_Description)
VALUES (1, 1, 'kg', 10.00, 'Product 1 uses Ingredient 1'),
       (2, 2, 'kg', 20.00, 'Product 2 uses Ingredient 2'),
       (3, 3, 'kg', 15.00, 'Product 3 uses Ingredient 3'),
       (4, 4, 'kg', 8.00, 'Product 4 uses Ingredient 4'),
       (5, 5, 'kg', 12.00, 'Product 5 uses Ingredient 5'),
       (6, 6, 'kg', 16.00, 'Product 6 uses Ingredient 6'),
       (7, 7, 'kg', 9.00, 'Product 7 uses Ingredient 7'),
       (8, 8, 'kg', 18.00, 'Product 8 uses Ingredient 8'),
       (9, 9, 'kg', 20.20, 'Product 9 uses Ingredient 9'),
       (10, 10, 'kg', 14.50, 'Product 10 uses Ingredient 10');











-- Employees Table

DROP TABLE IF EXISTS Employee CASCADE; 

CREATE TABLE Employee (
    EMP_ID SERIAL  PRIMARY KEY, --serial for autoincrememt feature
    EMP_FirstName VARCHAR (40) NOT NULL,
	EMP_LastName VARCHAR (40) NOT NULL,
	EMP_WorkingHours INT NOT NULL,
    EMP_Salary DECIMAL(7,2) NOT NULL,
	EMP_MGR_ID INT,
	
    FOREIGN KEY (EMP_MGR_ID) REFERENCES Employee(EMP_ID)
);

-- Views

CREATE VIEW Employee_with_Manager AS
  SELECT e1.EMP_FirstName || ' ' || e1.LastName as EmployeeName, 
  		e1.EMP_WorkingHours, e1.EMP_Salary, e2.EMP_FirstName || ' ' || e2.EMP_LastName as EmployeeName
  FROM Employee e1 INNER JOIN Employee e2
  			ON e1.EMP_MGR_ID = e2.EMP_ID;


-- Inserts

INSERT INTO Employee(EMP_ID, EMP_FirstName, EMP_LastName, EMP_WorkingHours, EMP_Salary, EMP_MGR_ID)
VALUES (1, 'John', 'Doe', 40, 70000.00, null),
       (2, 'Jane', 'Doe', 40, 80000.00, 1),
       (3, 'Mark', 'Smith', 40, 75000.00, 1),
       (4, 'Linda', 'Johnson', 40, 85000.00, 2),
       (5, 'David', 'Williams', 40, 90000.00, 2),
       (6, 'Lisa', 'Brown', 40, 95000.00, 3),
       (7, 'Michael', 'Jones', 40, 80000.00, 3),
       (8, 'Laura', 'Miller', 40, 85000.00, 4),
       (9, 'Richard', 'Davis', 40, 90000.00, 4),
       (10, 'Mary', 'Garcia', 40, 95000.00, 5);











-- User Accounts Table

DROP TABLE IF EXISTS UserAccount CASCADE; 

CREATE TABLE UserAccount (
	USR_ID INT NOT NULL PRIMARY KEY,
	USR_Email VARCHAR (30) NOT NULL,
	USR_Password VARCHAR (30) NOT NULL,
	USR_Role VARCHAR (40) NOT NULL,
	EMP_ID INT, 
	
	FOREIGN KEY (EMP_ID) REFERENCES Employee(EMP_ID)
);

-- Views

CREATE VIEW UserAccount_with_Employee AS
  SELECT USR_Email, USR_Role, EMP_FirstName || ' ' || EMP_LastName as EmployeeName
  FROM UserAccount NATURAL JOIN Employee;
	
-- Inserts

INSERT INTO UserAccount(USR_ID, USR_Email, USR_Password, USR_Role, EMP_ID)
VALUES (1, 'john.doe@example.com', 'john123', 'Manager', 1),
       (2, 'jane.doe@example.com', 'jane123', 'Employee', 2),
       (3, 'mark.smith@example.com', 'mark123', 'Employee', 3),
       (4, 'linda.johnson@example.com', 'linda123', 'Employee', 4),
       (5, 'david.williams@example.com', 'david123', 'Manager', 5),
       (6, 'lisa.brown@example.com', 'lisa123', 'Employee', 6),
       (7, 'michael.jones@example.com', 'michael123', 'Employee', 7),
       (8, 'laura.miller@example.com', 'laura123', 'Employee', 8),
       (9, 'richard.davis@example.com', 'richard123', 'Manager', 9),
       (10, 'mary.garcia@example.com', 'mary123', 'Employee', 10);
	
	
	
	
	
	
	
	
	
	
	
	
-- Store Locations Table

DROP TABLE IF EXISTS StoreLocation CASCADE;

CREATE TABLE StoreLocation (
	STORE_LOC_ID INT NOT NULL,
    STORE_LOC_Title VARCHAR(100) NOT NULL,
    STORE_LOC_Description VARCHAR (300) NOT NULL,
    STORE_LOC_Address VARCHAR (200) NOT NULL,
    STORE_LOC_Latitude decimal(8,6) NOT NULL,
	STORE_LOC_Longitude decimal(9,6) NOT NULL,

    PRIMARY KEY (STORE_LOC_ID)
);

-- Functions

Create or replace function getStoreLocationCount() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select count(*) into var from StoreLocation; 
	   return var;  
	End;  
$$; 

-- Inserts

INSERT INTO StoreLocation(STORE_LOC_ID, STORE_LOC_Title, STORE_LOC_Description, STORE_LOC_Address, STORE_LOC_Latitude, STORE_LOC_Longitude)
VALUES (1, 'Store 1', 'Store 1 Description', 'Store 1 Address', 51.5074, -0.1278),
       (2, 'Store 2', 'Store 2 Description', 'Store 2 Address', 52.5200, 13.4050),
       (3, 'Store 3', 'Store 3 Description', 'Store 3 Address', 48.8566, 2.3522),
       (4, 'Store 4', 'Store 4 Description', 'Store 4 Address', 40.7128, -74.0060),
       (5, 'Store 5', 'Store 5 Description', 'Store 5 Address', 34.0522, -118.2437),
       (6, 'Store 6', 'Store 6 Description', 'Store 6 Address', 41.8781, -87.6298),
       (7, 'Store 7', 'Store 7 Description', 'Store 7 Address', 35.6895, 139.6917),
       (8, 'Store 8', 'Store 8 Description', 'Store 8 Address', 51.9225, 4.47917),
       (9, 'Store 9', 'Store 9 Description', 'Store 9 Address', 43.6532, -79.3832),
       (10, 'Store 10', 'Store 10 Description', 'Store 10 Address', 37.7749, -122.4194);













-- Inventory Transactions Table

DROP TABLE IF EXISTS InventoryTransaction CASCADE;

CREATE TABLE InventoryTransaction (
    INV_TRANS_ID INT NOT NULL,
    STORE_LOC_ID INT NOT NULL,
	PROD_ID INT NOT NULL,
	EMP_ID INTEGER  NOT NULL,
	INV_TRANS_Description VARCHAR (300),
	INV_TRANS_QualityChange INTEGER  NOT NULL,
	
	PRIMARY KEY (INV_TRANS_ID),
	FOREIGN KEY (STORE_LOC_ID) REFERENCES StoreLocation(STORE_LOC_ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (PROD_ID) REFERENCES Product(PROD_ID)ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (EMP_ID) REFERENCES Employee(EMP_ID) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Views

CREATE VIEW InventoryTransaction_with_Details AS
  SELECT INV_TRANS_ID, STORE_LOC_Title, PROD_Name, EMP_FirstName || ' ' || EMP_LastName as EmployeeName
  FROM InventoryTransaction 
  	NATURAL JOIN Product
	NATURAL JOIN StoreLocation
	NATURAL JOIN Employee;

-- Inserts

INSERT INTO InventoryTransaction(INV_TRANS_ID, STORE_LOC_ID, PROD_ID, INV_TRANS_Description, INV_TRANS_QualityChange)
VALUES (1, 1, 1, 'Inventory Transaction 1 Description', 10),
       (2, 2, 2, 'Inventory Transaction 2 Description', 20),
       (3, 3, 3, 'Inventory Transaction 3 Description', 15),
       (4, 4, 4, 'Inventory Transaction 4 Description', 8),
       (5, 5, 5, 'Inventory Transaction 5 Description', 12),
       (6, 6, 6, 'Inventory Transaction 6 Description', 16),
       (7, 7, 7, 'Inventory Transaction 7 Description', 9),
       (8, 8, 8, 'Inventory Transaction 8 Description', 18),
       (9, 9, 9, 'Inventory Transaction 9 Description', 20),
       (10, 10, 10, 'Inventory Transaction 10 Description', 14);












-- Content Pages Table

DROP TABLE IF EXISTS ContentPage CASCADE; 

CREATE TABLE ContentPage (
	CONTENTPAGE_ID INT NOT NULL,
    CONTENTPAGE_Title VARCHAR(100) NOT NULL,
    CONTENTPAGE_Description VARCHAR (500) NOT NULL,

    PRIMARY KEY (CONTENTPAGE_ID)
);

-- Functions

Create or replace function getContentPageCount() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select count(*) into var from getContentPageCount; 
	   return var;  
	End;  
$$; 

Create or replace function getContentPageTotalSize() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select SUM(Lengths) into var from (SELECT LEN(Description) as Lengths from ContentPage ); 
	   return var;  
	End;  
$$;  

-- Inserts

INSERT INTO ContentPage(CONTENTPAGE_ID, CONTENTPAGE_Title, CONTENTPAGE_Description)
VALUES (1, 'Page 1', 'Page 1 Description'),
       (2, 'Page 2', 'Page 2 Description'),
       (3, 'Page 3', 'Page 3 Description'),
       (4, 'Page 4', 'Page 4 Description'),
       (5, 'Page 5', 'Page 5 Description'),
       (6, 'Page 6', 'Page 6 Description'),
       (7, 'Page 7', 'Page 7 Description'),
       (8, 'Page 8', 'Page 8 Description'),
       (9, 'Page 9', 'Page 9 Description'),
       (10, 'Page 10', 'Page 10 Description');














-- Content Items Table

DROP TABLE IF EXISTS ContentItem CASCADE; 

CREATE TABLE ContentItem (
	CONTENTITEM_ID INT NOT NULL,
	CONTENTITEM_OrderIndex INT NOT NULL,
	CONTENTITEM_Type VARCHAR (100) NOT NULL,
	CONTENTITEM_Code varchar (2000),
	CONTENTPAGE_ID INT,

    PRIMARY KEY (CONTENTITEM_ID),
	FOREIGN KEY (CONTENTPAGE_ID) REFERENCES ContentPage( CONTENTPAGE_ID) ON UPDATE CASCADE ON DELETE CASCADE
);

-- Functions

Create or replace function getContentItem() returns int language plpgsql as  
$$  
	Declare var integer;  
	Begin  
	   select count(*) into var from Product; 
	   return var;  
	End;  
$$;

-- Inserts

INSERT INTO ContentItem(CONTENTITEM_ID, CONTENTITEM_OrderIndex, CONTENTITEM_Type, CONTENTITEM_Code, CONTENTPAGE_ID)
VALUES (1, 1, 'Text', 'Text Content 1', 1),
       (2, 2, 'Image', 'Image Content 2', 2),
       (3, 3, 'Video', 'Video Content 3', 3),
       (4, 4, 'Text', 'Text Content 4', 4),
       (5, 5, 'Image', 'Image Content 5', 5),
       (6, 6, 'Video', 'Video Content 6', 6),
       (7, 7, 'Text', 'Text Content 7', 7),
       (8, 8, 'Image', 'Image Content 8', 8),
       (9, 9, 'Video', 'Video Content 9', 9),
       (10, 10, 'Text', 'Text Content 10', 10);


