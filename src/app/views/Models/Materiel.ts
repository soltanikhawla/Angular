import { MAnomalie } from "./Anomalie";
import { MEtatMateriel } from "./EtatMateriel";
import { MTypeMateriel } from "./TypeMateriel";

export class MMateriel {
    id: number;
    libelle: string;
    emplacement:string;
    numérotation:number;
    numéroSérie:number;
    anomalie:MAnomalie;
    typeMateriel:MTypeMateriel;
    etatMateriel:MEtatMateriel;
  }
