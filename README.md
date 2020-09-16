
# 1. Technology Overview
1. MongoDB
2. Express.js
3. React.js
4. Node.js
5. Google APIs

# 2. Architecture
### 1) Front-end (React.js - component tree)
<img src="/front-end-architecture.PNG" width="60%"/>


### 2) Back-end (Express.js + Node.js + MongoDB)
<img src="/back-end-architecture.PNG" width="60%"/>

# 3. To run the application
### You need to install depenencie & packages first, run "npm i" in frontend and backend folders
1. Go to /frontend/my-app and run "npm start"
2. Go to /backend and run "node server.js" or "nodemon server start"
3. Go to your browser and the app is running at http://localhost:3000/

### 1) User Credentials
1. To login as a student, use ID = student1 and PASSWORD = student1
2. To login as a recruiter, use ID = recruiter2 and PASSWORD = recruiter2

### 2) Features
#### A. Students
  - Create and update profile
  - Upload a pdf resume to a job
  - Write a review of a company
  - View jobs, sort jobs by deadline date, etc.
  - View applications
  - View jobs on Google Maps
#### B. Recruiters
  - Create and update profile
  - Post and delete a job
  - View applicants with their resumes
  - View jobs, sort jobs by deadline date, etc.
### 3) Functionalities
  - Form Validation
  - Responsive Design
  - Navigation State Update
  - Google Maps Search
  - Application Deadline & Document Validation
  
# 4. Case study
While working on this project, I found handling of cookies or login sessions between React components and Node backend server very challenging. React uses states to update changes made in React DOM in the real DOM, and node server uses REST API cals such as GET, POST to handle sessions. In this project, I used a specific attribute of "user" collect, "status" to update React components. This needs to be further investigated to improve security.

## Possible Improvement
- Implement session properly
- Reorganize component tree using Hooks
- Redesign UI
- Improve Form Handling & Validation
- Add more functionalities
  - Job Tracking Dashboard
  - Chat/Message System
  - Student Resource Bank (resume, cover letter, interview tips)

# 5. Demo
## Recruiter
<img src="https://github.com/danlee0528/myBetterExperience/blob/f8a45fe23fcf3bc50a9edf593b37d42b43a5473f/recruiter-demo.gif?raw=true" style="width:100%;"/>

## Student
<img src="https://github.com/danlee0528/myBetterExperience/blob/f8a45fe23fcf3bc50a9edf593b37d42b43a5473f/student-demo.gif?raw=true" style="width:100%;"/>
