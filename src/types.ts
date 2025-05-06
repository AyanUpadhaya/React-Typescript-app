//only difference between types and interface is user of  = sign

export interface Student {
  name: string;
  age: number;
  roll: number;
  subject: string;
}

export type Programmer = {
  name: string;
  languages: string[];
};

export enum UserResponse {
  No = 0,
  Yes = 1,
}
