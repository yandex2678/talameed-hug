import mathPattern from "@/assets/math-pattern.jpg.asset.json";

/**
 * Fond subtil "à la Padlet" pour les pages déconnectées :
 * motifs mathématiques en tuiles, très estompés, voile clair par-dessus.
 */
export function PublicBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-canvas">
      <div
        className="absolute -inset-8 opacity-[0.05]"
        style={{
          backgroundImage: `url("${mathPattern.url}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "520px auto",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-canvas/60 via-canvas/80 to-canvas" />
    </div>
  );
}
