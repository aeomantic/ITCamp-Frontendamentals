# 🧠 06 - React Fundamentals & Next.js Introduction

> **TLDR:** Learn why React exists, build reusable components, and create your first Next.js application with routing and Tailwind styling.
> React = LEGO blocks for UI. Next.js = Complete framework with routing, optimization, and structure built-in.



## 📚 Table of Contents

1. [🔍 Topic Overview](#-topic-overview)
2. [📦 Project Setup](#-project-setup)
3. [📄 Code Walkthrough](#-code-walkthrough)
4. [🧪 Hands On Challenge](#-hands-on-challenge)
5. [📝 Resources](#-resources)
6. [🙌 Contributors](#-contributors)



## 🔍 Topic Overview

**Problems with Traditional Web Dev (html,css,javascript):**
- No code reusability (copy-paste navbar across 10 files)
- Poor scalability (simple features = massive code)

**React Solves This With:**
- **Components** - Reusable UI pieces (build once, use everywhere)

**Library vs Framework:**
- **React (Library)** - You control the structure
- **Next.js (Framework)** - Provides structure, you add content

**Next.js Benefits:**
- File-based routing (`app/about/page.js` → `/about`)
- Built-in optimization (images, code splitting)
- Server & Client components
- Production-ready out of the box optimisations


## 📦 Project Setup

### Prerequisites

**Required:**
- Node.js 18+ ([download here](https://nodejs.org/))
- VS Code with [ES7+ React Snippets](https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets)

Before we begin:

1. **Sync your fork**
    * To make sure your forked repo is up to date with the main repo.
    * **Go to your forked repo on GitHub** and click the **Sync** fork button (top right)

2. **Open your project folder**
    * Navigate to the folder where you cloned your forked repo.

3. **Pull the changes to your local machine**
   ```bash
       git checkout main
       git pull origin main
   ```
  


## 📄 Code Walkthrough

### 1. Create Next.js Project
```bash
# Check Node.js version
node --version  # Should be 18+

# Create app
npx create-next-app@latest my-blog-site

# - Settings Option-
# Would you like to use the recommended Next.js default? … No, customize settings
# Would you like to use Typescript? … No
# Which linter would you like to use? … ESLint
# Would you like to use React Compiler? … No
# Would you like to use Tailwind CSS? … Yes
# Would you like to use `src/` directory? … Yes
#  Would you like to use App Router? (recommended) … Yes
# Would you like to customize the default import alias (@/*)? … No


# Start development
cd my-blog-site
npm run dev
```

Open `http://localhost:3000` to verify it works!

### File Structure
```
my-blog-site/
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout (wraps all pages)
│   │   ├── page.js         # Homepage (/)
│   │   └── globals.css     # Global styles
│   └── components/         # Reusable components ( we will create this)
├── public/                 # Static files (images)
└── package.json
```

**Key Concept:** File structure = URL routes
- `app/page.js` → `/`
- `app/about/page.js` → `/about`
- `app/blog/page.js` → `/blog`


### 2. Verify Tailwind is working

Remove Boiler plate from `page.js` and replace with :
```jsx
export default function Home() {
  return (
    <div className="bg-blue-200 text-black p-8 text-center">
      <h1 className="text-4xl font-bold">
        Hello nextjs + tailwind</h1>
    </div>
  );
}

```


### 3. Create About & Profile Pages

3.1 Create an **About** page. Create `about` folder and a  `page.js` file.

**File:** `src/app/about/page.js`
```jsx
export default function About() {
  return (
    <div className="bg-blue-200 text-black p-8 text-center">
      <h1 className="text-4xl font-bold">
        About page!</h1>
    </div>
  );
}
```
> You should see your about page at localhost:3000/about

3.2 Create a **profile** page. Create `profile` folder and a  `page.js` file.

**File:** `src/app/profile/page.js`

```jsx
export default function Profile() {
  return (
    <div className="bg-blue-200 text-black p-8 text-center">
      <h1 className="text-4xl font-bold">
        profile page!</h1>
    </div>
  );
}
```
> You should see your about page at localhost:3000/profile

### 4. Components
4.1 Regular components

```jsx
export default function Button() {
    return (
        <>
            {/* <button className="bg-blue-500 text-white p-2 rounded-md m-16">
                <p>Accept</p>
            </button> */}
        </>
    )
}
```

4.2 Dynamic Components

```jsx
export default function Button({ text }) {
    return (
        <>
            {/* <button className="bg-blue-500 text-white p-2 rounded-md m-16">
                <p>{text}</p>
            </button> */}
        </>
    )
}
```
4.3 Link Component

```jsx
import Link from "next/Link" 

<Link href="/about" className="hover:text-blue-400 transition-colors">
  About
</Link>
```

4.4 Layout Component:

Creating your first `navbar` component.

```jsx
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="hover:text-blue-400 transition-colors">
                            About
                        </Link>
                        <Link href="/profile" className="hover:text-blue-400 transition-colors">
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
```
4.5 Image Component

```jsx
<Image
  src="/ImageExample.jpg" 
  alt="A chill guy" 
  width={500}
  height={500}
  className="w-full h-64 object-cover rounded-md"
/>
```

4.6 Section Component
Create your FAQ Component
```jsx
export default function FAQ() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            What is this website about?
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            about me and my website
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            How do I navigate between pages?
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            uhh click the top buttons i guess
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
```
4.7 Custom Styling

```css
@import "tailwindcss";


/* Import Font */
/* @font-face {
  font-family: Lobster;
  src: url("/font/Lobster_Two/LobsterTwo-Regular.ttf");
} */

/* Root styles */
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme {
  /* Breakpoints */
  /* --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px; */

  /* Color variables */
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* --color-brand-primary: #ae6060; */

  /* Font variables */
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* --font-lobster: Lobster, sans-serif; */
}

body {
  background: var(--background);
  color: var(--foreground);
}

/* h1, h2, h3, h4, h5, h6, p {
  font-family: var(--font-lobster);
  color: var(--color-brand-primary);
} */

```

## 🧪 Hands On Challenge

### 🔧 Enhancing your current website!
1. Make a new contact page (`src/app/contact/page.js`)
2. Update the Navbar to include contact page
3. Make a section for CTA (Call to action)
4. Add a footer and update the layout




## 🙌 Contributors

| Name | Role | GitHub |
| ------------ | ------------------- | -------------------------------------------------- |
| Yan Mei | Speaker  | [@yxnmei](https://github.com/yxnmei) |
| Vanness Yang | Speaker | [@vanness1900](https://github.com/vanness1900) |


