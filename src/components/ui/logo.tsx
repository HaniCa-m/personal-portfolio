import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className ?? ""}`}
      aria-label="Hani Maleki"
    >
      <Image
        src="/images/logo.png"
        alt="Hani Maleki Logo"
        width={42}
        height={42}
        priority
        className="h-26 w-26 object-contain"
      />

      <h1 className="hidden sm:flex flex-col leading-none">
        <span className="text-xl font-semibold tracking-wide">
          Hani
        </span>

        <span className="text-md text-muted-foreground">
          Maleki
        </span>
      </h1>
    </Link>
  );
}