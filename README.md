# Digitalization-of-the-Hospitality-Process


### Description
This web application is designed to digitalize the hospitality process for group accommodations, particularly in hostels. The application allows users to upload CSV files containing group and hostel information, processes these files, and allocates rooms based on predefined criteria. The system ensures efficient room assignments while keeping groups together, adhering to gender-specific hostel rules, and not exceeding room capacities.

### Project Structure and Logic

1. **Setup and Initialization**:
   - **Node.js Installation**: Node.js is required as the runtime environment for the application.
   - **Project Directory Creation**: A new directory is created to organize the project files.
   - **Node.js Project Initialization**: The `npm init -y` command initializes a new Node.js project, creating a `package.json` file to manage dependencies and project metadata.

2. **Required Packages Installation**:
   - **Express**: A web framework for building the server-side logic.
   - **Multer**: A middleware for handling multipart/form-data, which is used for file uploads.
   - **CSV-Parser**: A module to parse CSV files, allowing the application to read and process the uploaded files.
   - **EJS**: A templating engine to render HTML pages dynamically based on the data processed by the server.

3. **Project Structure**:
   - **Directories**: 
     - `public/uploads`: Stores uploaded CSV files.
     - `views`: Contains EJS templates for rendering HTML pages.
     - `routes`: Contains route handlers for managing application endpoints.
   - **Files**:
     - `app.js`: Main application file that sets up the server and defines middleware.
     - `upload.js`: Defines routes and logic for handling file uploads and processing.

4. **Main Application (`app.js`)**:
   - **Express Setup**: Initializes the Express app and sets the view engine to EJS.
   - **Static Files Handling**: Serves static files from the `public` directory.
   - **Routes Integration**: Imports and uses routes defined in `upload.js`.

5. **File Upload and Processing (`upload.js`)**:
   - **Multer Configuration**: Configures storage and file naming conventions for uploaded files, and sets file type and size restrictions.
   - **CSV Parsing**: Reads and parses uploaded CSV files containing group and hostel information.
   - **Room Allocation Logic**: Implements a function to allocate rooms based on group size, gender-specific hostels, and room capacities. This function processes the parsed data and generates the allocation results.

6. **Template Rendering (`index.ejs`)**:
   - **Form for File Uploads**: Provides a user interface for uploading CSV files.
   - **Display Results**: Shows the allocation results after processing the uploaded files, including group IDs, hostel names, room numbers, and the number of members allocated.

7. **Running the Application**:
   - **Server Start**: The application server is started using the `node app.js` command.
   - **User Interaction**: Users can access the application via a web browser, upload their CSV files, and view the allocation results.

### Allocation Logic
The core of the application is the room allocation logic. The `allocateRooms` function ensures that:
- Groups are kept together.
- Gender-specific hostels are adhered to.
- Room capacities are not exceeded.

The function reads the group and hostel information from the uploaded CSV files, processes this data, and generates a list of room assignments that meet the specified criteria.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## Objective
Develop a web application to facilitate digitalizing the hospitality process for group accommodation. The application allows users to upload two CSV files to efficiently allocate rooms in hostels, ensuring group members with the same ID stay together while adhering to hostel capacities and gender-specific accommodations.

## Features
- **Upload CSV Files:** Users can upload two CSV files—one containing group information and another containing hostel information.
- **Room Allocation Algorithm:** An algorithm allocates rooms based on group IDs, gender-specific hostels, and room capacities.
- **Display Allocations:** The application displays the allocated rooms, indicating which group members are in which room.
- **Downloadable CSV:** Users can download a CSV file with the room allocation details.

## Project Structure
```
project
├── node_modules
├── project-directory
│   ├── public
│   ├── routes
│   │   └── upload.js
│   ├── views
│   │   └── index.ejs
├── app.js
├── package-lock.json
├── package.json
```

## Logic
1. **CSV File Upload:** Users upload two CSV files—one for group information and one for hostel information.
2. **Parsing CSV Files:** The application parses the CSV files to extract group and hostel information.
3. **Room Allocation Algorithm:**
   - Groups are allocated rooms based on their size and gender.
   - Members of the same group are placed in the same room as much as possible.
   - Boys and girls are placed in their respective hostels.
   - Room capacity is not exceeded.
4. **Display Allocations:** The application displays the allocation results on the frontend.
5. **Download CSV:** Users can download the allocation details as a CSV file.

## Instructions to Run the Application

1. **Clone the Repository:**
   Open your terminal or command prompt and run the following command to clone the repository:
   ```bash
   git clone https://github.com/Satyacoddy/Digitalization-of-the-Hospitality-Process.git
   cd Digitalization-of-the-Hospitality-Process
   ```

2. **Open in Visual Studio Code:**
   Open Visual Studio Code and navigate to the cloned repository directory.

3. **Install Dependencies:**
   Make sure you have Node.js installed. Then, open the terminal in VS Code and run:
   ```bash
   npm install
   ```

4. **Run the Application:**
   In the VS Code terminal, start the application by running:
   ```bash
   node app.js
   ```

5. **Access the Application:**
   Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage
1. **Upload CSV Files:** On the homepage, upload the `Group Information` CSV file and the `Hostel Information` CSV file.
2. **View Allocations:** Click on the button to allocate rooms. The allocations will be displayed on the screen.
3. **Download CSV:** Click the download button to save the allocation details as a CSV file.

## Example
- **Group Information CSV:**
  ```csv
  Group ID,Members,Gender
  101,3,Boys
  102,4,Girls
  103,2,Boys
  104,5,Girls
  105,8,5 Boys & 3 Girls
  ```
- **Hostel Information CSV:**
  ```csv
  Hostel Name,Room Number,Capacity,Gender
  Boys Hostel A,101,3,Boys
  Boys Hostel A,102,4,Boys
  Girls Hostel B,201,2,Girls
  Girls Hostel B,202,5,Girls
  ```

## Repository Link
[Digitalization of the Hospitality Process](https://github.com/Satyacoddy/Digitalization-of-the-Hospitality-Process.git)

---
