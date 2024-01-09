// En el archivo 'Rectangle.js'
import React, { useEffect, useState } from 'react';
import svg from '../../assets/svg/Rectangle.svg';
import '../../assets/styles/Rectangle.css';

function Rectangle() {
  // * Establecer valores iniciales según el rango proporcionado
  const [isWidth, setWidth] = useState(window.innerWidth < 1300 ? 190 : window.innerWidth > 1700 ? 10 : window.innerWidth / 100);
  const [isHeight, setHeight] = useState(window.innerWidth < 1300 ? 190 : window.innerWidth > 1700 ? 10 : window.innerWidth / 100);

  // TODO: Agregar efecto para actualizar Width y Height en respuesta al cambio en el viewport
  useEffect(() => {
    const handleResize = () => {
      // Obtener el ancho actual de la pantalla
      const currentWidth = window.innerWidth;

      // TODO: Ajustar lógica para actualizar isWidth e isHeight según el rango proporcionado
      setWidth(
        currentWidth < 1300
          ? 190
          : currentWidth > 1700
          ? 10
          : currentWidth / 100
      );
      setHeight(
        currentWidth < 1300
          ? 190
          : currentWidth > 1700
          ? 10
          : currentWidth / 100
      );

      // TODO: Agregar un Log cuando los valores de isWidth e isHeight cambien
      console.log(`Width: ${isWidth}, Height: ${isHeight}`);
    };

    // Suscribirse al evento de cambio en el tamaño de la pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar la suscripción al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isWidth, isHeight]);
  return (
    <>


      <div className='flex items-center justify-center bg-purple-800 w-full h-auto'>
        <svg width="353" height="323" viewBox="0 0 305 275" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_b_1_1889)">
            <path d="M137.5 275H197.124C223.052 275 236.016 275 246.622 272.023C273.487 264.481 294.481 243.487 302.023 216.622C305 206.016 305 193.052 305 167.124V108.305C305 81.2114 283.036 59.2475 255.942 59.2475H236.508C220.147 59.2475 206.884 45.9845 206.884 29.6237C206.884 13.263 193.621 0 177.26 0H103.442C81.6497 0 70.7535 0 61.7507 2.10928C32.1535 9.04372 9.04374 32.1535 2.1093 61.7507C1.83172e-05 70.7534 1.734e-05 81.6497 1.53856e-05 103.442L1.23313e-05 137.5C7.5064e-06 191.3 5.09397e-06 218.199 12.4117 237.8C18.7403 247.794 27.2063 256.26 37.2002 262.588C56.8004 275 83.7003 275 137.5 275Z" fill="white" />
          </g>
          <defs>
            <filter id="filter0_b_1_1889" x="-24" y="-24" width="353" height="323" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_1889" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_1889" result="shape" />
            </filter>
          </defs>
          <foreignObject width="100%" height="100%">

            <h1 className='bg-red-800 text-xl rounded-lg flex ' style={{ position: 'absolute', top: 100, left: 10, text: '2xl', fontWeight: 'bold', color: 'blue-500' }}>Your Heading Here</h1>
          </foreignObject>

        </svg>

      </div>
    </>
  );
}

export default Rectangle;
