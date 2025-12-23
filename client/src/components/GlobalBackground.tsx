import aiImg from "@assets/generated_images/glowing_neural_network_brain.png";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <img 
        src={aiImg} 
        alt="" 
        className="w-full h-full object-cover opacity-10"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
    </div>
  );
}
