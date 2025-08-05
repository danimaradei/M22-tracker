const planData = {
            "Año 1 - Cuatrimestre 1": [
                { codigo: "12.67", nombre: "Química General", creditos: 6, correlativas: [] },
                { codigo: "71.58", nombre: "Informática General", creditos: 3, correlativas: [] },
                { codigo: "92.01", nombre: "Análisis Matemático I", creditos: 6, correlativas: [] },
                { codigo: "93.18", nombre: "Álgebra Lineal", creditos: 6, correlativas: [] },
                { codigo: "94.33", nombre: "Tecnología y Sociedad", creditos: 3, correlativas: [] }
            ],
            "Año 1 - Cuatrimestre 2": [
                { codigo: "16.55", nombre: "Biología", creditos: 3, correlativas: [] },
                { codigo: "30.26", nombre: "Ciencia de Materiales I", creditos: 6, correlativas: ["12.67"] },
                { codigo: "30.51", nombre: "Introducción a la Ingeniería Mecánica", creditos: 3, correlativas: [] },
                { codigo: "31.08", nombre: "Sistemas de Representación", creditos: 3, correlativas: [] },
                { codigo: "92.02", nombre: "Análisis Matemático II", creditos: 6, correlativas: ["92.01", "93.18"] },
                { codigo: "93.41", nombre: "Física I", creditos: 6, correlativas: ["92.01"] }
            ],
            "Año 2 - Cuatrimestre 1": [
                { codigo: "30.41", nombre: "Diseño Mecánico I", creditos: 6, correlativas: ["93.41", "30.26", "31.08"] },
                { codigo: "30.46", nombre: "Laboratorio de Diseño Mecánico", creditos: 3, correlativas: ["93.41", "31.08", "30.26"] },
                { codigo: "71.59", nombre: "Estructura de Datos y Programación", creditos: 6, correlativas: ["71.58", "71.90"] },
                { codigo: "92.03", nombre: "Análisis Matemático III", creditos: 6, correlativas: ["92.01", "93.18"] },
                { codigo: "93.42", nombre: "Física II", creditos: 6, correlativas: ["93.02"] }
            ],
            "Año 2 - Cuatrimestre 2": [
                { codigo: "30.42", nombre: "Diseño Mecánico II", creditos: 6, correlativas: ["93.02", "93.03", "93.41"] },
                { codigo: "31.21", nombre: "Termodinámica", creditos: 6, correlativas: ["93.42", "93.41"] },
                { codigo: "92.04", nombre: "Análisis Matemático IV", creditos: 6, correlativas: ["92.02", "92.03"] },
                { codigo: "93.07", nombre: "Métodos Numéricos", creditos: 3, correlativas: ["71.58", "92.03"] },
                { codigo: "93.43", nombre: "Física III", creditos: 6, correlativas: ["92.03", "93.41"] }
            ],
            "Año 3 - Cuatrimestre 1": [
                { codigo: "21.08", nombre: "Electrotecnia", creditos: 6, correlativas: ["93.62"] },
                { codigo: "30.25", nombre: "Ciencia de Materiales II", creditos: 3, correlativas: ["30.26"] },
                { codigo: "30.43", nombre: "Diseño Mecánico III A", creditos: 4, correlativas: ["93.66", "30.42", "93.03", "93.68"] },
                { codigo: "30.44", nombre: "Diseño Mecánico III B", creditos: 4, correlativas: ["93.66", "30.42", "93.03", "93.68"] },
                { codigo: "93.61", nombre: "Física IV", creditos: 4, correlativas: ["93.42", "93.62"] },
                { codigo: "94.43", nombre: "Metodología del Diseño", creditos: 3, correlativas: [] }
            ],
            "Año 3 - Cuatrimestre 2": [
                { codigo: "30.45", nombre: "Diseño Mecánico IV", creditos: 6, correlativas: ["30.43", "30.25", "30.44"] },
                { codigo: "30.47", nombre: "Termofluidos I", creditos: 6, correlativas: ["31.21", "93.03", "93.42", "93.41"] },
                { codigo: "93.22", nombre: "Probabilidad y Estadística", creditos: 6, correlativas: ["93.02"] },
                { codigo: "94.44", nombre: "Proyecto Interdisciplinario", creditos: 3, correlativas: ["94.43"] },
                { codigo: "94.51", nombre: "Inglés I", creditos: 0, correlativas: [] },
                { codigo: "", nombre: "Electiva - Área Complementaria", creditos: 3, correlativas: [] }
            ]
        };

        // Estado de las materias
        let materiasCompletadas = new Set();
        const totalCreditos = 156;

        // Función para verificar si una materia está disponible
        function estaDisponible(materia) {
            return materia.correlativas.every(correlativa => materiasCompletadas.has(correlativa));
        }

        // Función para obtener el estado de una materia
        function getEstadoMateria(materia) {
            if (materiasCompletadas.has(materia.codigo)) {
                return 'completed';
            } else if (estaDisponible(materia)) {
                return 'available';
            } else {
                return 'blocked';
            }
        }

        // Función para crear una tarjeta de materia
        function crearTarjetaMateria(materia) {
            const estado = getEstadoMateria(materia);
            const estaCompletada = materiasCompletadas.has(materia.codigo);
            
            const correlativasText = materia.correlativas.length > 0 
                ? materia.correlativas.map(c => `<span class="correlativas-tag">${c}</span>`).join('')
                : '<span class="correlativas-tag">Sin correlativas</span>';

            return `
                <div class="materia-card ${estado}" data-codigo="${materia.codigo}">
                    <div class="materia-header">
                        <div class="materia-codigo">${materia.codigo}</div>
                        <div class="materia-creditos">${materia.creditos} créditos</div>
                    </div>
                    <div class="materia-nombre">${materia.nombre}</div>
                    <div class="correlativas">
                        <strong>Correlativas:</strong><br>
                        ${correlativasText}
                    </div>
                    <div class="checkbox-container">
                        <div class="checkbox ${estaCompletada ? 'checked' : ''}" data-codigo="${materia.codigo}">
                            ${estaCompletada ? '✓' : ''}
                        </div>
                        <span class="status-text">
                            ${estaCompletada ? 'Completada' : 
                              estado === 'available' ? 'Disponible' : 'Bloqueada'}
                        </span>
                    </div>
                </div>
            `;
        }

        // Función para renderizar el plan
        function renderizarPlan() {
            const container = document.getElementById('planContainer');
            let html = '';

            Object.entries(planData).forEach(([periodo, materias]) => {
                const [año, cuatrimestre] = periodo.split(' - ');
                
                html += `
                    <div class="year-section">
                        <div class="year-title">${año}</div>
                        <div class="cuatrimestre">
                            <div class="cuatrimestre-title">${cuatrimestre}</div>
                            <div class="materias-grid">
                                ${materias.map(materia => crearTarjetaMateria(materia)).join('')}
                            </div>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
            actualizarEstadisticas();
        }

        // Función para actualizar estadísticas
        function actualizarEstadisticas() {
            const todasLasMaterias = Object.values(planData).flat();
            const completadas = todasLasMaterias.filter(m => materiasCompletadas.has(m.codigo));
            const disponibles = todasLasMaterias.filter(m => !materiasCompletadas.has(m.codigo) && estaDisponible(m));
            const creditosObtenidos = completadas.reduce((sum, m) => sum + m.creditos, 0);
            const progreso = Math.round((creditosObtenidos / totalCreditos) * 100);

            document.getElementById('completedCount').textContent = completadas.length;
            document.getElementById('availableCount').textContent = disponibles.length;
            document.getElementById('totalCredits').textContent = `${creditosObtenidos}/${totalCreditos}`;
            
            const progressFill = document.getElementById('progressFill');
            progressFill.style.width = `${progreso}%`;
            progressFill.textContent = `${progreso}%`;
        }

        // Función para alternar el estado de una materia
        function alternarMateria(codigo) {
            const todasLasMaterias = Object.values(planData).flat();
            const materia = todasLasMaterias.find(m => m.codigo === codigo);
            
            if (!materia) return;

            if (materiasCompletadas.has(codigo)) {
                materiasCompletadas.delete(codigo);
            } else if (estaDisponible(materia)) {
                materiasCompletadas.add(codigo);
            }

            renderizarPlan();
        }

        // Event listeners
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('checkbox') || e.target.closest('.checkbox')) {
                const checkbox = e.target.classList.contains('checkbox') ? e.target : e.target.closest('.checkbox');
                const codigo = checkbox.dataset.codigo;
                alternarMateria(codigo);
            }
        });

        // Función para manejar la selección de concentraciones
        function seleccionarConcentracion(tipo) {
            // Remover la clase 'selected' de todos los botones
            const todosLosBotones = document.querySelectorAll('.boton-concentracion');
            todosLosBotones.forEach(boton => {
                boton.classList.remove('selected');
            });
            
            // Agregar la clase 'selected' al botón clickeado
            const botonClickeado = event.target;
            botonClickeado.classList.add('selected');
            
            // Aquí puedes agregar la lógica para mostrar las materias específicas de cada concentración
            // En el futuro, aquí podrías:
            // 1. Cargar las materias específicas de esa concentración
            // 2. Mostrar una nueva sección con el plan de estudios específico
            // 3. Navegar a una página específica para esa concentración
        }

        // Inicializar la aplicación
        renderizarPlan();