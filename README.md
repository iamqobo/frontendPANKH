# Pankho Ki Udaan

A website for Pankho Ki Udaan organization built with React and Vite.

## Features

- Contact form
- Udaan Talk registration
- Disability Inclusion support requests
- Podcast guest suggestions
- All forms integrated with backend email notifications
- **Admin Panel** with JWT authentication for event management

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- Nodemailer (for email notifications)
- JWT Authentication
- Bcrypt (password hashing)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd pankhoKiUdaan
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory (see `.env.example` for reference):
```env
PORT=5000
NODE_ENV=development

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email Recipients (optional)
CONTACT_EMAIL=contact@pankhokiudaan.org
UDAAN_TALK_EMAIL=udaan-talk@pankhokiudaan.org
DISABILITY_INCLUSION_EMAIL=inclusion@pankhokiudaan.org
PODCAST_EMAIL=podcast@pankhokiudaan.org
```

**For Gmail users:**
1. Enable 2-Step Verification on your Google Account
2. Generate an App Password: Google Account → Security → 2-Step Verification → App passwords
3. Use the generated app password in `SMTP_PASS`

### Running the Application

1. Start the backend server (in one terminal):
```bash
npm run dev:server
```

2. Start the frontend development server (in another terminal):
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the port Vite assigns)
The backend API will be available at `http://localhost:5000`

### Production Build

1. Build the frontend:
```bash
npm run build
```

2. Start the backend server:
```bash
npm run server
```

## Project Structure

```
├── server/                 # Backend server
│   ├── config/            # Configuration files
│   │   └── nodemailer.js  # Email configuration
│   ├── routes/            # API routes
│   │   ├── contact.js
│   │   ├── udaanTalk.js
│   │   ├── disabilityInclusion.js
│   │   └── podcastGuest.js
│   ├── server.js          # Main server file
│   └── README.md          # Backend documentation
├── src/                   # Frontend source
│   ├── components/        # React components
│   ├── pages/             # Page components
│   ├── config/            # Configuration
│   │   └── api.js         # API endpoints configuration
│   └── ...
└── ...
```

## API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/udaan-talk` - Register for Udaan Talk
- `POST /api/disability-inclusion` - Submit disability inclusion request
- `POST /api/podcast-guest` - Submit podcast guest suggestion
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `GET /api/health` - Health check

### Admin Endpoints (Protected)
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify JWT token
- `POST /api/events` - Create event (admin only)
- `PUT /api/events/:id` - Update event (admin only)
- `DELETE /api/events/:id` - Delete event (admin only)

## Environment Variables

### Frontend
- `VITE_API_URL` - Backend API URL (defaults to `http://localhost:5000`)

### Backend
See `.env.example` for all available environment variables.

## Email Configuration

Each form submission triggers two emails:
1. **Notification email** to the organization
2. **Confirmation email** to the user who submitted the form

## Database Setup

This project uses MongoDB for data storage. You can use either:
- **Local MongoDB**: Install and run locally
- **MongoDB Atlas**: Free cloud-hosted MongoDB

### Quick Setup

1. **Add MongoDB connection to `.env`:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/pankhokiudaan
   ```
   Or for MongoDB Atlas:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pankhokiudaan
   ```

2. **Create admin user:**
   ```bash
   npm run create-admin
   ```
   Or with custom credentials:
   ```bash
   npm run create-admin admin admin@example.com securePassword123 admin
   ```

For detailed MongoDB setup, see [MONGODB_SETUP.md](./MONGODB_SETUP.md)

## Admin Panel

The admin panel allows you to manage events on the website.

### Default Admin Credentials

After running `npm run create-admin` without arguments:
- **Username:** `admin`
- **Email:** `admin@pankhokiudaan.org`
- **Password:** `admin123`

⚠️ **Important:** Change the default password after first login!

### Access Admin Panel

1. Navigate to: `http://localhost:5173/admin/login`
2. Login with your admin credentials
3. Manage events from the dashboard

For detailed admin panel documentation, see [ADMIN_PANEL.md](./ADMIN_PANEL.md)

## Development

- Frontend: `npm run dev`
- Backend: `npm run dev:server` (with auto-reload)
- Linting: `npm run lint`

## Deployment

For production deployment:

1. Set `NODE_ENV=production` in `.env`
2. Update `VITE_API_URL` to your production API URL
3. Use a proper email service (SendGrid, Mailgun, etc.) instead of Gmail
4. Build the frontend: `npm run build`
5. Deploy both frontend and backend

## License

[Add your license here]
