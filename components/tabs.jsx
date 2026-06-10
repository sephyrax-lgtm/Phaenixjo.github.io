'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';

// Root
export const Tabs = TabsPrimitive.Root;

// Liste d'onglets (sidebar)
export const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={clsx(
      'flex flex-row lg:flex-col gap-2 lg:gap-3 w-full lg:w-56 p-2 lg:p-4 bg-neutral-900/60 backdrop-blur-xl rounded-2xl border border-neutral-800 shadow-xl overflow-x-auto lg:overflow-visible no-scrollbar',
      className
    )}
    {...props}
  />
);

// Bouton onglet
export const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={clsx(
      // Style par défaut et responsive
      'relative min-w-[140px] sm:min-w-[150px] lg:min-w-0 text-center lg:text-left px-4 py-3 sm:py-3.5 rounded-xl text-sm font-mono font-semibold transition-all duration-300 flex items-center justify-center lg:justify-start cursor-pointer border-l-2 border-transparent text-neutral-400 hover:bg-white/5 hover:text-white',
      // État actif
      'data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-transparent data-[state=active]:text-green-400 data-[state=active]:border-green-400',
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
