# GhorabaSocial

GhorabaSocial is a modern, responsive social media web application built with React, TypeScript, React Router, and Bootstrap 5. Developed by **Mahmoud Ghoraba**, it offers users a clean and intuitive platform to connect with friends, share posts, and engage with content seamlessly.

---

## Features

- User authentication: Login and Signup forms with validation
- Responsive two-column layout for forms and content
- Navigation using React Router with breadcrumb navigation
- User profiles and personalized feeds
- Posting and interacting with content (likes, comments)
- Dynamic UI with Bootstrap 5 styling and React Icons
- Error handling for images and UI elements
- Mobile-friendly design with responsive breakpoints

---

## Tech Stack

- **Frontend:** React 19 + TypeScript  
- **Routing:** React Router v6  
- **Styling:** Bootstrap 5, custom CSS  
- **Icons:** React Icons  
- **Tooling:** Vite, npm

---

## Getting Started

### Prerequisites

- Node.js >= 18  
- npm >= 9  

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mahmoud123Jamal/social-media-app.git
   cd social-media-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:

   ```
  https://ghorabasocial.netlify.app
   ```

---

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Breadcrumb.tsx
│   ├── Feed.tsx
│   ├── Footer.tsx
│   ├── Freinds.tsx
│   ├── NavBar.tsx
│   ├── Online.tsx
│   ├── Post.tsx
│   ├── RightBar.tsx
│   ├── Share.tsx
│   └── SideBar.tsx
├── pages/           # Main application pages
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Profile.tsx
│   └── SignUp.tsx
├── styles/          # CSS styles organized by component and page
│   ├── components/
│   └── pages/
├── dummyData.ts     # Mock data for development
├── app.tsx          # Main application component
└── main.tsx         # Application entry point
```

---

## Future Improvements

- Integrate backend API (Firebase)
- Add JWT-based session authentication
- Support for user avatars and media uploads
- Add dark mode toggle
- Add i18n for multilingual support
- Progressive Web App (PWA) support

---

## Developer

**Mahmoud Ghoraba**  
GitHub: [Mahmoud123Jamal](https://github.com/Mahmoud123Jamal)  
Email: mahmoud1234goraba@gmail.com

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
