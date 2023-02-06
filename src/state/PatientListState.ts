import * as State from './Root';

import { action, makeAutoObservable, observable } from 'mobx';
import * as Patient from '../server/Patient';

class PatientListState {
  private rootStore: State.RootStore;

  constructor(rootStore: State.RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @observable
  public patients: Patient.Models.Patient[] = Patient.Data.samplePatientData;

  @observable
  public sortOption = '';

  @action
  public setPatients = (patients: Patient.Models.Patient[]) => {
    this.patients = patients;
  };

  @action
  public updatePatients(id: number, patient: Patient.Models.Patient) {
    const foundIndex = this.patients.findIndex((patient) => patient.id === id);
    let foundPatient = this.patients[foundIndex];

    this.patients[foundIndex] = {
      ...foundPatient,
      uli: patient.uli,
      firstName: patient.firstName,
      lastName: patient.lastName,
      birthDate: patient.birthDate,
      height: patient.height,
      weight: patient.weight,
    };
  }

  @action
  public setSortOption(sortOption: string) {
    this.sortOption = sortOption;
  }
}

export default PatientListState;
