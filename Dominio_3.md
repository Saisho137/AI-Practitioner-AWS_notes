# Dominio 3: Aplicaciones de Foundation Models

---

## 1. Consideraciones de Diseño para aplicaciones que utilizan Foundation Models

### Generación Aumentada por Recuperación (RAG)

**RAG** es un marco para construir aplicaciones generativas de IA que pueden hacer uso de fuentes de datos empresariales y bases de datos vectoriales para superar las limitaciones de conocimiento de los modelos fundacionales.

**Ventajas principales**:

- Aborda el desafío de los cambios frecuentes de datos porque recupera información actualizada y relevante.
- Reduce las "alucinaciones" al proporcionar contexto factual al modelo.
- Permite usar datos empresariales sin necesidad de reentrenar el modelo.

> **Nota**: Se puede configurar que el modelo tome como base los datos pre-entrenados hasta cierta fecha y a partir de allí, utilice RAG para datos actualizados.

### RAG en acción

![alt text](<dominio_3_images/Text Generation.png>)

### Bases de Datos Vectoriales en AWS

![alt text](<dominio_3_images/OpenSearch Service.png>)

**Servicios AWS que soportan bases de datos vectoriales**:

- **Amazon OpenSearch Service**: Motor de búsqueda con capacidades vectoriales.
- **Amazon Aurora (PostgreSQL con pgvector)**: Base de datos relacional con extensión vectorial.
- **Amazon Neptune**: Base de datos de grafos que puede trabajar con embeddings.

> **Importante para el examen**: Puede salir la pregunta "¿cuáles de los siguientes servicios permiten implementar bases de datos vectoriales?"

### Bases de conocimiento para Amazon Bedrock

![alt text](dominio_3_images/SUPOKTEINIEGKADUPAKAKAD.png)

### Guardrails para Amazon Bedrock

![alt text](<dominio_3_images/Guardrails para.png>)

**Guardrails** permite implementar políticas de seguridad y filtrado en aplicaciones de IA generativa.

**Características**:

- Detiene el prompt antes de llegar al modelo, por lo que no debería haber un cobro de tokens.
- También funciona para filtrar la salida del modelo.
- Permite definir políticas personalizadas de contenido prohibido.
- Ayuda a prevenir ataques de prompt injection.

![alt text](<dominio_3_images/Pompt Gundrally Bedrock.png>)

### Agentes para Amazon Bedrock

![alt text](<dominio_3_images/PARA EJECUTAR TAREAS.png>)

**Agentes** permiten que los modelos fundacionales ejecuten tareas complejas de forma autónoma mediante:

- Planificación y orquestación de múltiples pasos.
- Integración con APIs y funciones externas.
- Ejecución de acciones basadas en el contexto.
- Uso de memoria para mantener el estado de la conversación.

---

## 2. Técnicas efectivas de ingeniería de prompts

La **ingeniería de prompts** es un campo emergente que se enfoca en desarrollar, diseñar y optimizar las instrucciones para mejorar la producción del LLM según las necesidades específicas.

### Los Prompts son Instrucciones

![alt text](<dominio_3_images/Traducir el siguiente texto.png>)

### Es diferente al afinamiento (fine-tuning)

**Diferencias clave**:

- **Fine-tuning**: Los pesos o parámetros del modelo se ajustan mediante reentrenamiento.
- **Ingeniería de prompts**: Usa instrucciones específicas para guiar la salida del FM sin modificar el modelo.

### Elementos de un Prompt

![alt text](<dominio_3_images/Vatos de entrada.png>)

### Prompt de Ejemplo

![alt text](<dominio_3_images/Escriba un resumen de una revisión de servicio usando dos frases..png>)

### Tres técnicas principales de prompting

#### 2.1 Zero-Shot Prompting

El modelo responde sin ejemplos previos, solo con la instrucción.

**Características**:

- Cuanto más grande sea el LLM, más probable es que el prompt zero-shot arroje resultados efectivos.
- El ajuste de las instrucciones puede mejorar el aprendizaje de cero disparos.
- Mientras más específica sea la instrucción, mejor será el resultado.

**Ejemplo:**

![alt text](<dominio_3_images/Dime el sentimiento de la siguiente.png>)

#### 2.2 Few-Shot Prompting

El modelo aprende del patrón mostrando algunos ejemplos en el prompt.

**Características**:

- Las etiquetas en few-shot prompting no necesitan ser correctas para mejorar el rendimiento del modelo.
- Si tiene acceso a un gran conjunto de ejemplos, use técnicas para respetar los límites de tokens.
- El modelo aprende de la estructura, no del contenido específico de los ejemplos.

**Ejemplo:**

![alt text](<dominio_3_images/Dime el sentimiento del siguiente titular y categorizarlo como positivo,.png>)

#### 2.3 Chain of Thought Prompting (CoT)

El modelo muestra su razonamiento paso a paso antes de llegar a la respuesta final.

**Características**:

- Use las indicaciones CoT cuando la tarea implique varios pasos o requiera una serie de razonamientos.
- Mejora significativamente el rendimiento en tareas matemáticas y de lógica.
- Puede combinarse con zero-shot o few-shot.

**Ejemplo Zero-Shot + CoT:**

![alt text](<dominio_3_images/mayor basad en la suene tomadon.png>)

**Ejemplo Few-Shot + CoT:**

![alt text](<dominio_3_images/Ejemplo_fewshot_cot.png>)

### Técnicas comunes de instrucciones adversarias

