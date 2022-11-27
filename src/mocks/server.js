import { userhandler } from "./handlers/user";
import { setupServer } from "msw/node";

export const server = setupServer(...userhandler);
