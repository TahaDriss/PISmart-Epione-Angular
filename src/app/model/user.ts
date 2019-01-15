import {Profile} from './profile';

export class User {
    id: number;
    username: string;
    email: string;
    registered_at: string;
    last_login: string;
    confirmed: boolean;
    role: string;
    password: string;
    profile: Profile;
    social_number: number;

  constructor() {
  }
}




