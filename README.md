# 🧩 MeetingSphere – Hackathon Project

**MeetingSphere** is a web application designed to transform ordinary meetings into **well-structured, documented, and actionable sessions**.

---

## 📘 Project Structure



MyHackathonProject/
│
├── frontend/                 # Angular app
│   ├── src/                  # All Angular source code
│   │   ├── app/              # Components, modules, services
│   │   ├── assets/           # Static assets (images, icons, styles)
│   │   ├── environments/     # environment.ts & environment.prod.ts
│   │   └── index.html
│   ├── angular.json          # Angular CLI config
│   ├── package.json          # Frontend dependencies
│   └── README.md             # Instructions specific to frontend
│
├── backend/                  # ASP.NET Core Web API
│   ├── Controllers/          # API controllers
│   ├── Models/               # Entity models
│   ├── DTOs/                 # Data transfer objects
│   ├── Services/             # Business logic layer
│   ├── Repositories/         # Data access layer
│   ├── Migrations/           # EF Core migrations (if using EF Core)
│   ├── Program.cs
│   ├── Startup.cs (if .NET 5 or lower)
│   ├── appsettings.json
│   └── backend.csproj
│
├── docs/                     # Documentation
│   ├── ui-mockups/           # Your Lovable mockups/screenshots
│   ├── workflow/             # Diagrams, workflows
│   ├── screenshots/          # Proof of progress
│   ├── references/           # Reference images, competitor UIs
│   └── progress.md           # Daily/weekly logs
│
├── .gitignore
├── README.md                 # Main README (project overview)
└── LICENSE                   # Optional but professional


---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | Angular 20, TypeScript, Bootstrap 5 |
| **Backend** | ASP.NET Core Web API |
| **Database** | SQL Server (Entity Framework Core) |
| **Version Control** | Git & GitHub |
| **IDE** | Visual Studio, VS Code |

---

## 🧠 Key Features
- 🗂️ Dynamic meeting documentation structure  
- 🧾 Automatic note organization  
- 👥 User role-based meeting management  
- 📈 Visual dashboards for progress tracking  
- 🧩 Modular architecture for scalability  

---

## 🧰 Setup Instructions

### 🔹 Prerequisites
- Node.js ≥ 20  
- Angular CLI ≥ 20  
- .NET SDK ≥ 8  
- SQL Server  

### 🔹 Steps
1. Clone this repository  
   ```bash
   git clone https://github.com/kashyap369/MeetingSphere-HackathonProject-.git
