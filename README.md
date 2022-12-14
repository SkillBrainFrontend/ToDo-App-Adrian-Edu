[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=8177205&assignment_repo_type=AssignmentRepo)
# Todo App

Learn React by implementing a Todo App alongside your Frontend mentor as a part of **React** course from [SkillBrainΒ©](https://skillbrain.com/)

Building a Todo App is easy and does not take much time but it teaches you some important concepts which are very important to understand for any developer.

**Check the docs below before procedeeng to your task.** 
ππ» [Git Helper, Project Setup and Rules](./GIT_HOW_TO.md)

___


## Prerequisites

Since these are your first weeks with the React world, we would keep things simple. The starting code already includes the core components and styles - the building blocks you will need to implement this task. 


> Make sure you understand the role of these components as you are going to use them in your implementation.


```zsh
.
βββ node_modules
βββ README.md
βββ public
βββ package-lock.json
βββ package.json
βββ src
    βββ reportWebVitals.js
    βββ App.css
    βββ index.js
    βββ index.css
    βββ components // ππ» here are the core components.
    β   βββ card
    β   βββ todo-item
    β   βββ input
    β   βββ checkbox
    β   βββ button
    β   βββ add-todo
    β   βββ modal
    βββ App.jsx // ππ» here is the starting point.

```

___

## Task Requirements

π‘ The requirements of the task as well as a description of the project structure can be found in this [video](https://class.skillbrain.com/unit/view/id:3264) ππ»
 

>In software development, a user story is an actionable goal from the perspective of the user. Defining user stories before you begin your work will help you focus on work.
 

### β The app should fulfill the following stories:

#### 1οΈβ£ View all todos in two separated list **active todos** and  **completed todos** [ β­οΈ ] 
  - Use a `state`  to store your todos. Initialize it from `TODOS_MOCK` array, found in `App.js` file. This array will help you to understand how your state should look like.
  -   Display the todos from your `state` with `<TodoItem />` component.
      * Initially, the information displayed by `<TodoItem />` component is static. 
      * Make this component reusable and add the changes to receive the displayed data dynamically through `props`.
      * We added one `prop` for you  - `completed`, which is responsible for styling the completed / active items. You don't have to worry about styling. Just make sure you pass the proper values.
      * Display todos in two separate lists, depending on completed value.  
      * **HINT !** use array methods: `map()` and `filter()`. 
         > By using the JavaScript method, map(), you will be able to create a new array of items by mapping over the todo items from state.

         > By using the JavaScript method, filter(), you will be able to filter your array before mapping.
         
#### 2οΈβ£ Add todos  [β­οΈ]
   - Add the functionality into a form. 
        * update the form by setting the state.
        * Handle the submit and add the new item to the `todo` list.

   - 2.1 [ β­οΈ ]  Your form will be displayed inside of modal component. You can import this component from `src/components/modal/Modal.jsx`
        * Clicking on `ADD + ` button will open the modal.
           >Don't forget to add a state to control your modal (open / close)

#### 3οΈβ£ Mark todo as complete / done [ β­οΈ β­οΈ ]
 - By checking / unchecking the checkbox, todo item will update it's status and move to another list.

#### 4οΈβ£ Delete any task [β­οΈ]
- Clicking on delete icon will remove the coresponding item.

#### 5οΈβ£ Editing any task [β­οΈ β­οΈ β­οΈ]
 - Clicking on edit icon will open the modal and prefill the form fields with corespending data.
 - User will be able to edit these fields and submit the form. 
 - Todo Item will be updated.
