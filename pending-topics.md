# Temas Pendientes de Estudio - AWS AI Practitioner

> 📝 **Leyenda:**
>
> - ❌ = Sin notas en el workspace
> - ⚠️ = Cobertura parcial/mención breve
> - ✅ = Cubierto en las notas
>
> 📅 **Última revisión:** 8 de diciembre de 2025

---

## Amazon SageMaker ⚠️

> ⚠️ Algunos servicios están cubiertos en ReadinessPath, pero faltan detalles específicos.

- ✅ **Model Monitor** - Cubierto en [Dominio_4.md](ReadinessPath/Dominio_4.md) (monitoreo, detección de drift/desviaciones)
- ❌ **Data Wrangler** - Preparación y transformación de datos
- ❌ **Pipelines** - Framework para orquestar el flujo de desarrollo de modelos ML
- ✅ **Clarify** - Cubierto en [Dominio_4.md](ReadinessPath/Dominio_4.md) (Bias, Transparency, explicabilidad)
- ❌ **Model Cards** - Documentación de modelos
- ❌ **Service Cards** - Documentación de servicios
- ✅ **Ground Truth** - RLHF cubierto en [Dominio_1.md](ReadinessPath/Dominio_1.md) y [Dominio_3.md](ReadinessPath/Dominio_3.md)
- ❌ **Model Registry** - Registro y versionado de modelos
- ✅ **JumpStart** - Cubierto en [Dominio_2.md](ReadinessPath/Dominio_2.md) (acceso a FMs pre-entrenados)
- ✅ **Model Dashboard** - Cubierto en [Dominio_4.md](ReadinessPath/Dominio_4.md) (visualización centralizada)

---

## Métricas de Evaluación de Modelos ⚠️

> ⚠️ Métricas para FMs están cubiertas, pero faltan métricas de ML tradicional.

### ✅ Cubiertas en [Dominio_3.md](ReadinessPath/Dominio_3.md)

- **ROUGE** - Resumen de texto (superposición de n-gramas)
- **BLEU** - Traducción automática
- **BERTScore** - Similitud semántica
- **F1 Score** - Q&A y clasificación

### ❌ Sin cubrir (ML tradicional)

- **MAPE** (Mean Absolute Percentage Error) - Regresión
- **MAE** (Mean Absolute Error) - Regresión
- **RMSE** (Root Mean Square Error) - Solo mención en Dominio_1
- **AUC-ROC** - Clasificación binaria
- **Precision/Recall** - Clasificación

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

## Generative AI Security Scoping Matrix ⚠️

> ⚠️ Mencionado brevemente en [Dominio_5.md](ReadinessPath/Dominio_5.md), pero sin detalle del framework completo.

- ⚠️ Existe imagen de referencia pero falta explicación detallada de la matriz
- ❌ Clasificación de casos de uso según riesgo y alcance

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

## Networking y Conectividad ⚠️

> ⚠️ Parcialmente cubierto en [Dominio_5.md](ReadinessPath/Dominio_5.md)

- ✅ **VPC** - Aislamiento de red
- ✅ **PrivateLink** - Conectividad privada sin internet público
- ❌ **Gateway Endpoint** - Específico para S3/DynamoDB sin internet
- ⚠️ **Latencia en respuestas** - Mencionado contexto de ventana en Dominio_2, pero falta detalle sobre factores de latencia

---

## Amazon Q ⚠️

> ⚠️ Mención breve en [Dominio_2.md](ReadinessPath/Dominio_2.md), pero falta profundidad.

### Cubierto

- ✅ Amazon Q Developer (asistencia en código)
- ✅ Amazon Q Suite (mención)

### Sin cubrir

- ❌ **Amazon Q Business** - Capacidades específicas empresariales
- ❌ Implementación de RAG con Q Business
- ❌ Integración con fuentes de datos empresariales
- ❌ Amazon Q in QuickSight

---

## Modelos de Clasificación ⚠️

> ⚠️ Conceptos generales cubiertos, pero falta detalle específico.

### Cubierto en [Dominio_1.md](ReadinessPath/Dominio_1.md)

- ✅ Aprendizaje supervisado (concepto general)
- ✅ Rekognition para clasificación de imágenes

### Modelos sin cubrir

- ❌ **Binary Classification** - Métricas específicas, casos de uso
- ❌ **Multiclass Classification** - Estrategias one-vs-all, one-vs-one
- ❌ **Image Classification** - Arquitecturas CNN, transfer learning

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

### Técnicas específicas pendientes

- ❌ Ignoring the prompt template
- ❌ Exploiting friendliness
- ❌ Changing the input
- ❌ Prompting persona switches

---

## Algoritmos de ML ❌

> ❌ No hay notas detalladas sobre algoritmos específicos de ML.

- ❌ **Clustering** - K-means, hierarchical, DBSCAN
- ❌ **Anomaly Detection** - Isolation Forest, autoencoders
- ❌ **Forecasting** - ARIMA, Prophet, DeepAR
- ❌ **Classification algorithms** - Random Forest, XGBoost, SVM

> 💡 Solo se menciona aprendizaje no supervisado para "detección de anomalías" en Dominio_1, pero sin detalles de algoritmos.

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

## Temas Adicionales Identificados ❌

> ❌ Temas relevantes encontrados que podrían faltar:

- ❌ **Embeddings** - Solo mención conceptual, falta profundidad técnica
- ❌ **Bases de datos vectoriales** - OpenSearch, Aurora pgvector mencionados pero sin detalle
- ❌ **Tokenización** - Solo ejemplo visual, falta explicación técnica
- ❌ **Bedrock Agents** - Mencionado pero sin casos de uso detallados
- ❌ **PartyRock** - Solo mención, sin tutorial o detalles

---

## Resumen de Estado Actualizado

| Categoría | Total Temas | ✅ Cubiertos | ⚠️ Parciales | ❌ Sin Cubrir |
|-----------|-------------|-------------|--------------|--------------|
| SageMaker | 10 | 5 | 0 | 5 |
| Métricas | 9 | 4 | 0 | 5 |
| Compliance/Gobernanza | 15 | 15 | 0 | 0 |
| Técnicas ML/AI | 8 | 7 | 1 | 0 |
| Servicios AWS (Q, etc.) | 5 | 1 | 2 | 2 |
| Algoritmos ML | 4 | 0 | 0 | 4 |
| ML Lifecycle | 10 | 10 | 0 | 0 |
| Prompt Security | 10 | 6 | 0 | 4 |
| Networking | 4 | 2 | 1 | 1 |
| Clasificación | 3 | 1 | 0 | 2 |
| Adicionales | 5 | 0 | 0 | 5 |
| **TOTAL** | **~83** | **~51 (61%)** | **~4 (5%)** | **~28 (34%)** |

---

## Prioridades de Estudio Recomendadas

### 🔴 Alta Prioridad (sin cobertura)

1. **Algoritmos de ML** - Clustering, Anomaly Detection, Forecasting
2. **Métricas de ML tradicional** - MAPE, MAE, AUC-ROC
3. **SageMaker Data Wrangler, Pipelines, Model Cards, Model Registry**
4. **Amazon Q Business** - Capacidades empresariales

### 🟡 Media Prioridad (profundizar)

1. **Generative AI Security Scoping Matrix** - Framework completo
2. **Gateway Endpoints** - Detalles de networking
3. **Técnicas de Prompt Injection** - Casos específicos

### 🟢 Baja Prioridad (revisar detalles)

1. Bases de datos vectoriales (implementación)
2. Tokenización técnica
3. Bedrock Agents (casos de uso avanzados)

---
