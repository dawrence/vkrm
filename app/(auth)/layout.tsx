import Image from 'next/image'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="grid md:grid-cols-2 h-full items-center justify-center">
    <div className="flex items-center justify-center">{children}</div>
    <div className="flex lg:bg-slate-600 h-full justify-center items-center flex-col p-4">
      <Image src="/viking.png" alt="Logo VikingRoom" width="1000" height="1000" />
      <h1 className="text-xl font-bold">The viking room</h1>
    </div>
  </div>
  )
}
