# 📚 Online Library System

A fully responsive React-based Online Library System that allows users to browse, search, and add books with categorized filtering. Built with React, React Router, Redux Toolkit, and Tailwind CSS.

## 🚀 Features

- ✅ Home Page with category links and popular book section
- ✅ Browse Books page with:
  - Category-based filtering (via dynamic routing)
  - Search functionality (title & author)
- ✅ Book Details page with dynamic route and information display
- ✅ Add Book page with form validation and Redux state update
- ✅ 404 Not Found page with navigation back to Home
- ✅ Advanced UI styling using Tailwind CSS
- ✅ GitHub button in the navbar

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Redux Toolkit**
- **Tailwind CSS**
- **Vite** (or Create React App if you used that)

---

## 📁 Folder Structure

src/
├── components/
│ ├── AddBook.jsx
│ ├── BookDetails.jsx
│ ├── BrowseBooks.jsx
│ ├── Home.jsx
│ ├── Navbar.jsx
│ └── NotFound.jsx
├── redux/
│ ├── booksSlice.js
│ └── store.js
├── App.jsx
├── main.jsx
└── index.css
