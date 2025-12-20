# Vercel Deployment Fixes

This document outlines the fixes applied and what you need to check on Vercel.

## Issues Fixed

### 1. ✅ Products API 500 Error
- **Problem**: Database connection failures causing 500 errors
- **Fix**: 
  - Added better error handling with detailed error messages
  - Improved MongoDB connection timeout settings (10s for serverless)
  - Added error handling for category filtering
  - Reduced minPoolSize from 2 to 1 for serverless environments

### 2. ✅ Missing FAQ Page (404 Error)
- **Problem**: `/faq` route was missing
- **Fix**: Created `app/(main)/faq/page.js` with FAQs component

### 3. ✅ Missing Contact Page (404 Error)
- **Problem**: `/contact` route was missing
- **Fix**: Created `app/(main)/contact/page.js` with contact information and enquiry form link

### 4. ✅ Image Optimization 404 Errors
- **Problem**: Next.js image optimization failing for Unsplash images
- **Fix**: 
  - Added `pathname: "/**"` to all remote patterns
  - Added `minimumCacheTTL: 60` for better caching
  - Improved image configuration for Vercel

### 5. ✅ Database Connection Improvements
- **Problem**: Connection timeouts in serverless environment
- **Fix**:
  - Increased `serverSelectionTimeoutMS` to 10000ms (10 seconds)
  - Added `connectTimeoutMS: 10000`
  - Reduced `minPoolSize` to 1 for serverless
  - Disabled mongoose buffering for better serverless compatibility

## Critical: Vercel Environment Variables

**You MUST set these environment variables in your Vercel project settings:**

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

### Required Environment Variables:

```env
# MongoDB Connection (CRITICAL - This is likely the main issue)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/regal-horeca
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/regal-horeca?retryWrites=true&w=majority

# Cloudflare R2 (for image uploads)
R2_ACCOUNT_ID=your-r2-account-id
R2_ACCESS_KEY_ID=your-r2-access-key-id
R2_SECRET_ACCESS_KEY=your-r2-secret-access-key
R2_BUCKET_NAME=your-bucket-name
R2_PUBLIC_URL=https://your-bucket-name.r2.cloudflarestorage.com

# Admin Authentication
ADMIN_EMAIL=admin@regal.com
ADMIN_PASSWORD=Admin@123456
JWT_SECRET=your-super-secret-jwt-key

# WhatsApp Business Number (with country code, no + sign)
NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER=917093913311

# Optional: App URL
NEXT_PUBLIC_APP_URL=https://regal-horeca.vercel.app
```

### Important Notes:

1. **MONGODB_URI is CRITICAL**: If this is not set correctly, the `/api/products` endpoint will return 500 errors
2. **MongoDB Atlas**: If using MongoDB Atlas, make sure:
   - Your IP address is whitelisted (or use 0.0.0.0/0 for Vercel)
   - Network Access allows connections from anywhere (or Vercel IPs)
   - The connection string includes `?retryWrites=true&w=majority`
3. **Environment**: Set these for **Production**, **Preview**, and **Development** environments

## Testing After Deployment

1. **Check Products API**:
   - Visit: `https://regal-horeca.vercel.app/api/products?limit=10`
   - Should return JSON with products, not 500 error

2. **Check Pages**:
   - `/faq` - Should show FAQ page
   - `/contact` - Should show contact page
   - `/catalog` - Should show products

3. **Check Images**:
   - Images should load without 404 errors
   - Check browser console for any remaining image errors

## Debugging Tips

If products still don't load:

1. **Check Vercel Function Logs**:
   - Go to Vercel Dashboard → Your Project → Functions
   - Check logs for `/api/products` endpoint
   - Look for MongoDB connection errors

2. **Test MongoDB Connection**:
   - Verify your MongoDB URI is correct
   - Test connection string locally first
   - Make sure MongoDB Atlas allows connections from Vercel

3. **Check Environment Variables**:
   - Verify all variables are set in Vercel
   - Make sure they're set for the correct environment (Production)
   - Redeploy after adding/changing environment variables

4. **Check Network Tab**:
   - Open browser DevTools → Network tab
   - Look for failed requests to `/api/products`
   - Check the response body for error details

## Common Issues

### Issue: "MONGODB_URI environment variable is not set"
**Solution**: Add `MONGODB_URI` to Vercel environment variables and redeploy

### Issue: "MongoServerError: connection timeout"
**Solution**: 
- Check MongoDB Atlas network access settings
- Whitelist Vercel IPs or use 0.0.0.0/0
- Verify connection string is correct

### Issue: Images still showing 404
**Solution**: 
- Wait a few minutes for Next.js image optimization to warm up
- Check if image URLs are accessible directly
- Verify `remotePatterns` in `next.config.js` includes the image domains

## Next Steps

1. ✅ Set all environment variables in Vercel
2. ✅ Redeploy the application
3. ✅ Test the `/api/products` endpoint
4. ✅ Verify products load on the frontend
5. ✅ Check that FAQ and Contact pages work

If issues persist, check the Vercel function logs for detailed error messages.

