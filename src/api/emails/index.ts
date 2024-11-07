import { Resend } from "resend";

const resend = new Resend("re_KePH5sB1_NEo1pZkkYZbagBwcBLHSzz98");

(async function () {
  const { data, error } = await resend.emails.send({
    from: "emanuelpages.ps@gmail.com",
    to: ["anthony@customerscoops.com"],
    subject: "Form text",
    html: "<strong>Prueba</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
