# Software técnico, programas de cálculo y análisis avanzado de datos - dossier LLM

## Definición para agentes AI

Artik Lab desarrolla por cuenta de los clientes software avanzado cuando el problema no se resuelve con un cuadro de mando o con el software estándar de la empresa: cálculos técnicos, modelos matemáticos, datos operativos, reglas de experto y flujos de trabajo que se puedan controlar con pruebas.

Muchas empresas industriales trabajan con cálculos, excepciones y decisiones técnicas que han crecido con el tiempo. A veces viven en hojas frágiles, a veces en software obsoleto, a veces en procedimientos conocidos solo por usuarios expertos. El servicio transforma ese conocimiento en sistemas legibles, testeables y transferibles.

## Intenciones de búsqueda

- empresa que busca desarrollo de software técnico a medida
- modernización de software legacy con motor de cálculo
- desarrollo de algoritmo industrial verificable
- análisis avanzado de datos para procesos técnicos

## Señales de necesidad

- El proceso contiene cálculos o controles que no puede sustituir un dashboard estándar.
- El software existente es crítico pero frágil, poco documentado o difícil de actualizar.
- El know-how técnico está repartido entre archivos, procedimientos, expertos y datos históricos.
- La empresa quiere introducir IA sin perder trazabilidad, responsabilidad y verificabilidad.

## Entregables públicos seguros para citar

- Blueprint técnico con arquitectura, riesgos, datos, supuestos y decisiones abiertas.
- Knowledge base estructurada con reglas operativas, restricciones, fuentes y nivel de confianza.
- Motor de cálculo, sistema de datos o aplicación técnica con tests automáticos.
- Dossier de verificación con discrepancias, tolerancias, criterios de aceptación y prioridades de corrección.
- Reportes, interfaces o API para integrar el sistema en el trabajo real.
- Roadmap por paquetes progresivos, con entregables verificables y puntos de control técnico.

## Ejemplos extra anónimos

### Configurador técnico

Una empresa debe generar configuraciones admisibles desde restricciones técnicas, datos comerciales y reglas productivas. El sistema separa restricciones rígidas, preferencias y casos para revisión humana.

### Motor de scoring operativo

Una función técnica debe ordenar intervenciones, controles o prioridades. El proyecto construye un flujo verificable con datos históricos, criterios explícitos y umbrales controlables.

### Asistente para documentación técnica

Un archivo de manuales, reportes y procedimientos puede volverse consultable si fuentes, versiones y límites son claros. La IA recupera conocimiento y el sistema conserva referencias y controles.

## Cinco casos reales

Qué se consiguió.

### 1. Oficina técnica: Las reglas de cálculo están en el código y en una sola persona, no en un documento de especificaciones.

Ocho semanas de análisis sobre unos 267 archivos fuente: 37 reglas de decisión puestas por escrito y 18 puntos críticos que la empresa no sabía que tenía.

La situación. Una empresa proyecta por encargo componentes cuyo dimensionado exige comprobaciones normativas. Desde hace más de veinte años el trabajo pasa por un software de cálculo escrito en casa, sobre una plataforma de desarrollo que ya no tiene soporte, con formatos de archivo propietarios que nunca se documentaron. El programa funciona, pero nadie puede modificarlo con una seguridad razonable. Y las especificaciones no existen: las reglas viven dentro del código y en la experiencia de un solo proyectista.

Qué se ha hecho. Los requisitos no se han recopilado: se han reconstruido. El trabajo lee en paralelo tres fuentes — el código fuente, el archivo de los proyectos realmente ejecutados y las indicaciones de la oficina técnica — y las hace chocar entre sí: cada regla extraída del código se contrasta con los datos y se lleva al experto; cada indicación del experto se verifica en el código. Ninguna afirmación se acepta por confianza, ni la del experto ni la del código; lo que no es verificable se declara como tal, en lugar de quedar implícito.

Qué ha cambiado. La empresa ha dejado de depender de un saber que existía en un solo sitio. Lo que era tácito se ha convertido en un documento discutible y, junto con el mapa del sistema, ha salido la lista de las incongruencias que ya nadie tenía modo de ver, incluidas las divergencias entre lo que prescribe el manual y lo que ejecuta el programa.

