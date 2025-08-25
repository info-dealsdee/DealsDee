# Decap CMS Setup Instructions - Dealsdee

## 🎯 Overview
Decap CMS has been successfully integrated into the Dealsdee project. This document provides instructions for setting up GitHub authentication to enable content management.

## 📍 Admin Panel Access Points
- **Primary Route**: `/admin` - Redirects to the static admin panel
- **Direct Access**: `/admin.html` - Static HTML admin interface
- **Local Development**: http://localhost:8000/admin

## 🔐 GitHub OAuth Setup (Required for Production)

### Step 1: Create GitHub OAuth App
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in the following details:

   **For Local Development:**
   - **Application name**: Dealsdee CMS (Local)
   - **Homepage URL**: http://localhost:8000
   - **Authorization callback URL**: http://localhost:8000

   **For Production (Vercel/Netlify):**
   - **Application name**: Dealsdee CMS
   - **Homepage URL**: https://your-domain.vercel.app
   - **Authorization callback URL**: https://your-domain.vercel.app/api/auth

4. Click "Register application"
5. Save the **Client ID** and **Client Secret**

### Step 2: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# GitHub OAuth
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here

# Optional: Restrict to specific GitHub users
GITHUB_ALLOWED_USERS=yourusername,otherusername
```

### Step 3: Deploy to Vercel/Netlify

#### For Vercel:
1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
4. Deploy

#### For Netlify:
1. Push your code to GitHub
2. Import project to Netlify
3. Enable Identity service in Netlify dashboard
4. Configure Git Gateway under Identity → Services
5. Deploy

## 📝 CMS Features

### Collections Available:
1. **รีวิว (Reviews)** - `/app/content/reviews/`
   - Title, Slug, Date, Author
   - Category, Featured Image
   - Score (1-10)
   - Pros & Cons lists
   - Affiliate links (Amazon, Shopee, Lazada, Official)
   - Markdown content with image support

2. **บทความเปรียบเทียบ (Comparisons)** - `/app/content/comparisons/`
   - Title, Slug, Date, Author
   - Category, Featured Image
   - Score (1-10)
   - Markdown content with image support

### Media Management:
- Upload directory: `/public/images/uploads/`
- Supported formats: JPG, PNG, GIF, WebP
- Automatic optimization via Next.js Image component

## 🚀 Usage Instructions

### For Content Editors:
1. Navigate to `/admin` on your deployed site
2. Click "Login with GitHub"
3. Authorize the application
4. You'll see the CMS dashboard with:
   - รีวิว (Reviews) collection
   - บทความเปรียบเทียบ (Comparisons) collection
5. Click on any collection to:
   - View existing content
   - Create new articles
   - Edit existing articles
   - Delete articles
6. All changes are automatically committed to GitHub

### For Developers:
1. The CMS uses the GitHub API to read/write files
2. Content is stored as MDX files with frontmatter
3. Images are uploaded to `/public/images/uploads/`
4. Each save creates a commit in the repository
5. The site automatically rebuilds on new commits

## 🔧 Troubleshooting

### Common Issues:

1. **"Login with GitHub" not working:**
   - Verify OAuth app settings match your domain
   - Check Client ID and Secret are correct
   - Ensure callback URL is exact match

2. **Cannot see collections:**
   - Check folder paths exist in repository
   - Verify branch name is correct (main/master)
   - Ensure GitHub permissions allow repository access

3. **Media upload fails:**
   - Check `/public/images/uploads/` directory exists
   - Verify write permissions on repository
   - Check file size limits

4. **Changes not appearing on site:**
   - Allow time for rebuild/redeploy
   - Check build logs for errors
   - Verify MDX syntax is valid

## 📚 Additional Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [GitHub OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

## 🤝 Support

For issues specific to this implementation:
1. Check the browser console for errors
2. Review the network tab for failed requests
3. Verify all environment variables are set
4. Contact the development team

---

**Last Updated**: December 2024
**CMS Version**: Decap CMS 3.0
**Project**: Dealsdee - Home Office & Ergonomics Reviews