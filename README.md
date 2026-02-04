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
<img width="1913" height="598" alt="Screenshot 2026-02-03 215743" src="https://github.com/user-attachments/assets/bd08a747-d865-4cdf-86b8-4008ffd3c814" />
<img width="1887" height="525" alt="Screenshot 2026-02-03 215754" src="https://github.com/user-attachments/assets/bb27ad77-b5fb-4530-b848-6de35596967f" />
<img width="1909" height="544" alt="Screenshot 2026-02-03 215811" src="https://github.com/user-attachments/assets/afba83a6-d0ae-4b5d-b468-d8f60eaa2003" />


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
  
<img width="1909" height="947" alt="Screenshot 2026-02-03 225745" src="https://github.com/user-attachments/assets/be01503d-1f7a-421d-8632-53438311b06f" />
<img width="1904" height="712" alt="Screenshot 2026-02-03 225800" src="https://github.com/user-attachments/assets/f6368b94-e869-40d8-9082-de408fff2833" />


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
- 
<img width="1709" height="1000" alt="Screenshot 2026-02-04 100914" src="https://github.com/user-attachments/assets/4f437c38-0170-4c27-9e76-ef806d2ab9a4" />

<img width="863" height="516" alt="Screenshot 2026-02-04 100924" src="https://github.com/user-attachments/assets/76837b2a-45bf-4f06-bbd9-e2b226a74fd7" />


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



