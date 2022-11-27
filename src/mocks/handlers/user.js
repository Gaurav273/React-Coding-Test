import { existingUser } from "../data/user.mock";
import { rest } from "msw";

const BASE_URL = `https://reqres.in/api`;

export const addUserMock = rest.post(`${BASE_URL}/user`, (req, res, ctx) => {
  const result = {
    message: "User added successfully",
    user: existingUser,
  };
  return res(ctx.json(result));
});

export const userhandler = [addUserMock];
