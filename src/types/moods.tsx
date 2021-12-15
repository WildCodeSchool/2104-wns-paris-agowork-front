export type MoodType = {
  id: string;
  name: string;
  phone: string;
  address: string;
};

export type GetMoodsType = {
  getMoods: MoodType[];
};
