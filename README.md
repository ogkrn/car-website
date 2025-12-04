# Car Website - Front-End Internship Assignment

A modern, responsive car showcase website built with React and Vite. This project demonstrates all the required features for the Front-End Internship Role assessment.

## 🚀 Features Implemented

### 1. **Picture Scroll (Image Carousel)** ✅
- Smooth image carousel with navigation controls
- Clickable thumbnail preview
- Previous/Next navigation buttons
- Dot indicators for current slide
- Responsive design with smooth transitions

### 2. **360° View Button** ✅
- Interactive 360° car view modal
- Drag-to-rotate functionality (mouse & touch support)
- Beautiful 3D car representation
- Real-time rotation angle display
- Smooth animations and transitions

### 3. **Price Calculator (EMI Calculator)** ✅
- Three interactive sliders:
  - **Loan Amount**: ₹1,00,000 - ₹13,26,000
  - **Down Payment**: ₹0 - ₹12,26,000
  - **Duration**: 12 - 84 months
- Real-time EMI calculation
- Professional UI matching the dashboard reference
- "Check Eligibility" button
- Disclaimer notes included

### 4. **Car Overview Section** ✅
- Display of key car details:
  - Model: Mahindra Thar
  - Year: 2021
  - Mileage: 15.2 kmpl
  - Price: ₹10,60,800
- Additional details: KM Driven, Fuel Type, Transmission, Ownership
- Key highlights section with benefits
- Beautiful card-based layout

## 🛠️ Technology Stack

- **React 19.2.0** - UI library
- **Vite** - Build tool & dev server
- **CSS3** - Styling with modern features (Grid, Flexbox, Animations)
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload on file changes

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
car-website/
├── src/
│   ├── components/
│   │   ├── ImageCarousel.jsx        # Picture scroll component
│   │   ├── ImageCarousel.css
│   │   ├── View360.jsx              # 360° view component
│   │   ├── View360.css
│   │   ├── PriceCalculator.jsx      # EMI calculator
│   │   ├── PriceCalculator.css
│   │   ├── CarOverview.jsx          # Car details section
│   │   └── CarOverview.css
│   ├── App.jsx                      # Main application component
│   ├── App.css
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Color Scheme**: Purple gradient theme (#6b21a8, #9333ea)
- **Smooth Animations**: Fade-in effects, hover states, transitions
- **Accessibility**: Proper semantic HTML and ARIA labels

## ✨ Component Highlights

### Image Carousel
- Smooth slide transitions
- Multiple navigation options (arrows, thumbnails, dots)
- Keyboard navigation support
- Touch/swipe support for mobile

### 360° View
- Interactive drag-to-rotate
- Modal overlay with close button
- 3D car visualization
- Rotation angle indicator

### Price Calculator
- Real EMI calculation based on:
  - Principal amount (Loan Amount)
  - Interest rate (9.5% annual)
  - Loan duration (months)
- Color-coded sliders for different parameters
- Responsive design

### Car Overview
- Grid layout for specifications
- Hover effects on detail cards
- Highlighted key benefits
- Prominent price display

## 🚀 Deployment

This project can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **Heroku**

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Assignment Compliance

✅ **Picture Scroll**: Image carousel with smooth navigation  
✅ **360° View Button**: Interactive 360° car view  
✅ **Price Calculator**: EMI calculator with sliders (Number of Invites → Loan Amount, Duration of Event → Loan Duration)  
✅ **Car Overview Section**: Model, Year, Mileage, Price display  
✅ **Framework**: React.js used  
✅ **Responsive**: Works on all devices  
✅ **Clean Code**: Well-organized, commented, and maintainable

## 🔗 Reference

- Spinny Website: [Mahindra Thar Listing](http://spinny.com/buy-used-cars/gurgaon/mahindra/thar/)
- Dashboard Reference: EMI Calculator design from provided image

## 📄 License

This project is created for educational and assessment purposes.

---
