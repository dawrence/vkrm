import { dataFeatures } from "./Features.data";
import { Reveal } from "@/components/Shared/Reveal";

export function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:py-40 lg:px-8">
      <h3 className="text-2xl lg:text-6xl font-bold text-center sm:text-left">
        Características clave
      </h3>
      <p className="max-w-lg mt-5 lg:mt-10 lg:mb-16 text-xl text-center sm:text-left">
        Nos preocupamos por la conformidad y la seguridad de nuestros clientes.
        Es por eso que brindamos el mejor servicio que puedas imaginar.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {dataFeatures.map(({ icon: Icon, text, bg, delay }) => (
          <Reveal
            key={text}
            className="p-4 sm:p-6 rounded-xl hover:shadow-md flex flex-col items-center dark:bg-gray-800 dark:hover:bg-gray-700"
            position="right"
            delay={delay}
          >
            <div
              className={`rounded-full ${bg} w-fit p-3 sm:p-4 mb-4 flex justify-center dark:bg-gray-700`}
            >
              <Icon className="w-6 h-6 sm:w-8 sm:h-8 dark:text-white" />
            </div>
            <p className="font-bold text-center text-lg sm:text-xl dark:text-gray-300">
              {text}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
