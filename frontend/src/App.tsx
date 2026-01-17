import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ResumeProvider } from "@/contexts/ResumeContext";
import { SavedJobsProvider } from "@/contexts/SavedJobsContext";
import Index from "./pages/Index";
import Upload from "./pages/Upload";
import Verify from "./pages/Verify";
import GapAnalysis from "./pages/GapAnalysis";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ResumeProvider>
        <SavedJobsProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/gap-analysis" element={<GapAnalysis />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </SavedJobsProvider>
      </ResumeProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
