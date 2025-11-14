# Admin Panel Documentation

## Overview

The admin panel allows authorized users to manage events on the Pankho Ki Udaan website. It features JWT-based authentication and a full CRUD interface for event management.

## Features

- ✅ Secure JWT authentication
- ✅ Login/logout functionality
- ✅ Create, read, update, and delete events
- ✅ Protected routes
- ✅ Responsive design
- ✅ Real-time event updates on public Events page

## Accessing the Admin Panel

1. Navigate to: `http://localhost:5173/admin/login`
2. Enter your admin credentials
3. You'll be redirected to the dashboard upon successful login

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up MongoDB

Add MongoDB connection to your `.env` file:

```env
# Local MongoDB
MONGODB_URI=mongodb://localhost:27017/pankhokiudaan

# Or MongoDB Atlas (Cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pankhokiudaan
```

### 3. Configure Environment Variables

Add these to your `.env` file:

```env
# JWT Secret (generate a strong random string)
JWT_SECRET=your-super-secret-jwt-key-min-32-characters
```

### 4. Create Admin User

After MongoDB is set up, create your first admin:

```bash
npm run create-admin
```

Or with custom credentials:
```bash
npm run create-admin admin admin@example.com securePassword123 admin
```

**Default credentials (if no arguments):**
- Username: `admin`
- Email: `admin@pankhokiudaan.org`
- Password: `admin123`
- Role: `admin`

### 5. Generate JWT Secret (Optional)

Generate a secure random string:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## API Endpoints

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify JWT token

### Events (Protected - requires JWT)

- `GET /api/events` - Get all events (public)
- `GET /api/events/:id` - Get single event (public)
- `POST /api/events` - Create event (admin only)
- `PUT /api/events/:id` - Update event (admin only)
- `DELETE /api/events/:id` - Delete event (admin only)

## Event Management

### Creating an Event

1. Login to the admin panel
2. Click "+ Add New Event"
3. Fill in the form:
   - **Title** (required): Event name
   - **Description** (required): Event details
   - **Date** (required): Event date
   - **Location**: Event location (defaults to "TBA")
   - **Image URL**: Optional event image
   - **Registration Link**: Optional registration URL
4. Click "Create"

### Editing an Event

1. Find the event in the dashboard table
2. Click "Edit"
3. Modify the fields
4. Click "Update"

### Deleting an Event

1. Find the event in the dashboard table
2. Click "Delete"
3. Confirm the deletion

## Event Data Structure

```json
{
  "id": "1234567890",
  "title": "Event Title",
  "description": "Event description",
  "date": "2024-12-31",
  "location": "Event Location",
  "imageUrl": "https://example.com/image.jpg",
  "registrationLink": "https://example.com/register",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## Security Features

- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: Bcrypt for password storage
- **Protected Routes**: Frontend and backend route protection
- **Token Expiration**: Tokens expire after 24 hours
- **CORS**: Configured for secure cross-origin requests

## Troubleshooting

### "Invalid credentials" error
- Verify username and password are correct
- Check that admin exists in MongoDB database
- Ensure admin account is active (`isActive: true`)
- Try creating a new admin: `npm run create-admin`

### "Access token required" error
- Your session may have expired (tokens last 24 hours)
- Try logging out and logging back in
- Clear browser localStorage if issues persist

### Events not appearing
- Check that the backend server is running
- Verify API endpoints are accessible
- Check browser console for errors
- Ensure events are saved in `server/data/events.json`

### Cannot access admin routes
- Verify you're logged in
- Check that the JWT token is stored in localStorage
- Try logging out and logging back in

## File Structure

```
server/
├── config/
│   └── database.js      # MongoDB connection
├── models/
│   ├── Admin.js         # Admin model
│   └── Event.js         # Event model
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── routes/
│   ├── auth.js          # Authentication routes
│   └── events.js        # Event CRUD routes
└── scripts/
    └── createAdmin.js   # Admin creation script

src/
├── context/
│   └── AuthContext.jsx  # Authentication context
├── components/
│   └── ProtectedRoute.jsx # Route protection component
└── pages/
    ├── AdminLogin.jsx    # Login page
    └── AdminDashboard.jsx # Dashboard page
```

## Production Considerations

1. **Change Default Credentials**: Don't use default admin username
2. **Strong JWT Secret**: Use a cryptographically secure random string
3. **HTTPS**: Always use HTTPS in production
4. **Database**: Consider migrating from JSON file to a proper database
5. **Rate Limiting**: Add rate limiting to prevent brute force attacks
6. **Token Refresh**: Implement token refresh mechanism for better UX
7. **Audit Logging**: Log admin actions for security

## Support

For issues or questions, check:
- Server logs for backend errors
- Browser console for frontend errors
- Network tab for API request/response details

