# Dominio 5: Seguridad, Cumplimiento y Gobernanza para Soluciones de IA

---

## 1. Métodos para Proteger los Sistemas de IA

### Importancia de la Gobernanza y el Cumplimiento para los Sistemas de IA

La gobernanza y el cumplimiento son fundamentales para los sistemas de IA utilizados en los negocios, garantizando prácticas responsables y confiables.

**Ventajas clave**:

- **Administración optimizada**: Gestionar, optimizar y escalar la iniciativa de IA organizacional desde la perspectiva de gobernanza
- **Cumplimiento normativo**: Garantizar que los sistemas de IA se alineen con los requisitos legales y reglamentarios
- **Ética y valores**: Asegurar que los sistemas respeten principios éticos y valores sociales
- **Políticas claras**: Establecer pautas y mecanismos de supervisión bien definidos

---

### Consideraciones de Seguridad y Privacidad para Sistemas de IA

![Consideraciones de seguridad para sistemas de IA](dominio_5_images/Detección%20de%20amenazas.png)

**Áreas clave de seguridad extras**:

- Detección y prevención de amenazas
- Protección de datos sensibles y PII
- Control de acceso y autenticación
- Cifrado de datos en tránsito y en reposo
- Monitoreo y auditoría continua

---

### AWS Identity and Access Management (IAM)

Permite administrar el acceso a los servicios y recursos de AWS de forma segura.

![AWS IAM - Control de acceso](dominio_5_images/Usuario%20de.png)

**Características principales**:

- Control granular de permisos por usuario, grupo o rol
- Autenticación multifactor (MFA)
- Políticas basadas en JSON para definir permisos
- Integración con todos los servicios de AWS
- Principio de privilegio mínimo (least privilege)

---

### AWS Key Management Service (KMS)

Ayuda a los clientes a realizar operaciones de cifrado mediante el uso de llaves criptográficas.

**Capacidades**:

- Crear y administrar claves de cifrado
- Control de acceso específico para cada clave
- Integración nativa con servicios de AWS
- Auditoría de uso de claves mediante CloudTrail
- Cumplimiento con estándares de seguridad (FIPS 140-2)

---

### Amazon Macie

Servicio de seguridad de datos que descubre, clasifica y protege datos sensibles.

**Funcionalidades principales**:

- Automatiza la detección de datos confidenciales a escala (PII) en Amazon S3
- Obtiene visibilidad rentable de los datos confidenciales almacenados
- Evalúa el inventario de buckets de S3 para controles de seguridad y acceso
- Proporciona informes procesables de datos confidenciales encontrados
- Usa Machine Learning para identificar patrones de datos sensibles

---

### Amazon Virtual Private Cloud (VPC)

Red virtual aislada en AWS para desplegar recursos de forma segura.

**Características**:

- Red virtual completamente aislada en la nube de AWS
- Configuración de red personalizable (subredes, tablas de enrutamiento, gateways)
- Control total sobre el entorno de red virtual
- Integración perfecta con otros servicios de AWS
- Múltiples capas de seguridad (security groups, network ACLs)

---

### AWS PrivateLink

Conectividad privada y segura a los servicios de AWS.

**Beneficios**:

- Conectividad privada segura sin exponer tráfico a internet pública
- Reduce la exposición de datos y superficie de ataque
- Simplifica la administración y el escalado de la red
- Mejora el rendimiento y la seguridad de las comunicaciones
- Facilita el cumplimiento normativo al mantener el tráfico privado

---

## 2. Regulaciones de Gobernanza y Cumplimiento para los Sistemas de IA

### Cumplimiento de los Estándares de IA

![Cumplimiento de estándares de IA](dominio_5_images/..png)

**Marcos de cumplimiento relevantes**:

- Regulaciones de privacidad de datos (GDPR, CCPA)
- Estándares de seguridad (ISO 27001, SOC 2)
- Normativas específicas de IA (EU AI Act)
- Estándares de la industria (HIPAA para salud, PCI DSS para pagos)

---

### Defensa en Profundidad

![Estrategia de defensa en profundidad](dominio_5_images/Politicas,%20procedimientos%20y%20conocimiento.png)

**Enfoque multicapa de seguridad**:

