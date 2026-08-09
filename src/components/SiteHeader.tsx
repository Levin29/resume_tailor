import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-[17px] font-semibold tracking-tight text-foreground">
          {portfolio.name.split(" ")[0]}
        </Link>

        <nav className="flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
