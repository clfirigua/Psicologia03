const question = [ 
    {
        texto: 'Nueva Pregunta',
        id:'pregunta',
        type: 'text',
        placeholder:'Nueva pregunta',
        required:true
    },
    {
        texto: 'Seleccione el tipo de respuesta a usar',
        id:'tpRespuesta',
        type: 'tpselect',
        placeholder:'Tipo de respuesta',
        required:true
    },
    {
        texto: 'Seleccione si depende de otra pregunta',
        id:'dPregunta',
        type: 'select',
        placeholder:'Listado de preguntas',
        required:false
    },
    {
        texto: 'Selecione de la respuesta que depende',
        id:'dRespuesta',
        type: 'select',
        placeholder:'Listado de respuestas',
        required:false
    },
    {
        texto: 'Ingrese el varemo correspondiente',
        id:'varemo',
        type: 'select',
        placeholder:'Varemo de medicion',
        required:true
    },
    {
        texto: 'Ingrese una respuesta',
        id:'respuesta',
        type: 'button',
        placeholder:'Respuesta',
        required:true
    },

]
export {
    question
}