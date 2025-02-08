import "./TabForms.styles.css";
const TabForms = ({ containerProps, containerMethods }) => {
  const { navigation_list, currentTab, data, interest_list, errors } =
    containerProps;
  const {
    setCurrentTab,
    handleCurrentTabChange,
    setData,
    setErrors,
    handleSubmit,
    handlePrevNextButtonClick,
  } = containerMethods;
  const ActiveTabComponent = navigation_list?.[currentTab].component;
  return (
    <div className="tabforms-main-container">
      <h3>zepto Tab Form Creation</h3>
      <div className="tab-box-container">
        <div className="tab-box-navigation-container">
          {navigation_list?.map((item, index) => (
            <div
              className="tab-header"
              key={index}
              onClick={() => {
                handleCurrentTabChange(index);
              }}
            >
              {item?.tabName}
            </div>
          ))}
        </div>
        <div className="current-tab-content">
          {
            <ActiveTabComponent
              data={data}
              setData={setData}
              interest_list={interest_list}
              errors={errors}
              setErrors={setErrors}
            />
          }
        </div>
        <div className="submit-btn">
          {currentTab !== 0 && (
            <button
              className="prev-btn"
              onClick={() => {
                handlePrevNextButtonClick(-1);
              }}
            >
              prev
            </button>
          )}
          {currentTab !== navigation_list?.length - 1 && (
            <button
              className="prev-nxt"
              onClick={() => {
                handlePrevNextButtonClick(+1);
              }}
            >
              Next
            </button>
          )}
          {currentTab === navigation_list?.length - 1 && (
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default TabForms;
