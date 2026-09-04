type Collaborator = {
  id: string;
  name: string;
};

const collaborators: Collaborator[] = [
  { id: "1", name: "Studio A" },
  { id: "2", name: "SaaS Co." },
  { id: "3", name: "Product Lab" },
  { id: "4", name: "Design House" },
];

export default function Collaborators() {
  return (
    <section
      id="collaborators"
      className="py-20 px-6 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-[12px] font-medium text-white/50 uppercase tracking-[0.1em] mb-4">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Selected Collaborators
          </h2>
        </div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {collaborators.map((collab) => (
            <div
              key={collab.id}
              className="p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center min-h-24"
            >
              <p className="text-center text-sm font-medium text-white/70">
                {collab.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
