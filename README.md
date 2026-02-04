# Experiment 3.1 – Navigation using Link Component (React Router)

## Aim
To implement navigation links in a Single Page Application (SPA) using React Router Link component.

## Tools Used
- ReactJS
- React Router DOM
- HTML, CSS
- Node.js

## Installation Steps

1. Create React App
   npx create-react-app navigation-app

2. Move into project folder
   cd navigation-app

3. Install React Router
   npm install react-router-dom

4. Start the server
   npm start

## Features
- Single Page Application (SPA)
- Navigation without page reload
- Home, About, Contact pages
- Responsive Navbar UI
- Smooth routing using Link component
<img width="1913" height="598" alt="Screenshot 2026-02-03 215743" src="https://github.com/user-attachments/assets/29a5f539-7def-4c78-ba4b-762d6ee7afb9" />
<img width="1887" height="525" alt="Screenshot 2026-02-03 215754" src="https://github.com/user-attachments/assets/29dfbe53-997c-45ec-90c2-473733d02386" />
<img width="1909" height="544" alt="Screenshot 2026-02-03 215811" src="https://github.com/user-attachments/assets/a4ddb898-71f7-481b-9398-29e307cf2132" />

## Project Structure
src/
  components/Navbar.js
  pages/Home.js
  pages/About.js
  pages/Contact.js
  App.js
  App.css
  index.js

## Key Concept
- BrowserRouter → Handles routing
- Routes → Groups routes
- Route → Maps URL to component
- Link → Navigates without refreshing page

## Output
Users can switch between pages smoothly using navigation links without reloading the browser.

## Conclusion
Successfully implemented navigation in a React SPA using React Router Link component.



## Experiment-3.2 Multi-Page SPA using Routing

## Aim
To create a multi-page Single Page Application (SPA) using client-side routing in React.

## Tools Used
- ReactJS
- React Router DOM
- HTML, CSS
- Node.js

## Installation Steps

1. Create React App
   npx create-react-app navigation-app

2. Move into project folder
   cd navigation-app

3. Install React Router
   npm install react-router-dom

4. Start the server
   npm start

## Pages Implemented
- Dashboard → Displays skills
- Profile → Displays photo, name, designation, internship/projects

## Features
- Client-side routing
- Smooth navigation without page reload
- Navbar with links
- Modern responsive UI
- Component-based architecture
  
<img width="1909" height="947" alt="Screenshot 2026-02-03 225745" src="https://github.com/user-attachments/assets/513a42cd-a43e-4024-b5aa-0edcb06e2bd6" />
<img width="1904" height="712" alt="Screenshot 2026-02-03 225800" src="https://github.com/user-attachments/assets/12d3aa6f-bcb3-4071-9de4-19291c0916be" />



## Project Structure
src/
  components/Navbar.js
  pages/Dashboard.js
  pages/Profile.js
  App.js
  App.css
  index.js

## Key Concepts
- BrowserRouter → Handles routing
- Routes → Groups all routes
- Route → Maps URL to component
- Link → Navigation without refresh

## Output
Users can switch between Dashboard and Profile pages smoothly without reloading the browser.

## Conclusion
Successfully implemented a multi-page SPA using React Router for efficient and fast navigation.



## Experiment 3.3  React SPA – My Profile & Dashboard

This project is a Simple Single Page Application (SPA) built using React and React Router.

## Features
- Header with **My Profile** button using `<Link>`
- Client-side routing (no page reload)
- Profile page with:
  - Photo
  - Name
  - Designation
  - Internships
  - Projects
- Dashboard page showing skills
- Clean CSS styling

<img width="1709" height="1000" alt="Screenshot 2026-02-04 100914" src="https://github.com/user-attachments/assets/074ddb16-7ba4-4b37-b184-318d90a9ef3b" />

<img width="863" height="516" alt="Screenshot 2026-02-04 100924" src="https://github.com/user-attachments/assets/8358ccd4-5149-435a-bac3-76f6c2f4a15e" />


## Technologies Used
- React JS
- React Router DOM
- CSS

## Folder Structure
src/
 ├── components/
 │    ├── Header.js
 │    ├── Profile.js
 │    ├── Dashboard.js
 ├── assets/
 │    ├── myphoto.jpg
 ├── App.js
 ├── index.js
 ├── App.css

## How to Run
1. Install dependencies
   npm install

2. Start project
   npm start

3. Open browser
   http://localhost:3000

## Description
This SPA demonstrates navigation between Profile and Dashboard pages using React Router without refreshing the page.



