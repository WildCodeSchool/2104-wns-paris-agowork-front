export type UserType = {
  id?: string;
  firstname: string;
  lastname: string;
  town: string;
  picture: string;
  email: string;
  role: string;
  mood: string;
  campus: any;
};

export type GetUsersType = {
  getAllUsers: UserType[];
};

export const roles = [
  {
    name: "STUDENT",
  },
  {
    name: "TEACHER",
  },
  {
    name: "ADMIN",
  },
];
