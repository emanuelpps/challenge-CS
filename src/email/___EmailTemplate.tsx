import templateHeader from '/assets/images/header-email.svg';

export const EmailTemplate: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <img src={templateHeader} alt="header" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
        <p style={{ fontWeight: 'bold' }}>Hola Anthony,</p>
        <p>
          En Customer Scoops nos importa mucho tu experiencia, y queremos
          asegurarnos de que nuestros servicios sigan cumpliendo tus
          expectativas. Por eso, hemos preparado unas breves preguntas para que
          puedas compartir tus comentarios y sugerencias.
        </p>
        <p>
          Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que
          realmente necesitas. Nos tomará solo unos minutos de tu tiempo.
        </p>
        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <a
            href="#"
            style={{
              height: '100%',
              backgroundColor: '#231331',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              borderRadius: '50px',
              padding: '10px 20px',
              textDecoration: 'none',
            }}
          >
            Ingresa Aquí
          </a>
        </div>
        <p>
          Agradecemos de antemano tu participación y confianza en Customer
          Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora
          continua!
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Saludos,</p>
          <p>Emanuel Pages,</p>
          <p>Equipo de Customer Scoops.</p>
        </div>
      </div>
    </div>
  );
};