- **Políticas y procedimientos**: Documentación y lineamientos claros
- **Conocimiento y capacitación**: Personal educado en mejores prácticas
- **Controles técnicos**: Implementación de tecnologías de seguridad
- **Monitoreo continuo**: Detección y respuesta a incidentes
- **Auditoría y cumplimiento**: Verificación regular de controles

---

### Estrategias de Gobierno de Datos para IA

**Las organizaciones deben considerar las siguientes estrategias clave**:

- Calidad e Integridad de los Datos

- Protección de Datos y Privacidad

- Gestión del Ciclo de Vida de los Datos

- IA Responsable

- Estructura y Funciones de Gobierno

- Intercambio de Datos y Colaboración

---

### Servicios y Características de AWS para Proteger los Sistemas de IA

#### AWS CloudWatch

Monitoreo y observabilidad de recursos de AWS.

**Capacidades**:

- Supervisa la infraestructura y recursos de AWS y locales en tiempo real
- Proporciona acceso a todas las métricas desde una ubicación centralizada
- Permite configurar alertas y acciones automáticas en respuesta a métricas
- Visualización de logs y métricas personalizadas
- Dashboards para monitoreo integral

---

#### AWS CloudTrail

Auditoría y seguimiento de actividades en AWS.

**Funcionalidades**:

- Realiza seguimiento de las actividades de los usuarios y las solicitudes de API
- Registra todas las llamadas a API en toda la infraestructura de AWS
- Filtra los registros para análisis operativo y solución de problemas
- Proporciona historial completo para auditorías
- Integración con AWS Organizations para gobierno centralizado

---

#### AWS Config

Evaluación, auditoría y evaluación de configuraciones de recursos.

**Características**:

- Descubre y registra automáticamente el estado y configuración de los recursos
- Realiza seguimiento de los cambios con registro histórico completo
- Evalúa cambios de configuración contra políticas de cumplimiento
- Automatiza actividades de remediación
- Proporciona línea de tiempo de cambios de configuración

---

#### Amazon Inspector

Evaluación automatizada de seguridad.

**Cobertura de escaneo**:

- Instancias de Amazon EC2
- Imágenes de contenedores en Amazon Elastic Container Registry (ECR)
- Funciones de AWS Lambda

**Integración**:

- AWS Organizations para gestión centralizada
- AWS Security Hub para consolidación de hallazgos
- Amazon EventBridge para automatización de respuestas

---

#### AWS Audit Manager

Automatización de auditorías de cumplimiento.

**Proporciona un proceso automatizado y continuo para**:

- Recopilar evidencia de controles de seguridad
- Evaluar si los controles funcionan de manera efectiva
- Proporcionar informes de evaluación para agilizar la preparación de auditorías
- Mapear controles a marcos de cumplimiento estándar
- Generar reportes listos para auditoría

---

#### AWS Artifact

Acceso a informes de cumplimiento y acuerdos.

**Servicios**:

- Proporciona acceso bajo demanda a informes de seguridad y cumplimiento
- Acceso a informes de cumplimiento de auditores externos
- Disponibilidad de acuerdos en línea (BAA, GDPR DPA)
- Documentación de certificaciones de AWS
- Repositorio centralizado de documentos de cumplimiento

---

#### AWS Trusted Advisor

Orientación en tiempo real para optimización de AWS.

**Beneficios**:

- Proporciona orientación en tiempo real para mejorar el entorno de AWS
- Compara la infraestructura con las mejores prácticas de AWS
- Evalúa cinco categorías: costos, rendimiento, seguridad, tolerancia a fallos y límites de servicio
- Implementa recomendaciones en todas las etapas de implementación
- Alertas proactivas sobre problemas potenciales

---

### Matriz de Alcance de Seguridad de IA Generativa (Generative AI Security Scoping Matrix)

Un modelo mental para clasificar casos de uso según riesgo y alcance de seguridad.

![Matriz de alcance de seguridad](dominio_5_images/picatón%20pre.png)

#### Dimensiones de la Matriz

La matriz evalúa aplicaciones de IA generativa en dos dimensiones:

| Dimensión | Descripción |
|-----------|-------------|
| **Alcance de datos** | Qué tan sensibles son los datos utilizados (públicos → confidenciales → regulados) |
| **Alcance de acción** | Qué puede hacer la aplicación (solo lectura → escritura → acciones automatizadas) |

