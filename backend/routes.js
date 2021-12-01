require("dotenv").config();

const express = require("express")
const Dialogflow = require("@google-cloud/dialogflow")
const uuid = require("uuid")

const app = express();
const projectId = "sayit--dsit";
app.post("/text-input", async (req, res) => {
 const { message } = req.query;
	const sessionId = uuid.v4();

   const sessionClient = new Dialogflow.SessionsClient({
    keyFilename: "./key.json",
  });

  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: 'es-ES',
      },
    },
  };

  try {
    const responses = await sessionClient.detectIntent(request);
    res.status(200).send({ data: responses });
  } catch (e) {
    console.log(e);
    res.status(422).send({ e });
  }
});

module.exports = app;
