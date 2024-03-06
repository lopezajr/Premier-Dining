### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - Helps manage and navigate between components easily in a React app

- What is a single page application?
  -  Web app that fits onto a single page -- the content is dynamically updated in response to user actions and does NOT need to load new pages from a server.

- What are some differences between client side and server side routing?
  - In server side routing: each req for a new page triggers a trip to the server which then returns a new HTML page
  - In client-side routing: usually single page apps - navigation is completed without making requests to the server allows for smoother transitions.

- What are two ways of handling redirects with React Router? When would you use each?
  - <Redirect> component should be used when you want to redirect from one route to another based on some logic in the render method
  - 'useHistory' hok is used when you want to redirect after an event -- such as a form submission.

- What are two different ways to handle page-not-found user experiences using React Router? 
  - <Switch> component with a catch all <Route> at the end
  - a conditional rendering approach theat checks if the current location matches to a known route and renders a 404 page if it does not.

- How do you grab URL parameters from within a component using React Router?
  - using the 'useParams' hook -- hook returns an object of key/value pairs of a URL param, which can then be used within any component.

- What is context in React? When would you use it?
  - Context allows for data to be shared across the component tree wihtout having to drill down props manually. 

- Describe some differences between class-based components and function
  components in React.
  - Class based components have more features support various methods and states
  - function components are simler, and easier ot read and test; upon the use of hooks function components can also use state

- What are some of the problems that hooks were designed to solve?
  - React hooks were designes to solve issues such as complext patterns in class-based components such as higher-order components and render props, and the difficulty in reusing stateful component logic btwn various components, Hooks aimed ot make it easier to use features like state in function components.
