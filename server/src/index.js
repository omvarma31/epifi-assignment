import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const swaggerDocument = YAML.load(path.join(__dirname, '../swagger.yaml'));

const app = express();
const PORT = process.env.PORT || 3000;

// CORS setup
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api', router);

// Swagger UI Documentation
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customSiteTitle: 'Inventory Management API Docs',
    customCss: `
      .swagger-ui .topbar { background: #2d3748; }
      .swagger-ui .topbar .download-url-wrapper { display: none; }
      .swagger-ui .topbar .topbar-wrapper span { color: #fff !important; }
      .swagger-ui .info .title { color: #2d3748; }
      .swagger-ui .scheme-container { background: #f7fafc; }
    `,
    swaggerOptions: {
      docExpansion: 'none',
      defaultModelsExpandDepth: -1,
      displayRequestDuration: true,
      filter: true,
    },
  })
);

// Health check route
app.get('/', (req, res) => {
  res.send('Inventory Management Backend is running.');
});

// Start server after DB connection
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer(); 