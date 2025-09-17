'use server';

import type { Recipe } from '@/lib/types';

interface ActionResult {
  tip?: string;
  answer?: string;
  error?: string;
}
