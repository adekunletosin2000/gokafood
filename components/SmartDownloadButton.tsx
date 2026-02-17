"use client";

export default function SmartDownloadButton() {
  const handleDownload = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Check for iOS
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = "https://apps.apple.com/app/gokafood"; // Replace with real link
      return;
    }

    // Check for Android
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=gokafood"; // Replace with real link
      return;
    }

    // Fallback for Desktop: Scroll to the QR Code section
    const qrSection = document.getElementById("download-qr");
    qrSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button 
      onClick={handleDownload}
      className="w-full md:w-auto bg-goka-orange text-white px-10 py-5 rounded-2xl font-black text-xl shadow-premium hover:scale-[1.02] active:scale-95 transition-all"
    >
      INSTALL GOKAFOOD APP
    </button>
  );
}