# Multilingual Robotics Website

A professional, multilingual robotics company website built with React, featuring support for English, German, and Japanese languages.

## 🌟 Features

- **Multilingual Support**: Full internationalization (i18n) support for:
  - 🇺🇸 English
  - 🇩🇪 German (Deutsch) 
  - 🇯🇵 Japanese (日本語)

- **Modern Design**: Professional robotics company website with:
  - Responsive design optimized for all devices
  - Smooth animations using Framer Motion
  - Modern UI components with Tailwind CSS
  - Glass morphism effects and gradient designs

- **Complete Sections**:
  - Hero section with compelling messaging
  - Ecosystem section showcasing integrated intelligence
  - Use cases for Agriculture, Manufacturing, and Healthcare
  - Contact section with inquiry form
  - Simplified footer with company information

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - Modern React with latest features
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **Lucide React 0.536.0** - Modern icon library
- **React Router DOM 7.5.1** - Client-side routing
- **Axios 1.8.4** - HTTP client for API calls

### Backend
- **FastAPI 0.110.1** - Modern Python web framework
- **MongoDB with Motor** - NoSQL database with async driver
- **Python 3.x** - Backend language

### Development Tools
- **CRACO** - Create React App Configuration Override
- **ESLint & Prettier** - Code linting and formatting
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and Yarn
- Python 3.8+
- MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd robotics-website
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Environment Setup**
   - Copy `.env.example` to `.env` in both frontend and backend directories
   - Configure your environment variables

### Development

1. **Start Backend Server**
   ```bash
   cd backend
   python server.py
   ```

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   yarn start
   ```

3. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001

## 🌍 Language Support

The website automatically detects and saves the user's language preference. Users can switch between languages using the language selector in the navigation bar.

### Adding New Languages

1. Add translations to `frontend/src/i18n/translations.js`
2. Update the language list in `frontend/src/i18n/LanguageContext.js`
3. Add the new language option to the LanguageSwitcher component

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1920px and above)
- Tablets (768px - 1919px)
- Mobile phones (320px - 767px)

## 🎨 Design System

### Colors
- **Primary**: Blue color palette for main elements
- **Secondary**: Gray color palette for text and backgrounds
- **Accent**: Green color palette for success states
- **Purple**: Purple color palette for gradients and highlights

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations
- Loading states with proper feedback

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- Extended color palette
- Custom animations and keyframes
- Responsive breakpoints
- Typography scaling

### Environment Variables
- `REACT_APP_BACKEND_URL`: Backend API URL
- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: Database name

## 📝 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

This project is currently not accepting external contributions.

## 📧 Contact

For questions or support, please contact the development team.

---

**Built with ❤️ for the robotics industry**
