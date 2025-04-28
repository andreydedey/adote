export type pet = {
  id: string;
  pet_name: string;
  description: string;
  city: string;
  state: string;
  phonenumber: string;
  user_id: string;
  race_id: number;
  tag_id: number;
};

export type race = {
  id: number,
  race: string,
}

export type tag = {
  id: number,
  status: string,
}
