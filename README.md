# OCID Frontend

> **Office of Curriculum, Instruction and Development** - Caraga State University

A modern, full-featured web application for managing academic programs, curriculum information, and institutional data at Caraga State University.

## 🚀 Project Overview

The OCID Frontend is a React-based single-page application (SPA) that provides a comprehensive platform for managing and displaying academic program information, institutional files, and curriculum data for CSU Main and CSU Cabadbaran Campus.

### Key Features

#### 🎓 Academic Management

- **College & Program Catalog**: Browse undergraduate and graduate programs across multiple colleges
- **Program Details**: Comprehensive program information including:
  - Curriculum and syllabus
  - Program educational objectives (PEOs)
  - Student outcomes
  - Accreditation status
  - Career opportunities
  - Admission requirements
  - Faculty information

#### 📊 Administrative Dashboard

- **Multi-Tab Interface**: Manage colleges, programs, forms, and files
- **File Management**: Upload, download, and organize institutional documents
- **Status Tracking**: Monitor file approval and processing status
- **Bulk Operations**: Handle multiple files simultaneously
- **Real-time Updates**: Automatic data refresh with intelligent caching

#### 🔐 Authentication & Security

- **Google OAuth Integration**: Secure login via Google accounts
- **JWT Token Management**: Automatic token refresh and session handling
- **Role-Based Access**: Protected routes and admin controls
- **Encrypted Storage**: Secure client-side data storage
- **Developer Tools Detection**: Enhanced security measures

#### 📱 User Experience

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **Smooth Animations**: Framer Motion-powered transitions
- **Interactive Forms**: React Hook Form with Zod validation
- **Toast Notifications**: Real-time feedback via Sonner
- **File Icons**: Visual file type indicators

## 🛠️ Technology Stack

### Core Framework

- **React 18.2** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM 7.5** - Client-side routing

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **shadcn/ui** - Component library
- **DaisyUI** - Additional UI components

### Forms & Validation

- **React Hook Form 7.60** - Form management
- **Zod 4.0** - Schema validation
- **@hookform/resolvers** - Form validation integration

### State & Data Management

- **Axios 1.10** - HTTP client
- **React Context API** - Global state management
- **Custom Hooks** - Modular state logic
- **LZ-String** - Data compression for caching

### Authentication & Security

- **@react-oauth/google** - Google OAuth integration
- **JWT** - Token-based authentication
- **SecureStorage** - Encrypted local storage
- **Google reCAPTCHA** - Bot protection

