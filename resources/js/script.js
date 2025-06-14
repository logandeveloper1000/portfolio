const cardGrid = document.getElementById('card-grid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Total amount of cards allowed
const totalCards = 10;

// How many to load each time
const cardsPerClick = 6;

// Track how many cards are currently loaded
let cardsLoaded = 0;

const technologiesList = {
  html5: {
    src: "./resources/img/html5.png",
    title: "HTML5",
    description: "HTML5 is the fifth and latest major version of the HyperText Markup Language, which is the standard language used to create and structure content on the web. It was developed to improve the way websites are built by introducing new elements and features that support modern multimedia, graphics, and interactive applications—all without the need for external plugins like Flash.\n\nOne of the key advancements in HTML5 is the addition of semantic elements such as <header>, <footer>, <article>, and <section>, which help developers write cleaner, more meaningful code that is easier to read and maintain. HTML5 also includes built-in support for audio and video through the <audio> and <video> tags, making it easier to embed media directly into web pages.\n\nIn addition, HTML5 enhances form controls, enables local storage through localStorage and sessionStorage, and improves compatibility across different browsers and devices. It plays a vital role in responsive design and mobile-friendly web development."
  },
  css3: {
    src: "./resources/img/css3.png",
    title: "CSS3",
    description: "CSS3 is the latest version of Cascading Style Sheets, the language used to style and layout web pages. It builds on the foundation of previous CSS versions and introduces powerful new features that enhance the appearance, interactivity, and responsiveness of websites. With CSS3, developers can create visually rich web interfaces without relying heavily on images or JavaScript.\n\nKey features of CSS3 include rounded corners with border-radius, box and text shadows, gradients, transitions, animations, and flexible box layouts (Flexbox) for improved alignment and spacing. CSS Grid Layout, another major addition, allows developers to build complex, responsive page layouts with ease.\n\nCSS3 also supports media queries, which enable responsive design by allowing styles to change based on the screen size or device. This makes it easier to build mobile-friendly websites that adapt to various screen resolutions."
  },
  js: {
    src: "./resources/img/js.png",
    title: "JavaScript",
    description: "JavaScript is a high-level, interpreted programming language that is widely used to create dynamic and interactive content on websites. It is a core technology of the web, alongside HTML and CSS, and enables developers to build engaging user experiences by allowing real-time updates, form validations, interactive elements, and much more.\n\nOriginally developed for client-side scripting in web browsers, JavaScript has evolved into a powerful, full-featured language that can also be used on the server side through platforms like Node.js. It supports object-oriented, functional, and event-driven programming paradigms, making it highly versatile and suitable for a wide range of applications.\n\nModern JavaScript includes features such as ES6+ syntax improvements, modules, promises, async/await, arrow functions, and classes, which make the code more readable, maintainable, and efficient. It also integrates seamlessly with APIs, databases, and other technologies to build full-stack web applications."
  },
  react: {
    src: "./resources/img/reactjs.png",
    title: "React JS",
    description: "React.js is a popular open-source JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create reusable UI components that efficiently update and render when data changes. React follows a component-based architecture, making code more modular, maintainable, and easier to scale.\n\nOne of Reacts key features is the virtual DOM, which improves performance by minimizing direct interactions with the real DOM. When the state of a component changes, React updates the virtual DOM first, compares it to the previous version, and then applies only the necessary changes to the actual DOM.\n\nReact uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript, making the code more readable and easier to work with. It also supports powerful concepts like props and state for managing data, and hooks for handling side effects and lifecycle events in functional components.\n\nReact can be used in combination with other tools and libraries such as React Router for navigation, Redux for state management, and Axios or Fetch for API calls. It is also commonly used with back-end services like Firebase or Node.js in full-stack development."
  },
  firebase: {
    src: "./resources/img/firebase.png",
    title: "Firebase",
    description: "Firebase is a platform developed by Google that provides a suite of cloud-based tools and services to help developers build, improve, and grow web and mobile applications. It offers backend solutions such as authentication, real-time databases, hosting, cloud functions, analytics, and more—all without the need to manage traditional servers.\n\nOne of the core features of Firebase is Firebase Authentication, which allows developers to easily implement secure login systems using email/password, phone numbers, or third-party providers like Google, Facebook, and GitHub. Firebase Firestore, a flexible NoSQL cloud database, enables real-time data synchronization and offline support, making it ideal for responsive apps.\n\nFirebase Hosting is another powerful feature that provides fast and secure static web hosting with a global content delivery network (CDN). It supports custom domains, HTTPS by default, and easy deployment via the Firebase CLI. Additionally, Firebase Cloud Functions allow developers to write backend logic that runs in response to events, such as database changes or HTTP requests.\n\nFirebase integrates seamlessly with popular front-end frameworks like React, Vue, and Angular, and supports both mobile platforms (iOS and Android) and web development."
  },
  tailwind: {
    src: "./resources/img/tailwindcss.png",
    title: "TailwindCSS",
    description: "Tailwind CSS is a utility-first CSS framework that allows developers to build custom user interfaces directly in their HTML by applying predefined utility classes. Instead of writing traditional CSS rules, Tailwind encourages the use of small, reusable classes to style elements quickly and consistently. This approach speeds up development and reduces the need for writing custom CSS.\n\nTailwind provides a comprehensive set of utility classes for controlling layout, spacing, typography, colors, shadows, borders, and more. It also supports responsive design out of the box with mobile-first breakpoints and built-in variants for hover, focus, and other states.\n\nOne of Tailwinds key strengths is its customization. Developers can configure the design system through the tailwind.config.js file, allowing for complete control over themes, breakpoints, and class generation. It also integrates seamlessly with tools like PostCSS, Webpack, and modern JavaScript frameworks like React, Vue, and Next.js.\n\nTailwind promotes consistency and scalability by reducing context switching between HTML and CSS files and enabling developers to prototype rapidly."
  },
  tmdb: {
    src: "./resources/img/themoviedb.png",
    title: "The Movie DB",
    description: "The Movie Database (TMDb) API is a popular and powerful web service that provides access to a vast collection of movie, TV show, and celebrity data. It allows developers to fetch detailed information such as titles, overviews, release dates, genres, posters, trailers, and ratings. TMDb is widely used in entertainment-related applications for building features like movie search, trending content, cast details, and media libraries.\n\nThe API is organized into different endpoints that allow you to retrieve various types of content, including popular movies, top-rated shows, search results, upcoming releases, and more. Developers can make HTTP requests using tools like Fetch or Axios, and the responses are returned in JSON format, making them easy to use within front-end and back-end applications.\n\nTo use the TMDb API, developers need to sign up for an API key from the TMDb website. This key is used to authenticate requests and ensure proper usage. The API also supports image configurations, allowing developers to build complete UI experiences with full-sized posters and backdrops.\n\nThe TMDb API integrates well with modern JavaScript frameworks like React, Vue, and Angular. It's especially popular in clone projects and media apps because of its comprehensive data and reliable service."
  },
  axios: {
    src: "./resources/img/axiosapi.png",
    title: "Axios API",
    description: "Axios is a promise-based JavaScript library used to make HTTP requests from the browser or Node.js. It simplifies API communication by handling GET, POST, PUT, and DELETE requests and supports features like request/response interception, automatic JSON transformation, and error handling."
  },
  trivia: {
    src: "./resources/img/triviaapi.png",
    title: "Trivia API",
    description: "The Open Trivia Database API is a free and open-source API that provides a large collection of trivia questions across various categories and difficulty levels. It allows developers to fetch multiple-choice or true/false questions for use in quiz and trivia applications."
  },
  pokeapi: {
    src: "./resources/img/pokeapi.png",
    title: "PokeAPI",
    description: "The PokeAPI is a free and open-source RESTful API that provides detailed data about Pokémon, including their names, images, types, stats, abilities, and evolution chains. It's widely used by developers to build applications related to the Pokémon universe."
  },
  bootstrap: {
    src: "./resources/img/bootstrap.png",
    title: "Bootstrap",
    description: "Bootstrap 5 is a popular open-source front-end framework used for building responsive and mobile-first websites. It provides a wide range of pre-designed UI components, layout utilities, and JavaScript plugins, allowing developers to create modern web interfaces quickly and efficiently without writing extensive custom CSS."
  },
  vite: {
    src: "./resources/img/vite.png",
    title: "Vite",
    description: "Vite is a fast and modern front-end build tool that provides instant server start, lightning-fast hot module replacement (HMR), and optimized production builds. Designed for frameworks like React, Vue, and others, Vite simplifies the development experience with minimal configuration and efficient performance."
  },
  fakestore: {
    src: "./resources/img/fakestoreapi.png",
    title: "FakeStore API",
    description: "The FakeStore API is a free, public RESTful API that provides mock data for testing and prototyping e-commerce applications. It includes endpoints for products, categories, and user carts, allowing developers to perform GET, POST, PUT, and DELETE requests without needing a real backend."
  },
  reactrouter: {
    src: "./resources/img/reactrouter.png",
    title: "React Router",
    description: "React Router is a standard library for routing in React applications. It enables dynamic navigation between components, supports nested routes, URL parameters, and client-side rendering without full page reloads. React Router helps create multi-page experiences in single-page applications."
  },
  reactbootstrap: {
    src: "./resources/img/reactbootstrap.png",
    title: "React Bootstrap",
    description: "React Bootstrap is a front-end framework that rebuilds Bootstrap components using React. It provides ready-to-use UI components like modals, buttons, forms, and navbars, all fully integrated with React`s component-based architecture, making it easier to build responsive and interactive interfaces."
  }
};

const cardData = {
  
  1: {
    title: "Chat App",
    imageSrc: "./resources/img/projects/chat-app.png",
    shortDescription: "A real-time one-on-one chat app built with React and Firebase.",
    longDescription: "Chat App is a real-time messaging platform that allows authenticated users to start one-on-one conversations with others using their email addresses. Built with React for the frontend and Firebase for authentication and Firestore database, the app features user login/signup, a dashboard for managing chats, unread message alerts, and protected routes. It is fully responsive and deployed on Netlify.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://userchat-app.netlify.app/",
    github: "https://github.com/logandeveloper1000/chat-app",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.reactrouter,
      technologiesList.firebase
    ]
  },
  ////////////DONE

  2: {
    title: "Notes App",
    imageSrc: "./resources/img/projects/notes-app.png",
    shortDescription: "A note-taking web app built with React and Firebase that allows users to write and upload notes, which automatically expire after 24 hours.",
    longDescription: "The Notes App is a fully responsive web application built using React and Firebase. It allows users to write text-based notes and optionally upload images. A unique cookie is assigned to each user, ensuring that their notes are private and only visible to them. Both the cookie and notes are automatically deleted after 24 hours, promoting privacy and temporary note keeping. The app uses Firestore for real-time syncing and Firebase Storage for managing image uploads, making it a lightweight, secure, and scalable solution for short-term note tracking.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://user-notes-app.netlify.app/",
    github: "https://github.com/logandeveloper1000/notes-app",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.firebase
    ]
  },
  3: {
    title: "Pokemon Finder",
    imageSrc: "./resources/img/projects/pokemon-finder.png",
    shortDescription: "Pokémon Finder is a web app that lets users search for Pokémon by name or ID. Built with HTML, CSS, and JavaScript, it fetches data from the PokeAPI and displays the Pokémon's image, name, and types in a responsive interface.",
    longDescription: "Pokémon Finder is a simple and interactive web application that allows users to search for Pokémon by name or Pokédex ID. It demonstrates core front-end development skills such as DOM manipulation, asynchronous JavaScript using async/await, and integration with external APIs via the Fetch API. When a user searches for a Pokémon, the app fetches data from the PokeAPI and displays the Pokémon’s name, image, and types. It also includes error handling in case the Pokémon is not found and features a scrollable list of example first-generation Pokémon for quick access. The interface is responsive and optimized for both desktop and mobile users. This project was built using HTML5, CSS3, and modern JavaScript (ES6+). It highlights API consumption, real-time data handling, and clean UI design principles. The app is hosted live at https://logan-pokemon-finder.netlify.app/ and serves as a practical demonstration of working with public APIs and front-end development techniques.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://user-pokemon-finder.netlify.app/",
    github: "https://github.com/logandeveloper1000/pokemon-finder",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.pokeapi
    ]
  },
  4: {
    title: "To Do App",
    imageSrc: "./resources/img/projects/to-do-app.png",
    shortDescription: "A responsive React and Firebase-based To-Do List app with real-time sync, user authentication, and task management.",
    longDescription: "This is a fully-featured To-Do List web application built with React and Firebase. It allows users to sign up and log in using email/password or Google authentication. Each user can create, complete, and delete their personal tasks, which are stored securely in Firebase Firestore and updated in real-time. The UI is responsive and clean, with tasks visually organized into 'Your Tasks' and 'Completed Tasks' sections. Users also have the ability to delete their account, which removes all associated task data permanently. The app includes modal-based feedback for success and error handling, and is deployed live on Netlify.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://user-to-do-app.netlify.app/",
    github: "https://github.com/logandeveloper1000/to-do-app",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.reactrouter,
      technologiesList.firebase
    ]
  },
  5: {
    title: "Mini Store App",
    imageSrc: "./resources/img/projects/mini-store-app.png",
    shortDescription: "A mini e-commerce app built with React and Firebase, featuring user authentication, product management, cart functionality, and real-time Firestore syncing.",
    longDescription: "Mini Store is a full-featured e-commerce web application built using React for the frontend and Firebase for backend services. The project includes secure user authentication, real-time Firestore integration for managing products and shopping cart items, and Firebase Storage for handling image uploads. Users can log in, add new products with images and descriptions, manage their cart, and remove or move items between store and cart seamlessly. The app features responsive design, loading spinners, mobile-optimized logout handling, and alert modals for smooth user feedback throughout the experience.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://user-mini-store.netlify.app/login",
    github: "https://github.com/logandeveloper1000/mini-store-app",
    technologies: [
      technologiesList.html5, 
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.firebase
    ]
  },
  6: {
    title: "Blog Platform",
    imageSrc: "./resources/img/projects/blog-platform.png",
    shortDescription: "A modern blog platform built with React and Firebase, allowing users to create, manage, and publish posts with admin approval.",
    longDescription: "Blog Platform is a full-featured blogging application developed using React and Firebase. It supports user authentication, secure post creation, editing, and deletion. Users can mark posts as public or private, but only admin-approved posts appear on the homepage. Admins have access to a special interface to review and approve content before publication. The platform uses responsive styling, custom modals, and real-time Firestore database integration.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://user-blog-platform.netlify.app/",
    github: "https://github.com/logandeveloper1000/blog-platform",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.reactrouter,
      technologiesList.firebase
    ]
  },
  7: {
    title: "Quiz App",
    imageSrc: "./resources/img/projects/quiz-app.png",
    shortDescription: "The Logan Quiz App is a fast and responsive quiz platform built with Vite and React. It fetches trivia questions from the Open Trivia Database API, lets users choose categories and difficulty, and provides instant feedback with a clean, styled UI.",
    longDescription: "The Quiz App is a responsive and interactive web application built using Vite and React. It allows users to test their knowledge through multiple-choice questions pulled dynamically from the Open Trivia Database API. On the home page, users can enter their name and select a quiz category and difficulty level before starting the quiz. Each question displays multiple answer choices, and users receive immediate feedback on whether their selected answer is correct. At the end of the quiz, users are shown their results and have the option to restart and try again. This project was developed using modern front-end technologies. React was used to manage the application's state and render dynamic UI components with the help of React Hooks like useState and useEffect. Vite served as the build tool, providing fast development performance and optimized output. Axios was used to make API requests to the trivia API, and all styling was handled with clean and responsive vanilla CSS. The app is deployed and accessible online through Netlify, offering users a seamless and polished experience.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://user-quiz-app.netlify.app/",
    github: "https://github.com/logandeveloper1000/quiz-app",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,  
      technologiesList.js,
      technologiesList.axios,
      technologiesList.trivia
    ]
  },
  8: {
    title: "FakeStore App",
    imageSrc: "./resources/img/projects/fakestore-app.png",
    shortDescription: "The FakeStore E-Commerce App is a React-based front-end project that interacts with the FakeStoreAPI to display and manage products. It features multi-page navigation, form handling, and a responsive UI built with React Bootstrap.",
    longDescription: "(IT DOES NOT EXCHANGE DATA SINCE THE API IS JUST FOR STUDYING PURPOSE!) The FakeStore E-Commerce App is a front-end web application built with React, React Router, Axios, and React Bootstrap. It connects to the FakeStoreAPI to simulate a full e-commerce experience, including viewing, creating, updating, and deleting products. Although the API supports POST, PUT, and DELETE requests, the data is mock and DOES NOT EXCHANGE DATA SINCE THE API IS JUST FOR STUDYING PURPOSE. This project demonstrates key front-end skills such as component-based architecture, state management, API integration, routing, and responsive UI design. Users can browse a list of products, view product details, and manage products through a form-driven interface. Navigation is handled smoothly using React Router, and all API interactions feature loading indicators and error handling. The app features a sticky navbar, gradient backgrounds, and is fully responsive for mobile and desktop. Technologies used include React, Vite, Axios, React Bootstrap, and the FakeStoreAPI.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://react-fakestore-project-app.netlify.app/",
    github: "https://github.com/logandeveloper1000/react-fakestore-project-app",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.bootstrap,
      technologiesList.vite,
      technologiesList.fakestore,
      technologiesList.reactrouter,
      technologiesList.reactbootstrap
    ]
  },
  9: {
    title: "User Authentication",
    imageSrc: "./resources/img/projects/logan-user-authentication.png",
    shortDescription: "A responsive React authentication app with Firebase, featuring email/password and Google Sign-In, user dashboard, and account deletion.",
    longDescription: "This project is a modern, responsive user authentication system built with React and Firebase. It includes email and password login and registration, Google OAuth sign-in, success/error modals, and a protected user dashboard. Users can securely sign in, log out, or delete their account with confirmation. Styled with custom CSS and deployed on Netlify, this project demonstrates a full-stack user authentication flow suitable for production-ready apps.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://userauthentication-app.netlify.app",
    github: "https://github.com/logandeveloper1000/user-auth-app",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.firebase
    ]
  },
  10: {
    title: "Logan Sports Arena",
    imageSrc: "./resources/img/projects/logan-sports-arena.png",
    shortDescription: "The Logan Sports Arena Website is a responsive multi-page site built with HTML, CSS, and JavaScript. It features a mobile-friendly layout, event listings, a menu, contact form, and embedded Google Map for directions.",
    longDescription: "The Logan Sports Arena Website is a multi-page, responsive site created for a fictional sports event center. Built with HTML5, CSS3, and JavaScript, it showcases front-end web development skills including layout design, responsive navigation, and UI enhancements. The site includes pages for home, events, menu, location, and contact, each structured with consistent design elements like navigation bars, headers, and footers. Flexbox and CSS Grid were used to ensure the site adapts well to different screen sizes, while a custom JavaScript burger menu improves navigation on mobile devices. Hover animations and a polished layout enhance the user experience. The location page features an embedded Google Map for easy directions, and the contact form includes basic validation. All assets are organized into dedicated folders for maintainability. This project demonstrates the ability to create a clean, interactive, and fully responsive website from scratch.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://sports-arena-app.netlify.app/",
    github: "https://github.com/logandeveloper1000/sports-arena",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
    ]
  },
  11: {
    title: "E-Commerce Product Listing App",
    imageSrc: "./resources/img/projects/ecommerce-product-listing-app.png",
    shortDescription: "This is a React-based E-Commerce Product Listing App that displays and filters products by category. It features a clean, responsive layout built with vanilla CSS and is deployed using Vite and Netlify.",
    longDescription: "This E-Commerce Product Listing App is a clean and professional web application built with React and styled using vanilla CSS. It displays a list of products, each with a name, image, price, description, and category. Users can filter products by category to easily explore specific types of items. The project demonstrates core React development skills, including component structuring, state management using useState, and data flow through props. Unlike many projects that rely on UI frameworks, this app focuses on custom styling for a unique and professional appearance. The layout includes fixed-size, consistently styled cards, responsive design for mobile devices, and clean organization of components. Built with Vite for fast development and deployed on Netlify, the app highlights best practices in React development and front-end deployment. It serves as a great foundation for anyone learning to build modern, responsive product listing interfaces.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://ecommerce-product-listing-app.netlify.app/",
    github: "https://github.com/logandeveloper1000/ecommerce-product-listing-project",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.vite,
    ]
  },
  /////////////////////////////////////////
  12: {
    title: "Realtor.com CLONE",
    imageSrc: "./resources/img/projects/realtor-clone.png",
    shortDescription: "This Realtor.com clone was built using React, JavaScript, CSS, and Firebase. It features property listings, user authentication, and dynamic routing, with Firebase handling backend and hosting.",
    longDescription: "Realtor.com clone was developed using React and several modern web development tools. It simulates the functionality and layout of a real estate listing platform, offering features like property browsing, filtering, listing creation, user authentication, and routing. Here's an explanation of how it was developed and the programming languages and technologies involved:This project was built using JavaScript as the core programming language, specifically through the React.js library, which allows for the creation of dynamic, component-based user interfaces. React is used here to create reusable components for elements like headers, listings, cards, filters, and forms. The UI updates smoothly based on user interaction, thanks to React's state and props system.\n\nRouting between different pages like “Home,” “Offers,” “Sign In,” and “Profile” is handled by React Router, which enables client-side navigation without full page reloads. This makes the experience feel fast and app-like. For styling, CSS is used directly within the components or through modular CSS files to handle layout, spacing, responsiveness, and interactive elements such as hover effects and input focus states.\n\nAuthentication and backend functionality are powered by Firebase, a platform provided by Google. Firebase Authentication is used to handle user sign-ups, logins, and session management. Firebase Firestore (a NoSQL database) is used to store and retrieve property listings. This allows users to post their own listings, which are then rendered dynamically across the site. Firebase Hosting is used to deploy the live site at the provided web address.\n\nIn terms of deployment and hosting, Firebase CLI is likely used to build and deploy the React app to Firebase Hosting. All the data, like property listings, is stored and synced in real-time using Firebase's backend services, which eliminates the need for building a custom server or backend API.\n\nIn summary, this project combines JavaScript, React, React Router, CSS, and Firebase to create a fully functional real estate web application. It showcases full-stack capabilities on the front-end and leverages Firebase for backend services and hosting, making it a strong example of a modern, real-world web application.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://realtor-clone-react-c64ef.web.app/",
    github: "https://github.com/logandeveloper1000/real-estate-app",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.tailwind,
      technologiesList.firebase
    ]
  },
  13: {
    title: "Netflix Clone",
    imageSrc: "./resources/img/projects/netflix-clone.png",
    shortDescription: "This Netflix clone was built with React, JavaScript, CSS, and Firebase. It fetches movie data from the TMDb API and displays it in a responsive, Netflix-style layout.",
    longDescription: "The Netflix Clone is a fully responsive, front-end web application designed to replicate the core user interface and experience of the popular streaming platform Netflix. This project demonstrates the use of modern web development technologies to create a dynamic, visually engaging, and user-friendly movie browsing experience. Built primarily with React.js, JavaScript, and CSS, the application fetches real-time movie data from an external API and displays it in a grid-based, categorized layout similar to what users would expect from a professional streaming service.\n\nAt its core, the application is powered by React, a JavaScript library for building component-based interfaces. React enables modular development, allowing key elements like the navigation bar, banner section, category rows, and movie posters to be created as independent components. This structure not only keeps the code clean and maintainable but also allows for scalability if additional features or sections are added later.\n\nThe app uses Axios, a promise-based HTTP client, to connect to The Movie Database (TMDb) API. This connection retrieves live data for popular movies, top-rated content, trending shows, and more. Each category is rendered dynamically using React props and state, ensuring the UI updates automatically when new data is loaded. The movie posters are clickable and can expand into previews or trailers, offering interactivity that mimics real-world streaming platforms.\n\nStyling is handled using plain CSS, carefully crafted to emulate the dark, immersive aesthetic of Netflix. Flexbox and grid layouts are used to arrange rows and columns of content in a way that is both responsive and visually consistent across different screen sizes. The home page includes a full-screen banner at the top that features a highlighted movie or show with its title, description, and background image dynamically fetched from the API.\n\nThe application is hosted using Firebase Hosting, a service provided by Google that allows for quick and reliable deployment of web applications. The development build is compiled using tools like Webpack or Vite (depending on the initial setup), and then deployed to the Firebase environment for live access.\n\nAlthough the clone is currently front-end focused, it is structured in a way that could be expanded to include user authentication, watchlists, or streaming functionality through the addition of backend services and protected routes.\n\nIn summary, this Netflix Clone project showcases a professional-grade implementation of React for front-end development, API integration for real-time content, and responsive design principles. It serves as an excellent demonstration of how to build modern web applications that are interactive, data-driven, and visually polished.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://netflix-clone-64f60.web.app/",
    github: "https://github.com/logandeveloper1000/netflix-clone-1",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.tmdb,
      technologiesList.firebase
    ]
  },
  14: {
    title: "Hulu Clone",
    imageSrc: "./resources/img/projects/hulu-clone.png",
    shortDescription: "This Hulu clone was built with React, JavaScript, CSS, and Firebase. It fetches movie data from the TMDb API and displays it in a responsive, category-based layout with smooth scrolling and dynamic content loading.",
    longDescription: "The Hulu Clone is a front-end web application developed to replicate the core layout, design aesthetics, and user experience of the Hulu streaming platform. Built using React.js, JavaScript, and CSS, this project demonstrates modern front-end development techniques with a focus on responsive design, component-based architecture, and dynamic content rendering. The interface closely mimics the original Hulu site, offering a dark-themed layout, category-based browsing, and smooth horizontal scrolling for media content. React is used to build reusable components like navigation headers, category filters, and content rows. Each row is populated with media thumbnails, allowing users to scroll through trending or genre-based selections. State management and props ensure the interface is responsive and interactive, updating automatically as users navigate different sections. Styling is done entirely with CSS, matching Hulus visual branding with clean layouts, vibrant hover effects, and mobile responsiveness. The project is deployed using Firebase Hosting, ensuring fast performance and reliable access. This Hulu Clone highlights skills in SPA development, responsive design, React component structure, and front-end deployment. It is a strong example of building a professional streaming interface without relying on external movie APIs.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://hulu-clone-ui.web.app/",
    github: "https://github.com/logandeveloper1000/hulu-clone-ui",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.react,
      technologiesList.firebase
    ]
  },
  15: {
    title: "Google Clone",
    imageSrc: "./resources/img/projects/google-clone.png",
    shortDescription: "This Google clone is a static UI project built with HTML, CSS, and JavaScript. It recreates Googles homepage layout with clean styling and responsive design, without real search functionality.",
    longDescription: "This Google Clone is a static front-end project built using HTML, CSS, and JavaScript. It replicates the clean, minimalist design of Google's homepage, including the logo, centered search bar, navigation links, and footer. The layout is carefully structured using semantic HTML and styled with CSS to match the spacing, alignment, and responsiveness of the original interface.\n\nAlthough it does not use any real API or perform actual searches, the clone focuses on accurately recreating the visual experience of Google's home screen. JavaScript is used to add basic interactivity, such as capturing input or simulating button actions. The site is responsive and adapts well across various screen sizes, maintaining usability on both desktop and mobile devices.\n\nThis project is deployed using Firebase Hosting, allowing it to be accessed quickly and reliably online. It serves as a solid demonstration of front-end development fundamentals, showcasing attention to design details, layout precision, and responsive styling without relying on libraries or external data sources.\n\nIn summary, this Google Clone is a purely front-end UI project that highlights the developers ability to replicate real-world web interfaces using only HTML, CSS, and JavaScript.",
    compatibility: "Mobile Tablet Desktop",
    link: "https://g00gle-clone-ui.web.app/",
    github: "https://github.com/logandeveloper1000/google-clone-ui",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.firebase
    ]
  },
  16: {
    title: "linkedin Clone",
    imageSrc: "./resources/img/projects/linkedin-clone.png",
    shortDescription: "This LinkedIn clone is a static UI project built with HTML, CSS, and JavaScript. It recreates LinkedIns layout without using React or backend functionality.",
    longDescription: "This LinkedIn Clone is a static front-end project created using HTML, CSS, and JavaScript. It aims to replicate the visual structure and layout of LinkedIns homepage, including the navigation bar, sidebar, feed section, and widgets. The project does not include real backend functionality or API integration but instead focuses on accurately recreating the user interface.\n\nThe structure is built with semantic HTML elements to organize the different sections of the page, such as the profile sidebar, post input area, and suggested connections. CSS is used to replicate LinkedIns styling, including the use of spacing, shadows, buttons, cards, and responsive layout techniques. Flexbox and grid systems are implemented to ensure a clean and organized design that adjusts well across various screen sizes.\n\nJavaScript is used in a lightweight manner to simulate minor UI interactions, but there is no real-time data or authentication involved. The site is hosted using Firebase Hosting for easy and fast online access.\n\nIn summary, this LinkedIn Clone is a front-end-only project that showcases proficiency in static UI development, responsive design, and layout replication using HTML, CSS, and JavaScript.",
    compatibility: "Desktop",
    link: "https://linkedin-clone-ui.web.app/",
    github: "https://github.com/logandeveloper1000/linkedin-clone-ui",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.firebase
    ]
  },
  17: {
    title: "Gmail Clone",
    imageSrc: "./resources/img/projects/gmail-clone.png",
    shortDescription: "This Gmail clone is a static UI project built with HTML, CSS, and JavaScript. It recreates the Gmail inbox layout without using React, backend services, or APIs.",
    longDescription: "This Gmail Clone is a static front-end project built using HTML, CSS, and JavaScript. It replicates the visual layout of Gmails inbox interface, including the sidebar navigation, top search bar, email list, and action buttons. The purpose of the project is to recreate the design and user interface of Gmail without connecting to any real email data, backend, or APIs.\n\nThe page structure is created with semantic HTML, organizing different sections such as the left sidebar menu, inbox display, and toolbar. CSS is used extensively to match Gmails clean, professional style. This includes replicating fonts, icons, spacing, and responsive layout behavior. Flexbox and grid are used to manage structure and alignment across components.\n\nJavaScript is used minimally to simulate interactivity, such as selecting messages or toggling menu items. There are no dynamic API calls or real-time data interactions. The project is deployed using Firebase Hosting, allowing it to be accessed quickly and reliably online.\n\nIn summary, this Gmail Clone is a front-end-only user interface project that focuses on precision design, layout accuracy, and responsive styling. It showcases the developers ability to replicate complex web interfaces using only HTML, CSS, and JavaScript.",
    compatibility: "Desktop",
    link: "https://clone-ui-7303a.web.app/",
    github: "https://github.com/logandeveloper1000/gmail-clone-ui",
    technologies: [
      technologiesList.html5,
      technologiesList.css3,
      technologiesList.js,
      technologiesList.firebase
    ]
  },
  18: {
    title: "Twitter Clone",
    imageSrc: "./resources/img/projects/twitter-clone.png",
    shortDescription: "This Twitter clone is a static UI project built with HTML, CSS, and JavaScript. It recreates Twitters layout and styling without using React or API integrations.",
    longDescription: "This Twitter Clone is a static front-end project built using HTML, CSS, and JavaScript. It replicates the core layout and design of Twitters homepage, including the left sidebar navigation, main tweet feed, right-side widgets, and the tweet input area. The project focuses on recreating the visual experience of the Twitter interface without using frameworks like React or connecting to any backend or API.\n\nThe structure of the page is created using semantic HTML to organize key sections of the layout. CSS is used to closely match Twitters styling, including colors, spacing, fonts, and responsive behavior. Flexbox and grid systems are applied to build a clean, structured design that adapts to different screen sizes.\n\nJavaScript is used minimally to provide basic interactivity and UI behavior, such as simulating actions like composing a tweet or switching views. The site is deployed using Firebase Hosting, making it easily accessible online.\n\nIn summary, this Twitter Clone is a front-end-only project that showcases UI development skills through precise layout reproduction, responsive design, and attention to detail, all built with pure HTML, CSS, and JavaScript.",
    compatibility: "Desktop",
    link: "https://twitter-clone-ui-b5533.web.app/",
    github: "https://github.com/logandeveloper1000/twitter-clone-ui",
    technologies: [
      technologiesList.html5, 
      technologiesList.css3,
      technologiesList.js,
      technologiesList.firebase
    ]
  }
};

