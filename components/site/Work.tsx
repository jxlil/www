import { WORK } from "@/lib/content";

export default function Work() {
  return (
    <div className="work section" id="work">
      <div className="section-title">Experience</div>

      {WORK.map((item) => (
        <div className="work-item" key={`${item.company}-${item.role}`}>
          <h5>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.role} →
              </a>
            ) : (
              item.role
            )}
          </h5>
          <p className="work-org">
            <span className="company">{item.company}</span>
            <span className="sep">·</span>
            <span className="modality">
              <span className="dot" aria-hidden="true" />
              {item.modality}
            </span>
            <span className="sep">·</span>
            <span className="period">{item.period}</span>
          </p>
          {item.description ? (
            <p className="work-desc">{item.description}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
