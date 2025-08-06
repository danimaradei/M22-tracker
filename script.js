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
        { codigo: "93.41", nombre: "Física I", creditos: 6, correlativas: ["92.01"] },
        { codigo: "71.90", nombre: "Certificaciones tecnológicas", creditos: 0, correlativas: [] }
    ],
    "Año 2 - Cuatrimestre 1": [
        { codigo: "30.41", nombre: "Diseño Mecánico I", creditos: 6, correlativas: ["93.41", "30.26", "31.08"] },
        { codigo: "30.46", nombre: "Laboratorio de Diseño Mecánico", creditos: 3, correlativas: ["93.41", "31.08", "30.26"] },
        { codigo: "71.59", nombre: "Estructura de Datos y Programación", creditos: 6, correlativas: ["71.58", "71.90"] },
        { codigo: "92.03", nombre: "Análisis Matemático III", creditos: 6, correlativas: ["92.01", "93.18"] },
        { codigo: "93.42", nombre: "Física II", creditos: 6, correlativas: ["92.02"] }
    ],
    "Año 2 - Cuatrimestre 2": [
        { codigo: "30.42", nombre: "Diseño Mecánico II", creditos: 6, correlativas: ["92.02", "92.03", "93.41"] },
        { codigo: "31.21", nombre: "Termodinámica", creditos: 6, correlativas: ["93.42", "93.41"] },
        { codigo: "92.04", nombre: "Análisis Matemático IV", creditos: 6, correlativas: ["92.02", "92.03"] },
        { codigo: "93.07", nombre: "Métodos Numéricos", creditos: 3, correlativas: ["71.58", "92.03"] },
        { codigo: "93.43", nombre: "Física III", creditos: 6, correlativas: ["92.03", "93.41"] }
    ],
    "Año 3 - Cuatrimestre 1": [
        { codigo: "21.08", nombre: "Electrotecnia", creditos: 6, correlativas: ["93.43"] },
        { codigo: "30.25", nombre: "Ciencia de Materiales II", creditos: 3, correlativas: ["30.26"] },
        { codigo: "30.43", nombre: "Diseño Mecánico III A", creditos: 4, correlativas: ["30.42", "92.03", "93.07", "92.04"] },
        { codigo: "30.44", nombre: "Diseño Mecánico III B", creditos: 4, correlativas: ["92.03", "30.42", "93.07", "92.04"] },
        { codigo: "93.61", nombre: "Física IV", creditos: 4, correlativas: ["93.42", "93.43"] },
        { codigo: "94.43", nombre: "Metodología del Diseño", creditos: 3, correlativas: [] }
    ],
    "Año 3 - Cuatrimestre 2": [
        { codigo: "30.45", nombre: "Diseño Mecánico IV", creditos: 6, correlativas: ["30.41", "30.43", "30.44", "30.25"] },
        { codigo: "30.47", nombre: "Termofluidos I", creditos: 6, correlativas: ["31.21", "92.03", "93.42", "93.41"] },
        { codigo: "93.24", nombre: "Probabilidad y Estadística", creditos: 6, correlativas: ["92.02"] },
        { codigo: "94.44", nombre: "Proyecto Interdisciplinario", creditos: 3, correlativas: ["94.43"] },
        { codigo: "94.51", nombre: "Inglés I", creditos: 0, correlativas: [] },
        { codigo: "", nombre: "Electiva - Área Complementaria", creditos: 3, correlativas: [] }
    ]
};

