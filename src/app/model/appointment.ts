
import {Doctor} from '../Models/Doctor';

  import DateTimeFormat = Intl.DateTimeFormat;

  export class Reason {
    id: number;
    name: string;

    constructor() {
    }
  }

  export class Patient {
    id: number;
    username: string;
    email: string;
    registered_at: string;
    last_login: string;
    confirmed: boolean;
    role: string;
    password: string;
    social_number: number;
  }

  export class Appointment {
    date_start: string;
    date_end?: DateTimeFormat;
    message: string;
    state: string;
    reason: Reason= new Reason();
    patient: Patient;
    doctor: Doctor=new Doctor();
    id: number;
    reason_id:number;
    doctor_id:number;
    patient_id:number;


    constructor() {
    }
  }



