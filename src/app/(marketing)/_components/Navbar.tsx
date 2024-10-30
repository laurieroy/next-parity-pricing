import BrandLogo from "@/components/ui/BrandLogo";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex py-6 shadow-lg fixed top-0 w-full z-10 bg-background/95">
      <nav className="flex container items-center font-semibold gap-10">
        <BrandLogo />
        <Link href="/" className="mr-auto" />
        <Link href="#" className="text-lg">
          Features
        </Link>
        <Link href="/#pricing" className="text-lg">
          Pricing
        </Link>
        <Link href="#" className="text-lg">
          About
        </Link>
      </nav>
      <span className="text-lg">
        <SignedIn>
          <Link href="/dashboard" className="text-lg">
            Dashboard
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton>Login</SignInButton>
        </SignedOut>
      </span>
    </header>
  );
}
