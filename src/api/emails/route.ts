import {Resend} from 'resend';
import { EmailTemplate } from '../../email/EmailTemplate';

const resend = new Resend("re_M5LQ4Vic_JMv3msdni4qMQdYqX3azR5km")

// ...

export async function POST(){
  await resend.emails.send({
    from: 'emanuel737@gmail.com',
    to: 'emanuelpages.ps@gmail.com',
    subject: 'Cuestionario para ti',
    react: EmailTemplate(),
  })
}