import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { updateUserProfile } from "../../services";
import "../../css/editProfile.css";
import { EditPassword, EditUpdateProfile } from "../../components";

const EditProfile = () => {
  const { logout, user, updateUserAuth } = useContext(AuthContext);

  const [newProfile, setNewProfile] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    confirmpassword: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateProfile();
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProfile({
      ...newProfile,
      [name]: value,
    });
  };
  const updateProfile = async () => {
    try {
      const userUpdate = await updateUserProfile(user.id, newProfile);
      updateUserAuth(userUpdate);
      logout();
      alert("funciono");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleInputChangePassword = (e) => {
    const { name, value } = e.target;
    setValidatePass({ ...validatepass, [name]: value });
  };
  if (validatepass.contrasena === user.contrasena) {
    capturate.removeAttribute("disabled");
    capturatePro.removeAttribute("disabled");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="container-fluid fatherEditProfile"
      >
        <div className="containerEditProfile rounded-1">
          <div className="row">
            <div className="col-md-3 mt-5 mb-3"></div>
            <div className="col-md-9 bodyEditProfile pb-5">
              <div className="tab-content" id="v-pills-tabContent">
                <EditUpdateProfile
                  user={user}
                  newProfile={newProfile}
                  handleInputChange={handleInputChange}
                />
                <EditPassword handleInputChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditProfile;