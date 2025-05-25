# Job Portal - Web Application Architecture & Database Design

## 🏗️ System Architecture

### Technology Stack
- **Frontend**: Next.js 14+ (React, TypeScript)
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: NextAuth.js or JWT
- **File Storage**: Cloudinary (for CV/images) or AWS S3
- **Styling**: Tailwind CSS
- **State Management**: React Context API or redux

### Architecture Pattern
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Routes    │    │   Database      │
│   (Next.js)     │◄──►│   (Backend)     │◄──►│   (MongoDB)     │
│                 │    │                 │    │                 │
│ - Pages         │    │ - Auth Routes   │    │ - Collections   │
│ - Components    │    │ - Job Routes    │    │ - Indexes       │
│ - Hooks         │    │ - User Routes   │    │ - Aggregations  │
│ - Context       │    │ - File Upload   │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📊 Database Schema Design

### 1. Users Collection
```javascript
{
  _id: ObjectId,
  email: String, // unique
  password: String, // hashed
  role: String, // "job_seeker" | "company"
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date,
  lastLogin: Date
}
```

### 2. Job Seekers Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId, // ref to Users
  name: String,
  title: String, // e.g., "Frontend Developer"
  email: String,
  phone: String,
  location: String,
  image: String, // URL to profile picture
  cv: String, // URL to CV file
  skills: [String], // ["JavaScript", "React", "Node.js"]
  experience: Number, // years of experience
  education: {
    degree: String,
    university: String,
    year: Number
  },
  bio: String,
  socialLinks: {
    linkedin: String,
    github: String,
    portfolio: String
  },
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. Companies Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId, // ref to Users
  name: String,
  email: String,
  phone: String,
  website: String,
  logo: String, // URL to company logo
  description: String,
  industry: String,
  size: String, // "1-10", "11-50", "51-200", etc.
  location: String,
  foundedYear: Number,
  socialLinks: {
    linkedin: String,
    twitter: String,
    facebook: String
  },
  isVerified: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 4. Jobs Collection
```javascript
{
  _id: ObjectId,
  companyId: ObjectId, // ref to Companies
  title: String,
  description: String,
  salary: {
    min: Number,
    max: Number,
    currency: String, // "USD", "EUR", etc.
    period: String // "monthly", "yearly"
  },
  type: String, // "full-time", "part-time", "contract", "internship"
  location: String,
  isRemote: Boolean,
  skills: [String],
  experience: {
    min: Number,
    max: Number
  },
  requirements: [String],
  benefits: [String],
  applicationDeadline: Date,
  isActive: Boolean,
  viewCount: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### 5. Applications Collection
```javascript
{
  _id: ObjectId,
  jobId: ObjectId, // ref to Jobs
  jobSeekerId: ObjectId, // ref to Job Seekers
  companyId: ObjectId, // ref to Companies
  status: String, // "pending", "reviewed", "shortlisted", "rejected", "hired"
  coverLetter: String,
  customCv: String, // if different CV uploaded for this job
  appliedAt: Date,
  statusUpdatedAt: Date,
  notes: String, // company's internal notes
  createdAt: Date,
  updatedAt: Date
}
```

### 6. Saved Jobs Collection (Job Seekers bookmarking jobs)
```javascript
{
  _id: ObjectId,
  jobSeekerId: ObjectId, // ref to Job Seekers
  jobId: ObjectId, // ref to Jobs
  notes: String, // personal notes
  savedAt: Date
}
```

### 7. Saved Companies Collection (Job Seekers following companies)
```javascript
{
  _id: ObjectId,
  jobSeekerId: ObjectId, // ref to Job Seekers
  companyId: ObjectId, // ref to Companies
  notes: String,
  savedAt: Date
}
```

### 8. Saved Candidates Collection (Companies saving candidates)
```javascript
{
  _id: ObjectId,
  companyId: ObjectId, // ref to Companies
  jobSeekerId: ObjectId, // ref to Job Seekers
  notes: String, // why saved, future role ideas
  tags: [String], // ["frontend", "senior", "remote-ready"]
  savedAt: Date,
  savedFor: String // "future_openings", "talent_pool"
}
```

## 🗂️ Database Indexes

### Performance Optimization Indexes
```javascript
// Users Collection
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ role: 1 })

// Jobs Collection
db.jobs.createIndex({ companyId: 1 })
db.jobs.createIndex({ isActive: 1, createdAt: -1 })
db.jobs.createIndex({ location: 1, type: 1 })
db.jobs.createIndex({ skills: 1 })
db.jobs.createIndex({ "salary.min": 1, "salary.max": 1 })

// Applications Collection
db.applications.createIndex({ jobId: 1, status: 1 })
db.applications.createIndex({ jobSeekerId: 1, appliedAt: -1 })
db.applications.createIndex({ companyId: 1, status: 1 })

// Job Seekers Collection
db.jobseekers.createIndex({ userId: 1 }, { unique: true })
db.jobseekers.createIndex({ skills: 1 })
db.jobseekers.createIndex({ location: 1 })

// Companies Collection
db.companies.createIndex({ userId: 1 }, { unique: true })
db.companies.createIndex({ industry: 1 })

// Saved Collections
db.savedjobs.createIndex({ jobSeekerId: 1, savedAt: -1 })
db.savedcompanies.createIndex({ jobSeekerId: 1, savedAt: -1 })
db.savedcandidates.createIndex({ companyId: 1, savedAt: -1 })
```

## 🚀 API Routes Structure

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Password reset

### Job Seeker Routes
- `GET /api/job-seekers/profile` - Get profile
- `PUT /api/job-seekers/profile` - Update profile
- `POST /api/job-seekers/upload-cv` - Upload CV
- `GET /api/job-seekers/applications` - Get my applications
- `GET /api/job-seekers/saved-jobs` - Get saved jobs
- `POST /api/job-seekers/save-job` - Save a job
- `DELETE /api/job-seekers/unsave-job/:id` - Unsave job

### Company Routes
- `GET /api/companies/profile` - Get company profile
- `PUT /api/companies/profile` - Update company profile
- `GET /api/companies/jobs` - Get company's jobs
- `POST /api/companies/jobs` - Create new job
- `PUT /api/companies/jobs/:id` - Update job
- `DELETE /api/companies/jobs/:id` - Delete job
- `GET /api/companies/applications/:jobId` - Get job applications
- `PUT /api/companies/applications/:id/status` - Update application status
- `GET /api/companies/saved-candidates` - Get saved candidates
- `POST /api/companies/save-candidate` - Save candidate

### Public Routes
- `GET /api/jobs` - Get all jobs (with filters)
- `GET /api/jobs/:id` - Get job details
- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get company details
- `POST /api/jobs/:id/apply` - Apply to job

## 📱 Frontend Structure

### Page Structure
```
pages/
├── index.js                 # Home page with job listings
├── auth/
│   ├── login.js            # Login page
│   └── register.js         # Registration page
├── jobs/
│   ├── [id].js            # Job details page
│   └── apply/[id].js      # Job application page
├── companies/
│   ├── index.js           # Companies listing
│   └── [id].js           # Company profile page
├── dashboard/
│   ├── job-seeker/
│   │   ├── index.js       # Job seeker dashboard
│   │   ├── profile.js     # Edit profile
│   │   ├── applications.js # My applications
│   │   ├── saved-jobs.js  # Saved jobs
│   │   └── saved-companies.js # Followed companies
│   └── company/
│       ├── index.js       # Company dashboard
│       ├── profile.js     # Edit company profile
│       ├── jobs.js        # Manage jobs
│       ├── applications.js # View applications
│       └── saved-candidates.js # Saved candidates
└── api/                   # API routes (as listed above)
```

### Key Components
```
components/
├── Layout/
│   ├── Header.js
│   ├── Footer.js
│   └── Sidebar.js
├── Auth/
│   ├── LoginForm.js
│   ├── RegisterForm.js
│   └── ProtectedRoute.js
├── Jobs/
│   ├── JobCard.js
│   ├── JobList.js
│   ├── JobFilters.js
│   └── JobApplication.js
├── Companies/
│   ├── CompanyCard.js
│   └── CompanyProfile.js
├── Dashboard/
│   ├── JobSeekerDashboard.js
│   ├── CompanyDashboard.js
│   └── ApplicationStatus.js
└── Common/
    ├── Loading.js
    ├── Pagination.js
    └── SearchBar.js
```

## 🔐 Security Considerations

### Authentication & Authorization
- JWT tokens with refresh token mechanism
- Role-based access control (RBAC)
- API route protection middleware
- Password hashing with bcrypt

### Data Validation
- Input sanitization on all forms
- File upload validation (CV, images)
- Rate limiting on API endpoints
- CORS configuration

### Privacy & Data Protection
- User consent for data processing
- Secure file storage with signed URLs
- Data anonymization for analytics
- GDPR compliance considerations

## 📈 Future Enhancements

### Phase 2 Features
- Real-time messaging between companies and candidates
- Advanced search with Elasticsearch
- AI-powered job recommendations
- Video interview scheduling
- Bulk application management
- Analytics dashboard for companies

### Mobile Application
- React Native app using shared API
- Push notifications for application updates
- Offline job browsing capability
- Mobile-optimized file uploads

### Scalability Considerations
- MongoDB sharding for large datasets
- Redis caching for frequently accessed data
- CDN for static assets
- Microservices architecture for complex features

This architecture provides a solid foundation for your job portal application while remaining scalable and maintainable for a learning project.