'use client';

import { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { getAITipAction } from '@/app/actions';
import type { Recipe } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface AITipGeneratorProps {
  recipe: Recipe;
}

export default function AITipGenerator({ recipe }: AITipGeneratorProps) {
  const [tip, setTip] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleGenerateTip = async () => {
    setIsLoading(true);
    setTip('');
    const result = await getAITipAction(recipe);
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: result.error,
      });
      setIsOpen(false);
    } else if (result.tip) {
      setTip(result.tip);
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full md:w-auto">
          <Wand2 className="mr-2 h-4 w-4" />
          Gerar Dica com IA
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2 font-headline">
            <Wand2 className="text-primary" />
            Dica do Chef
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-4">Gerando uma dica para você...</span>
              </div>
            ) : (
              tip || 'Clique no botão para gerar uma dica para esta receita.'
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {isLoading ? null : tip ? (
             <AlertDialogAction>Fechar</AlertDialogAction>
          ) : (
            <>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancelar</Button>
              <Button onClick={handleGenerateTip} disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Gerar Dica
              </Button>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