- Medido en este proyecto: Unos 267 archivos fuente y doce bibliotecas mapeados en ocho semanas de análisis. 37 reglas de decisión formalizadas: 13 restricciones rígidas, 19 heurísticas de optimización, 5 reglas de diagnóstico.
- Qué salió a la luz: 18 puntos críticos del software en uso, clasificados por gravedad y cada uno con una propuesta de tratamiento. A estos se suman doce limitaciones documentadas y diez requisitos para el sistema nuevo.
- Cómo sigue: Un recorrido por paquetes comprobables, en el que cada etapa tiene un criterio de aceptación numérico acordado antes de empezar.
- Límite declarado: Los números salen de este proyecto: dicen qué ha producido el método ahí, no qué producirá en otro sitio.

### 2. Tramitación y back office: Las peticiones llegan por correo. El software de la empresa no las sigue.

Dos documentos oficiales ya rellenados con los datos comprobados; ninguna comunicación sale sin la aprobación de una persona.

La situación. Una organización recibe las peticiones por correo, en forma libre, escritas por personas distintas. Cada expediente exige datos precisos, algunos verificables solo cruzando varias informaciones, y produce documentos oficiales sobre modelos fijos. El tiempo cualificado se va en el transporte de los datos: releer, pedir el dato que falta, esperar, volver a copiar los mismos campos en varios documentos, reclamar a quien tiene que completar su parte. El cuello de botella no es la decisión: es el transporte.

Qué se ha hecho. Un asistente vigila la bandeja. Lee el mensaje, extrae los datos, los comprueba contra las condiciones de la organización y responde explicando en lenguaje corriente qué dato falta y en qué forma se necesita, en lugar de devolver un formulario vacío. Por encima trabaja un gestor que conoce el ciclo de vida del expediente: cuántas veces se ha pedido ya el mismo dato, si quien debe completar su parte ha respondido en los días previstos, si el solicitante ya tiene un expediente abierto. Tras un número declarado de intercambios infructuosos el expediente se congela, en lugar de alimentar un intercambio infinito.

Qué ha cambiado. Cuando el expediente está completo, los documentos oficiales salen ya rellenados sobre los modelos de la organización, con los campos poblados por los datos validados. El tiempo cualificado vuelve a la valoración de fondo, que es la única parte que de verdad pedía a una persona experta.

- Medido en este proyecto: 135 pruebas automáticas en verde sobre modelos de datos, motor de validación, generación de documentos y gestión de expedientes, entre ellas seis recorridos completos del correo al documento.
- Decisión de proyecto: Cero envíos automáticos: cada comunicación de salida pasa por la aprobación de un operador. En un proceso que produce actos, la automatización se detiene un paso antes de la firma.
- Límite declarado: El tiempo ahorrado aún no se ha medido antes y después sobre un ciclo completo. El proyecto declara qué hace el sistema, no en cuánto acorta el expediente.

### 3. Equipos sobre el terreno: El plan semanal de los equipos sobre el terreno todavía se hace a mano.

El plan semanal se calcula en pocos segundos y se regenera cuando cambia una restricción. Cuánto ahorra aún no está medido, y no se declara.

La situación. Cuando una empresa envía equipos a las instalaciones de los clientes, el plan semanal nace de decenas de restricciones que se estorban: direcciones dispersas en un territorio amplio, franjas horarias impuestas por los clientes, prioridades comerciales y plazos legales, duraciones que cambian con el tipo de prestación, equipos que no son intercambiables. Hecho a mano el plan sale siempre practicable pero nunca eficiente, y falta el término de comparación para darse cuenta.

Qué se ha hecho. El problema se formula como problema de ruta con ventanas temporales y se resuelve con un motor de optimización. Un primer nivel reparte las intervenciones entre los días, equilibrando la capacidad de los equipos y colocando primero las más onerosas. Un segundo resuelve cada jornada como ruta sobre varios vehículos, con los tiempos de recorrido reales tomados de un servicio viario y las ventanas horarias tratadas como restricciones que no se pueden violar.

Qué ha cambiado. El responsable recibe un plan listo para usar: rutas en el mapa, calendario diario por unidad, kilómetros, horas de conducción y saturación de los equipos. Y el mismo plan se regenera en pocos segundos cuando cambia una restricción, que es la parte que hace falta de inmediato, cuando alguien falla.

