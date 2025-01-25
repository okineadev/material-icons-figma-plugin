# Contributing to Material Icons for Figma

Thank you for considering contributing to our project! We appreciate your support and aim to make the process as smooth as possible. Below are the guidelines for contributing to this repository.

## 📋 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the expected behavior.

## 🐛 Reporting Issues

If you encounter any issues or bugs, please check the existing issues first to see if it has already been reported. If not, you can create a new issue using the [Bug Report Template](https://github.com/okineadev/material-icons-figma-plugin/issues/new?template=bug-report.yml).

## 🚀 Creating Pull Requests

To contribute to the project, follow the workflow below:

1. **Fork the repository**: Click on the "Fork" button at the top right corner of the repository page to create a copy of the repository in your GitHub account.
2. **Clone the repository**: Clone the forked repository to your local machine using the following command:

   ```sh
   git clone https://github.com/<your-username>/material-icons-figma-plugin.git
   cd material-icons-figma-plugin
   ```

3. **Create a new branch**: Create a new branch for your contribution using a descriptive name. For example:

   ```sh
   git checkout -b feature/add-new-icon
   ```

4. **Make your changes**: Implement your changes or additions in the new branch.
5. **Commit your changes**: Commit your changes with a clear and descriptive commit message following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. For example:

   ```sh
   git commit -m "feat: add new icon for user profile"
   ```

6. **Push your branch**: Push your branch to your forked repository on GitHub:

   ```sh
   git push
   origin feature/add-new-icon
   ```

7. **Create a pull request**: Open a pull request from your branch to the main repository. Provide a clear and detailed description of your changes in the pull request.

## 📝 Conventional Pull Request Titles

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commits and PR titles. Please ensure your PR title follow these conventions

## 🛠️ Setting Up the Development Environment

We use [Bun](https://bun.sh/) as our package manager and runtime. Follow the steps below to set up your development environment:

1. **Install Bun**: Follow the instructions on the [Bun website](https://bun.sh/docs/installation) to install Bun on your machine.
2. **Clone the repository**:

   ```sh
   git clone https://github.com/okineadev/material-icons-figma-plugin.git
   cd material-icons-figma-plugin
   ```

3. **Install dependencies**:

   ```sh
   bun install
   ```

4. **Run the development server**:

   ```sh
   bun run dev
   ```

## 🧩 Testing the Plugin in Figma

To test the plugin in Figma, follow these steps:

1. **Build the plugin**:

   ```sh
   bun run build
   ```

2. **Open Figma** and go to `Plugins > Development > Import Plugin from manifest...`.
3. **Select the `manifest.json` file** from the `dist` directory.
4. **Test the plugin** in Figma.

Thank you for your contributions! If you have any questions, feel free to reach out to us.

Happy coding! 🎉
