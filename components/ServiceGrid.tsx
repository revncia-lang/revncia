import Link from "next/link";
import { offeringBySlug, offerings } from "@/lib/catalog";
import { serviceCatalog } from "@/lib/services";

type ServiceGridProps = {
  offerings?: typeof offerings;
};

export function ServiceGrid({ offerings: providedOfferings }: ServiceGridProps) {
  const catalogOfferings = providedOfferings ?? offerings;

  return (
    <section id="services" className="rv-section">
      <div className="rv-section-head">
        <span className="rv-kicker">REVNCIA SERVICE CATALOG</span>

        <h2>Technology services built around outcomes.</h2>

        <p>
          Browse the complete catalog interface and connect every service to
          the REVNCIA request, assessment, project and managed-service journey.
        </p>
      </div>

      <div className="rv-service-grid">
        {serviceCatalog.map((service) => {
          const offering =
            catalogOfferings.find((item) => item.slug === service.id) ??
            offeringBySlug(service.id);

          return (
            <article className="rv-service-card" key={service.id}>
              <div className="rv-icon">AI</div>

              <span className="rv-card-label">{service.category}</span>

              <h3 className="font-bold text-[#242424]">{service.name}</h3>

              <p>{service.description}</p>

              <div className="rv-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <Link href={`/services/${offering?.slug ?? service.id}`}>
                Explore service <span>-&gt;</span>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}