# Exercise Angular Application

This web-based Angular application is a comprehensive tool for users to explore various exercises. Its interactive interface is specifically designed to enhance user experience, providing visual aids in the form of GIF images to help them target specific body parts. Additionally, the application provides valuable information about the muscles targeted during the exercise, allowing users to make informed decisions about their workout routine.
With its intuitive design and informative features, this Angular application provides a one-stop solution for users looking to improve their fitness and overall well-being. Whether you're a seasoned fitness enthusiast or just starting your fitness journey, this application is an excellent resource to help you achieve your goals.

It utilizes the third-party API provided by RapidAPI at https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/ to fetch and display exercise-related data.

## Features
- User signup and signin using Firebase authentication with Google and Email/Password provider
- User dashboard to view exercises.
- User can add exercises in their favorite list.

## Getting Started
### Prerequisites
- Node.js and npm installed on your machine
- Angular CLI installed globally. You can install it using the following command:
  ```
  npm install -g @angular/cli
  ```
- RapidAPI Key. Signup and obtain a key at https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/

### Installation
1. Clone the repository
2. Navigate to the project root directory
3. Install dependencies by running the following command:
    ```
    npm install
    ```
4. Create a file named `rapidapi.key` at the root of the project directory and copy your RapidAPI key to it.
5. Start the development server using the following command:
    ```
    ng serve
    ```
6. Open the application in your browser at http://localhost:4200.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `public/` directory.

### Deployment
Run `firebase deploy` to deploy the project. It deploys all the files available in `public` directory to the firebase server.


## Usage
- Signup and login to access the user dashboard.
- Use the search feature to look up exercises and add to favorite them to your list.
- Select body part and it will provide you detailed information about the exercises.
