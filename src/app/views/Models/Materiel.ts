import { MAnomalie } from "./Anomalie";
import { MEtatMateriel } from "./EtatMateriel";
import { MTypeMateriel } from "./TypeMateriel";

export class MMateriel {
    id: number;
    libelle: string;
    emplacement:string;
    numerotation:number;
    numeroSerie:number;
    miseEnPlace: string;
    typemateriel:MTypeMateriel;
    etatMateriel:MEtatMateriel;
  }
