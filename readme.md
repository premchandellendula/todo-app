# Todo app
- A basic Todo app using MERN

    - which has CRUD operations, login, signup, landing page, todo page

### Steps

- First created fe n be folders
- started with be, **index.js** file add basic express boilerplate
- add **db.js**, **middleware.js**
- create a routes folder in which create an **index.js** file which has specific routes to **user.js** and **todos.js**
- create endpoints/routes for **signup**, **signin**, **update** in user.js
- create endpoints/routes for **todo** (post) and
**todo** (get) in todos.js
- created signup and signin
- created landing todos and dashboard todos
- note: in dependencies in Todos while get axios give todos as dependency so we get everytime a todo changes
- encountered or learnt new react-router-dom hook as useLocation. I used this because of getting the firstname of the user sign-ed up or in and putting the name on topbar
- navigate can have something which is state which carries as object
- at the needed location, we can useLocation to get the state.
