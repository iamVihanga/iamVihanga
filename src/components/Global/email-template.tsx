import * as React from 'react';

interface EmailTemplateProps {
  name: string
  email: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
    <h3>Message from, {name}!</h3>
    <p>Email: {email}</p>

    <p>{message}</p>
  </div>
);
