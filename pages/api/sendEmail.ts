import { NextApiRequest, NextApiResponse } from "next";

const SibApiV3Sdk = require("sib-api-v3-typescript");

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  apiInstance.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    "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"
  );

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "My Test Email";
  sendSmtpEmail.htmlContent =
    "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
  sendSmtpEmail.sender = {
    name: "Perfect SAP",
    email: "arcaneprojects99@gmail.com",
  };
  sendSmtpEmail.to = [{ email: "adwait.157@gmail.com", name: "Adwait Gore" }];

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(response);

    return res.status(200).json({
      data: response,
      message: "Email has been sent successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Something went wrong.",
    });
  }
}
