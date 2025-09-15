'use client';

import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface FavoriteButtonProps {
  recipeId: string;
}

export default function FavoriteButton({ recipeId }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const favorited = isFavorite(recipeId);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipeId);
    toast({
      title: favorited ? 'Receita removida dos favoritos' : 'Receita adicionada aos favoritos!',
      duration: 2000,
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label={favorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      className="text-accent hover:text-accent/80"
    >
      <Heart
        className={cn('h-6 w-6 transition-all', {
          'fill-current': favorited,
        })}
      />
    </Button>
  );
}
