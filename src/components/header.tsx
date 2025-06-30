import { Phone } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/30 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-primary"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M12 11.15a2.85 2.85 0 00-2.85 2.85A2.85 2.85 0 0012 16.85a2.85 2.85 0 002.85-2.85A2.85 2.85 0 0012 11.15z" />
            </svg>
            <h1 className="text-2xl font-bold text-foreground">
              <span className="font-light">Naser</span><span className="text-primary">Encuentra</span>
            </h1>
          </Link>

          <div className="flex items-center gap-4">
             <Link href="/admin">
              <Button variant="ghost" size="sm">Admin</Button>
            </Link>
            <Button asChild className="bg-destructive/80 hover:bg-destructive text-destructive-foreground">
              <a href="tel:+525555555555">
                <Phone className="mr-2 h-4 w-4 animate-pulse" />
                Emergencias 24h
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
