# QuizApp

QuizApp is a React-based web application designed to create an engaging quiz experience. Users can answer questions loaded from a `questions.json` file and see their scores upon completion, with an option to retake the quiz.

## Features

- **Dynamic Question Loading**: Questions and answers are loaded from a `questions.json` file.
- **Real-time Feedback**: Provides immediate validation of answers.
- **Score Summary**: Displays total score and a motivational message for low scores.
- **Retake Functionality**: Allows users to retake the quiz to improve their score.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have a stable version of [Node.js](https://nodejs.org/) installed on your machine.
- You are familiar with React and have the [React development environment](https://reactjs.org/docs/create-a-new-react-app.html) set up.
- You have [Docker](https://docs.docker.com/get-docker/) installed on your machine if you wish to run the app in a Docker container.

## Installation

To install QuizApp, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sakiphan/question-reactApp.git
    ```

2. Navigate to the QuizApp directory:
    ```bash
    cd QuizApp
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```
    Visit `http://localhost:3000` in your browser to view the app.

## Running with Docker

To run QuizApp using Docker, follow these steps:

1. In the root of your QuizApp directory, create a `Dockerfile` with the following content:
    ```Dockerfile
    # Use an official Node runtime as a parent image
    FROM node:latest

    # Set the working directory in the container
    WORKDIR /app

    # Copy the current directory contents into the container at /app
    COPY . .

    # Install any needed packages specified in package.json
    RUN npm install

    # Make port 3000 available to the world outside this container
    EXPOSE 3000

    # Run npm start when the container launches
    CMD ["npm", "start"]
    ```

2. Build the Docker image:
    ```bash
    docker build -t question-react-app .
    ```

3. Run the Docker container, mapping your machine's port 3000 to the container's exposed port 3000:
    ```bash
    docker run -d -p 3000:80 question-react-app
    ```
    Visit `http://localhost:3000` in your browser to view the app running inside the Docker container.

## Usage

1. **Start the Quiz**: Open the app to view the first question.
2. **Choose an Answer**: Click on one of the answer buttons.
3. **Finish the Quiz**: After the last question, the score will be displayed.
4. **Retake the Quiz**: Click "Restart Quiz" to try again.

## Customizing Questions

To customize the quiz, edit the `questions.json` file in the `src` folder. Follow this format:
```json
{
  "questions": [
    {
      "id": 1,
      "question": "Your question here?",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "correct_option": 0 // Index of the correct option
    }
    // Add more questions as needed
  ]
}
```

# Information
**This README now provides a comprehensive guide for setting up the QuizApp both locally and using Docker, ensuring users have clear instructions for running the application in their preferred environment.**



