import PatientListState from './PatientListState';

export class RootStore {
    patientListState: PatientListState;

    constructor() {
        this.patientListState = new PatientListState(this);
    }
}

export const Store = new RootStore();
