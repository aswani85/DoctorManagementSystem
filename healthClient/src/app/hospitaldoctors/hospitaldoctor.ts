import { Hospital } from "../hospitals/hospital";
import { Doctor } from "../doctors/doctor";

export class Hospitaldoctor {
  public hospitalId: number;
  public doctorId: number;
  public contractStartDate: Date;
  public contractEndDate: Date;
  public position: string;
  public supervisor: string;
  public partTime: boolean;
  public hospital: Hospital;
  public doctor: Doctor;
}
