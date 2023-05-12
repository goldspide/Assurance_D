import { agent } from "./agent";
import { companie } from "./conpanie";

export class client{
  public id!:String;
  public nom!:String;
  public prenom!:String;
  public age!:String;
  public telephone!:String;
  public email!:String;
  public id_doc!:companie;
  public id_agent!:agent;
}
