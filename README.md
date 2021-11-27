Please follow the next steps:

1) Go to https://console.cloud.google.com/iam-admin/serviceaccounts?project={nombre_proyecto}
2) create a new service account
3. In the Service account details, enter a name and click on create.
4. Next, add the Role as Owner for full access.
5. Click on Done to create New Service Account Key.
6. Select the Service Account Key from the list, open the Keys tab and choose Add key > Create New Key.
7. Select JSON key type and click Create. A JSON with the key will download.
8. Copy the JSON file into backend folder and rename it to 'key.json'....
9. Open a terminal, go to backend folder and type "npm install" and then "npm start".
10. Open a terminal, go to frontend folder and type "npm install" and then "npm start".

11. Open a browser... go to the link "http://localhost:3001/" or "http://localhost:3000/"

12. Testing


PS: important to verify the next file "frontend/src/detallePictogramas.json"... because those intents should be the same as dialogflow intents. 



