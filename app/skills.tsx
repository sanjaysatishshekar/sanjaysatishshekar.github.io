import data from "./Skills_data";

export default async function Skills() {
  return (
    <section className="section skills">
      <div className="section__title">Skills</div>
      <div className="section__content">
        <div className="skillz">
          <div className="skillz__category">
            <div className="skillz__category__label">Languages</div>
            <ul>
              {data.languages.map((language: string) => (
                <li className="skillz__category__item" key={language}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Framework</div>
            <ul>
              {data.frameworks.map((framework: string) => (
                <li className="skillz__category__item" key={framework}>{framework}</li>
              ))}
            </ul>
          </div>
          <div className="skillz__category">
            <div className="skillz__category__label">Databases</div>
            <ul>
              {data.databases.map((tool: string) => (
                <li className="skillz__category__item" key={tool}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="skillz__category">
            <div className="skillz__category__label">Others</div>
            <ul>
              {data.others.map((other: string) => (
                <li className="skillz__category__item" key={other}>{other}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
