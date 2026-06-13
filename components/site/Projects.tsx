import { PROJECTS } from "@/lib/content";

export default function Projects() {
  return (
    <div className="work section" id="projects">
      <div className="section-title">Projects</div>

      {PROJECTS.map((project) => (
        <div className="work-item" key={project.title}>
          <h5>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title} →
              </a>
            ) : (
              project.title
            )}
          </h5>
          <p>{project.description}</p>
          {project.tags.length > 0 && (
            <p className="tags">{project.tags.join(" · ")}</p>
          )}
        </div>
      ))}
    </div>
  );
}
