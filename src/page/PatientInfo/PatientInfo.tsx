import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormInput } from '../../hooks/useFormInput';
import { StoreContext } from '../../index';

import './PatientInfo.css';

const PatientInfo: React.FC = () => {
  const store = React.useContext(StoreContext);

  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const patient = store.patientListState.patients.find(
    (patient) => patient.id.toString() === id
  );

  const firstNameProps = useFormInput(patient?.firstName);
  const lastNameProps = useFormInput(patient?.lastName);
  const uliProps = useFormInput(patient?.uli.toString());
  const birthDateProps = useFormInput(patient?.birthDate);
  const heightProps = useFormInput(patient?.height?.toString());
  const weightProps = useFormInput(patient?.weight?.toString());

  const disabled = () => {
    const isValidNumber = /^[^a-zA-Z]+$/;
    const isValidText = /^([^0-9]*)$/;
    const isValidDate = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (
      firstNameProps.value &&
      isValidText.test(firstNameProps.value) &&
      lastNameProps.value &&
      isValidText.test(lastNameProps.value) &&
      uliProps.value &&
      isValidNumber.test(uliProps.value) &&
      heightProps.value &&
      isValidNumber.test(heightProps.value) &&
      weightProps.value &&
      isValidNumber.test(weightProps.value) &&
      birthDateProps.value &&
      isValidDate.test(birthDateProps.value)
    ) {
      return false;
    }
    return true;
  };

  const handleClick = () => {
    if (
      uliProps.value &&
      firstNameProps.value &&
      lastNameProps.value &&
      birthDateProps.value &&
      heightProps.value &&
      weightProps.value
    ) {
      const updatedPatient: any = {
        uli: Number(uliProps.value),
        firstName: firstNameProps.value.toString(),
        lastName: lastNameProps.value,
        birthDate: birthDateProps.value,
        height: Number(heightProps.value),
        weight: Number(weightProps.value),
      };
      store.patientListState.updatePatients(Number(id), updatedPatient);
    }

    navigate('/');
  };

  return (
    <div className="patientInfo">
      <h1>Patient Info</h1>
      <label>
        ULI:
        <input {...uliProps} />
      </label>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <label>
        Birth Date:
        <input {...birthDateProps} />
      </label>
      <label>
        Height:
        <input {...heightProps} />
      </label>
      <label>
        Weight:
        <input {...weightProps} />
      </label>
      <button disabled={disabled()} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export const Component = PatientInfo;
