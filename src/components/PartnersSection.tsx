const partners = [
  "Pinheiro", "RDO", "WOA", "Dimas", "W Koerich", "GND"
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-muted border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-widest font-medium">
          Parceiros e Clientes
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-xl font-bold text-muted-foreground/40 hover:text-foreground/60 transition-colors tracking-wide"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