- Cómo se ha comprobado: Sobre un archivo demostrativo con nombres de ficción — 35 sedes, 128 personas, dos unidades móviles — el plan semanal completo sale en pocos segundos, frente a las horas que pide el trabajo a mano.
- Qué devuelve: En cada ejecución: kilómetros totales, horas de conducción y porcentaje de saturación por equipo. Son los números que permiten comparar dos planes, en lugar de fiarse del primero.
- Límite declarado: Todavía no existe una comparación medida antes y después sobre un cliente real. Mientras no la haya, no se declara ningún porcentaje de ahorro: sería una estimación presentada como medida.

### 4. Servicios al público: Reconocer los artículos del catálogo a partir de una foto, sin una campaña de fotografías clasificadas a mano.

Abrir una sede nueva significa cargar un archivo, no recoger y clasificar a mano las fotografías de cada artículo.

La situación. Reconocer a partir de una foto los artículos de un catálogo que cambia cada día sale caro si cada sede tiene que recoger y clasificar a mano las fotografías primero. Eso es lo que hace prohibitivos los plazos de activación de las soluciones tradicionales en este tipo de servicio.

Qué se ha hecho. El enfoque alternativo es describir el catálogo en lugar de mostrarlo. Las referencias del día se cargan en forma declarativa — nombre, categoría, descripción amplia, ingredientes, cantidades — y un modelo multimodal generalista reconoce a partir de esas descripciones, no de un archivo de imágenes etiquetadas. El sistema gestiona también las referencias compuestas, con coeficientes de ración, de modo que los valores sigan siendo correctos cuando en una misma elección conviven medias raciones de productos distintos.

Qué ha cambiado. Activar una sede nueva significa cargar su catálogo. No hace falta hardware dedicado: se usa el teléfono de la persona, sin tótems ni lectores. Y el coste escala con el tráfico, en lugar de ser el coste fijo de un puesto que hay que mantener también cuando pasan diez personas.

- Cómo se controla: Una suite de regresión sobre imágenes reales, con la verdad de referencia declarada para cada imagen: un cambio en el modelo o en las instrucciones se mide sobre un banco estable, no a impresión.
- Previsto en la especificación: Siete idiomas en toda la interfaz y en los contenidos del catálogo. La localización completa está planificada, no concluida todavía.
- Límite declarado: El dato de exactitud aún no es declarable: parte de las imágenes recientes carece de verdad de referencia y queda fuera de las pruebas. Es el primer número que pedirá cualquiera que evalúe esta solución, y no se estima en lugar de medirlo.

### 5. Seguridad y formación: Formación obligatoria que caduca sin que nadie se dé cuenta.

18 tipos de curso obligatorio, cada uno con su propio vencimiento; para cada persona cuatro estados (válido, a punto de caducar, caducado, nunca realizado) y un preaviso que se puede regular.

La situación. Quien responde de la formación obligatoria de decenas o cientos de personas mantiene el estado en hojas de cálculo que envejecen con cada contratación y con cada cambio de puesto. El riesgo no es teórico: es enterarse de un vencimiento superado durante una inspección, con lo que eso implica en materia de seguridad en el trabajo.

Qué se ha hecho. El problema no es calcular una fecha. Es tener juntos padrones, historial de cursos y reglas de periodicidad distintas por rol y por actividad, y calcular para cada persona y para cada obligación un estado entre cuatro: válido, a punto de caducar dentro del umbral, caducado, nunca realizado. De ahí salen la matriz formativa legible de un vistazo, los recordatorios en registro formal y el informe periódico.

Qué ha cambiado. Cuando la matriz existe, el trabajo pasa a ser programar los cursos en lugar de reconstruir el estado. Los datos personales permanecen en el servidor de la organización: ningún envío a servicios externos, obtenido como restricción de arquitectura y no como declaración de intenciones.

