import {Resend} from 'resend';
import { EmailTemplate } from '../../email/EmailTemplate';

const resend = new Resend("re_KWnXVUjp_AQSdsmmudb8hf5uREftM76Tx")

// ...

export async function POST(){
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'emanuelpages.ps@gmail.com',
    subject: 'Cuestionario para ti',
    react: EmailTemplate(), // <--- pasa la cadena de HTML puro
  })
}