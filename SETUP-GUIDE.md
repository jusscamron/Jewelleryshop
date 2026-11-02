# 🚀 Quick Setup Guide - Indra Shop

## Step-by-Step Setup Instructions

### 1️⃣ Install Node.js (if not already installed)
- Download from: https://nodejs.org/
- Choose LTS (Long Term Support) version
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

### 2️⃣ Navigate to Project Directory
```bash
cd d:\indra-shop
```

### 3️⃣ Install Dependencies
```bash
npm install
```
This will install:
- React 18.3.1
- React DOM 18.3.1
- Vite 5.4.0
- Other development dependencies

**Wait time**: ~1-2 minutes depending on internet speed

### 4️⃣ Start Development Server
```bash
npm run dev
```

You should see output like:
```
  VITE v5.4.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 5️⃣ Open in Browser
- Click on the link: `http://localhost:5173/`
- Or open your browser and manually type: `localhost:5173`

## 🎉 That's It!

Your Indra Shop website should now be running locally!

---

## 📱 Testing on Mobile

### Option 1: Browser DevTools
1. Open Chrome DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Select device: iPhone 12, Galaxy S20, etc.
4. Test responsiveness

### Option 2: Real Device Testing
1. Find your computer's local IP:
   ```bash
   ipconfig
   ```
2. Look for "IPv4 Address" (e.g., 192.168.1.100)
3. Start dev server with host flag:
   ```bash
   npm run dev -- --host
   ```
4. On mobile, visit: `http://192.168.1.100:5173`
5. Make sure mobile and computer are on same WiFi

---

## 🛠️ Common Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Troubleshooting
```bash
# If port 5173 is busy
npm run dev -- --port 3000

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 🎨 Quick Customization Tips

### Change Primary Colors
Edit `src/styles/global.css`:
```css
:root {
  --maroon: #5a0f1f;    /* Change main color */
  --gold: #b98a4a;      /* Change accent color */
}
```

### Update Hero Content
Edit `src/components/Hero.jsx` - look for slides array

### Add Your Logo
Place logo in `src/assets/` and update `src/components/Header.jsx`

### Change Products
Edit `src/components/FeaturedProducts.jsx` - update products array

---

## 📦 Production Deployment

### Build the Project
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Deploy to Hosting
Upload the `dist/` folder contents to:
- **Netlify**: Drag & drop `dist/` folder
- **Vercel**: Connect GitHub repo or upload
- **GitHub Pages**: Use gh-pages package
- **Any static host**: FTP upload `dist/` contents

---

## 🐛 Common Issues & Fixes

### Issue: "npm not recognized"
**Fix**: Install Node.js from nodejs.org

### Issue: Port already in use
**Fix**: `npm run dev -- --port 3000`

### Issue: Changes not showing
**Fix**: 
1. Hard refresh browser (Ctrl+Shift+R)
2. Clear browser cache
3. Restart dev server

### Issue: Module not found
**Fix**: `npm install`

---

## 💡 Pro Tips

1. **Hot Reload**: Changes appear instantly, no need to refresh
2. **Mobile Testing**: Use Chrome DevTools device toolbar
3. **Performance**: Images should be optimized (use TinyPNG)
4. **SEO**: Add meta tags in `index.html`
5. **Speed**: Keep dev server running while coding

---

## 📞 Need Help?

If you encounter any issues:
1. Check error messages in terminal
2. Check browser console (F12)
3. Verify all files are in correct locations
4. Ensure Node.js 14+ is installed
5. Try reinstalling dependencies

---

## ✅ Checklist

- [ ] Node.js installed
- [ ] Project directory opened in terminal
- [ ] `npm install` completed successfully
- [ ] `npm run dev` running without errors
- [ ] Browser showing website at localhost:5173
- [ ] All sections visible and responsive
- [ ] Mobile view tested

---

**Happy coding! 🎉**