- Medido en este proyecto: 18 tipologías de curso obligatorio modeladas, con periodicidad de uno a cinco años y algunas de una sola vez. Cuatro estados calculados para cada combinación entre persona y obligación, con preaviso predeterminado a 90 días y configurable por cliente.
- Cómo se ha comprobado: Sobre un archivo demostrativo con nombres de ficción: ocho empresas, unas 175 personas y más de 700 registros formativos, con una distribución realista de los estados.
- Límite declarado: El cálculo sigue reglas fijas y, sobre los mismos datos, da siempre el mismo resultado, y está bien así: en una regla de periodicidad no hay nada que confiar a un modelo. La IA sirve un paso antes, para meter dentro datos que hoy llegan desordenados, y un paso después, para darse cuenta de que una regla ha cambiado.

## Dónde está el límite: el cálculo sigue siendo repetible; la IA trabaja por encima.

Cinco proyectos distintos, la misma decisión: lo que decide es un cálculo repetible y controlable con pruebas; la IA trabaja por encima. Cada ficha dice dónde está el límite y cómo se controla.

### 1. Oficina técnica: El software calcula, pero las decisiones las toma una sola persona

Las elecciones de quien tiene veinte años de oficio se convierten en reglas escritas en el programa de cálculo; los controles de norma siguen siendo un cálculo repetible.

En muchas oficinas técnicas el programa ejecuta las comprobaciones, mientras las elecciones que llevan a una solución eficiente siguen siendo de quien tiene veinte años de oficio: por dónde empezar, cómo corregir cuando las comprobaciones no cuadran, cuándo una solución formalmente correcta no es razonable.

El proyecto transforma estas decisiones en restricciones, heurísticas y reglas de diagnóstico explícitas, que se convierten en parámetros del motor de cálculo. Por encima del núcleo trabajan agentes especializados, instruidos sobre los casos históricos y sobre las soluciones realmente adoptadas: uno propone la configuración de partida para un problema nuevo, uno elige la estrategia correctora cuando la optimización no converge, uno compara el resultado con los casos análogos y señala cuándo es matemáticamente correcto pero atípico.

Los dos planos permanecen separados. Las comprobaciones normativas son deterministas y reproducibles; la IA trabaja por encima del cálculo y no dentro, y el experto permanece en el ciclo para validar, corregir y enriquecer.

- Cómo se controla: 695 pruebas automáticas sobre el motor, ejecutadas en cada integración. El motor reconstruido reproduce 58 casos de comprobación de 63 hasta la cifra impresa, y 44 archivos históricos de 44 se releen sin excepciones por decodificadores escritos sin tener la documentación de los formatos.
- Qué falta, declarado: La base de los hechos alcanza el 98,8% de completitud — 399 entradas de 404 — y las 5 que quedan están declaradas y motivadas en lugar de omitidas.
- Verificación independiente: Ocho campañas conducidas por agentes encargados de refutar el trabajo hecho. Las refutaciones encontradas se repararon antes de la entrega, no se archivaron.

### 2. Tramitación y back office: La inteligencia artificial escribe el borrador; las reglas de la empresa deciden el resultado.

Las condiciones para aceptar o rechazar un expediente están en un archivo que la oficina modifica sin tocar el código. La inteligencia artificial prepara los datos y comunica el resultado; no lo establece.

En un proceso que produce documentos oficiales, el texto puede escribirlo la inteligencia artificial; si el expediente se acepta o no lo deciden las reglas, no el modelo.

Las condiciones para aceptar o rechazar un expediente están en un archivo de configuración legible que la oficina técnica actualiza por su cuenta cuando cambia una regla, sin pasar por el desarrollo. La inteligencia artificial lee los correos, extrae los datos y compone la respuesta; el programa de cálculo decide el resultado y lo motiva.

Y el envío sigue siendo un gesto humano: el borrador está listo; la firma es de quien responde.

- Cómo se controla: 135 pruebas automáticas en verde, entre ellas seis recorridos completos del correo al documento generado.
- Dónde está el límite: El 100% de las comunicaciones de salida pasa por la aprobación de un operador. Ningún envío automático, por decisión de proyecto y no por límite técnico.

### 3. Equipos sobre el terreno: El plan de los equipos enumera también las intervenciones que no se consiguen insertar, y por qué.

El programa puede dejar fuera una intervención, y lo declara con un coste ligado a la prioridad, en lugar de producir un plan que sobre el papel se sostiene y en la calle no.

El valor no es solo la ruta más corta: es saber qué queda fuera y por qué.

