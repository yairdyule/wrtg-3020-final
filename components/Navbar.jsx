import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center flex-wrap bg-gray-700 p-3 gap-4">
      <Link href="/defund">
        <a>
          <span className="text-xl text-blue-200">Defund</span>
        </a>
      </Link>

      <Link href="/">
        <a>
          <span className="text-2xl text-white fond-bold uppercase">
            Defund or not?
          </span>
        </a>
      </Link>
      <Link href="/dont">
        <a>
          <span className="text-xl text-red-500 hover:underline">Don't</span>
        </a>
      </Link>
    </nav>
  );
};
