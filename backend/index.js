const express= require("express");
const app= express();
const cors = require("cors");
const pool= require("./db");
app.use(cors());
app.use(express.json());
app.listen(5001,() => {
    console.log("server has started on port 5001")
});

// get all products ordered by name

app.get("/product", async (req, res) => {
    try{
        const product = await pool.query("SELECT PROD_ID, PROD_Name,PROD_Price,PROD_TotalQuantity,PROD_TotalValue ,PROD_Description FROM Product ORDER BY PROD_NAME");
        res.json(product.rows);
    }
    catch(err){
        console.error(err.message);
    }
})

//delete product

app.delete("/product/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        await pool.query(" DELETE FROM Product WHERE PROD_ID = $1",[
            id
        ])
        res.json("Product was deleted");
    }
    catch(err){
        console.error("error");
    }
})

//create product
app.post("/product", async (req, res) => {
    try {
        const { PROD_ID, PROD_Name, PROD_Price, PROD_TotalQuantity, PROD_Description, PROD_TotalValue } = req.body;
        const newproduct = await pool.query("INSERT INTO Product (PROD_ID, PROD_Name, PROD_Price, PROD_TotalQuantity, PROD_Description, PROD_TotalValue) VALUES ($1,$2,$3,$4,$5,$6) returning *",[
            PROD_ID, PROD_Name, PROD_Price, PROD_TotalQuantity, PROD_Description, PROD_TotalValue
        ]);
        res.json(newproduct.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// get  products by id 

app.get("/product/:id", async (req, res) =>{
    try{
        const { id } = req.params;
        const todo = await pool.query(" SELECT PROD_ID, PROD_Name,PROD_Price,PROD_TotalQuantity,PROD_TotalValue ,PROD_Description FROM Product WHERE PROD_ID=$1", [
            id
        ]); 
        res.json(todo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
})


//get the average total value of products 
app.get("/product/avgtotalvalue", async (req, res) => {
    try {
        const result = await pool.query('SELECT getProductAverageTotalValue()');
        res.json(result.rows[0].getProductAverageTotalValue);
    } catch (err) {
        console.error(err.message);
    }
});

//get the total value of products 
app.get("/product/totalvalue", async (req, res) => {
    try {
        const result = await pool.query('SELECT getProductTotalValue()');
        res.json(result.rows[0].getProductTotalValue);
    } catch (err) {
        console.error(err.message);
    }
});

//get the total quantity of products 
app.get("/product/totalquantity", async (req, res) => {
    try {
        const result = await pool.query('SELECT getProductTotalQuantity()');
        res.json(result.rows[0].getProductTotalQuantity);
    } catch (err) {
        console.error(err.message);
    }
});

//get the count of products 
app.get("/product/count", async (req, res) => {
    try {
        const result = await pool.query('SELECT getProductCount()');
        res.json(result.rows[0].getProductCount);
    } catch (err) {
        console.error(err.message);
    }
});

// update a product

app.put("/product/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        const { PROD_Name,PROD_Price,PROD_TotalQuantity,PROD_TotalValue ,PROD_Description } = req.body;
        if (PROD_Name) {
            await pool.query("update Product set PROD_Name = $2 WHERE PROD_ID = $1",[
                id, PROD_Name
            ])
        }
        if (PROD_TotalQuantity) {
            await pool.query("update Product set PROD_TotalQuantity = $2 WHERE PROD_ID = $1",[
                id, PROD_TotalQuantity
            ])
        }
        if (PROD_Price) {
            await pool.query("update Product set PROD_Price = $2 WHERE PROD_ID = $1",[
                id, PROD_Price
            ])
        }
        if (PROD_TotalValue) {
            await pool.query("update Product set PROD_TotalValue = $2 WHERE PROD_ID = $1",[
                id, PROD_TotalValue
            ])
        }
        if (PROD_Description) {
            await pool.query("update Product set PROD_Description = $2 WHERE PROD_ID = $1",[
                id, PROD_Description
            ])
        }
        res.json("Product was updated");
    }
    catch(err){
        console.error(err.message);
    }
})


//get the ingredients 
app.get("/ingredient", async (req, res) => {
    try{
        const product = await pool.query("SELECT ING_ID,ING_Description,ING_TotalQuantity,ING_Unit FROM Ingredient ");
        res.json(Ingredient.rows);
    }
    catch(err){
        console.error(err.message);
    }
})
//get the count of ingredients 
app.get("/ingredient", async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM INGREDIENT');
        res.json(result.rows[0].count);
    } catch (err) {
        console.error(err.message);
    }
});
//delete ingredient

app.delete("/ingredient/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        await pool.query(" DELETE FROM Ingredient WHERE ING_ID = $1",[
            id
        ])
        res.json("Ingredient was deleted");
    }
    catch(err){
        console.error("error");
    }
})

