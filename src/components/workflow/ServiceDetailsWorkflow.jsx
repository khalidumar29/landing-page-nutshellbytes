const ServiceDetailsWorkflow = ({ data }) => {
  const workflowSteps = data?.steps || [];

  return (
    <>
      <section className='workflow__area-6'>
        <div className='container g-0 line pb-130'>
          <div className='line-3'></div>
          <div className='workflow__wrapper-6'>
            <div className='row'>
              {/* First column shows workflow title and description */}
              <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'>
                <div className='workflow__slide-6'>
                  <h6 className='workflow__title-6'>
                    {data?.title?.split(" ").slice(0, 2).join(" ")} <br />
                    {data?.title?.split(" ").slice(2).join(" ")}
                  </h6>
                  <p>{data?.description}</p>
                </div>
              </div>

              {/* Map through workflow steps */}
              {workflowSteps.slice(0, 3).map((step, index) => (
                <div
                  key={index}
                  className='col-xxl-3 col-xl-3 col-lg-3 col-md-3'
                >
                  <div className='workflow__slide-6'>
                    <h6 className='workflow__title-6'>
                      {step.title?.split(" ").slice(0, 2).join(" ")} <br />
                      {step.title?.split(" ").slice(2).join(" ")}
                    </h6>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsWorkflow;