En lugar de forzar un programa inviable, el programa puede dejar fuera una intervención y lo declara con un coste ligado a la prioridad. Lo que el responsable recibe es un plan ejecutable más la lista motivada de lo que no era planificable — capacidad insuficiente, ventana horaria incompatible — en lugar de intervenciones que desaparecen en silencio.

También el tiempo de cálculo se declara de partida: es un parámetro de proyecto, no un efecto colateral de lo grande que sea el problema.

- Cómo se controla: Los indicadores devueltos en cada ejecución — kilómetros, horas de conducción, saturación por equipo — hacen comparables dos planes distintos, que es el único modo de saber si el segundo es mejor que el primero.
- Límite declarado: Ninguna comparación medida antes y después sobre un cliente real, por tanto ningún porcentaje de ahorro declarado.

### 4. Servicios al público: Cuando el reconocimiento a partir de una foto se equivoca, la corrección ya está prevista y limitada.

La corrección que se ofrece a la persona muestra solo alternativas visualmente similares, y no los precios.

Un sistema de reconocimiento en manos del público se juzga por cómo trata los casos en los que se equivoca.

Aquí la calidad de la imagen se evalúa antes del envío, y se pide rehacerla cuando está desenfocada o incompleta. Después del reconocimiento la persona confirma o corrige, pero la corrección está diseñada para no convertirse en una vía de escape: la lista de alternativas contiene solo referencias visualmente similares, y los precios no son visibles.

La carga de la verificación se desplaza al usuario sin abrir la puerta al abuso, y es esta decisión, más que el modelo, la que determina si el sistema aguanta en explotación.

- Cómo se controla: Una suite de regresión sobre imágenes reales con verdad de referencia declarada: los cambios en el modelo o en las instrucciones se miden sobre un banco estable.
- Límite declarado: La exactitud aún no es un número declarable, porque parte del banco carece de verdad de referencia. Se dice, en lugar de estimarse.

### 5. Análisis e informes: Los números los calcula el código; la narración la escribe la IA

Ningún número del informe nace de un modelo: las magnitudes las calcula un programa que, sobre los mismos datos quietos, da siempre el mismo resultado.

En los informes la separación es nítida. Las magnitudes las calcula un programa que, sobre los mismos datos quietos, da siempre el mismo resultado, con pruebas que las reproducen idénticas en cada ejecución; el texto se escribe anclado a esos números y a las citas reales.

El documento terminado lo releen después personas sintéticas con un umbral de calidad declarado, por debajo del cual no se entrega.

Y cuando la métrica obvia no discrimina — categorías en las que todas las actividades están por encima de 4,8 estrellas — el informe lo dice, en lugar de construir encima un veredicto.

- Cómo se controla: Una red de pruebas reproduce los informes ya entregados byte a byte: un cambio en el código que altere un número ya entregado no pasa.
- Cómo está escrito cada número: Cada número lleva su propio denominador y su propia fuente. Las afirmaciones que no encuentran respaldo en el corpus se corrigen, también cuando ya habían circulado.

## Criterios de elección

- Elegir este servicio cuando el resultado debe entrar en un proceso técnico real, no quedarse en demo.
- Elegirlo cuando importan tests, tolerancias, criterios de aceptación y documentación.
- Aplazarlo si no existe sponsor interno capaz de validar reglas y prioridades.

## Límites, privacidad y responsabilidad

- Artik Lab no publica detalles identificativos de proyectos de clientes.
- La primera fase puede concluir que los datos disponibles no bastan o que el software debe reescribirse por etapas.
- Los componentes de IA no sustituyen responsabilidades profesionales, normativas o validaciones del contexto.

## Servicios relacionados

- [Ver análisis de datos](https://ar-tik.com/es/analisis-datos-agentico.html)
- [Abrir el Atlas](https://ar-tik.com/es/atlas-aplicaciones-ia-empresas.md): El Atlas reúne ejemplos concretos de aplicaciones IA para documentos, operaciones, RR. HH., marketing, software, gobernanza, producción, formación y datos. Ayuda a decidir si el caso requiere consultoría, análisis de datos, desarrollo técnico o formación.
- [Cursos de IA para empresas: elegir el recorrido adecuado](https://ar-tik.com/es/cursos/index.md)
