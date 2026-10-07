import { UserDAO } from "./UserDAO";
import { User } from "./User.ts";

const userDAO = new UserDAO();

userDAO.addUser(new User(1, "AJ Dawg", 50, true));
userDAO.addUser(new User(2, "Lil Wack", 20, true));

console.log(userDAO.canRedeem(50));

