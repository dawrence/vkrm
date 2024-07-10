import Image from "next/image";
import Link from "next/link";

export function LogoDashboard() {
  return (
    <Link
      href="/"
      className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6"
    >
      <Image src="/viking.png" alt="Logo" width={80} height={80} priority />
      <h1 className="text-xl font-bold">VikingList</h1>
    </Link>
  );
}