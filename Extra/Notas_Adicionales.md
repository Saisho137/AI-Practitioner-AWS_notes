# Notas Adicionales - AWS AI Practitioner

> 📅 **Fecha de creación:** 8 de diciembre de 2025
>
> Este documento complementa las notas de ReadinessPath con temas no cubiertos previamente.
>
> ⚠️ Precaución: Este contenido adicional fue generado completamente con IA generativa, NO se debe aceptar el contenido expuesto como fuente de verdad

---

## Tabla de Contenidos

1. [Amazon SageMaker - Servicios Adicionales](#amazon-sagemaker---servicios-adicionales)
2. [Métricas de ML Tradicional](#métricas-de-ml-tradicional)
3. [Amazon Q Business](#amazon-q-business)
4. [Algoritmos de Machine Learning](#algoritmos-de-machine-learning)
5. [Networking - Gateway Endpoints](#networking---gateway-endpoints)
6. [Modelos de Clasificación](#modelos-de-clasificación)
7. [Conceptos Técnicos Adicionales](#conceptos-técnicos-adicionales)

---

## Amazon SageMaker - Servicios Adicionales

### SageMaker Data Wrangler

Herramienta visual para **preparación y transformación de datos** sin escribir código.

**Características principales:**

- Importa datos de múltiples fuentes (S3, Athena, Redshift, etc.)
- Proporciona más de 300 transformaciones predefinidas
- Análisis exploratorio de datos con visualizaciones automáticas
- Detecta calidad de datos y sugiere correcciones
- Exporta flujos a notebooks, pipelines o Feature Store

**Casos de uso:**

- Limpieza y normalización de datasets
- Ingeniería de features visual
- Preparación de datos para entrenamiento

---

### SageMaker Pipelines

Framework para **orquestar flujos de trabajo de ML** de extremo a extremo.

**Componentes:**

| Componente | Descripción |
|------------|-------------|
| **Steps** | Pasos individuales (procesamiento, entrenamiento, evaluación) |
| **Parameters** | Variables configurables para el pipeline |
| **Conditions** | Lógica condicional para ramificaciones |
| **Callbacks** | Integración con servicios externos |

**Beneficios:**

- Automatización del ciclo de vida ML
- Reproducibilidad de experimentos
- Versionado de pipelines
- Integración nativa con otros servicios SageMaker

#### Tipos de Steps en SageMaker Pipelines

| Step | Propósito | Descripción |
|------|-----------|-------------|
| **Processing** | Preparación de datos | Ejecuta trabajos de procesamiento para limpieza, transformación y **feature engineering**. |
| **Training** | Entrenamiento del modelo | Lanza un trabajo de entrenamiento con el algoritmo y datos especificados. |
| **Tuning** | Optimización de hiperparámetros | Ejecuta Hyperparameter Tuning Jobs para encontrar la mejor combinación de hiperparámetros automáticamente. |
| **ClarifyCheck** | Verificación de sesgo y explicabilidad | Ejecuta análisis de SageMaker Clarify para detectar sesgos en datos o modelo, y generar reportes de explicabilidad. |

**Flujo típico de un pipeline:**

```text
ProcessingStep → TrainingStep → ClarifyCheckStep → RegisterModel
       ↓
   TuningStep (alternativa a TrainingStep para optimización)
```

**Otros steps disponibles:**

| Step | Propósito |
|------|-----------|
| **CreateModelStep** | Crea un modelo desplegable a partir de artefactos |
| **RegisterModelStep** | Registra el modelo en Model Registry |
| **ConditionStep** | Ramificación condicional (ej: si accuracy > 0.9) |
| **FailStep** | Termina el pipeline con error |
| **CallbackStep** | Integración con sistemas externos vía SQS |

---

### SageMaker Model Cards

Documentación estructurada que describe un modelo ML.

**Contenido típico:**

- **Información del modelo**: Nombre, versión, propósito
- **Uso previsto**: Casos de uso aprobados y restricciones
- **Datos de entrenamiento**: Fuentes, características, sesgos conocidos
- **Métricas de evaluación**: Rendimiento en diferentes segmentos
- **Consideraciones éticas**: Limitaciones y riesgos

**Propósito:** Mejorar la transparencia y gobernanza de modelos ML en producción.

---

### SageMaker Model Registry

Repositorio centralizado para **gestionar versiones de modelos**.

**Funcionalidades:**

- Registro de modelos con metadatos
- Estados del modelo: `Pending`, `Approved`, `Rejected`
- Grupos de modelos para organización
- Integración con pipelines para despliegue automatizado
- Linaje de modelos (tracking de origen y transformaciones)

**Flujo típico:**

1. Entrenar modelo → 2. Registrar en Model Registry → 3. Aprobar → 4. Desplegar a producción

---

## Métricas de ML Tradicional

### Métricas de Regresión

| Métrica | Fórmula | Interpretación |
|---------|---------|----------------|
| **MAE** (Mean Absolute Error) | $\frac{1}{n}\sum\|y_i - \hat{y}_i\|$ | Error promedio absoluto. Fácil de interpretar. |
| **MAPE** (Mean Absolute Percentage Error) | $\frac{100}{n}\sum\|\frac{y_i - \hat{y}_i}{y_i}\|$ | Error porcentual. Útil para comparar entre datasets. |
| **RMSE** (Root Mean Square Error) | $\sqrt{\frac{1}{n}\sum(y_i - \hat{y}_i)^2}$ | Penaliza errores grandes. Misma unidad que la variable objetivo. |
| **R²** (Coeficiente de determinación) | $1 - \frac{SS_{res}}{SS_{tot}}$ | Proporción de varianza explicada (0-1). |

**Cuándo usar cada una:**

- **MAE**: Cuando todos los errores tienen igual importancia
- **RMSE**: Cuando errores grandes son más problemáticos
- **MAPE**: Cuando necesitas comparar modelos en diferentes escalas
- **R²**: Para entender qué tan bien el modelo explica los datos

---

### Métricas de Clasificación

#### Matriz de Confusión

```text
                    Predicción
                 Positivo  Negativo
Real  Positivo     TP        FN
      Negativo     FP        TN
```

- **TP** (True Positive): Correctamente identificado como positivo
- **TN** (True Negative): Correctamente identificado como negativo
- **FP** (False Positive): Incorrectamente identificado como positivo (Error Tipo I)
- **FN** (False Negative): Incorrectamente identificado como negativo (Error Tipo II)

#### Métricas Derivadas

| Métrica | Fórmula | Cuándo usar |
|---------|---------|-------------|
| **Precision** | $\frac{TP}{TP + FP}$ | Cuando FP son costosos (ej: spam, fraude) |
| **Recall** (Sensibilidad) | $\frac{TP}{TP + FN}$ | Cuando FN son costosos (ej: diagnóstico médico) |
| **F1 Score** | $2 \times \frac{Precision \times Recall}{Precision + Recall}$ | Balance entre Precision y Recall |
| **Accuracy** | $\frac{TP + TN}{Total}$ | Clases balanceadas |

#### AUC-ROC

- **ROC Curve**: Gráfica de True Positive Rate vs False Positive Rate
- **AUC** (Area Under Curve): Área bajo la curva ROC (0.5 = aleatorio, 1.0 = perfecto)

**Interpretación del AUC:**

- 0.9 - 1.0: Excelente
- 0.8 - 0.9: Bueno
- 0.7 - 0.8: Aceptable
- 0.6 - 0.7: Pobre
- 0.5 - 0.6: No útil

---

## Amazon Q Business

Asistente de IA generativa para **empresas** que puede responder preguntas usando datos internos de la organización.

### Características Principales

| Característica | Descripción |
|----------------|-------------|
| **Conversaciones en lenguaje natural** | Preguntas y respuestas sobre datos empresariales |
| **RAG integrado** | Conecta con fuentes de datos para respuestas contextuales |
| **Plugins de acciones** | Ejecuta tareas en aplicaciones empresariales |
| **Guardrails empresariales** | Control de acceso basado en permisos existentes |

### Fuentes de Datos Soportadas

- Amazon S3
- SharePoint
- Confluence
- Salesforce
- ServiceNow
- Bases de datos (RDS, etc.)
- Más de 40 conectores nativos

### Amazon Q in QuickSight

Permite hacer **preguntas en lenguaje natural** sobre dashboards y datos.

**Capacidades:**

- Generar visualizaciones automáticamente
- Crear historias de datos
- Responder preguntas sobre métricas de negocio
- Sugerir insights relevantes

### Diferencia con Amazon Bedrock

| Aspecto | Amazon Q Business | Amazon Bedrock |
|---------|-------------------|----------------|
| **Propósito** | Asistente empresarial listo para usar | Plataforma para construir aplicaciones GenAI |
| **Configuración** | Mínima (conectar fuentes de datos) | Requiere desarrollo |
| **Personalización** | Limitada a configuración | Alta (prompts, fine-tuning, agentes) |
| **Caso de uso** | Productividad empresarial | Aplicaciones personalizadas de IA |

---

## Algoritmos de Machine Learning

### Clustering (Agrupamiento)

Agrupa datos similares sin etiquetas previas (aprendizaje no supervisado).

#### K-Means

- Agrupa datos en **K clusters** predefinidos
- Minimiza la distancia dentro de cada cluster
- Requiere especificar número de clusters

**Casos de uso:** Segmentación de clientes, compresión de imágenes

#### Hierarchical Clustering

- Construye una jerarquía de clusters (dendrograma)
- No requiere especificar K previamente
- Dos enfoques: aglomerativo (bottom-up) o divisivo (top-down)

**Casos de uso:** Taxonomías, análisis genético

---

### Anomaly Detection (Detección de Anomalías)

Identifica patrones inusuales en los datos.

#### Técnicas Comunes

| Técnica | Descripción | Caso de uso |
|---------|-------------|-------------|
| **Isolation Forest** | Aísla anomalías mediante particiones aleatorias | Fraude, intrusiones |
| **One-Class SVM** | Define límite de normalidad | Monitoreo de equipos |
| **Autoencoders** | Reconstrucción de datos; anomalías tienen alto error | Imágenes, series temporales |
| **Statistical methods** | Z-score, IQR para detectar outliers | Datos numéricos simples |

**Servicios AWS relacionados:**

- **Amazon Lookout for Metrics**: Detección automática de anomalías en métricas
- **Amazon Lookout for Equipment**: Mantenimiento predictivo

---

### Forecasting (Pronóstico)

Predice valores futuros basándose en datos históricos (series temporales).

#### Algoritmos Clásicos

- **ARIMA**: Modelo estadístico para series estacionarias
- **Exponential Smoothing**: Pondera observaciones recientes

#### Algoritmos de Deep Learning

- **DeepAR** (Amazon): RNN para múltiples series temporales relacionadas
- **Prophet** (Meta): Robusto ante datos faltantes y cambios de tendencia

**Servicio AWS:**

- **Amazon Forecast**: Servicio gestionado para pronósticos con ML
  - Soporta múltiples algoritmos (DeepAR+, ARIMA, ETS, Prophet)
  - Maneja automáticamente features como días festivos

---

### Algoritmos de Clasificación

| Algoritmo | Tipo | Fortalezas |
|-----------|------|------------|
| **Random Forest** | Ensemble de árboles | Robusto, maneja outliers, interpretable |
| **XGBoost** | Gradient Boosting | Alto rendimiento, usado en competencias |
| **SVM** | Margen máximo | Efectivo en alta dimensión |
| **Logistic Regression** | Lineal | Simple, interpretable, baseline sólido |

---

## Networking - Gateway Endpoints

### VPC Gateway Endpoints

Permiten acceso **privado** a servicios de AWS sin usar internet público.

**Servicios soportados:**

- Amazon S3
- DynamoDB

**Características:**

| Aspecto | Descripción |
|---------|-------------|
| **Costo** | Sin cargo adicional |
| **Seguridad** | Tráfico nunca sale de la red de AWS |
| **Configuración** | Se añade entrada en tabla de rutas |
| **Restricciones** | Solo funciona dentro de la misma región |

### Diferencia: Gateway vs Interface Endpoints

| Tipo | Gateway Endpoint | Interface Endpoint (PrivateLink) |
|------|------------------|----------------------------------|
| **Servicios** | Solo S3 y DynamoDB | Mayoría de servicios AWS |
| **Costo** | Gratis | Cargo por hora y datos |
| **Implementación** | Entrada en tabla de rutas | ENI en la subnet |
| **Acceso cross-region** | No | Sí (algunos servicios) |

**Cuándo usar Gateway Endpoints:**

- Cuando solo necesitas acceso a S3 o DynamoDB
- Para reducir costos de transferencia de datos
- Para mejorar seguridad evitando internet público

---

## Modelos de Clasificación

### Binary Classification (Clasificación Binaria)

Predice entre **dos clases** mutuamente excluyentes.

**Ejemplos:**

- Spam / No spam
- Fraude / Legítimo
- Enfermo / Sano

**Métricas clave:** Precision, Recall, F1, AUC-ROC

**Consideración importante:** Manejar desbalance de clases (ej: 99% no-fraude, 1% fraude)

**Técnicas para desbalance:**

- Oversampling (SMOTE)
- Undersampling
- Ajuste de pesos de clase
- Threshold tuning

---

### Multiclass Classification (Clasificación Multiclase)

Predice entre **más de dos clases**.

**Estrategias:**

| Estrategia | Descripción |
|------------|-------------|
| **One-vs-All (OvA)** | Entrena N clasificadores binarios (uno por clase) |
| **One-vs-One (OvO)** | Entrena N(N-1)/2 clasificadores (cada par de clases) |
| **Softmax/Multinomial** | Modelo único que predice probabilidad de cada clase |

**Ejemplos:**

- Clasificación de documentos por categoría
- Reconocimiento de dígitos (0-9)
- Clasificación de sentimiento (positivo, negativo, neutro)

**Métricas:** Macro/Micro F1, Accuracy, Confusion Matrix multiclase

---

### Image Classification

Clasifica imágenes completas en categorías.

**Arquitecturas comunes (CNN):**

- **ResNet**: Conexiones residuales, muy profunda
- **VGG**: Simple, capas convolucionales apiladas
- **EfficientNet**: Balance óptimo entre precisión y eficiencia

**Transfer Learning:**

1. Usar modelo pre-entrenado (ImageNet)
2. Congelar capas base
3. Entrenar solo capas finales con tus datos
4. (Opcional) Fine-tune capas superiores

**Servicio AWS:** Amazon Rekognition Custom Labels para clasificación personalizada sin escribir código ML

---

## Conceptos Técnicos Adicionales

### Embeddings

Representaciones **vectoriales densas** de datos (texto, imágenes, etc.) en un espacio de menor dimensión.

**Propiedades:**

- Elementos similares tienen vectores cercanos
- Capturan relaciones semánticas
- Típicamente 256-4096 dimensiones

**Ejemplo conceptual:**

```text
"rey" - "hombre" + "mujer" ≈ "reina"
```

**Usos:**

- Búsqueda semántica
- Sistemas de recomendación
- Clustering de documentos
- Input para RAG

**Servicios AWS:**

- Amazon Bedrock (modelos de embedding como Titan Embeddings)
- Amazon SageMaker (modelos personalizados)

---

### Bases de Datos Vectoriales

Almacenan y buscan eficientemente vectores (embeddings).

**Servicios AWS compatibles:**

| Servicio | Descripción |
|----------|-------------|
| **Amazon OpenSearch Service** | Motor de búsqueda con k-NN plugin |
| **Amazon Aurora PostgreSQL** | Extensión pgvector |
| **Amazon Neptune** | Base de datos de grafos con soporte vectorial |
| **Amazon MemoryDB** | Redis compatible con búsqueda vectorial |
| **Amazon DocumentDB** | Soporta búsqueda vectorial |

**Operaciones clave:**

- **Indexación**: Almacenar vectores con metadatos
- **Búsqueda k-NN**: Encontrar los K vectores más cercanos
- **Filtrado híbrido**: Combinar búsqueda vectorial con filtros tradicionales

---

### Tokenización

Proceso de dividir texto en unidades más pequeñas (**tokens**) para procesamiento por el modelo.

**Tipos de tokenización:**

| Tipo | Ejemplo para "playing" | Descripción |
|------|------------------------|-------------|
| **Word-level** | `["playing"]` | Palabra completa |
| **Character-level** | `["p","l","a","y","i","n","g"]` | Cada carácter |
| **Subword (BPE)** | `["play", "ing"]` | Balance entre ambos |

**Subword tokenization (más usado en LLMs):**

- **BPE** (Byte Pair Encoding): GPT-2, GPT-3
- **WordPiece**: BERT
- **SentencePiece**: T5, LLaMA

**Impacto en costos:**

- Los tokens determinan el costo de API calls
- ~4 caracteres en inglés ≈ 1 token (aproximado)
- Idiomas con caracteres especiales (español, chino) pueden usar más tokens

---

### Amazon Bedrock Agents

Permiten que los FMs **ejecuten tareas complejas** de forma autónoma.

**Componentes:**

| Componente | Función |
|------------|---------|
| **Foundation Model** | Razonamiento y planificación |
| **Instructions** | Guía el comportamiento del agente |
| **Action Groups** | Funciones que el agente puede ejecutar (Lambda) |
| **Knowledge Bases** | Acceso a datos empresariales (RAG) |

**Flujo de trabajo:**

1. Usuario hace una solicitud
2. Agente analiza y planifica pasos necesarios
3. Ejecuta acciones (APIs, consultas a KB)
4. Orquesta múltiples pasos si es necesario
5. Retorna respuesta final

**Casos de uso:**

- Asistentes de servicio al cliente
- Automatización de procesos empresariales
- Consultas complejas sobre datos internos

---

### PartyRock

Plataforma de **experimentación con IA generativa** sin código, construida sobre Amazon Bedrock.

**Características:**

- Interfaz visual drag-and-drop
- Acceso gratuito (con límites)
- No requiere cuenta de AWS
- Ideal para prototipos rápidos y aprendizaje

**Componentes disponibles:**

- Generación de texto
- Generación de imágenes
- Chatbots
- Widgets interactivos

**Limitaciones:**

- No para producción
- Opciones de personalización limitadas
- Sin integración con datos empresariales

**URL:** [partyrock.aws](https://partyrock.aws)

---

## Resumen de Servicios SageMaker

| Servicio | Propósito | Notas clave |
|----------|-----------|-------------|
| **Data Wrangler** | Preparación de datos | Visual, +300 transformaciones |
| **Pipelines** | Orquestación ML | CI/CD para ML |
| **Model Cards** | Documentación | Transparencia y gobernanza |
| **Model Registry** | Versionado | Estados: Pending/Approved/Rejected |
| **JumpStart** | FMs pre-entrenados | Acceso rápido a modelos |
| **Clarify** | Bias y explicabilidad | Asociado a "sesgo" |
| **Model Monitor** | Monitoreo drift | Asociado a "desviaciones" |
| **Ground Truth** | Etiquetado de datos | RLHF, anotación humana |

---

> 📝 **Nota:** Este documento complementa las notas de los Dominios 1-5 en ReadinessPath. Para temas como RAG, Fine-tuning, RLHF y Prompt Engineering, consultar las notas originales.