### Developer Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
OCID-FE/
├── public/                          # Static assets
│   └── images/                      # Image assets
│       ├── csu-cc/                  # CSU-CC campus images
│       └── ocid-procedurals/        # Procedural documents
├── src/
│   ├── components/                  # Reusable components
│   │   ├── auth/                    # Authentication components
│   │   │   ├── LoginForm.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   ├── PasswordSettingForm.jsx
│   │   │   ├── RequestAccessForm.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── dashboard/               # Dashboard components
│   │   │   ├── CollegesTab.jsx
│   │   │   ├── FilesTab.jsx
│   │   │   ├── FormsTab.jsx
│   │   │   ├── ProgramsTab.jsx
│   │   │   ├── DashboardHeader.jsx
│   │   │   ├── DashboardLoading.jsx
│   │   │   ├── DashboardError.jsx
│   │   │   ├── PerformanceInfoPopover.jsx
│   │   │   ├── colleges/            # College management
│   │   │   ├── forms/               # Form management
│   │   │   └── programs/            # Program management
│   │   ├── layout/                  # Layout components
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProgramPageLayout.jsx
│   │   ├── modals/                  # Modal dialogs
│   │   │   ├── FileUploadModal.jsx
│   │   │   ├── FileViewerModal.jsx
│   │   │   ├── auth/
│   │   │   └── Dashboard/
│   │   ├── programs-details/        # Program detail pages
│   │   │   ├── ProgramCard.jsx
│   │   │   ├── ProgramDetailsHeader.jsx
│   │   │   ├── CurriculumAndSyllabus.jsx
│   │   │   ├── ProgramAccreditation.jsx
│   │   │   ├── ProgramCareers.jsx
│   │   │   ├── ProgramEducationalObjectives.jsx
│   │   │   └── ...
│   │   └── ui/                      # Reusable UI components
│   │       ├── alert.jsx
│   │       └── ... (shadcn/ui components)
│   ├── contexts/                    # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── AuthProvider.jsx
│   ├── hooks/                       # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useDashboardData.js
│   │   ├── useDashboardState.js
│   │   ├── useDashboardFilters.js
│   │   ├── useCollegeManagement.js
│   │   ├── useCollegeOperations.js
│   │   ├── useCollegesData.js
│   │   ├── useCollegesActions.js
│   │   ├── useProgramData.js
│   │   ├── useProgramManagement.js
│   │   ├── useProgramFiles.js
│   │   ├── useProgramFileOperations.js
│   │   ├── useProgramsData.js
│   │   ├── useProgramsActions.js
│   │   ├── useFormManagement.js
│   │   ├── useFormsData.js
│   │   ├── useFormsActions.js
│   │   ├── useFileManagement.js
│   │   ├── useFileOperations.js
│   │   └── useFileActions.js
│   ├── lib/                         # Utility libraries
│   │   └── utils.js
│   ├── pages/                       # Page components
│   │   ├── HomePage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── About.jsx
│   │   ├── Downloadables.jsx
│   │   ├── Procedurals.jsx
│   │   ├── ProfileSettings.jsx
│   │   ├── NotFound.jsx
│   │   ├── colleges/
│   │   ├── CSU-CC/                  # CSU Cabadbaran pages
│   │   └── CSU-MAIN/                # CSU Main campus pages
│   ├── routes/                      # Route configuration
│   │   ├── Router.jsx
│   │   ├── CollegeRoutes.jsx
│   │   └── index.js
│   ├── services/                    # API services
│   │   ├── apiClient.js             # Axios client setup
│   │   ├── dashboardService.js
│   │   ├── collegeService.js
│   │   ├── formService.js
│   │   ├── programFilesService.js
│   │   └── api/
│   ├── utils/                       # Utility functions
│   │   ├── toast.jsx                # Toast notifications
│   │   ├── validator.js             # Validation helpers
│   │   ├── secureStorage.js         # Encrypted storage
│   │   ├── devToolsDetection.js     # Security utilities
│   │   ├── dashboardCache.js        # Caching logic
│   │   ├── dataTransformers.js      # Data transformation
│   │   ├── googleDriveUtils.js      # Google Drive integration
│   │   └── college-data.js          # College data constants
│   ├── assets/                      # Additional assets
│   ├── App.jsx                      # Root component
│   ├── App.css                      # App styles
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── components.json                  # shadcn/ui configuration
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
├── postcss.config.js                # PostCSS configuration
├── jsconfig.json                    # JavaScript configuration
├── vercel.json                      # Vercel deployment config
└── package.json                     # Dependencies and scripts
```

## 🏗️ Architecture Highlights

### Custom Hooks Pattern

The application extensively uses custom hooks for:

- **Data Management**: `useDashboardData`, `useCollegesData`, `useProgramsData`, `useFormsData`
- **CRUD Operations**: `useCollegeManagement`, `useProgramManagement`, `useFormManagement`
- **UI State**: `useDashboardState`, `useDashboardFilters`
- **File Operations**: `useFileManagement`, `useFileOperations`, `useFileActions`

### Smart Caching

- **LZ-String Compression**: Efficient data storage
- **Cache Validation**: Time-based cache invalidation
- **Performance Optimization**: Reduced API calls and faster load times

### Modular Services

- **API Client**: Centralized Axios configuration with interceptors
- **Service Layer**: Separated business logic from components
- **Error Handling**: Consistent error management across services

### Component Organization

- **Atomic Design**: UI components separated from business logic
- **Feature-Based**: Dashboard components grouped by functionality
- **Reusability**: Shared UI components via shadcn/ui

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API server running

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd OCID-FE
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables
   Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:8000/api
# Add other environment variables as needed
```

4. Run the development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📋 Current Features Status

### ✅ Completed Features

- [x] Google OAuth authentication
- [x] JWT token management with auto-refresh
- [x] Dashboard with multi-tab interface
- [x] College, program, form, and file management
- [x] File upload/download/delete operations
- [x] Bulk file operations
- [x] Status tracking and updates
- [x] Responsive design
- [x] Program catalog pages (CSU Main & CSU-CC)
- [x] About page
- [x] Downloadables page
- [x] Procedurals page
- [x] Profile settings
- [x] Protected routes
- [x] Request access form
- [x] Password management
- [x] Smart caching system
- [x] Toast notifications
- [x] Form validation
- [x] File type icons
- [x] Search and filter functionality
- [x] Performance monitoring

### 🚧 In Progress

- [ ] Advanced search capabilities
- [ ] Export functionality
- [ ] Analytics dashboard
- [ ] Real-time notifications

### 📝 Planned Features

- [ ] Dark mode support
- [ ] Offline mode
- [ ] Progressive Web App (PWA)
- [ ] Advanced reporting
- [ ] Document versioning
- [ ] Collaborative editing
- [ ] Audit logs
- [ ] Email notifications

## 🌐 Deployment

The application is configured for Vercel deployment:

- SPA routing handled via `vercel.json`
- Environment variables configured in Vercel dashboard
- Automatic deployments on push to main branch

## 🔒 Security Features

- JWT-based authentication
- Token auto-refresh mechanism
- Encrypted local storage
- Protected API routes
- CORS configuration
- Developer tools detection
- Session management
- Input validation
- XSS protection

## 🤝 Contributing

This is an institutional project for Caraga State University. For contribution guidelines, please contact the development team.

## 📄 License

This project is proprietary software owned by Caraga State University.

## 📞 Contact

**Office of Curriculum, Instruction and Development**  
Caraga State University  
Email: ocid@carsu.edu.ph

---

**Version**: 0.0.0  
**Last Updated**: January 2026  
**Status**: Active Development

Built with ❤️ for Caraga State University
