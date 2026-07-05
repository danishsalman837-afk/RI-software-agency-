// Server component. Renders a structured-data script tag. Prerendered into the
// static HTML at build time so crawlers see it without JS.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
