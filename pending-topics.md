# Temas Pendientes de Estudio - AWS AI Practitioner

> 📝 **Leyenda:**
>
> - ❌ = Sin notas en el workspace
> - ⚠️ = Cobertura parcial/mención breve
> - ✅ = Cubierto en las notas
>
> 📅 **Última revisión:** 8 de diciembre de 2025
>
> 📂 **Notas adicionales:** [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

---

## Amazon SageMaker ✅

> ✅ Cubierto en ReadinessPath y [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

- ✅ **Model Monitor** - Cubierto en [Dominio_4.md](ReadinessPath/Dominio_4.md) (monitoreo, detección de drift/desviaciones)
- ✅ **Data Wrangler** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ✅ **Pipelines** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ✅ **Clarify** - Cubierto en [Dominio_4.md](ReadinessPath/Dominio_4.md) (Bias, Transparency, explicabilidad)
- ✅ **Model Cards** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ⚠️ **Service Cards** - Concepto similar a Model Cards (documentación de servicios AWS de IA)
- ✅ **Ground Truth** - RLHF cubierto en [Dominio_1.md](ReadinessPath/Dominio_1.md) y [Dominio_3.md](ReadinessPath/Dominio_3.md)
- ✅ **Model Registry** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ✅ **JumpStart** - Cubierto en [Dominio_2.md](ReadinessPath/Dominio_2.md) (acceso a FMs pre-entrenados)
- ✅ **Model Dashboard** - Cubierto en [Dominio_4.md](ReadinessPath/Dominio_4.md) (visualización centralizada)

---

## Métricas de Evaluación de Modelos ✅

> ✅ Cubierto completamente entre ReadinessPath y [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

### Métricas para Foundation Models - [Dominio_3.md](ReadinessPath/Dominio_3.md)

- ✅ **ROUGE** - Resumen de texto (superposición de n-gramas)
- ✅ **BLEU** - Traducción automática
- ✅ **BERTScore** - Similitud semántica
- ✅ **F1 Score** - Q&A y clasificación

### Métricas ML tradicional - [Notas_Adicionales.md](Extra/Notas_Adicionales.md)

- ✅ **MAPE** (Mean Absolute Percentage Error) - Regresión
- ✅ **MAE** (Mean Absolute Error) - Regresión
- ✅ **RMSE** (Root Mean Square Error) - Regresión
- ✅ **AUC-ROC** - Clasificación binaria
- ✅ **Precision/Recall** - Clasificación

---

## Compliance y Gobernanza ✅

> ✅ Cubierto extensamente en [Dominio_5.md](ReadinessPath/Dominio_5.md)

### Servicios documentados

- ✅ **IAM** - Control de acceso granular
- ✅ **KMS** - Cifrado de datos
- ✅ **Macie** - Detección de PII en S3
- ✅ **VPC** - Aislamiento de red
- ✅ **PrivateLink** - Conectividad privada
- ✅ **CloudWatch** - Monitoreo
- ✅ **CloudTrail** - Auditoría de API
- ✅ **Config** - Evaluación de configuraciones
- ✅ **Inspector** - Evaluación de seguridad
- ✅ **Audit Manager** - Auditorías automatizadas
- ✅ **Artifact** - Informes de cumplimiento
- ✅ **Trusted Advisor** - Mejores prácticas

### Marcos de cumplimiento mencionados

- ✅ GDPR, CCPA, ISO 27001, SOC 2, HIPAA, PCI DSS, EU AI Act

---

## Cost-effective Solutions ✅

> ✅ Cubierto en [Dominio_2.md](ReadinessPath/Dominio_2.md) y [Dominio_3.md](ReadinessPath/Dominio_3.md)

**Orden de costo-efectividad (de menor a mayor costo):**

1. ✅ **Prompt Engineering** - Sin modificar el modelo
2. ✅ **RAG** - Aumentar contexto con datos externos
3. ✅ **Fine-tuning** - Ajustar parámetros (cientos a miles de ejemplos)
4. ✅ **Pre-entrenamiento continuo** - Mayor costo computacional

---

## Fine-tuning ✅

> ✅ Cubierto en [Dominio_2.md](ReadinessPath/Dominio_2.md) y [Dominio_3.md](ReadinessPath/Dominio_3.md)

- ✅ **Instruction-based Fine-tuning** - Maximizar precisión para tareas específicas
- ✅ **Domain Adaptation (Pre-entrenamiento continuo)** - Adaptar a dominios con vocabulario único (médico, legal, financiero)
- ✅ **RLHF** - Alineación con preferencias humanas

---

## Generative AI Security Scoping Matrix ✅

> ✅ Ampliado en [Dominio_5.md](ReadinessPath/Dominio_5.md)

- ✅ Explicación de dimensiones (alcance de datos y alcance de acción)
- ✅ Niveles de riesgo (Bajo, Medio, Alto, Crítico)
- ✅ Controles recomendados por nivel

---

## Cuándo usar cada técnica ✅

> ✅ Cubierto en [Dominio_2.md](ReadinessPath/Dominio_2.md) y [Dominio_3.md](ReadinessPath/Dominio_3.md)

| Técnica | Caso de Uso | Estado |
|---------|-------------|--------|
| Prompt Engineering | Sin modificar modelo, optimización rápida | ✅ |
| Fine-tuning | Especializar en tarea específica, datos etiquetados | ✅ |
| Continued Pre-training | Dominio con vocabulario único (médico, legal) | ✅ |
| RAG | Datos actualizados, reducir alucinaciones | ✅ |

---

## Networking y Conectividad ✅

> ✅ Cubierto en [Dominio_5.md](ReadinessPath/Dominio_5.md) y [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

- ✅ **VPC** - Aislamiento de red
- ✅ **PrivateLink** - Conectividad privada sin internet público
- ✅ **Gateway Endpoint** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ✅ **Latencia en respuestas** - Factores detallados en [Dominio_2.md](ReadinessPath/Dominio_2.md)

---

## Amazon Q ✅

> ✅ Cubierto en [Dominio_2.md](ReadinessPath/Dominio_2.md) y [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

- ✅ Amazon Q Developer (asistencia en código)
- ✅ Amazon Q Suite (mención)
- ✅ **Amazon Q Business** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ✅ Implementación de RAG con Q Business
- ✅ Integración con fuentes de datos empresariales
- ✅ Amazon Q in QuickSight

---

## Modelos de Clasificación ✅

> ✅ Cubierto en [Dominio_1.md](ReadinessPath/Dominio_1.md) y [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

- ✅ Aprendizaje supervisado (concepto general)
- ✅ Rekognition para clasificación de imágenes
- ✅ **Binary Classification** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ✅ **Multiclass Classification** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)
- ✅ **Image Classification** - Cubierto en [Notas_Adicionales.md](Extra/Notas_Adicionales.md)

---

## Prompt Injection ✅

> ✅ Bien cubierto en [SkillBuilder/Prompt_Engineering.md](SkillBuilder/Prompt_Engineering.md) y [Dominio_3.md](ReadinessPath/Dominio_3.md)

### Técnicas documentadas

- ✅ **Hijacking** - Secuestrar comportamiento del modelo
- ✅ **Prompt Injection** - Insertar instrucciones maliciosas
- ✅ **Prompt Leaking** - Filtración de instrucciones del sistema
- ✅ **Jailbreaking** - Eludir restricciones de seguridad
- ✅ **Poisoning** - Envenenamiento de datos de entrenamiento
- ✅ **Exposure** - Exposición de datos sensibles
- ✅ **Guardrails como protección** - [Dominio_3.md](ReadinessPath/Dominio_3.md)

### Técnicas específicas de ataques

> ✅ Cubierto en [SkillBuilder/Prompt_Engineering.md](SkillBuilder/Prompt_Engineering.md)

- ✅ **Ignoring the prompt template** - Instruir al modelo a ignorar instrucciones del sistema
- ✅ **Exploiting friendliness** - Explotar la naturaleza cooperativa del modelo
- ✅ **Changing the input** - Ofuscación mediante codificación, fragmentación o traducción
- ✅ **Prompting persona switches** - Adoptar personalidades alternativas sin restricciones (DAN, etc.)

---

## Algoritmos de ML ✅

> ✅ Cubierto en [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

- ✅ **Clustering** - K-means, Hierarchical
- ✅ **Anomaly Detection** - Isolation Forest, Autoencoders, servicios AWS
- ✅ **Forecasting** - ARIMA, Prophet, DeepAR, Amazon Forecast
- ✅ **Classification algorithms** - Random Forest, XGBoost, SVM, Logistic Regression

---

## Amazon Augmented AI (A2I) ✅

> ✅ Cubierto en [Dominio_1.md](ReadinessPath/Dominio_1.md) y [Dominio_4.md](ReadinessPath/Dominio_4.md)

- ✅ Revisión humana de predicciones de ML
- ✅ Integración con Textract mencionada
- ✅ Uso para validación cuando la confianza del modelo es baja

---

## ML Lifecycle ✅

> ✅ Cubierto detalladamente en [Dominio_1.md](ReadinessPath/Dominio_1.md)

### Fases documentadas

1. ✅ Definir problema
2. ✅ **Recolección de datos** (Data Collection)
3. ✅ Exploración y limpieza
4. ✅ Ingeniería de features
5. ✅ **Selección de características** (Feature Selection) - Mencionado
6. ✅ Entrenamiento de modelo
7. ✅ **Validación del modelo** (Evaluación train/val/test)
8. ✅ Despliegue
9. ✅ **Monitorización** (Model Monitor en Dominio_4)
10. ✅ Mantenimiento y re-entrenamiento

---

## Temas Adicionales Identificados ✅

> ✅ Cubierto en [Extra/Notas_Adicionales.md](Extra/Notas_Adicionales.md)

- ✅ **Embeddings** - Representaciones vectoriales, propiedades, usos
- ✅ **Bases de datos vectoriales** - OpenSearch, Aurora pgvector, Neptune, MemoryDB
- ✅ **Tokenización** - Word-level, character-level, subword (BPE, WordPiece)
- ✅ **Bedrock Agents** - Componentes, flujo de trabajo, casos de uso
- ✅ **PartyRock** - Plataforma sin código para experimentación

---

## ✅ Documentación Completada

> 🎉 **Estado:** Todos los temas principales han sido cubiertos.
>
> Los temas marcados como ⚠️ (parciales) son variantes específicas de conceptos que ya están documentados en sus categorías principales.

### Estructura de Notas

| Carpeta | Contenido |
|---------|-----------|
| `ReadinessPath/` | Dominios 1-5 (conceptos fundamentales del examen) |
| `SkillBuilder/` | Prompt Engineering detallado |
| `Extra/` | Notas adicionales (SageMaker, métricas, algoritmos, Q Business, etc.) |

---
