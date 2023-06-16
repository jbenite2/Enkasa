import React from "react";
import Image from "next/image";
import "./page.css"

export default function Home() {
  return (
    <div className="landing-page">
      <div className="landing-page">
        <SectionOne />
        <SectionTwo />
    </div>
  </div>
  );
}
function SectionOne() {
  return (
    <div id="sectionOne" className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 style={{ textAlign: 'center', transitionTimingFunction: 'ease-in', transitionDuration: '5s', transitionDelay: '5s', color: 'black',  fontSize: '70px'}}>
        <strong>Products</strong>
      </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" className="group">
            <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
              <img
                src="/products/droplet-delight.jpg"
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Droplet Delight</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
          </a>
          <a href="#" className="group">
            <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
              <img
                src="/products/rooted-elegance.jpg"
                alt="Olive drab green insulated bottle with flared screw lid and flat top."
                className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Rooted Elegance</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$450</p>
          </a>
          <a href="#" className="group">
            <div className="aspect-w-1 w-[300px] overflow-hidden rounded-lg bg-gray-200">
              <img
                src="/products/spring-foliage.jpg"
                alt="Person using a pen to cross a task off a productivity paper card."
                className="h-[450px] w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Spring Foliage</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$200</p>
          </a>
        </div>
      </div>
    </div>
  );
}


function SectionTwo() {
  return (
    <div id="sectionTwo" className="team-section">
      <div className="team-member">
        <Image className="rounded-full w-96 h-96 object-cover" src="/JBS.png" width={600} height={500}></Image>
      </div>
      <p>José Benítez, cofundador de Ambienta, es un estudiante universitario de cuarto año en la Universidad de Notre Dame, donde se encuentra cursando su bachillerato en Ciencias de la Computación. Su apasionante interés por el mundo de los negocios, la ingeniería, las matemáticas y la resolución de problemas lo ha impulsado a embarcarse en un proyecto aún más ambicioso: la creación de una empresa que fusiona todas estas facetas y, sobre todo, se enfoca en satisfacer las necesidades artísticas de sus clientes.</p>
      <div>
        <Image className="rounded-full w-96 h-96 object-cover" src="/LBC.png" width={500} height={500}></Image>
      </div>
    </div>
  );
}