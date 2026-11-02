# 🛍️ Indra Shop - E-Commerce Website

A modern, fully responsive e-commerce website for authentic Indian sarees and jewelry. Built with React + Vite, optimized for mobile-first experience.

![Indra Shop](https://via.placeholder.com/1200x400/5a0f1f/ffffff?text=Indra+Shop+-+Authentic+Indian+Sarees+%26+Jewelry)

## ✨ Features

### 🎨 Design & UI
- **Modern, Professional Design** - Clean and elegant interface
- **Mobile-First Responsive** - Optimized for all devices (320px - 1920px+)
- **Smooth Animations** - Subtle, performance-optimized animations
- **Gradient Accents** - Eye-catching gradient overlays and effects
- **Dark Mode Footer** - Professional dark-themed footer section

### 🛒 E-Commerce Sections
- **Hero Section** - Dynamic slides with compelling CTAs
- **Product Categories** - Easy-to-browse category grid
- **Featured Products** - Showcase best-selling items
- **Brand Story** - Company narrative with statistics
- **Why Choose Us** - 6 compelling reasons to shop with us
- **Features Strip** - Key shopping benefits highlighted
- **Promo Banners** - Special offers and discounts
- **Customer Testimonials** - Real reviews from happy customers
- **Social Proof** - Trust badges and statistics
- **Newsletter Signup** - Email capture with discount incentive
- **Instagram Feed** - Social media integration

### 🚀 Performance & UX
- **Fast Load Times** - Optimized React + Vite setup
- **Smooth Scrolling** - Beautiful scroll behavior
- **Scroll-to-Top Button** - Easy navigation back to top
- **Touch-Optimized** - 44px minimum touch targets
- **No Horizontal Scroll** - Perfect responsive implementation
- **Accessibility** - WCAG-compliant color contrasts and focus states

### 📱 Mobile Optimizations
- **Compact Layouts** - 25-30% smaller on mobile devices
- **2×2 Grids** - Stable, grid-based section layouts
- **Hidden Backgrounds** - Hero images hidden on mobile for performance
- **Optimized Typography** - Readable text at all screen sizes
- **Safe Area Support** - Works perfectly on notched devices
- **No Zoom on Input** - Prevents unwanted zoom on iOS

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ installed on your system
- npm or yarn package manager

### Installation

1. **Clone or download this repository**
   ```bash
   cd d:\indra-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The site should now be running!

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
indra-shop/
├── src/
│   ├── components/           # React components
│   │   ├── AnnouncementBar.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Categories.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── BrandStory.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── FeaturesStrip.jsx
│   │   ├── PromoBanners.jsx
│   │   ├── Testimonials.jsx
│   │   ├── SocialProof.jsx
│   │   ├── Newsletter.jsx
│   │   ├── InstagramFeed.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── styles/              # CSS stylesheets
│   │   ├── global.css
│   │   ├── AnnouncementBar.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── (and more...)
│   ├── assets/              # Images and media
│   ├── App.jsx              # Main app component
│   └── main.jsx             # React entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --maroon: #5a0f1f;
  --gold: #b98a4a;
  --cream: #faf3e8;
  /* ... more colors */
}
```

### Content
- **Hero Slides** - Edit in `src/components/Hero.jsx`
- **Products** - Update in `src/components/FeaturedProducts.jsx`
- **Categories** - Modify in `src/components/Categories.jsx`
- **Testimonials** - Edit in `src/components/Testimonials.jsx`

### Images
Place your images in `src/assets/` and update the paths:
- Hero images: 1920×700px recommended (2.74:1 ratio)
- Product images: 400×400px recommended (1:1 ratio)
- Category images: 300×300px recommended (1:1 ratio)

## 📱 Responsive Breakpoints

- **Mobile Small**: < 480px
- **Mobile**: 480px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ES6+** - Modern JavaScript

## 📝 TODO / Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product detail pages
- [ ] Add user authentication
- [ ] Integrate payment gateway
- [ ] Add product search and filters
- [ ] Implement wishlist feature
- [ ] Add real backend API integration
- [ ] Set up product database
- [ ] Add multi-language support
- [ ] Implement order tracking

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

For any questions or support:
- Email: support@indrashop.com
- Phone: +91 123 456 7890
- Location: Mumbai, Maharashtra, India

---

Made with ❤️ for authentic Indian fashion
