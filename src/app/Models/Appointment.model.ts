import {User} from './User.model';

export interface Appointement {
  id: number;
  date_start: Date;
  date_end: Date;
  message: string;
  state: string;
  doctor: User;
  patient: User;
}
