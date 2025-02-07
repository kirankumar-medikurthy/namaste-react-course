const Interest = ({ data, setData, interest_list, errors }) => {
  const handleInterestChange = (e, item) => {
    setData((prev) => {
      return {
        ...prev,
        interest: e.target.checked
          ? [...prev.interest, e.target.name]
          : prev.interest.filter((item) => item !== e.target.name),
      };
    });
  };
  return (
    <div className="interest-container">
      {interest_list?.map((item, index) => {
        return (
          <div className="interest-content-box" key={index}>
            <label>{item.label}</label>
            <input
              type="checkbox"
              name={item.name}
              checked={data.interest.includes(item.name)}
              onChange={handleInterestChange}
            />
          </div>
        );
      })}
      {errors?.interest?.length == 0 && (
        <div
          style={{
            color: "red",
          }}
        >
          {errors.interest}
        </div>
      )}
    </div>
  );
};

export default Interest;
