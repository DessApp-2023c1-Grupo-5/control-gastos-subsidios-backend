//import Proyecto from '../models/proyecto';

export const getProyecto = async (req, res) => {
  //const proyecto = await Proyecto.findAll({});
  //res.json({ data: proyecto.map((proyecto) => proyecto.toJSON()) });

  res.json({
    titulo: 'Investigación del desarrollo de la saraza',
    tipo: 'Proyecto',
    organismo: 'QIDW',
    lineaFinanciamiento: 'FGH',
    año: 2020,
    unidadAcademica: 'Departamento de Saraza',
    areaTematica: 'Ciencias de la Saraza',
    subsidio: 403323.0,
    fechaInicio: '18/09/2021',
    fechaFin: '18/09/2022',
    fechaInicioGastos: '18/12/2021',
    numeroProyecto: 7567,
    numeroExpediente: '21-0408/1409',
    numeroResolucion: 'FDASD Nro 312/32',
    director: 'Dr. Agoncito',
    coDirector: 'Lic. Enciado',
    integrantes: ['persona1', 'persona2', 'persona3', 'persona4'],
    resumen: `Este proyecto tiene como objetivo la generación de un modelo de desarrollo basado en
      componentes y requisitos que tenga en cuenta la reutilización. A partir de un método
      inicial llamado COTSRE utilizado para seleccionar componentes a partir de una serie de
      requisitos y características se ha diseñado un proceso que abarca todo el ciclo de vida de
      un componente, al que llamaremos COTSRE+. Para ello se ha estudiado un proceso de
      desarrollo de componentes existente creado por Chessman y Daniels y hemos ampliado
      COTSRE a partir de él para obtener COTSRE+. COTSRE+ se ha formalizado
      utilizando la notación estándar de OMG llamada SPEM y se ha ampliado la selección
      de componentes definida en COTSRE para que además de los requisitos y
      características, puedan utilizarse los casos de uso para seleccionar componentes. Para
      automatizar este proceso de selección y catalogar los requisitos, casos de uso y
      componentes se ha desarrollado una herramienta de escritorio llamada CotsreApp. Para
      la publicación del método se ha desarrollado una web con ayuda de la herramienta EPF
      Composer de Eclipse.`,
  });
};
