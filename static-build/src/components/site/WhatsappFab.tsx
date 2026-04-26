import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5514998040911?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20an%C3%A1lise%20sobre%20ITBI%20pago%20a%20maior%20em%20S%C3%A3o%20Paulo";

export function WhatsappFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com advogado pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.62_0.18_148)] text-white shadow-[0_10px_30px_-8px_oklch(0.62_0.18_148/0.55)] transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.7_0.18_148)] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[oklch(0.7_0.18_148)]" />
      </span>
    </a>
  );
}

export { WHATSAPP_URL };