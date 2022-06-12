# shared-sauce-cake
## Quickstart (after cloning this project)
1. Open this project with your favorite editor(IDE), eg: Visual Studio Code
2. Run the command (to install the node_modules): npm install
3. (optional) Copy the .env.example, create a new file, name ".env"  in root folder (the same level with .env.example)
4. Create the database: open Mysql Workbench or PHP myadmin or any database management system, run the "database.sql" in the "database" folder.
   It will automatically create a new schema, name "doctorcare" in your database.
5. Update the .env file
- If you use "no-password" to login to your database, this variable "DB_PASSWORD" will be blank, otherwise, provide your password.
Default, I use the root account. If you use other accounts, change the "DB_USERNAME" variable.
6. To run this app, use the command: npm start
7. Explore the web!
8. To log in, check database for all email, and the default password for all is: 123456

Have a nice day!
Credit: HaryPhamDev
