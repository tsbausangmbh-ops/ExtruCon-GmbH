import { renderToString } from "react-dom/server";
import { Router as WouterRouter } from "wouter";
import { memoryLocation } from "wouter/memory-location";
import { QueryClient } from "@tanstack/react-query";
import { AppShell, AppContent } from "./App";

export function render(url: string) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnWindowFocus: false,
      },
    },
  });

  const { hook } = memoryLocation({ path: url, static: true });

  const html = renderToString(
    <WouterRouter hook={hook}>
      <AppShell client={queryClient}>
        <AppContent />
      </AppShell>
    </WouterRouter>
  );

  return { html };
}
