# Classwork

We're going to take what we've learned so far and create a new application using the tools at our disposal. We'll be adding more functionality to the todo application, but for added practice, it might be worthwhile to start from scratch. Our new application will need the following:

- A field to filter certain items
- The ability to keep track of what item was most recently added
- Buttons to delete items from the list
- Separate components as needed
- See what you can do to update the folder structure to separate things out even further
- Add a field / button that allows you to sort items.
- Add a key for completed / incomplete and a button to allow for that item to be toggled to either
- Change the background color of completed items to green

# Steps

1. Navigate via the command line to the folder you want the react project folder to be in
2. `create-react-app APP_NAME_ALL_LOWERCASE`
3. Open the folder in VS Code
4. Look at the structure and layout of your app to see what component structure you want
5. Determine what components need what state / props and it will help you determine a plan of attack / layout
   - Components
     - Todo Parent (TodoApp)
       - State - Username, Title, Todos
     - Todo Display / Sort / Filter (Child of above) (TodoList)
       - Props - Todos
       - State - Sort, filter
     - Display Individual Todos (Child of above) (Todo)
       - Props - Todo to display
6. Create folders / files
7. Determine need for class or functional components
8. Pick a good starting point
9. Write code
