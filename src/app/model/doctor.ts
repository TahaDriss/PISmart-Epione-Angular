import {Speciality} from './speciality';
import {Profile} from './profile';


export class Doctor {
    id: number;
    username: string;
    email: string;
    speciality_id: number;
    registered_at: string;
    last_login: string;
    confirmed: boolean;
    role: string;
    password: string;
    profile: Profile;
    presentation: string;
    name: string;
    image: string;
    latitude: string;
    longitude: string;
    address: string;
    city: string;
    nbreRPPS: string;
    statuts: string;
    nbreInscriptionOrdre: string;
    nbreRCS: string;
    memberAGA?: any;
    formeJuridique: string;
    adresseSocialSiege: string;
    socialReason: string;
    speciality: Speciality;

  constructor() {
  }
}


