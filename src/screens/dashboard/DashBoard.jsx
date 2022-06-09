import { useNavigate } from "react-router-dom";
import { useDogsProfilesContext } from "../../providers/dogsProfile/dogProfile.provider";
import "./styles/dashboard.styles.css";

export const DashBoard = () => {
  const { state, setdogsProfiles } = useDogsProfilesContext();

  const navigate = useNavigate();

  return (
    <section className="dashboard-section">
      <h1></h1>
      <div className="dog-list">
        {state.dogsProfiles.map((dog) => (
          <div className="dog-card-home">
            <div
              onClick={() => {
                navigate("/dog-profile/" + dog.name);
              }}
              style={{ backgroundImage: `url(${dog.url})` }}
            ></div>
            <h1 className="dog-name">{dog.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};
