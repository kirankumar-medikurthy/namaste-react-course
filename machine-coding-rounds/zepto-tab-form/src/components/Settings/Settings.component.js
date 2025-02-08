const Settings = ({ data, setData, errors }) => {
  const handleThemeChange = (e) => {
    setData((prev) => {
      return {
        ...prev,
        theme: e.target.name,
      };
    });
  };
  return (
    <div className="interest-container">
      {[
        { label: "Dark", name: "dark" },
        { label: "Light", name: "light" },
      ]?.map((item, index) => {
        return (
          <div className="interest-content-box" key={index}>
            <label>{item.label}</label>
            <input
              type="radio"
              name={item.name}
              checked={data.theme.includes(item.name)}
              onChange={(e) => handleThemeChange(e)}
            />
          </div>
        );
      })}
      {errors?.settings && (
        <div
          style={{
            color: "red",
          }}
        >
          {errors.settings}
        </div>
      )}
    </div>
  );
};

export default Settings;
