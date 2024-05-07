import React, { useEffect, useState } from 'react'
import './App.css'
import ComponentsOne from './Components/ComponentsOne';
import imagen1 from '../src/Components/img/descarga.jpg'
import imagen2 from '../src/Components/img/descarga3.jpg'
import imagen3 from '../src/Components/img/descarga2.jpg'

function App() {

  const arreglo = [
      {
        id: 1,
        nombre:'Sophia Wang',
        pais:'Singapur',
        imagen:imagen3,
        cargo:'Ingeniera de Software',
        empresa:'Amazon',
        testimonio:'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
      },
      {
        id: 2,
        nombre:'Sarah Chima',
            pais:'Nigeria',
           imagen:imagen2,
            cargo:'Ingeniera de Software',
            empresa:'ChatDesk',
            testimonio:'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
      },
      {
        id: 3,
        nombre:'Emma Bostian',
            pais:'Suecia',
            imagen:imagen1,
            cargo:'Ingeniera de Software',
            empresa:'Spotify',
            testimonio:'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'

      }
    ]

  return (
    <>
      <div class="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          {arreglo.map((arreglo) => {
            return <ComponentsOne key={arreglo.id} nombre={arreglo.nombre} pais={arreglo.pais} imagen={arreglo.imagen} cargo={arreglo.cargo} empresa={arreglo.empresa} testimonio={arreglo.testimonio}/> 
          })
          }
        </div>
      </div>
    </>
  )
}
  


export default App;