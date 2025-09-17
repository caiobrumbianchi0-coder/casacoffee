'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Heart, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDebouncedCallback } from 'use-debounce';

export default function Header() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-headline text-primary">
            CasaCoffee
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {pathname === '/' && (
               <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar receita..."
                  className="pl-9"
                  onChange={(e) => handleSearch(e.target.value)}
                  defaultValue={searchParams.get('q')?.toString()}
                />
              </div>
            )}
            <Link href="/favorites" passHref>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5 text-primary" />
                <span className="sr-only">Minhas Receitas Favoritas</span>
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
