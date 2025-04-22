'use server'; 

import { Resend } from 'resend';

import { render } from '@react-email/components';
import AccountCreation from '../../../emails/account-creation';

type ActionResult = {
  success: boolean;
  message: string;
  data?: any; 
};

export async function sendAccountActEmail(formData: FormData): Promise<ActionResult> {

  console.log('Form Data:', formData);
   const userEmail = formData.get('email') as string;
  const token = formData.get('token') as string;
  // Validação dos dados fica para outro dia


  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromEmail = process.env.RESEND_FROM_EMAIL!;

  const plainText = await render(
    <AccountCreation token={token} email={userEmail} />,
    { plainText: true }
    // podemos passar aqui mais opções
  ); 

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [userEmail], 
      subject: 'Github Access Token', 
      react: AccountCreation({
        token: token,
        email: userEmail,
      }),
      text: plainText,
      headers: {
        'List-Unsubscribe': '<https://example.com/unsubscribe>',
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
      },
    });

    // para tratar erros da api do resend
    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, message: `Falha ao enviar email: ${error.message}` };
    }

    console.log('Email sent successfully:', data);
    return { success: true, message: 'Email enviado com sucesso!', data: data };

  } catch (err) {
    console.error('Server Action Error:', err);
    const message = err instanceof Error ? err.message : 'Ocorreu um erro inesperado.';
    return { success: false, message: `Erro no servidor: ${message}` };
  }
}