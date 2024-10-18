import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-red-700 text-white shadow-lg ">
      <div className="flex items-center justify-between container mx-auto px-4 py-4">
        <Link href="/" className="text-3xl font-bold">
          MetaDota
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/dota_patches" className="hover:text-gray-200">
            Patches
          </Link>
          <Link href="/dota_guides" className="hover:text-gray-200">
            Guides
          </Link>
          <Link href="/dota_heroes" className="hover:text-gray-200">
            Heroes
          </Link>
          <Link href="/about_us" className="hover:text-gray-200">
            About
          </Link>
          <Link href="/sign_in" className="hover:text-gray-200">
            Sign In
          </Link>
          <Link href="/sign_up" className="hover:text-gray-200">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};
