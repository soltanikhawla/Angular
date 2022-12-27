import { MAnomalie } from "./Anomalie";
import {MUtilisateur} from "./Utilisateur";
import { MStation } from "./Station";
import { MServices } from "./Services";
import { MEtatDepeche } from "./EtatDepeche";
import { MTypeDepeche} from "./TypeDepeche";
import { Timestamp } from "rxjs";
import { MMateriel } from "./Materiel";
export class MDepDepeches{
    id:number;
    numero:number;
    reparageDescription:string;
    heure:String;
    dateCreation: number;
    emetteur: String;
    anomalie:MAnomalie;
    materiel:MMateriel;
    utilisateur:MUtilisateur;
    station:MStation;
    services:MServices;
    etatDepeche:MEtatDepeche;
    typeDepeche:MTypeDepeche;
}