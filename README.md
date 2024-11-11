# TradeNepal

Modern MERN E-commerce Platform
A full-stack e-commerce solution built with MongoDB, Express.js, React, Node.js (MERN), and Next.js, featuring both customer-facing storefront and admin dashboard.

Project Phases
Phase 1: Foundation & Setup
 Project initialization with Next.js
 MongoDB database setup
 Express.js API configuration
 Tailwind CSS integration
 Next.js API routes setup
 User authentication (Login and SignUp)
Phase 2: Admin Dashboard
 Admin authentication
 Product management CRUD operations
 Image upload functionality
 Dashboard analytics
 Order management system
Phase 3: Store Front Development
 Homepage with hero section
 Product catalog with filtering
 Category navigation
 Product detail pages
 Shopping cart functionality
 User authentication
Phase 4: Enhanced Features
 Product reviews and ratings
 Advanced filtering and sorting
 Stock management
 Multiple image support
 Responsive design
 Brand categorization
Phase 5: Optimization & Polish
 Performance optimization
 SEO implementation
 Loading states
 Error handling
 Input validation
 Security enhancements
Features
Admin Dashboard
Secure admin authentication
Product management (Add, Edit, Delete)
Image upload with drag & drop
Order tracking
Inventory management
Sales analytics
Customer Interface
User registration and login
Intuitive product browsing
Advanced filtering options
Category-based navigation
Product search
Shopping cart
User reviews and ratings
Responsive design for all devices
Technical Features
Server-side rendering with Next.js
MongoDB for flexible, scalable data storage
Express.js for robust API development
React for dynamic user interfaces
Next.js API routes for serverless functions
Responsive design with Tailwind CSS
Form validation
Image optimization
Protected routes
Getting Started
Clone the repository
git clone https://github.com/yourusername/mern-ecommerce-platform.git
Install dependencies
cd mern-ecommerce-platform
npm install
Set up environment variables (see below)

Start the development server

npm run dev
Environment Variables
Create a .env.local file in the root directory:

MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000/api
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
Tech Stack
Frontend: React, Next.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
File Storage: Cloudinary
Authentication: JSON Web Tokens (JWT)
Styling: Tailwind CSS
Icons: Lucide React
Forms: React Hook Form
Project Structure
The project follows Next.js 13+ folder structure:

/app
  /admin
    /dashboard
    /products
    /orders
  /shop
    /products
    /cart
  /api
  /auth
    /login
    /signup
/components
/lib
/models
/public
API Routes
/api/auth: User authentication (login, signup)
/api/products: Product management
/api/orders: Order processing
/api/users: User management
/api/reviews: Product reviews
/api/categories: Product categories
Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE.md file for details.
