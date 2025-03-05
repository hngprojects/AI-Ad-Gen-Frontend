# AI Ad Gen

This is the official README file for the AI Ads Gen Project using [Next.js](https://nextjs.org) bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Figma Design

[View the Figma design here](https://www.figma.com/design/WQT88LFkfo65NqDHng2Kyd/New-AI-Ads-Gen?node-id=0-1&p=f&t=2jDnxBFVTgA56yiY-0)

## Getting Started

We are making use of pnpm so if you are not familiar with it or haven't heard it before, chances are you don&apos;t have it installed

Install using:

```bash
npm i -g pnpm
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Form Validation

For the Newsletter section, a simple form validation should be implemented using react form hooks or zod

### Design Implementation

Create PIXEL PERFECT DESIGNS, it can not be iterated enough!!

## Team Instructions: Using Forks for Adgen-ai Frontend Development

As a team lead, I want to ensure our code meets high standards before merging to the main branch of the adgen-ai-frontend repository. Use forks and follow these steps to work on your issues, show your progress, and get my approval:

### 1. Fork the Repository

Go to the adgen-ai-frontend repository on GitHub (e.g., https://github.com/yourusername/adgen-ai-frontend).

Click the Fork button in the top-right corner.

Choose your personal GitHub account to create a fork (e.g., https://github.com/yourusername/adgen-ai-frontend).

### 2. Clone Your Fork Locally

Open a terminal and clone your fork:

```bash

git clone https://github.com/[your-username]/adgen-ai-frontend.git
cd adgen-ai-frontend
```

Add the upstream (main) repository as a remote to sync later:

```bash

git remote add upstream https://github.com/[your-username]/adgen-ai-frontend.git
git fetch upstream
```

### 3. Create a Feature Branch in Your Fork

For your assigned issue (e.g., "Implement Header with Navigation"), create a branch from main:

```bash

git checkout main
git pull upstream main
git checkout -b feature/header-navigation
```

Name your branch descriptively (e.g., feature/your-issue-title).

### 4. Develop Your Code

Work on your component or section in this branch.

Use Next.js, TypeScript, Shadcn UI, and Tailwind CSS as outlined in the issue.

Ensure your code:
Matches the Adgen-ai Figma design, make pixel perfect design

Uses TypeScript for type safety.

Leverages Shadcn UI components (e.g., Button, Card) with Tailwind styling.

Is responsive (works on mobile, tablet, desktop).

Follows Next.js conventions (e.g., src/components/, src/pages/).

Test locally with npm run dev and check for console errors.

### 5. Commit and Push to Your Fork

Commit frequently with clear messages:

```bash

git add .
git commit -m "feat(header): Implement navigation with logo and links"
```

Push to your fork (not the main repo):

```bash

git push origin feature/header-navigation
```

### 6. Create a Pull Request (PR) to the Main Repository

Go to your fork on GitHub, click Pull requests → New pull request.

Select your branch (e.g., feature/header-navigation) and compare it with the main repo’s main branch (e.g., yourusername/adgen-ai-frontend:main).

Title the PR: "feat: Implement Header with Navigation" (match the issue title).

In the description, include:
A link to the issue (e.g., #1 for Issue 1).

A summary of changes (e.g., "Added Header component with sticky navigation, responsive design, and Tailwind styling").

Screenshots or a Loom video showing the component in action (optional but helpful).

Set the base repository to yourusername/adgen-ai-frontend and base branch to main.

Click Create pull request.

### 7. Notify Me for Review

I’ll review the code, check the design match, and ensure it is good to go.

### 8. Wait for My Approval

I’ll review the PR, focusing on:
Code quality (TypeScript, linting, formatting).

Good commit messages [Check here to learn about writing good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)

Design accuracy (Figma match, responsiveness).

Functionality (no errors, interactive states work).

Once approved, I’ll merge the PR into main.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind Documentation](https://tailwindcss.com/docs/installation/using-vite)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