//create Ingredient
app.post("/ingredient", async (req, res) => {
    try {
        const { ING_ID, ING_Description, ING_TotalQuantity, ING_Unit } = req.body;
        const newingredient = await pool.query("INSERT INTO Product (ING_ID, ING_Description, ING_TotalQuantity, ING_Unit) VALUES ($1,$2,$3,$4) returning *",[
            ING_ID, ING_Description, ING_TotalQuantity, ING_Unit
        ]);
        res.json(newingredient.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// get  ingredients by id 

app.get("/ingredient/:id", async (req, res) =>{
    try{
        const { id } = req.params;
        const todo = await pool.query(" SELECT ING_ID,ING_Description,ING_TotalQuantity,ING_Unit FROM Ingredient WHERE ING_ID=$1", [
            id
        ]); 
        res.json(todo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
})

// update ingredient

app.put("/ingredient/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        const {ING_Description, ING_TotalQuantity, ING_Unit } = req.body;

        if (ING_TotalQuantity) {
            await pool.query("update ingredient set ING_TotalQuantity = $2 WHERE ING_ID = $1",[
                id, ING_TotalQuantity
            ])
        }
        if (ING_Description) {
            await pool.query("update ingredient set ING_Description = $2 WHERE ING_ID = $1",[
                id, ING_Description
            ])
        }
        if (ING_Unit) {
            await pool.query("update ingredient set ING_Unit = $2 WHERE ING_ID = $1",[
                id, ING_Unit
            ])
        }
        res.json("Ingredient was updated");
    }
    catch(err){
        console.error(err.message);
    }
})


// get all employees ALONG WITH THEIR MANAGERS 

app.get("/employee", async (req, res) => {
    try{
        const employee = await pool.query(" SELECT e1.emp_id, e1.EMP_FirstName || ' ' || e1.emp_LastName as EmployeeName,  e1.EMP_WorkingHours, e1.EMP_Salary, e2.EMP_FirstName || ' ' || e2.EMP_LastName as ManagerName FROM Employee e1 INNER JOIN Employee e2 ON e1.EMP_MGR_ID = e2.EMP_ID;");
        res.json(employee.rows);
    }
    catch(err){
        console.error(err.message);
    }
})

//get the total hours worked of employees
app.get("/employee/totalhrsworked", async (req, res) => {
    try {
        const result = await pool.query('SELECT SUM(EMP_WorkingHours)  as res FROM EMPLOYEE');
        res.json(result.rows[0].res);
    } catch (err) {
        console.error(err.message);
    }
});

//get the total salary of employees
app.get("/employee/totalsalary", async (req, res) => {
    try {
        const result = await pool.query('SELECT SUM(EMP_Salary) as res  FROM EMPLOYEE');
        res.json(result.rows[0].res);
    } catch (err) {
        console.error(err.message);
    }
});

//get the average salary of employees
app.get("/employee/avgsalary", async (req, res) => {
    try {
        const result = await pool.query('SELECT AVG(EMP_Salary) as res FROM EMPLOYEE');
        res.json(result.rows[0].res);
    } catch (err) {
        console.error(err.message);
    }
});

//get the count of employees
app.get("/employee/count", async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM EMPLOYEE');
        res.json(result.rows[0].count);
    } catch (err) {
        console.error(err.message);
    }
});

//delete employee

app.delete("/employee/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        
        await pool.query(" DELETE FROM UserAccount WHERE USR_Id = $1", [
            id
        ])
        await pool.query(" DELETE FROM employee WHERE EMP_id = $1",[
            id
        ])
        res.json("Employee was deleted successfully!");
    }
    catch(err){
        console.error("error", err);
        res.json("Employee could not be deleted since they are a manager!");

    }
})

