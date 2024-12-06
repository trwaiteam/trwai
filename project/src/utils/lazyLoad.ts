import { lazy } from 'react';

// Lazy load components with retry mechanism
export function lazyLoadComponent(factory: () => Promise<any>, retries = 3) {
  return lazy(async () => {
    let lastError: Error | null = null;
    
    for (let i = 0; i < retries; i++) {
      try {
        return await factory();
      } catch (err) {
        lastError = err as Error;
        await new Promise(resolve => setTimeout(resolve, 1500 * (i + 1)));
      }
    }
    
    throw lastError;
  });
}

// Preload component
export const preloadComponent = (factory: () => Promise<any>) => {
  const component = lazyLoadComponent(factory);
  component.preload?.();
  return component;
};