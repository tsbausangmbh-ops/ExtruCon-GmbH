import { renderToString } from "react-dom/server";
import { Router as WouterRouter } from "wouter";
import staticLocationHook from "wouter/static-location";
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

  const html = renderToString(
    <WouterRouter hook={staticLocationHook(url)}>
      <AppShell client={queryClient}>
        <AppContent />
      </AppShell>
    </WouterRouter>
  );

  return { html };
}
