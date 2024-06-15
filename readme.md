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


- So, a big story
- I thought of getting the username, while sign-ed in and put that on dashboard.
- I got a basic approach, where I create a get request where I pass the username,password, authorization and I get the username, it worked but only in postman.
- I can see the firstname in postman.
- But when I tried to fetch the firstname from frontend, using axios.get....we cannot send body, I have tried params, body but didn't get help, then
- I got like authorization can give userId from that I can make find of that userId in users and get the firstname and it worked


- for the landing signin,signup redirects I used useNavigate hook from react-router-dom
