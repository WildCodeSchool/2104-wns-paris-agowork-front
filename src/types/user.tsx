export type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  town: string;
  picture: string;
  email: string;
  role: string;
  mood: string;
  campus: string;
};

export type GetUsersType = {
  getAllUsers: UserType[];
};