// Datos del Ciclo Profesional por concentración
const concentracionesData = {
    "automotriz": {
        nombre: "Concentración Automotriz",
        materias: {
            "Año 4 - Cuatrimestre 1": [
                { codigo: "11.15", nombre: "Organización Industrial", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "23.18", nombre: "Electrónica e Instrumentación", creditos: 6, correlativas: [], creditosRequeridos: 0 },
                { codigo: "30.48", nombre: "Termofluidos II", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "31.68", nombre: "Instalaciones Industriales", creditos: 6, correlativas: [], creditosRequeridos: 0 },
                { codigo: "61.27", nombre: "Análisis de Coyuntura Económica", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "61.31", nombre: "Derecho para Ingenieros", creditos: 3, correlativas: [], creditosRequeridos: 144 }
            ],
            "Año 4 - Cuatrimestre 2": [
                { codigo: "12.83", nombre: "Seguridad Ocupacional y Ambiental", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "23.16", nombre: "Sistemas de Control", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "30.09", nombre: "Motores de Combustión Interna", creditos: 6, correlativas: [], creditosRequeridos: 0 },
                { codigo: "30.19", nombre: "Introducción a la Dinámica del Automóvil", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "30.23", nombre: "Mantenimiento Industrial", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "30.49", nombre: "Máquinas Térmicas e Hidráulicas", creditos: 6, correlativas: [], creditosRequeridos: 0 },
                { codigo: "61.16", nombre: "Introducción a las Finanzas", creditos: 3, correlativas: [], creditosRequeridos: 0 }
            ],
            "Año 5 - Cuatrimestre 1": [
                { codigo: "30.40", nombre: "Sistemas Mecatrónicos del Automóvil", creditos: 4, correlativas: [], creditosRequeridos: 0 },
                { codigo: "30.80", nombre: "Proyecto Final (Anual)", creditos: 6, correlativas: [], creditosRequeridos: 192 },
                { codigo: "31.84", nombre: "Estructuras Automotrices", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "94.52", nombre: "Inglés II", creditos: 0, correlativas: [], creditosRequeridos: 0 }
            ],
            "Año 5 - Cuatrimestre 2": [
                { codigo: "31.85", nombre: "Transmisiones Automotrices", creditos: 3, correlativas: [], creditosRequeridos: 0 },
                { codigo: "94.65", nombre: "Práctica Profesional Supervisada", creditos: 0, correlativas: [], creditosRequeridos: 144 }
            ]
        },
        electivas: {
            creditos: 20,
            creditosRequeridos: 20
        }
    }
    // Aquí se pueden agregar más concentraciones siguiendo el mismo patrón
};

// Estado de las materias
let materiasCompletadas = new Set();
let concentracionSeleccionada = null;
const totalCreditos = 153;
const totalCreditosProfesional = 87;

// Función para verificar si una materia está disponible
function estaDisponible(materia) {
    // Si la materia tiene correlativas específicas, verificarlas
    if (materia.correlativas && materia.correlativas.length > 0) {
        return materia.correlativas.every(correlativa => materiasCompletadas.has(correlativa));
    }
    
    // Si la materia requiere créditos, verificar que se cumplan
    if (materia.creditosRequeridos) {
        const creditosObtenidos = calcularCreditosObtenidos();
        return creditosObtenidos >= materia.creditosRequeridos;
    }
    
    return true;
}