// Function to generate one card's HTML
function generateCard(n) {
  const card = cardData[n] || {
    title: "Untitled Project",
    shortDescription: "No description available.",
    compatibility: "N/A",
    link: "#",
    imageSrc: ""
  };

  return `
    <div class="project-card" onclick="openModal(${n})">
      <div class="card-image">
        <img src="${card.imageSrc}" alt="${card.title}">
      </div>
      <div class="card-content">
        <h2>${card.title}</h2>
        <p>${card.shortDescription}</p>
        <hr>
        <div class="compatibility">
          <h3>Compatible</h3>
          <div class="labels">
            <span>${card.compatibility}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}


// Load initial cards
function loadCards(amount) {
  for (let i = 0; i < amount && cardsLoaded < totalCards; i++) {
    const cardsN = parseInt(document.getElementById('cards-count').innerText);
    cardGrid.insertAdjacentHTML('beforeend', generateCard(cardsN + 1));
    document.getElementById('cards-count').innerText = cardsN + 1;
    cardsLoaded++;
  }

  if (cardsLoaded >= totalCards) {
    loadMoreBtn.style.display = 'none';
  }
}

// Initial load
loadCards(cardsPerClick);

// Load more on click
loadMoreBtn.addEventListener('click', () => {
  loadCards(cardsPerClick);
});

// Project Modal
function openModal(cardNumber) {
  const card = cardData[cardNumber] || {
    title: "Untitled Project",
    description: "No description available.",
    compatibility: "N/A",
    link: "#",
    github: "#"
  };

  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);

  document.getElementById('modal-image').src = card.imageSrc || "";;
  document.getElementById('modal-title').textContent = card.title;
  document.getElementById('modal-description').textContent = card.longDescription;
  document.getElementById('modal-compatibility').innerHTML = `
    <hr>
    <h3>Compatible</h3>
    <p>${card.compatibility}</p>
  `;
  document.getElementById('modal-link').href = card.link;
  document.getElementById('modal-github').href = card.github;
  const techRow = document.querySelector('.tech-scroll-row');
  const techDescription = document.getElementById('tech-description');
  techRow.innerHTML = '';
  techDescription.style.display = 'none';
  techDescription.textContent = '';

  if (card.technologies && card.technologies.length > 0) {
    card.technologies.forEach(tech => {
      const img = document.createElement('img');
      img.src = tech.src;
      img.title = tech.title;
      img.alt = tech.title;

    img.addEventListener('click', () => {
      const isVisible = techDescription.style.display === 'block';
      if (isVisible && techDescription.textContent === tech.description) {
        techDescription.style.display = 'none';
        techDescription.textContent = '';
      } else {
        techDescription.textContent = tech.description;
        techDescription.style.display = 'block';
      }
    });

      techRow.appendChild(img);
    });
  }

}



document.getElementById('modal-cancel').onclick = () => {
  const modal = document.getElementById('modal');
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 300);
};

// Service Modal
function openServiceModal(title, description) {
  const modal = document.getElementById('service-modal');
  modal.style.display = 'block';
  setTimeout(() => modal.classList.add('show'), 10);

  document.getElementById('service-modal-title').textContent = title;
  document.getElementById('service-modal-description').textContent = description;
}

document.getElementById('close-service-modal').onclick = () => {
  const modal = document.getElementById('service-modal');
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; }, 300);
};

window.addEventListener('click', function (e) {
  const serviceModal = document.getElementById('service-modal');
  const projectModal = document.getElementById('modal');

  if (e.target === serviceModal) {
    serviceModal.classList.remove('show');
    setTimeout(() => { serviceModal.style.display = 'none'; }, 300);
  }

  if (e.target === projectModal) {
    projectModal.classList.remove('show');
    setTimeout(() => { projectModal.style.display = 'none'; }, 300);
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight &&
    rect.bottom >= 0
  );
}

function animateBars(sectionId) {
  const section = document.getElementById(sectionId);
  const bars = section.querySelectorAll('.bar');

  if (isInViewport(section)) {
    bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.style.width = percent;
    });
  } else {
    bars.forEach(bar => {
      bar.style.width = '0%';
    });
  }
}

function onScrollAnimateAllBars() {
  animateBars('skills');
  animateBars('languages');
}

window.addEventListener('scroll', onScrollAnimateAllBars);

// Mobile burger toggle
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close mobile nav when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close mobile nav if open
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }

    // Close project modal if open
    const projectModal = document.getElementById('modal');
    if (projectModal.classList.contains('show')) {
      projectModal.classList.remove('show');
      setTimeout(() => {
        projectModal.style.display = 'none';
      }, 300);
    }

    // Close service modal if open
    const serviceModal = document.getElementById('service-modal');
    if (serviceModal.classList.contains('show')) {
      serviceModal.classList.remove('show');
      setTimeout(() => {
        serviceModal.style.display = 'none';
      }, 300);
    }
  });
});

// Close mobile nav when clicking outside of it
window.addEventListener('click', function (e) {
  if (
    navMenu.classList.contains('open') &&
    !navMenu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    navMenu.classList.remove('open');
  }
});

const countElements = document.querySelectorAll('.count');
const aboutSection = document.querySelector('.about-section');

let hasAnimated = false;

function animateCounts() {
  if (isInViewport(aboutSection)) {
    if (!hasAnimated) {
      countElements.forEach(el => {
        el.textContent = '0';
        const target = +el.getAttribute('data-target');
        let count = 0;
        const increment = Math.ceil(target / 50); // speed factor

        const interval = setInterval(() => {
          count += increment;
          if (count >= target) {
            el.textContent = target;
            clearInterval(interval);
          } else {
            el.textContent = count;
          }
        }, 150);
      });
      hasAnimated = true;
    }
  } else {
    countElements.forEach(el => (el.textContent = '0'));
    hasAnimated = false;
  }
}

window.addEventListener('scroll', animateCounts);

function codewarsHover(){
  document.getElementById('codewars-img').src = './resources/img/codewars.svg';
}
function codewarsOut(){
  document.getElementById('codewars-img').src = './resources/img/codewars-green.svg';
}