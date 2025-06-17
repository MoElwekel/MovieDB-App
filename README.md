
# 🎬 Movie DB App

A fully functional movie browsing application built with **React** and **Redux**, using **TMDb API**. It supports Arabic (RTL) UI and includes features like search, pagination, movie details view, and more.

---

## 🚀 Features

- Display a list of popular movies from TMDb
- Search movies by name
- View detailed movie information (title, rating, overview, release date, image)
- Pagination to navigate through multiple pages
- Redux for state management with `redux-thunk` for async actions
- Integration with Redux DevTools for debugging
- RTL-friendly interface using React-Bootstrap and custom CSS

---

## 🛠️ Technologies Used

| Technology              | Description                          |
|------------------------|--------------------------------------|
| React 19.1.0           | Frontend framework                   |
| Redux 4.2.1            | State management                    |
| React Redux 9.2.0      | Connects React to Redux              |
| Redux Thunk 3.1.0      | Handles async logic in Redux         |
| React Router DOM 7.6.2 | Client-side routing                  |
| React Bootstrap 2.10.10| UI components                        |
| React Paginate 8.3.0   | Pagination component                 |
| Redux DevTools         | Debug Redux store changes            |
| Axios (or fetch)       | API requests                         |

---

## 📁 Project Structure

```
movie-db-app/
├── public/
│   └── index.html
├── src/
│   ├── Component/
│   │   ├── CardMovie.js
│   │   ├── MovieDetails.js
│   │   ├── MovieList.js
│   │   ├── Navbar.js
│   │   └── Pagination.js
│   ├── Redux/
│   │   ├── actions/
│   │   │   └── movieAction.js
│   │   ├── reducers/
│   │   │   └── movieReducer.js
│   │   ├── store/
│   │   │   └── store.js
│   │   └── types/
│   │       └── types.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
└── README.md

```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/MoElwekel/movie-db-app.git
cd movie-db-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add TMDb API key

Create a file called `src/api.js` and paste:

```js
export const API_KEY = "YOUR_API_KEY_HERE";
```

Replace `"YOUR_API_KEY_HERE"` with your TMDb key.

### 4. Run the project

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Future Enhancements

- Add favorites/watchlist functionality using localStorage
- Add loading spinner while fetching data
- Error handling for failed API requests
- Implement unit tests for components and reducers
- Add responsive layout improvements for mobile devices

---

## 📌 License

This project is for educational and personal learning purposes only.

---

> 📺 This project was created as a learning exercise by following a YouTube tutorial.  
Credit to https://www.youtube.com/watch?v=opR0gitWQ1w&list=PLDQ11FgmbqQPRui5VDCSQvYt2HOYiCVep&index=1 for the original content.

---

## 👨‍💻 Author

- **Name**: Mohamed Adel Elwekel  
- **GitHub**: [MoElwekel](https://github.com/MoElwekel)

