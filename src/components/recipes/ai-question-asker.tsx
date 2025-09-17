'use client';

import { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { askRecipeQuestionAction } from '@/app/actions';
import type { Recipe } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface AIQuestionAskerProps {
  recipe: Recipe;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default function AIQuestionAsker({ recipe }: AIQuestionAskerProps) {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAskQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: question };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setQuestion('');

    const result = await askRecipeQuestionAction(recipe, question);
    setIsLoading(false);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: result.error,
      });
      setMessages(prev => prev.slice(0, prev.length -1)); // Remove user message on error
    } else if (result.answer) {
      const aiMessage: Message = { sender: 'ai', text: result.answer };
      setMessages(prev => [...prev, aiMessage]);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 font-headline text-2xl text-primary">
          <Sparkles />
          Tire suas dúvidas com IA
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-64 overflow-y-auto pr-4 space-y-4 flex flex-col">
            {messages.length === 0 && (
                <div className="flex-grow flex items-center justify-center">
                    <p className="text-muted-foreground">Faça uma pergunta sobre esta receita. Por exemplo: "Posso substituir o leite por uma alternativa vegetal?"</p>
                </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'ai' && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Sparkles className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div className={`p-3 rounded-lg max-w-md ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
             {isLoading && (
                <div className="flex items-start gap-3">
                   <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Sparkles className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-lg bg-muted flex items-center">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <span className="ml-2 text-sm text-muted-foreground">Pensando...</span>
                  </div>
                </div>
            )}
          </div>

          <form onSubmit={handleAskQuestion} className="flex items-center gap-2 pt-4 border-t">
            <Input
              type="text"
              placeholder="Qual a sua dúvida sobre a receita?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              disabled={isLoading}
              className="flex-grow"
            />
            <Button type="submit" disabled={isLoading || !question.trim()}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Enviar
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
