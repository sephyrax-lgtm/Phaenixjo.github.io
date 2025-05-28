'use client';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx } from 'clsx';

export const Tabs = TabsPrimitive.Root;

export const TabsList = ({ className, ...props }) => (
  <TabsPrimitive.List
    className={clsx(
      'flex flex-col gap-2 w-52 p-2 bg-[#1a1a1a] rounded-lg',
      className
    )}
    {...props}
  />
);

export const TabsTrigger = ({ className, ...props }) => (
  <TabsPrimitive.Trigger
    className={clsx(
      'rounded-md px-4 py-3 text-left text-sm font-mono font-bold text-gray-300 bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-colors duration-300',
      'data-[state=active]:bg-[#00ff90] data-[state=active]:text-black data-[state=active]:shadow-[0_0_10px_#00ff90]',
      className
    )}
    {...props}
  />
);

export const TabsContent = ({ className, ...props }) => (
  <TabsPrimitive.Content
    className={clsx(
      'w-full bg-[#1e1e1e] text-white p-6 rounded-lg font-mono',
      className
    )}
    {...props}
  />
);
