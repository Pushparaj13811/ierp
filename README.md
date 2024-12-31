# School IERP (Integrated Education Resource Planning)

A comprehensive school management system built with React, TypeScript, and Tailwind CSS.

## Features

### Multi-Role Access

- **Admin Dashboard**: Complete school management and oversight
- **Teacher Portal**: Class management and student assessment
- **Student Portal**: Access to courses, assignments, and grades
- **Parent Portal**: Monitor child's progress and communications

### Key Functionalities

- 📊 Dashboard Analytics
- 👥 User Management
- 📚 Course Management
- ✍️ Assignment Handling
- 📋 Grade Management
- 📅 Calendar & Scheduling
- 💬 Messaging System
- 💰 Payment Tracking
- 📊 Report Generation

## Tech Stack

- **Frontend Framework**: React 18
- **Type System**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/school-ierp.git
cd school-ierp
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

### Test Accounts

Use these credentials to test different user roles:

- **Admin**: admin@schoolierp.com
- **Teacher**: teacher@schoolierp.com
- **Student**: student@schoolierp.com
- **Parent**: parent@schoolierp.com

Password: `password` (for all accounts)

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Base UI components
│   ├── auth/         # Authentication components
│   └── users/        # User-related components
├── context/          # React Context providers
├── hooks/            # Custom React hooks
├── pages/            # Page components
│   ├── admin/        # Admin dashboard pages
│   ├── teacher/      # Teacher portal pages
│   ├── student/      # Student portal pages
│   └── parent/       # Parent portal pages
├── routes/           # Route configurations
├── services/         # API services
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Key Features by Role

### Admin Portal

- User Management (Teachers, Students, Parents)
- Class Management
- Payment Tracking
- System Reports
- School Calendar Management

### Teacher Portal

- Class Management
- Assignment Creation & Grading
- Student Progress Tracking
- Attendance Management
- Parent Communication

### Student Portal

- Course Access
- Assignment Submission
- Grade Viewing
- Calendar Access
- Teacher Communication

### Parent Portal

- Child's Progress Monitoring
- Attendance Tracking
- Teacher Communication
- Payment Management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