//create employee
app.post("/employee", async (req, res) => {
    try {
        const { emp_firstname, emp_lastname, emp_workingHours, emp_salary, emp_mgr_id } = req.body;
        console.log(emp_firstname, emp_lastname, emp_workingHours, emp_salary, emp_mgr_id)
        console.log(req.body)
        const newemployee = await pool.query("INSERT INTO Employee (EMP_FirstName, EMP_LastName, EMP_WorkingHours, EMP_Salary, EMP_MGR_ID) VALUES ($1,$2,$3,$4,$5) returning *",[
            emp_firstname, emp_lastname, emp_workingHours, emp_salary, emp_mgr_id 
        ]);
        res.json(newemployee.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// get  employees by id 

app.get("/employee/:id", async (req, res) =>{
    try{
        const { id } = req.params;
        const todo = await pool.query("  SELECT e1.EMP_FirstName || ' ' || e1.emp_lastName as EmployeeName, e1.EMP_WorkingHours, e1.EMP_Salary, e2.EMP_FirstName || ' ' || e2.EMP_LastName as EmployeeName FROM Employee e1 INNER JOIN Employee e2 ON e1.EMP_MGR_ID = e2.EMP_ID where session_id =$1", [
            id
        ]); 
        res.json(todo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
})

// update employee

app.put("/employee/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        const { EMP_FirstName, EMP_LastName, EMP_WorkingHours, EMP_Salary,EMP_MGR_ID } = req.body;
        if (EMP_FirstName) {
            await pool.query("update employee set EMP_FirstName = $2 WHERE EMP_ID = $1",[
                id, EMP_FirstName
            ])
        }
        if (EMP_LastName) {
            await pool.query("update employee set EMP_LastName = $2 WHERE EMP_ID = $1",[
                id, EMP_LastName
            ])
        }
        if (EMP_WorkingHours) {
            await pool.query("update employee set EMP_WorkingHours = $2 WHERE EMP_ID = $1",[
                id,EMP_WorkingHours
            ])
        }
        if (EMP_Salary) {
            await pool.query("update employee set EMP_Salary = $2 WHERE EMP_ID = $1",[
                id, EMP_Salary
            ])
        }
        if (EMP_MGR_ID) {
            await pool.query("update employee set EMP_MGR_ID = $2 WHERE EMP_ID = $1",[
                id, EMP_MGR_ID
            ])
        }
        res.json("Employee was updated");
    }
    catch(err){
        console.error(err.message);
    }
})


// get all STORE LOCATIONS

app.get("/StoreLocation", async (req, res) => {
    try{
        const StoreLocation = await pool.query("SELECT STORE_LOC_ID, STORE_LOC_Title, STORE_LOC_Description, STORE_LOC_Address, STORE_LOC_Latitude, STORE_LOC_Longitude FROM StoreLocation");
        res.json(StoreLocation.rows);
    }
    catch(err){
        console.error(err.message);
    }
})

//get the count of locations
app.get("/StoreLocation", async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM STORELOCATION');
        res.json(result.rows[0].count);
    } catch (err) {
        console.error(err.message);
    }
});
//delete STORE LOCATION

app.delete("/StoreLocation/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        await pool.query(" DELETE FROM StoreLocation WHERE STORE_LOC_ID = $1",[
            id
        ])
        res.json("Location was deleted");
    }
    catch(err){
        console.error("error");
    }
})

