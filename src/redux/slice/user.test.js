import reducer, { setUserSlice } from "./user";

const initialState = {
  email: "",
  first_name: "",
  last_name: "",
};

describe("user reducer", () => {
  beforeEach(() => {
    initialState.email = "";
    initialState.first_name = "null";
    initialState.last_name = "";
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      email: "",
      first_name: "",
      last_name: "",
    });
  });

  it("should add user with token and profile", () => {
    expect(
      reducer(
        initialState,
        setUserSlice({
          email: "guarav.wagh@gmail.com",
          first_name: "gaurav",
          last_name: "wagh",
        })
      )
    ).toEqual({
      email: "guarav.wagh@gmail.com",
      first_name: "gaurav",
      last_name: "wagh",
    });
  });
});
