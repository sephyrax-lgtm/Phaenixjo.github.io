'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';

// Root
export const Tabs = TabsPrimitive.Root;

// Liste d'onglets (sidebar)
export const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={clsx(
      'flex flex-col gap-3 w-56 p-4 bg-[#121212] rounded-xl shadow-lg border border-[#1f1f1f]',
      className
    )}
    {...props}
  />
);

// Bouton onglet
export const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={clsx(
      // Style par défaut
      'rounded-md px-4 py-3 text-left text-sm font-mono font-semibold text-gray-300 bg-[#1a1a1a]',
      'hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer',
      // État actif
      'data-[state=active]:bg-green-400 data-[state=active]:text-black data-[state=active]:shadow-[0_0_12px_#00ff90]',
      className
    )}
    {...props}
  />
);

// Contenu
export const TabsContent = ({ className, ...props }) => (
  <TabsPrimitive.Content
    className={clsx(
      'w-full bg-[#121212] text-gray-200 p-6 rounded-xl shadow-lg font-mono leading-relaxed',
      className
    )}
    {...props}
  />
);
