import { createContext } from "react";

const usersContext = createContext({
  users: {
    name: "dummy Name",
    emial: "dummy email",
  },
});

export default usersContext;
