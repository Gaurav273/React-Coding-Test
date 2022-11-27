import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { addAsyncUsers } from "../redux/slice/users";

const MyForm = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };

  const handleSubmit = async () => {
    if (!user.email || !user.first_name || !user.last_name) {
      return;
    }

    dispatch(addAsyncUsers(user));

    dispatch(
      setUserSlice({
        email: "",
        first_name: "",
        last_name: "",
      })
    );
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <h2 style={{ margin: "20px" }}>Add User</h2>
      <TextValidator
        style={{ margin: "10px", width: "95%" }}
        label="Email"
        onChange={handleChange("email")}
        name="email"
        value={user.email}
        validators={["required", "isEmail"]}
        errorMessages={["this field is required", "email is not valid"]}
      />

      <TextValidator
        style={{ margin: "10px", width: "95%" }}
        label="first_name"
        onChange={handleChange("first_name")}
        name="first_name"
        value={user.first_name}
        validators={["required"]}
        errorMessages={["this field is required"]}
      />

      <TextValidator
        style={{ margin: "10px", width: "95%" }}
        label="Lastname"
        onChange={handleChange("last_name")}
        name="last_name"
        value={user.last_name}
        validators={["required"]}
        errorMessages={["this field is required"]}
      />

      <Button
        disabled={!user.email || !user.first_name || !user.last_name}
        color="primary"
        variant="contained"
        type="submit"
        style={{ margin: "10px", width: "50%" }}
      >
        submit
      </Button>
    </ValidatorForm>
  );
};
export default MyForm;
