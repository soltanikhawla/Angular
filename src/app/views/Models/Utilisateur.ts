import { MRole } from "./Role";

export class MUtilisateur {
    id: number;
    firstName: string;
    lastName: string;
    tel: number;
    login: string;
    password: string;
    matricule: number;
    code: string;
    disponible: boolean;
    role: MRole;

  }
