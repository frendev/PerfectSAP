import { NextApiRequest, NextApiResponse } from "next";
import { SEND_IN_BLUE_API_KEY } from "../../config/envs";

const SibApiV3Sdk = require("sib-api-v3-typescript");

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { firstName, lastName, email, phoneNumber, message } = req.body;
  console.log(firstName, lastName, email, phoneNumber, message);
  apiInstance.setApiKey(
    SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
    SEND_IN_BLUE_API_KEY
  );

  for (let i = 1; i <= 100000; i++) {
    console.log("hi");
  }
  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail.subject = "Enquiry Regarding Perfect SAP";
  sendSmtpEmail.htmlContent = `<html><body><h1>This is my first transactional email ${phoneNumber}</h1></body></html>`;
  sendSmtpEmail.sender = {
    name: `${firstName} ${lastName}`,
    email: `${email}`,
  };
  sendSmtpEmail.to = [{ email: "adwait.157@gmail.com", name: "Adwait Gore" }];

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return res.status(200).json({
      data: response,
      message: "Email has been sent successfully.",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong.",
    });
  }
}
