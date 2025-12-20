import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { servicesData } from "@/lib/servicesData";
import ServiceDetail from "@/components/ServiceDetail";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Scroll to top when service page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [serviceId]);

  // Map route paths to service IDs
  const routeToIdMap: Record<string, string> = {
    "media-production": "media-prod",
    "youtube-architecture": "youtube",
    "wedding-cinema": "wedding",
    "instant-reels": "reels",
    "social-engine": "content",
    "cinematic-commercials": "cinematic",
    "podcast-production": "podcast",
    "event-experience": "events",
    "brand-partnerships": "brand-collab",
    "creative-labs": "creative-collab",
  };

  const serviceIdFromRoute = serviceId ? routeToIdMap[serviceId] : null;
  const service = servicesData.find((s) => s.id === serviceIdFromRoute);

  if (!service) {
    return (
      <div className="bg-[#050505] text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate("/services")}
            className="text-yellow-500 hover:text-yellow-400"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate("/services")}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full text-white hover:bg-black/60 hover:border-yellow-500/50 transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-sm font-medium">Back to Services</span>
      </motion.button>

      <ServiceDetail
        title={service.title}
        tag={service.tag}
        description={service.description}
        longDescription={service.longDescription}
        heroImage={service.heroImage}
        sampleWorks={service.sampleWorks}
        features={service.features}
        pricing={service.pricing}
        iconComponent={service.iconComponent}
      />
    </div>
  );
};

export default ServiceDetailPage;