#### Niveles de Riesgo

| Nivel | Características | Ejemplo |
|-------|-----------------|--------|
| **Bajo** | Datos públicos, solo consultas de lectura | Chatbot de FAQ con información pública |
| **Medio** | Datos internos, generación de contenido | Asistente para redacción de emails internos |
| **Alto** | Datos sensibles, acciones en sistemas | Agente que modifica registros de clientes |
| **Crítico** | Datos regulados (PII, PHI), decisiones automatizadas | Sistema de decisiones financieras o médicas |

#### Controles Recomendados por Nivel

- **Bajo**: Logging básico, términos de uso
- **Medio**: Autenticación, auditoría, guardrails de contenido
- **Alto**: MFA, cifrado, revisión humana, monitoreo en tiempo real
- **Crítico**: Aislamiento de red, aprobaciones múltiples, cumplimiento normativo estricto

---

### Mejores Prácticas para Implementaciones de IA Seguras y Compatibles

#### Principios de IA Responsable

![Principios de IA Responsable](dominio_5_images/IA%20Responsable.png)

**Principios fundamentales**:

- Imparcialidad y mitigación de sesgos
- Transparencia y explicabilidad
- Privacidad y protección de datos
- Rendición de cuentas y gobernanza
- Seguridad y robustez

#### Infraestructura de Seguridad

![Infraestructura segura para IA](dominio_5_images/Infraestructura%20de.png)

**Componentes clave**:

- Cifrado de extremo a extremo
- Aislamiento de redes (VPC)
- Controles de acceso granulares (IAM)
- Monitoreo y logging continuo
- Respuesta automatizada a incidentes

---

## Quiz

### Pregunta 1: IA Responsable en Modelos ML

![Pregunta sobre IA responsable en modelos ML](dominio_5_images/IA%20responsable%20en%20modelos%20ML.png)

**Respuesta correcta**: **A** - SageMaker Clarify para monitorear el modelo en busca de posibles sesgos y a la deriva.

**Explicación**: SageMaker Clarify está diseñado específicamente para detectar sesgos en modelos ML y monitorear la deriva de datos, siendo la herramienta ideal para implementar IA responsable.

---

### Pregunta 2: Acceso a Foundation Models en Amazon Bedrock

![Pregunta sobre acceso a FMs en Bedrock](dominio_5_images/Acceso%20a%20FMs%20en%20Amazon%20Bedrock.png)

**Respuesta correcta**: **A** - IAM (Identity and Access Management)

**Explicación**: IAM es el servicio fundamental de AWS para controlar el acceso a todos los servicios, incluyendo Amazon Bedrock. Permite definir permisos granulares sobre quién puede acceder a qué Foundation Models.

---

### Pregunta 3: Pregunta de Correspondencia

![Pregunta de correspondencia de servicios](dominio_5_images/Pregunta%20coincidente.png)

**Respuestas correctas**:

1. **B** - CloudTrail: Seguimiento de actividades de usuarios y llamadas a API
2. **B** - Config: Evaluación de configuraciones contra políticas de cumplimiento
3. **A** - CloudWatch: Monitoreo de infraestructura y alertas en tiempo real
4. **B** - Audit Manager: Automatización de recopilación de evidencia para auditorías

---

## Resumen del Dominio 5

Este dominio cubre los aspectos esenciales de seguridad, cumplimiento y gobernanza para soluciones de IA:

1. **Servicios de seguridad fundamentales**: IAM (control de acceso), KMS (cifrado), Macie (detección de PII), VPC (aislamiento de red), PrivateLink (conectividad privada)
2. **Monitoreo y auditoría**: CloudWatch (observabilidad), CloudTrail (auditoría de API), Config (configuración), Inspector (vulnerabilidades)
3. **Cumplimiento**: Audit Manager (auditorías automatizadas), Artifact (informes de cumplimiento), Trusted Advisor (mejores prácticas)
4. **Gobernanza de datos**: Calidad, privacidad, ciclo de vida, IA responsable, estructura organizacional, colaboración segura
5. **Defensa en profundidad**: Estrategia multicapa con políticas, capacitación, controles técnicos, monitoreo y auditoría
6. **Mejores prácticas**: Implementación de IA responsable con infraestructura segura, cifrado, aislamiento de red y controles de acceso granulares
