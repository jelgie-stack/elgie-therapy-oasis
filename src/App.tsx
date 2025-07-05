import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChildTherapistParkCity from "./pages/ChildTherapistParkCity";
import TeenTherapistParkCity from "./pages/TeenTherapistParkCity";
import EMDRTherapistParkCity from "./pages/EMDRTherapistParkCity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/child-therapist-park-city" element={<ChildTherapistParkCity />} />
          <Route path="/teen-therapist-park-city" element={<TeenTherapistParkCity />} />
          <Route path="/emdr-therapist-park-city" element={<EMDRTherapistParkCity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
