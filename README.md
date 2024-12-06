# Vehicle Dashboard React Application

This is a **Vehicle Dashboard** application built with **React**. It serves as a frontend to display various vehicle-related metrics such as motor speed, battery status, charging state, and other indicators. The project is containerized using Docker and deployed to **Google Cloud Run**.

## Features
- Displays motor speed, battery level, temperature, gear ratio, and more.
- Uses **React Spring** for smooth animations in gauges and indicators.
- Responsive design to fit various screen sizes.
- Backend integration for real-time updates.
- Interactive control panel to manage vehicle parameters.

## Dashboard Functionality
- **Slider Control**: Moving the speed slider will change the speed value, which updates both the speed and power displayed on the gauges.
- **Charging Button**: Pressing the charging button will reset the speed slider to 0, and also reset both the power gauge and speed gauge to reflect the charging state.
- **Info Display & Indicators**: The information display panel and indicators are dynamically updated via the database to reflect real-time changes in vehicle status.

## Prerequisites
Before running this project, make sure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Docker** (for containerization)
- **Google Cloud SDK** (for deployment)

## Getting Started

### Clone the Repository
```sh
git clone https://github.com/your-username/vehicle-dashboard.git
cd vehicle-dashboard
```

### Install Dependencies
Run the following command to install the required packages:
```sh
npm install
```

### Running the App Locally
To run the application in development mode, use:
```sh
npm start
```
The app will run at `http://localhost:3000`.

### Building the Application
To create a production build of the application, run:
```sh
npm run build
```
This will generate a `build` directory with the production-ready files.

## Docker Setup
This project uses Docker to create a containerized version of the React app.

### Build the Docker Image
Create a Docker image for your application:
```sh
docker build -t vehicle-dashboard .
```

### Run the Docker Container Locally
Run the container to test it locally:
```sh
docker run -p 8080:80 vehicle-dashboard
```
The app will be available at `http://localhost:8080`.

## Deployment to Google Cloud Run
To deploy this application to **Google Cloud Run**, follow these steps:

### Step 1: Tag and Push Docker Image to Google Container Registry
```sh
docker tag vehicle-dashboard gcr.io/[YOUR_PROJECT_ID]/vehicle-dashboard
docker push gcr.io/[YOUR_PROJECT_ID]/vehicle-dashboard
```

### Step 2: Deploy to Google Cloud Run
Deploy your Docker image to Google Cloud Run:
```sh
gcloud run deploy vehicle-dashboard-service \
  --image gcr.io/[YOUR_PROJECT_ID]/vehicle-dashboard \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

Replace `[YOUR_PROJECT_ID]` with your Google Cloud Project ID.

## Connecting to the Database
We use **MongoDB Compass** to connect to the MongoDB database for this project. Here’s how you can connect:

### Step 1: Install MongoDB Compass
If you don't have **MongoDB Compass** installed, you can download it from [the official MongoDB website](https://www.mongodb.com/products/compass).

### Step 2: Open MongoDB Compass
After installing MongoDB Compass, open the application.

### Step 3: Enter the Connection String
- Click on **"New Connection"**.
- In the **connection string field**, paste the following:
  ```
  mongodb+srv://demo:iJClKDvavYXaKrbV@cluster0.hb45y.mongodb.net/vehicle_dashboard
  ```
- Click **"Connect"**.

### Step 4: Explore the Database
- Once connected, you will see the **vehicle_dashboard** database listed on the left sidebar.
- You can explore the collections, view documents, and run queries to interact with the data.


## Environment Variables
The app expects certain environment variables to be set for backend integration:
- **MONGODB_URI**: Connection string for MongoDB.

You can set these environment variables using Google Cloud Run's **Variables & Secrets** tab.

## Technologies Used
- **React**: Frontend framework.
- **React Spring**: Animation library for gauge and indicator animations.
- **Nginx**: Lightweight web server to serve the build files.
- **Docker**: Containerization.
- **Google Cloud Run**: Serverless container platform for deployment.

## Project Structure
```
vehicle-dashboard/
  ├── public/          # Public assets
  ├── src/             # React components and main app logic
  │   ├── components/  # Individual components (gauges, buttons, etc.)
  │   ├── App.js       # Main application file
  │   └── index.js     # Entry point
  ├── Dockerfile       # Docker configuration
  ├── package.json     # Dependencies and scripts
  └── README.md        # Project documentation
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs or new features.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## Contact
For questions or issues, please reach out via [GitHub Issues](https://github.com/your-username/vehicle-dashboard/issues).

---

Feel free to customize the deployment steps or add additional project details if needed. Let me know if you need further assistance!

