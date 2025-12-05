# CRUD App (Mock-API + JS + HTML/CSS)  

**Live Demo:** https://selvaganapathycoder.github.io/CURD-app/  

## 🔹 Description  
This is a simple CRUD (Create / Read / Update / Delete) web application built with plain HTML, CSS, and JavaScript.  
It uses a mock-API backend to store data.  
You can add new items, view the list, edit existing items (via a modal popup), and delete items.  
This project serves as a lightweight template for learning basic CRUD operations with frontend + API integration.  

## 🛠️ Features  

- Create — add new items via input + button  
- Read — fetch all items from mock-API and display them in a styled table  
- Update — edit existing items using a modal popup (no `prompt()` popups)  
- Delete — remove items with confirmation  
- Loader — a loading indicator while data fetch/post is in progress  
- Responsive and clean UI using vanilla CSS  
- Mock-API backend integration (via fetch)  

## 🧰 Tech Stack  

- HTML5 + CSS3  
- Vanilla JavaScript (ES6+)  
- Fetch API for network requests  
- Mock API service (e.g. MockAPI) for backend  

## 📁 Project Structure  

/ (root)
├── index.html ← HTML UI + modal markup
├── style.css ← (if external), or inline CSS in HTML
├── app.js ← JS logic: fetch / create / update / delete / modal handling
└── README.md ← this file


🌐 Demo / Deployment

This project is hosted via GitHub Pages. The live version is available at:
https://selvaganapathycoder.github.io/CURD-app/

✅ Usage

Enter a name (or item) in the input box, click Add to create an item.

The list below will show all existing items fetched from the backend.

Click Edit to modify an item — a modal will appear, change the name and hit Save.

Click Delete to remove an item (confirmation required).

During network operations (fetch/post/put/delete), a “Loading…” indicator appears.

📈 Future Enhancements (Todo)

Add Search functionality (filter items by name)

Add Sort (by name, ID, etc.)

Add pagination for large data sets

Add more fields (not just name — e.g. description, date, etc.)

Add user feedback/toast notifications (success, error)

Add responsive/mobile improvements

✍️ Contribution

Feel free to fork the repo and contribute improvements — like UI enhancements, new features, bug fixes.
If you add new features:

Fork the project

Create a new branch: git checkout -b feature/YourFeature

Commit your changes and push: git push origin feature/YourFeature

Open a Pull Request describing your changes

📄 License

This project is free to use, modify and distribute.

