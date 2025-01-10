import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 min-h-[800px]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mt-[80px]">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
              58th IChO International Chemistry Olympiad
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/flag.jpg"
                alt="Uzbekistan Flag"
                width={80}
                height={60}
                className="rounded"
              />
              <div>
                <p className="text-xl font-semibold">Tashkent, Uzbekistan</p>
                <p className="text-lg text-gray-600">10-20 July, 2026</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/main.jpg"
                  alt="Chemistry Molecule"
                  className="opacity-80 rounded"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
