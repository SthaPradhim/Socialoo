# TradeNepal

**Modern MERN E-commerce Platform**<br/>
A full-stack e-commerce solution built with MongoDB, Express.js, React, Node.js (MERN), and Next.js, featuring both customer-facing storefront and admin dashboard.<br/>

**Project Phases**<br/>
**Phase 1: Foundation & Setup**<br/>
 Project initialization with Next.js<br/>
 MongoDB database setup<br/>
 Express.js API configuration<br/>
 Tailwind CSS integration<br/>
 Next.js API routes setup<br/>
 User authentication (Login and SignUp)<br/><br/>
**Phase 2: Admin Dashboard**<br/>
 Admin authentication<br/>
 Product management CRUD operations<br/>
 Image upload functionality<br/>
 Dashboard analytics<br/>
 Order management system<br/><br/>
**Phase 3: Store Front Development**<br/>
 Homepage with hero section<br/>
 Product catalog with filtering<br/>
 Category navigation<br/>
 Product detail pages<br/>
 Shopping cart functionality<br/>
 User authentication<br/><br/>
**Phase 4: Enhanced Features**<br/>
 Product reviews and ratings<br/>
 Advanced filtering and sorting<br/>
 Stock management<br/>
 Multiple image support<br/>
 Responsive design<br/>
 Brand categorization<br/>
**Phase 5: Optimization & Polish**<br/>
 Performance optimization<br/>
 SEO implementation<br/>
 Loading states<br/>
 Error handling<br/>
 Input validation<br/>
 Security enhancements<br/><br/>
**Features**<br/>
Admin Dashboard<br/>
Secure admin authentication<br/>
Product management (Add, Edit, Delete)<br/>
Image upload with drag & drop<br/>
Order tracking<br/>
Inventory management<br/>
Sales analytics<br/>
Customer Interface<br/>
User registration and login<br/>
Intuitive product browsing<br/>
Advanced filtering options<br/>
Category-based navigation<br/>
Product search<br/>
Shopping cart<br/>
User reviews and ratings<br/>
Responsive design for all devices<br/>
Technical Features<br/>
Server-side rendering with Next.js<br/>
MongoDB for flexible, scalable data storage<br/>
Express.js for robust API development<br/>
React for dynamic user interfaces<br/>
Next.js API routes for serverless functions<br/>
Responsive design with Tailwind CSS<br/>
Form validation<br/>
Image optimization<br/>
Protected routes<br/><br/>
**Getting Started**<br/>
Clone the repository<br/>
git clone https://github.com/SthaPradhim/TradeNepal<br/>
Install dependencies<br/>
cd mern-ecommerce-platform<br/>
npm install<br/>
Set up environment variables (see below)<br/>

Start the development server<br/>

npm run dev<br/>
Environment Variables<br/>
Create a .env.local file in the root directory:<br/>

MONGODB_URI=your_mongodb_connection_string<br/>
NEXT_PUBLIC_API_URL=http://localhost:3000/api<br/>
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name<br/>
CLOUDINARY_API_KEY=your_cloudinary_api_key<br/>
CLOUDINARY_API_SECRET=your_cloudinary_api_secret<br/>
JWT_SECRET=your_jwt_secret<br/>
Tech Stack<br/>
Frontend: React, Next.js, Tailwind CSS<br/>
Backend: Node.js, Express.js<br/>
Database: MongoDB<br/>
File Storage: Cloudinary<br/>
Authentication: JSON Web Tokens (JWT)<br/>
Styling: Tailwind CSS<br/>
Icons: Lucide React<br/>
Forms: React Hook Form<br/>
Project Structure<br/>
The project follows Next.js 13+ folder structure:<br/>

/app<br/>
  /admin<br/>
    /dashboard<br/>
    /products<br/>
    /orders<br/>
  /shop<br/>
    /products<br/>
    /cart<br/>
  /api<br/>
  /auth<br/>
    /login<br/>
    /signup<br/>
/components<br/>
/lib<br/>
/models<br/>
/public<br/><br/>
**API Routes**<br/>
/api/auth: User authentication (login, signup)<br/>
/api/products: Product management<br/>
/api/orders: Order processing<br/>
/api/users: User management<br/>
/api/reviews: Product reviews<br/>
/api/categories: Product categories<br/><br/>
**Contributing**<br/>
Fork the repository<br/>
Create your feature branch (git checkout -b feature/AmazingFeature)<br/>
Commit your changes (git commit -m 'Add some AmazingFeature')<br/>
Push to the branch (git push origin feature/AmazingFeature)<br/>
Open a Pull Request<br/><br/>
**License**<br/>
This project is licensed under the MIT License - see the LICENSE.md file for details.
