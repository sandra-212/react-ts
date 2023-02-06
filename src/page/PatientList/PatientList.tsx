import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../index';
import * as Patient from '../../server/Patient';
import { dynamicsort } from '../../helpers';
import './PatientList.css';

enum Sort {
  IdAsc = 'Patient ID (Ascending)',
  FirstNameAsc = 'First Name (Ascending)',
  LastNameAsc = 'Last Name (Ascending)',
  IdDsc = 'Patient ID (Descending)',
  FirstNameDsc = 'First Name (Descending)',
  LastNameDsc = 'Last Name (Descending)',
}
const sortOptions = [
  Sort.IdAsc,
  Sort.FirstNameAsc,
  Sort.LastNameAsc,
  Sort.IdDsc,
  Sort.FirstNameDsc,
  Sort.LastNameDsc,
];

const PatientList: React.FC = () => {
  const store = React.useContext(StoreContext);

  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    store.patientListState.setSortOption(e.target.value);
  };
  const option1 = store.patientListState.sortOption;
  const sortPatients = (patients: Patient.Models.Patient[]) => {
    switch (option1) {
      case Sort.IdAsc:
        return patients.sort(dynamicsort('uli', 'asc'));
      case Sort.FirstNameAsc:
        return patients.sort(dynamicsort('firstName', 'asc'));
      case Sort.LastNameAsc:
        return patients.sort(dynamicsort('lastName', 'asc'));
      case Sort.IdDsc:
        return patients.sort(dynamicsort('uli', 'dsc'));
      case Sort.FirstNameDsc:
        return patients.sort(dynamicsort('firstName', 'dsc'));
      case Sort.LastNameDsc:
        return patients.sort(dynamicsort('lastName', 'dsc'));
      default:
        return patients;
    }
  };

  const sortedPatients = sortPatients(store.patientListState.patients.slice());

  return (
    <div className="patientList">
      <h1>Patient List</h1>
      <select value={option1} onChange={handleOptionSelect}>
        {sortOptions.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </select>
      <table>
        <thead style={{ fontWeight: 600 }}>
          <tr>
            <td>Patient ID</td>
            <td>First Name</td>
            <td>Last Name</td>
          </tr>
        </thead>
        {sortedPatients.map((patient) => (
          <tbody key={patient.id}>
            <tr>
              <td>
                <Link to={patient.id.toString()}>{patient.uli} </Link>
              </td>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export const Component = observer(PatientList);