//create store location
app.post("/StoreLocation", async (req, res) => {
    try {
        const { STORE_LOC_ID, STORE_LOC_Title, STORE_LOC_Description, STORE_LOC_Address, STORE_LOC_Latitude, STORE_LOC_Longitude } = req.body;
        const newlocation = await pool.query("INSERT INTO StoreLocation (STORE_LOC_ID, STORE_LOC_Title, STORE_LOC_Description, STORE_LOC_Address, STORE_LOC_Latitude, STORE_LOC_Longitude ) VALUES ($1,$2,$3,$4,$5,$6) returning *",[
            STORE_LOC_ID, STORE_LOC_Title, STORE_LOC_Description, STORE_LOC_Address, STORE_LOC_Latitude, STORE_LOC_Longitude 
        ]);
        res.json(newlocation.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// get  location by id 

app.get("/StoreLocation/:id", async (req, res) =>{
    try{
        const { id } = req.params;
        const todo = await pool.query("SELECT STORE_LOC_ID, STORE_LOC_Title, STORE_LOC_Description, STORE_LOC_Address, STORE_LOC_Latitude, STORE_LOC_Longitude FROM StoreLocation where STORE_LOC_ID=$1", [
            id
        ]); 
        res.json(todo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
})

app.put("/StoreLocation/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        const { STORE_LOC_Title, STORE_LOC_Description, STORE_LOC_Address, STORE_LOC_Latitude, STORE_LOC_Longitude} = req.body;
        if (STORE_LOC_Title) {
            await pool.query("update StoreLocation set STORE_LOC_Title = $2 WHERE STORE_LOC_ID = $1",[
                id, STORE_LOC_Title
            ])
        }
        if (STORE_LOC_Description) {
            await pool.query("update StoreLocation set STORE_LOC_Description = $2 WHERE STORE_LOC_ID  = $1",[
                id, STORE_LOC_Description
            ])
        }
        if (STORE_LOC_Address) {
            await pool.query("update StoreLocation set STORE_LOC_Address = $2 WHERE STORE_LOC_ID  = $1",[
                id,STORE_LOC_Address
            ])
        }
        if (STORE_LOC_Latitude) {
            await pool.query("update StoreLocation set STORE_LOC_Latitude = $2 WHERE STORE_LOC_ID  = $1",[
                id, STORE_LOC_Latitude
            ])
        }
        if ( STORE_LOC_Longitude) {
            await pool.query("update StoreLocation set  STORE_LOC_Longitude = $2 WHERE STORE_LOC_ID  = $1",[
                id,  STORE_LOC_Longitude
            ])
        }
        res.json("Location was updated");
    }
    catch(err){
        console.error(err.message);
    }
})


// get transaction details :
app.get("/InventoryTransaction", async (req, res) => {
    try{
        const InventoryTransaction = await pool.query(" SELECT INV_TRANS_ID, STORE_LOC_Title, PROD_Name, EMP_FirstName || ' ' || EMP_LastName as EmployeeName FROM InventoryTransaction NATURAL JOIN Product NATURAL JOIN StoreLocation NATURAL JOIN Employee;");
        res.json(InventoryTransaction.rows);
    }
    catch(err){
        console.error(err.message);
    }
})

//get the count of transactions
app.get("/InventoryTransaction", async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(*) FROM InventoryTransaction');
        res.json(result.rows[0].count);
    } catch (err) {
        console.error(err.message);
    }
});
//delete transaction

app.delete("/InventoryTransaction/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        await pool.query(" DELETE FROM InventoryTransaction WHERE INV_TRANS_ID = $1",[
            id
        ])
        res.json("Transaction was deleted");
    }
    catch(err){
        console.error("error");
    }
})

//create transaction
app.post("/InventoryTransaction", async (req, res) => {
    try {
        const { INV_TRANS_ID, STORE_LOC_ID, PROD_ID, INV_TRANS_Description, INV_TRANS_QualityChange } = req.body;
        const newtransaction = await pool.query("INSERT INTO InventoryTransaction (INV_TRANS_ID, STORE_LOC_ID, PROD_ID, INV_TRANS_Description, INV_TRANS_QualityChange) VALUES ($1,$2,$3,$4,$5) returning *",[
            INV_TRANS_ID, STORE_LOC_ID, PROD_ID, INV_TRANS_Description, INV_TRANS_QualityChange
        ]);
        res.json(newtransaction.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// get transaction details by id 

app.get("/InventoryTransaction/:id", async (req, res) =>{
    try{
        const { id } = req.params;
        const todo = await pool.query(" SELECT INV_TRANS_ID, STORE_LOC_Title, PROD_Name, EMP_FirstName || ' ' || EMP_LastName as EmployeeName FROM InventoryTransaction     NATURAL JOIN Product  NATURAL JOIN StoreLocation  NATURAL JOIN Employee where INV_TRANS_ID =$1", [
            id
        ]); 
        res.json(todo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
})

//update transaction
app.put("/InventoryTransaction/:id" , async (req, res) => {
    try{
        const { id } = req.params;
        const { INV_TRANS_Description, INV_TRANS_QualityChange } = req.body;
        if (INV_TRANS_Description) {
            await pool.query("update InventoryTransaction set INV_TRANS_Description = $2 WHERE INV_TRANS_ID = $1",[
                id, INV_TRANS_Description
            ])
        }
        if (INV_TRANS_QualityChange) {
            await pool.query("update InventoryTransaction set INV_TRANS_QualityChange = $2 WHERE INV_TRANS_ID  = $1",[
                id, INV_TRANS_QualityChange
            ])
        }
        res.json("Transaction was updated");
    }
    catch(err){
        console.error(err.message);
    }
})