// Función para calcular créditos obtenidos
function calcularCreditosObtenidos() {
    const todasLasMaterias = Object.values(planData).flat();
    const completadas = todasLasMaterias.filter(m => materiasCompletadas.has(m.codigo));
    return completadas.reduce((sum, m) => sum + m.creditos, 0);
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
    
    let correlativasText = '';
    if (materia.correlativas && materia.correlativas.length > 0) {
        correlativasText = materia.correlativas.map(c => `<span class="correlativas-tag">${c}</span>`).join('');
    } else if (materia.creditosRequeridos && materia.creditosRequeridos > 0) {
        correlativasText = `<span class="correlativas-tag">${materia.creditosRequeridos} créditos</span>`;
    } else {
        correlativasText = '<span class="correlativas-tag">Sin correlativas</span>';
    }

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

// Función para renderizar el plan básico
function renderizarPlanBasico() {
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
}

// Función para renderizar el plan profesional
function renderizarPlanProfesional() {
    const container = document.getElementById('profesionalContainer');
    
    if (!concentracionSeleccionada || !concentracionesData[concentracionSeleccionada]) {
        container.innerHTML = '<p class="no-selection">Selecciona una concentración para ver las materias del Ciclo Profesional</p>';
        return;
    }

    const concentracion = concentracionesData[concentracionSeleccionada];
    let html = '';

    Object.entries(concentracion.materias).forEach(([periodo, materias]) => {
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

    // Agregar información sobre electivas si existe
    if (concentracion.electivas) {
        html += `
            <div class="year-section">
                <div class="year-title">Electivas</div>
                <div class="cuatrimestre">
                    <div class="electivas-info">
                        <p><strong>Créditos requeridos:</strong> ${concentracion.electivas.creditos} créditos</p>
                        <p><strong>Correlativas:</strong> ${concentracion.electivas.creditosRequeridos} créditos</p>
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
}

// Función para actualizar estadísticas
function actualizarEstadisticas() {
    const todasLasMaterias = Object.values(planData).flat();
    let todasLasMateriasProfesionales = [];
    
    if (concentracionSeleccionada && concentracionesData[concentracionSeleccionada]) {
        todasLasMateriasProfesionales = Object.values(concentracionesData[concentracionSeleccionada].materias).flat();
    }
    
    const todasLasMateriasCompletas = [...todasLasMaterias, ...todasLasMateriasProfesionales];
    
    const completadas = todasLasMateriasCompletas.filter(m => materiasCompletadas.has(m.codigo));
    const disponibles = todasLasMateriasCompletas.filter(m => !materiasCompletadas.has(m.codigo) && estaDisponible(m));
    const creditosObtenidos = completadas.reduce((sum, m) => sum + m.creditos, 0);
    const totalCreditosCompleto = totalCreditos + (concentracionSeleccionada ? totalCreditosProfesional : 0);
    const progreso = Math.round((creditosObtenidos / totalCreditosCompleto) * 100);

    document.getElementById('completedCount').textContent = completadas.length;
    document.getElementById('availableCount').textContent = disponibles.length;
    document.getElementById('totalCredits').textContent = `${creditosObtenidos}/${totalCreditosCompleto}`;
    
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = `${progreso}%`;
    progressFill.textContent = `${progreso}%`;
}

// Función para alternar el estado de una materia
function alternarMateria(codigo) {
    const todasLasMaterias = Object.values(planData).flat();
    let todasLasMateriasProfesionales = [];
    
    if (concentracionSeleccionada && concentracionesData[concentracionSeleccionada]) {
        todasLasMateriasProfesionales = Object.values(concentracionesData[concentracionSeleccionada].materias).flat();
    }
    
    const todasLasMateriasCompletas = [...todasLasMaterias, ...todasLasMateriasProfesionales];
    const materia = todasLasMateriasCompletas.find(m => m.codigo === codigo);
    
    if (!materia) return;

    if (materiasCompletadas.has(codigo)) {
        materiasCompletadas.delete(codigo);
    } else if (estaDisponible(materia)) {
        materiasCompletadas.add(codigo);
    }

    renderizarPlanBasico();
    renderizarPlanProfesional();
    actualizarEstadisticas();
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
    const todosLosBotones = document.querySelectorAll('.boton-concentracion');
    const botonClickeado = event.target;

    // Si ya está seleccionado, lo deseleccionamos
    if (botonClickeado.classList.contains('selected')) {
        botonClickeado.classList.remove('selected');
        concentracionSeleccionada = null;
        renderizarPlanProfesional();
        actualizarEstadisticas();
        return;
    }

    // Si no estaba seleccionado, removemos la clase de los demás y lo marcamos
    todosLosBotones.forEach(boton => {
        boton.classList.remove('selected');
    });

    botonClickeado.classList.add('selected');
    concentracionSeleccionada = tipo;
    
    // Renderizar las materias de la concentración seleccionada
    renderizarPlanProfesional();
    actualizarEstadisticas();
}

// Inicializar la aplicación
function inicializarApp() {
    renderizarPlanBasico();
    renderizarPlanProfesional();
    actualizarEstadisticas();
}

// Inicializar
inicializarApp();