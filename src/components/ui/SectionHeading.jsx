export function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="ns-label">{eyebrow}</p>
      <h2 className="ns-heading mt-3 text-3xl leading-none sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="ns-copy mt-4 max-w-2xl">{copy}</p> : null}
    </div>
  );
}
