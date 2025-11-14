# Environment Variables Setup Guide

## Quick Start

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and fill in your credentials

## Sample .env File

Here's a complete example `.env` file:

```env
# ============================================
# Server Configuration
# ============================================
PORT=5000
NODE_ENV=development

# ============================================
# SMTP Email Configuration
# ============================================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@gmail.com
SMTP_PASS=abcd efgh ijkl mnop

# ============================================
# Email Recipients (Optional)
# ============================================
CONTACT_EMAIL=contact@pankhokiudaan.org
UDAAN_TALK_EMAIL=udaan-talk@pankhokiudaan.org
DISABILITY_INCLUSION_EMAIL=inclusion@pankhokiudaan.org
PODCAST_EMAIL=podcast@pankhokiudaan.org

# ============================================
# MongoDB Database Configuration
# ============================================
# Local MongoDB: mongodb://localhost:27017/pankhokiudaan
# MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/pankhokiudaan
MONGODB_URI=mongodb://localhost:27017/pankhokiudaan

# ============================================
# Frontend URL (for CORS)
# ============================================
# Add your production frontend URL here
# Example: https://pankh-mauve.vercel.app
FRONTEND_URL=https://pankh-mauve.vercel.app

# ============================================
# JWT Authentication
# ============================================
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## Gmail Setup Instructions

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the prompts to enable it

### Step 2: Generate App Password
1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
3. Select "Mail" as the app
4. Select "Other (Custom name)" as the device
5. Enter "Pankho Ki Udaan Server" as the name
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
8. Paste it in your `.env` file as `SMTP_PASS`

### Example Gmail Configuration:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
```

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=yourname@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP (SendGrid, Mailgun, etc.)
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## Frontend Environment Variables

Create a `.env` file in the root directory for frontend configuration:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000
```

For production, update it to your production API URL:
```env
VITE_API_URL=https://api.pankhokiudaan.org
```

## MongoDB Setup

### Option 1: Local MongoDB

1. Install MongoDB locally: https://www.mongodb.com/try/download/community
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/pankhokiudaan`

### Option 2: MongoDB Atlas (Cloud)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string and replace username/password
4. Use connection string: `mongodb+srv://username:password@cluster.mongodb.net/pankhokiudaan`

### Add to .env:
```env
MONGODB_URI=mongodb://localhost:27017/pankhokiudaan
```

## Admin Panel Setup

### Step 1: Create Admin User

After setting up MongoDB, create your first admin user:

```bash
npm run create-admin
```

Or with custom credentials:
```bash
npm run create-admin <username> <email> <password> <role>
```

Example:
```bash
npm run create-admin admin admin@pankhokiudaan.org mySecurePassword admin
```

**Default credentials (if no arguments):**
- Username: `admin`
- Email: `admin@pankhokiudaan.org`
- Password: `admin123`
- Role: `admin`

⚠️ **Important:** Change the default password after first login!

### Step 2: Set JWT Secret

Generate a strong random string for `JWT_SECRET`. You can use:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 3: Configure Admin Username

Set `ADMIN_USERNAME` in your `.env` file (default is "admin").

### Example Admin Configuration:
```env
JWT_SECRET=your-super-secret-jwt-key-min-32-characters
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$10$YourGeneratedHashHere...
```

### Access Admin Panel

1. Navigate to: `http://localhost:5173/admin/login`
2. Login with your admin credentials
3. Manage events from the dashboard

## Security Notes

⚠️ **Important:**
- Never commit `.env` files to version control
- The `.env` file is already in `.gitignore`
- Use strong, unique passwords
- Generate a strong JWT_SECRET (at least 32 characters)
- For production, use environment variables provided by your hosting service
- Consider using a dedicated email service (SendGrid, Mailgun) for production
- Change default admin username and use a strong password

## Testing Your Configuration

After setting up your `.env` file:

1. Start the server:
   ```bash
   npm run dev:server
   ```

2. Check the console for:
   - ✅ "Server is ready to take our messages" (SMTP connection successful)
   - ❌ "SMTP connection error" (check your credentials)

3. Test a form submission to verify emails are being sent

## Troubleshooting

### "SMTP connection error"
- Verify your SMTP credentials are correct
- For Gmail, ensure you're using an App Password (not your regular password)
- Check that 2-Step Verification is enabled
- Verify SMTP_HOST and SMTP_PORT are correct for your provider

### "Authentication failed"
- Double-check your SMTP_USER and SMTP_PASS
- For Gmail, make sure you're using the App Password, not your account password
- Ensure there are no extra spaces in your credentials

### Emails not received
- Check spam/junk folder
- Verify recipient email addresses are correct
- Check server logs for error messages
- Ensure your email provider allows SMTP connections

