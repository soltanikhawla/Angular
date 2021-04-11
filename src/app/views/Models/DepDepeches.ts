import { MAnomalie } from "./Anomalie";
import {MUtilisateur} from "./Utilisateur";
import { MStation } from "./Station";
import { MServices } from "./Services";
import { MEtatDepeche } from "./EtatDepeche";
import { MTypeDepeche} from "./TypeDepeche";
export class MDepDepeches{
    id:number;
    numéro:number;
    reparageDescription:string;
    heureDate:Date;
    anomalie:MAnomalie;
    utilisateur:MUtilisateur;
    station:MStation;
    services:MServices;
    etatDepeche:MEtatDepeche;
    typeDepeche:MTypeDepeche;
}