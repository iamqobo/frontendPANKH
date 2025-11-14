# MongoDB Setup Guide

## Quick Start

### 1. Install MongoDB

**Option A: Local Installation**
- Download from: https://www.mongodb.com/try/download/community
- Follow installation instructions for your OS
- Start MongoDB service

**Option B: MongoDB Atlas (Cloud - Recommended for Production)**
- Sign up at: https://www.mongodb.com/cloud/atlas
- Create a free cluster
- Get your connection string

### 2. Configure Connection String

Add to your `.env` file:

**Local MongoDB:**
```env
MONGODB_URI=mongodb://localhost:27017/pankhokiudaan
```

**MongoDB Atlas:**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pankhokiudaan
```

Replace:
- `username` - Your MongoDB Atlas username
- `password` - Your MongoDB Atlas password
- `cluster` - Your cluster name
- `pankhokiudaan` - Database name (can be changed)

### 3. Create Admin User

After MongoDB is connected, create your first admin:

```bash
npm run create-admin
```

Or with custom credentials:
```bash
npm run create-admin admin admin@example.com securePassword123 admin
```

## Database Models

### Event Model

```javascript
{
  title: String (required, max 200 chars),
  description: String (required),
  date: Date (required),
  location: String (default: "TBA"),
  imageUrl: String (optional),
  registrationLink: String (optional),
  isActive: Boolean (default: true),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

### Admin Model

```javascript
{
  username: String (required, unique, lowercase),
  email: String (required, unique, lowercase),
  password: String (required, hashed with bcrypt),
  role: String (enum: ['admin', 'superadmin'], default: 'admin'),
  isActive: Boolean (default: true),
  lastLogin: Date (optional),
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## Admin Credentials

### Default Credentials (First Time Setup)

If you run `npm run create-admin` without arguments:
- **Username:** `admin`
- **Email:** `admin@pankhokiudaan.org`
- **Password:** `admin123`
- **Role:** `admin`

⚠️ **Security:** Change these credentials immediately after first login!

### Creating Additional Admins

```bash
# Create admin with custom credentials
npm run create-admin john john@example.com securePass123 admin

# Create superadmin
npm run create-admin superadmin super@example.com securePass123 superadmin
```

## Database Operations

### View Events

Events are stored in the `events` collection. You can view them using:
- MongoDB Compass (GUI)
- MongoDB Shell (CLI)
- Your application's admin panel

### View Admins

Admins are stored in the `admins` collection. Passwords are hashed and cannot be viewed.

### Backup Database

```bash
# Export database
mongodump --uri="mongodb://localhost:27017/pankhokiudaan" --out=./backup

# Restore database
mongorestore --uri="mongodb://localhost:27017/pankhokiudaan" ./backup/pankhokiudaan
```

## Troubleshooting

### Connection Error

**Error:** `MongoServerError: Authentication failed`

**Solution:**
- Check MongoDB connection string
- Verify username/password for Atlas
- Ensure IP is whitelisted in Atlas (if using cloud)

### Admin Creation Fails

**Error:** `Admin already exists`

**Solution:**
- Admin with that username/email already exists
- Use different credentials or delete existing admin from database

### Database Not Found

**Solution:**
- MongoDB will automatically create the database on first connection
- Ensure MongoDB service is running

## Production Considerations

1. **Use MongoDB Atlas** for production (cloud-hosted)
2. **Enable SSL/TLS** for secure connections
3. **Set up database backups** regularly
4. **Use strong passwords** for admin accounts
5. **Enable MongoDB authentication** (username/password)
6. **Restrict IP access** in MongoDB Atlas
7. **Monitor database performance** and usage

## Migration from JSON Files

If you had events stored in JSON files, you can migrate them:

1. Read events from `server/data/events.json`
2. Use MongoDB Compass or a script to import
3. Or manually create events through the admin panel

The old JSON file storage is no longer used - all data is now in MongoDB.

