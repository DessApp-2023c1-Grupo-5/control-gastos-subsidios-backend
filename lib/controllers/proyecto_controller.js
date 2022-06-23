//import Proyecto from '../models/proyecto';

export const getProyecto = async (req, res) => {
  //const proyecto = await Proyecto.findAll({});
  //res.json({ data: proyecto.map((proyecto) => proyecto.toJSON()) });

  res.json({
    titulo:
      'Plataforma abierta de gestion de camaras IP y aplicaciones moviles para la seguridad civil ciudadana',
    tipo: 'Proyecto',
    organismo: 'UNAHUR',
    lineaFinanciamiento: 'Programas I+D UNAHUR',
    año: 2020,
    unidadAcademica: 'Instituto de Tecnología e Ingeniería',
    areaTematica: 'Seguridad informática',
    subsidio: 585000,
    fechaInicio: '18/09/2020',
    fechaFin: '18/09/2022',
    fechaInicioGastos: '18/12/2020',
    numeroProyecto: 7567,
    numeroExpediente: '1646-9895/20',
    numeroResolucion: 'Nro 31285/20',
    director: "D'amato, Juan Pablo",
    coDirector: 'Dominguez, Leonardo Daniel',
    integrantes: [
      'Perez, Alejandro Julian',
      'Rubiales, Aldo Jose',
      'Dominguez, Leonardo Daniel',
      "D'amato, Juan Pablo",
    ],
    resumen: `La inseguridad es un problema que afecta en mayor o menor medida a todas las ciudades 
  del mundo. Las ciudades más informatizadas hacen uso de la video-vigilancia para combatirla, montando 
  en muchos de los casos centros de monitoreo con cientos de cámaras. En su mayoría, estos centros 
  cuentan con grupos de personas para realizar la tarea de observación, sin embargo, este método no es 
  suficiente y los organismos públicos deben lidiar un reclamo social por mayor transparencia y 
  eficiencia en el accionar ante un delito. En este contexto, es que surge el presente proyecto, una 
  plataforma de administración de cámaras y sensores, para apoyar a la gestión integral de la seguridad.
   Esta plataforma complementa técnicas de análisis automatizado de video, junto con una API para 
  registrar eventos de tipo alarmas o alertas por parte de la ciudadanía y permitir el acceso a otras 
  entidades (policía, bomberos, organizaciones vecinales) a ciertos recursos (los videos). Toda la 
  información se centraliza en un sistema georreferenciado, en una arquitectura abierta y escalable, 
  organizado en diferentes capas de información, con un sistema de organización de roles de accesos. 
  Se presenta una discusión de la estructura ideada, de los algoritmos utilizados para el seguimiento, 
  problemas propios que se suceden en este tipo de sistemas y los resultados preliminares obtenidos.`,
  });
};
