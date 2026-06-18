# aasara AI 🌟

![Hackathon Project](https://img.shields.io/badge/Hackathon-Submission-indigo?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-Google-blue?style=for-the-badge)

**aasara AI** is a futuristic, full-stack web application designed to revolutionize the child adoption and sponsorship ecosystem in India. By enforcing CARA (Central Adoption Resource Authority) protocols and utilizing the power of Google's Gemini AI, the platform provides a highly secure, empathetic, and intelligent experience for Agencies, NGOs, Parents, and Donors.

## ✨ Key Features

- **Gemini AI Counseling & Matching**: An integrated AI chatbot that strictly adheres to CARA guidelines, answers queries, and generates intelligent summaries for child profiles.
- **Role-Based Dashboards**: 
  - **Parents**: Initiate AI matching, track application status.
  - **Agencies**: Add new child profiles, upload secure documents, and manage matching pipelines.
  - **Donors**: Securely donate to specific causes, track real-world impact, and view donor tiers.
  - **NGOs**: Manage directory presence and track resources.
  - **Admin**: Exclusive, highly secure master dashboard (`admin@aasara.ai`) to block/unblock users, edit agency information, and monitor fraud alerts.
- **Premium UI/UX**: Built with a stunning glassmorphism design, custom color palettes, and fluid animations powered by Framer Motion.
- **Partner Directory**: Interactive, expandable directory showcasing certified NGOs and Agencies across the country.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, Lucide-React, Recharts
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **AI Integration**: Google Generative AI (Gemini `gemini-1.5-flash`)
- **Authentication**: JWT (JSON Web Tokens), bcrypt

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js installed
- MongoDB URI
- Google Gemini API Key

### 1. Clone the repository
```bash
git clone https://github.com/Aryan-Mandloi/summer-of-cade.git
cd summer-of-cade
```

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server/` directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key_starting_with_AIzaSy
```
Start the backend server:
```bash
npm run dev
# or: node index.js
```

### 3. Frontend Setup
Open a new terminal window:
```bash
cd client
npm install
npm run dev
```

The application will be running on `http://localhost:5173` (or `5174`).

## ☁️ Deployment (Render.com)

This application is configured for seamless single-step deployment.

1. Create a new **Web Service** on Render.com.
2. Connect this GitHub repository.
3. Set the **Build Command** to: `cd client && npm install && npm run build && cd ../server && npm install`
4. Set the **Start Command** to: `cd server && node index.js`
5. Add your `.env` variables in the Render dashboard, making sure to include `NODE_ENV=production`.
6. Deploy! The Node/Express server will automatically serve the built React frontend.

## ⚖️ Compliance Note
All matching algorithms, data privacy masks, and directory guidelines implemented in this project strictly adhere to the standards mandated by **CARA**, preventing direct identification of children before legal clearance.
