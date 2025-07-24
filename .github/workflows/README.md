# GitHub Actions Workflows for Frontend

## This folder (`.github/workflows/`) contains GitHub Actions workflows for automating the **CI/CD pipeline** for the frontend services

## Workflow Structure

The pipeline consists of two main jobs:

- **Test and Build**: Installs dependencies, builds the frontend, and uploads the build artifacts.
- **Deploy**: Downloads the artifacts, transfers them to the production server, and starts the application.

## Jobs Breakdown

### 1. Test and Build

### **Purpose:**

This job runs on the `aiadgen` runner and performs the following steps:

### **Steps:**

1. **Checkout Code** – Fetch the latest code from the repository.
2. **Setup Node.js Environment** – Install dependencies for **Next.js**.
3. **Linting & Code Quality** – Run `eslint` to ensure code quality.
4. **Run Unit Tests** – Execute test cases using `Jest` or `React Testing Library`.
5. **Build the Application** – Ensure the Next.js app compiles successfully.

### **Triggers:**

- Runs on **push** and **pull requests** to the `main` and `setup` branches.

---

### **2.Deploy:**

### **Purpose:**

This job runs only after the **Test and Build** job completes successfully. It downloads the build artifacts and deploys them to the production server.

### **Steps:**

1. **Checkout Code** – Fetch the latest frontend source code.
2. **Download Build Artifacts** – Retrieves the artifacts uploaded from the previous job
3. **Build Next.js App** – Generate the production build.
4. **Start Application on Server**:
   - Installs dependencies on the server.
   - Deletes any existing PM2 process.
   - Starts the application using PM2 on port 5000.

### **Triggers:**

- Runs **automatically** on a push to the `main` branch.
- Can also be triggered manually.

---

## Folder Structure

```
.github/workflows/
│── frontend-cicd.yml         # CI/CD workflow
│── README.md                 # Documentation for CI/CD workflows
```

---

## Secrets Required

The workflows require the following **GitHub Secrets** for authentication:

| Secret Name       | Description                         |
| ----------------- | ----------------------------------- |
| `SERVER_IP`       | IP Address of the deployment server |
| `SERVER_USER`     | User of the deployment server       |
| `SERVER_PASSWORD` | Password for remote server access   |

---

## How to Use These Workflows

- **For CI:** Push code to `setup` or `main`, and the CI pipeline will run automatically.
- **For CD:** Merging into `main` will trigger deployment.

---

## **Conclusion**

This **CI/CD pipeline** ensures that the frontend is tested, built, and deployed automatically to the production server. By using GitHub Actions, the deployment process is **efficient, scalable, and automated**

## Contributions

- Make sure to test locally before pushing.
- Raise a pull request if making changes to **CI/CD workflows**.
