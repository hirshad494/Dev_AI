# DevAI - Your AI in Code

Welcome to DevAI, an innovative project designed to harness the power of artificial intelligence and streamline your development processes. DevAI integrates advanced AI models to provide intelligent solutions, automate tasks, and enhance productivity for developers.

## Features

- **Intelligent Code Assistance**: Utilize the power of OpenAI's GPT-3.5 Turbo model to provide code suggestions, automate code reviews, and optimize code performance.
- **Natural Language Processing**: Convert natural language queries into executable code, making development faster and more intuitive.
- **Seamless Integration**: Easily integrate DevAI into your existing development workflow with minimal setup.

## Technologies Used

- **Node.js**: A powerful JavaScript runtime for building scalable and efficient server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.
- **OpenAI GPT-3.5 Turbo**: Leveraging the advanced capabilities of OpenAI's language model to deliver intelligent and context-aware responses.
- **Axios**: A promise-based HTTP client for the browser and Node.js to make HTTP requests.
- **Nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes are detected.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing, allowing your application to handle requests from different origins.
- **Vanilla JavaScript**: Used to handle frontend logic and interactions.

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/hirshad494/Dev_AI.git
    cd Dev_AI
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add your OpenAI API key:

    ```plaintext
    OPENAI_API_KEY=your-openai-api-key-here
    ```

### Running the Application

Start the server:

```bash
npm start
```

The application will be available at \`http://localhost:3000\`.

### Using DevAI

Send a POST request to the \`/api/chat\` endpoint with your prompt to interact with the AI model. Example:

```bash
curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"prompt": "Explain the concept of closures in JavaScript"}'
```

## Contributing

We welcome contributions to DevAI! If you have ideas for new features or improvements, feel free to submit a pull request or open an issue.

### Steps to Contribute

1. **Fork the repository**.
2. **Create a new branch**:

    ```bash
    git checkout -b feature-branch
    ```

3. **Make your changes and commit them**:

    ```bash
    git commit -m "Add new feature"
    ```

4. **Push to the branch**:

    ```bash
    git push origin feature-branch
    ```

5. **Open a pull request** on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using DevAI!