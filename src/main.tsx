import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { registerSW } from 'virtual:pwa-register';
import { toast } from "sonner";

// Register service worker for PWA
const updateSW = registerSW({
  onNeedRefresh() {
    toast("New content available", {
      description: "Click refresh to update the app.",
      action: {
        label: "Refresh",
        onClick: () => updateSW(true),
      },
    });
  },
  onOfflineReady() {
    toast.success("App is ready to work offline");
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <App />
  </ThemeProvider>
);