# Deploy on Render

To deploy your Express TypeScript application on Render.com, follow these steps:

1. **Create a new Web Service on Render**

   - Go to the Render dashboard and click on the `New +` button.
   - Select `Web Service` from the options.

2. **Connect Your Repository**

   - Connect your GitHub or GitLab repository that contains your Express TypeScript app.

3. **Configure Your Service**

   - Set the `Environment` to `Node`.
   - In the `Build Command` field, enter `npm install && npm run build`.
   - For the `Start Command`, use `npm start`.

4. **Add Environment Variables**

   - If your application uses environment variables, add them under the `Environment` tab.

5. **Deploy Your Service**

   - Click on the `Deploy` button to start the deployment process.
   - Render.com will build and deploy your application based on the configurations you've provided.

6. **Check Deployment Status**

   - You can monitor the progress of your deployment in the `Logs` section of your Render dashboard.
   - Once deployed, your service will receive a `.onrender.com` subdomain where you can access your app.

Remember to have a `package.json` file with the `start` script configured to launch your server, typically `node dist/src/server.js` after compilation with TypeScript.
