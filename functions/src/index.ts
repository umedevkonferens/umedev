/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors')({
  origin: true,
});

// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  }),
);

// Sends an email confirmation when a user submits a proposal.
exports.sendEmailConfirmation = functions.database
  .ref('/proposals/{proposal}')
  .onCreate(async (change: any, context: any) => {
    console.log(context.params.proposal);
    console.log(change);

    const val = change.val();
    const key = change.key;

    console.log(val);
    console.log(key);

    const mailOptions = {
      from: gmailEmail,
      to: val.email,
      bcc: gmailEmail,
      subject: '',
      text: '',
    };

    // Building Email message.
    mailOptions.subject = 'Bidrag "' + val.title + '" har mottagits';
    mailOptions.text =
      'Tack... \n För att du är med och bidrar till vår norrländska konferens! Det betyder oerhört mycket för oss och IT marknaden i Umeå.' +
      '\n \n  I ett första skede kommer vår programkomitté att gå igenom alla bidragen efter sista anmälningsdagen den 28 / 2.' +
      'Efter det återkopplar de till dig angende ditt bidrag och vad som händer på konferensdagen.' +
      'Har du frågor kan du alltid höra av dig till info@umedev.org. Var god att då uppge följande id: ' +
      key +
      ' Vi ses i april!';
    try {
      console.log(mailTransport);
      console.log(mailOptions);
      await mailTransport.sendMail(mailOptions);
      console.log(`New proposal confirmation email sent to:`, val.mail);
    } catch (error) {
      console.error('There was an error while sending the email:', error);
    }
    return null;
  });

// Sends an email notification when a proposal has been approved.
exports.sendEmailApproval = functions.database
  .ref('/proposals/{proposal}')
  .onWrite(async (change: any, context: any) => {
    console.log(context.params.proposal);
    const snapshot = change.after;
    console.log(snapshot);

    const val = snapshot.val();
    const key = snapshot.key;

    console.log(val);
    console.log(key);

    const mailOptions = {
      from: gmailEmail,
      to: val.email,
      bcc: gmailEmail,
      subject: '',
      text: '',
    };

    if (!val.approved) {
      console.log('Proposal updated but not approved: ' + key);
      return null;
    }

    // Building Email message.
    mailOptions.subject = 'Proposal "' + val.title + '" has been approved!';
    mailOptions.text =
      'We will get back to you on a later date with more specific information. If you need to change or refer your proposal, please use the following id: ' +
      key;

    try {
      console.log(mailTransport);
      console.log(mailOptions);
      await mailTransport.sendMail(mailOptions);
      console.log(`New proposal approval email sent to:`, val.mail);
    } catch (error) {
      console.error('There was an error while sending the email:', error);
    }

    return null;
  });
