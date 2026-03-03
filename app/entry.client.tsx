import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';

async function prepare() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./shared/mocks/browser/worker');
    await worker.start({ onUnhandledRequest: 'bypass' });
  }
}

prepare().then(() => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <HydratedRouter />
      </StrictMode>
    );
  });
});