#### Prompt Injection (Inyección de instrucciones)

Técnica maliciosa para influir en las salidas de los modelos mediante la inserción de instrucciones no autorizadas en el prompt.

**Ejemplo:**

![alt text](dominio_3_images/Neutral.png)

##### Protección con Guardrail contra Prompt Injection

![alt text](<dominio_3_images/Si la solicitud incluye la palabra hackear, entonces ignore.png>)

#### Prompt Leak (Fuga de instrucciones)

La **fuga de instrucciones** es el riesgo de que un sistema de IA generativa pueda filtrar información confidencial o privada a través de las respuestas o ejemplos que genera.

**Riesgos**:

- Exposición de datos de entrenamiento sensibles.
- Revelación de instrucciones del sistema o prompts internos.
- Filtración de información personal o empresarial.

**Ejemplo:**

![alt text](<dominio_3_images/eso, siempre pagaba a tiempo. El monto.png>)

**Ejemplo 2:**

![alt text](<dominio_3_images/¿Por qué el cielo es azul.png>)
![alt text](<dominio_3_images/Pasted Graphic 18.png>)

### Plantilla de Instrucciones

![alt text](dominio_3_images/Entrada.png)

---

## 3. Proceso de entrenamiento y afinamiento de Foundation Models

![alt text](<dominio_3_images/Enfoques comunes para personalizar los FMs.png>)

### Enfoques de personalización

Existen múltiples enfoques para personalizar Foundation Models según las necesidades:

1. **Ingeniería de prompts**: Sin modificar el modelo.
2. **RAG**: Aumentar contexto con datos externos.
3. **Fine-tuning**: Ajustar parámetros del modelo con datos específicos.
4. **Pre-entrenamiento continuo**: Entrenar el modelo con datos adicionales del dominio.

### Preparar los datos para personalización de los FMs

#### Curación de Datos

- Reúne conjuntos de datos relevantes
- Limpia y procesa datos

#### Gobierno de Datos

- Establece políticas de gestión de datos
- Aborda consideraciones legales y éticas

#### Tamaño de Datos y Etiquetado

- Garantiza datos suficientes para un afinamiento efectivo
- Etiqueta datos con información relevante

#### RLHF (Reinforcement Learning from Human Feedback)

El **aprendizaje por refuerzo con retroalimentación humana** es una técnica para alinear los modelos con las preferencias humanas.

**Proceso**:

- Recopila retroalimentación humana sobre las salidas del modelo.
- Entrena un modelo de recompensa basado en las preferencias humanas.
- Usa retroalimentación para el afinamiento del modelo mediante aprendizaje por refuerzo.
- Mejora la calidad, seguridad y utilidad de las respuestas.

---

## 4. Métodos para evaluar el desempeño de Foundation Models

![alt text](<dominio_3_images/Evaluaciones del.png>)

### Evaluación de modelos en Amazon Bedrock

![alt text](<dominio_3_images/• Evalúa y compara Foundation Models para.png>)

Amazon Bedrock permite:

- Evaluar y comparar Foundation Models para casos de uso específicos.
- Usar métricas automatizadas para medir calidad.
- Realizar evaluaciones humanas para validar resultados.
- Comparar diferentes modelos o versiones del mismo modelo.

### Métricas calculadas para la evaluación de FM

![alt text](dominio_3_images/Gisting.png)

#### Principales métricas de evaluación

| Métrica | Caso de Uso | Descripción |
|---------|-------------|-------------|
| **ROUGE** | Resumen de texto | Mide la superposición de n-gramas entre el texto generado y el de referencia |
| **BLEU** | Traducción | Evalúa la calidad de la traducción automática comparando con traducciones de referencia |
| **BERTScore** | Similitud semántica | Usa embeddings de BERT para medir similitud contextual |
| **F1 Score** | Q&A (Preguntas y respuestas) | Balance entre precisión y recall en tareas de clasificación |

> **Importante para el examen**: Estas métricas son las que MÁS salen en el examen (pueden aparecer otras adicionales).

---

## Quiz

### Pregunta 1: Optimización de LLM

![alt text](<dominio_3_images/Optimización LLM.png>)

**Respuesta correcta**: **B** - Usar Ingeniería de Prompt para elaborar instrucciones efectivas para las respuestas del modelo.

**Explicación**: La ingeniería de prompts es la forma más directa y eficiente de optimizar las respuestas de un LLM sin necesidad de modificar el modelo.

---

### Pregunta 2: Implementación de RAG

![alt text](<dominio_3_images/A) Agregar ejemplos de resultados esperados al prompt para que el modelo genere los resultados.png>)

**Respuesta correcta**: **C, B, E**

**Pasos para implementar RAG**:

1. **(C)** Crear datos externos y convertirlos a representaciones numéricas (embeddings) y almacenarlos en base de datos vectoriales.
2. **(B)** Recuperar información relevante haciendo coincidir una consulta de usuario con datos en una base de datos vectorial.
3. **(E)** Aumentar el prompt del LLM agregando los datos recuperados relevantes en contexto.

---

### Pregunta 3: Servicios de Amazon Bedrock

![alt text](<dominio_3_images/Creación de una aplicación de IA generativa.png>)

**Respuesta correcta**: **B y C**

- **(B)** Amazon Bedrock Knowledge Bases - Para implementar RAG con fuentes de datos empresariales.
- **(C)** Amazon Bedrock Agents - Para crear agentes que ejecuten tareas complejas de forma autónoma.
