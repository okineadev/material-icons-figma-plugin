# Contributing to Material Icons for Figma

Thank you for considering contributing to our project! We appreciate your support and aim to make the process as smooth as possible. Below are the guidelines for contributing to this repository.

## 📋 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it to understand the expected behavior.

## 🐛 Reporting Issues

If you encounter any issues or bugs, please check the existing issues first to see if it has already been reported. If not, you can create a new issue using the [Bug Report Template](https://github.com/okineadev/material-icons-figma-plugin/issues/new?template=bug-report.yml).

## 🚀 Creating Pull Requests

1. **Fork the repository** and create your branch from `main`.
2. **Make your changes** in the new branch.
3. **Commit your changes** with a clear and descriptive message.
4. **Push your branch** to your forked repository.
5. **Create a pull request** from your branch to this repository.

## 📝 Commit Message Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Please ensure your commit messages follow these conventions. You can refer to the `commitlint.config.js` file for more details.

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
