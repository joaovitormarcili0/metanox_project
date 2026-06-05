import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_31bx367';
const EMAILJS_TEMPLATE_ID = 'template_k8yt3r9';
const EMAILJS_PUBLIC_KEY = 'DEfgl9bdbDyroIT-t';

interface EmailTemplateParams {
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  mensagem: string;
  link_projeto: string;
  [key: string]: string; // For EmailJS generic Record type compatibility
}

export const sendBudgetEmail = async (params: EmailTemplateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      params,
      EMAILJS_PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error; // Let the component handle the quota/network error
  }
};
