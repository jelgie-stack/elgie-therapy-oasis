import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactModalProvider } from "@/components/ContactModalProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChildTherapistParkCity from "./pages/ChildTherapistParkCity";
import TeenTherapistParkCity from "./pages/TeenTherapistParkCity";
import EMDRTherapistParkCity from "./pages/EMDRTherapistParkCity";
import AnxietyDepressionParkCity from "./pages/AnxietyDepressionParkCity";
import ADHDTherapyParkCity from "./pages/ADHDTherapyParkCity";
import ParentCoachingParkCity from "./pages/ParentCoachingParkCity";
import InsuranceFees from "./pages/InsuranceFees";
import AnxietyTherapyParkCity from "./pages/AnxietyTherapyParkCity";
import SupervisionConsulting from "./pages/SupervisionConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ContactModalProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/child-therapist-park-city" element={<ChildTherapistParkCity />} />
            <Route path="/teen-therapist-park-city" element={<TeenTherapistParkCity />} />
            <Route path="/emdr-therapist-park-city" element={<EMDRTherapistParkCity />} />
            <Route path="/anxiety-depression-therapy-park-city" element={<AnxietyDepressionParkCity />} />
            <Route path="/adhd-therapy-park-city" element={<ADHDTherapyParkCity />} />
            <Route path="/parent-coaching-park-city" element={<ParentCoachingParkCity />} />
            <Route path="/insurance-fees" element={<InsuranceFees />} />
            <Route path="/anxiety-therapy-park-city" element={<AnxietyTherapyParkCity />} />
            <Route path="/supervision-consulting" element={<SupervisionConsulting />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContactModalProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
