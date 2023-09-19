const ServiceDetailsWorkflow = ({sections}) => {
  // Vytvoříme pole skupin, kde každá skupina obsahuje až 4 položky
  const chunkedSections = [];
  for (let i = 0; i < sections?.length; i += 4) {
    chunkedSections.push(sections.slice(i, i + 4));
  }

  return (
    <>
      <section className="workflow__area-6">
        {chunkedSections.map(group => (
          <div className="container g-0 line pb-130" key={group[0].title}>
            <div className="line-3"></div>
            <div className="workflow__wrapper-6">
              <div className="row">
                {group.map((item, index) => (
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3" key={item.title + index}>
                    <div className="workflow__slide-6">
                      <h6 className="workflow__title-6">
                        {item.title}
                      </h6>
                      <p>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServiceDetailsWorkflow;
