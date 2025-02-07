const Profile = ({ data, setData, errors }) => {
  const handleFieldChange = (e, item) => {
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };
  console.log("error", errors);
  return (
    <div className="profile-main-container">
      <h2>Profile Section </h2>
      <div className="form-container">
        <div className="name-field">
          <label>Name : </label>
          <input
            type="text"
            placeholder="enter your name"
            value={data.name}
            onChange={(e) => handleFieldChange(e, "name")}
          />
          {errors.name && (
            <div
              style={{
                color: "red",
              }}
            >
              {errors.name}
            </div>
          )}
        </div>
        <div className="age-field">
          <label>Age : </label>
          <input
            type="number"
            placeholder="enter your age"
            value={data.age}
            onChange={(e) => handleFieldChange(e, "age")}
          />
          {errors.age && (
            <div
              style={{
                color: "red",
              }}
            >
              {errors.age}
            </div>
          )}
        </div>
        <div className="email-field">
          <label>Email ID : </label>
          <input
            type="email"
            placeholder="enter your email"
            value={data.email}
            onChange={(e) => handleFieldChange(e, "email")}
          />
          {errors.email && (
            <div
              style={{
                color: "red",
              }}
            >
              {errors.email}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
