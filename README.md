# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
<!-- - for the intersection observer api i need to import it and then have to look for itts implementation then this part is complete then i have to create a landing page for this and have to do the routing then have to integrate it with the main portfolio website then will deploy it soon  -->

<!-- CREATE TABLE RandomData (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(50),
    Age INT,
    Email VARCHAR(100)
);

INSERT INTO RandomData (Name, Age, Email)
VALUES
    ('John Doe', ROUND(RAND() * 50 + 20), 'john@example.com'),
    ('Jane Smith', ROUND(RAND() * 50 + 20), 'jane@example.com'),
    ('Alice Johnson', ROUND(RAND() * 50 + 20), 'alice@example.com'),
    ('Bob Brown', ROUND(RAND() * 50 + 20), 'bob@ex
 -->


 <!-- second question  -->


 <!-- SELECT 
    d.department_name AS Department_Name,
    d.head_of_department AS Head_of_Department,
    d.city AS City,
    e.employee_name AS Employee_Name,
    s.salary_amount AS Highest_Salary
FROM 
    Departments d
JOIN 
    Employees e ON d.department_id = e.department_id
JOIN 
    (SELECT 
         department_id, 
         MAX(salary_amount) AS max_salary 
     FROM 
         Salaries 
     GROUP BY 
         department_id) max_sal ON e.department_id = max_sal.department_id
JOIN 
    Salaries s ON e.employee_id = s.employee_id AND s.salary_amount = max_sal.max_salary;
 -->