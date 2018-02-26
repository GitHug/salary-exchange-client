import React from 'react';
import SalaryForm from './SalaryFormContainer';

const SideBar = () => (
  <aside>
    <SalaryForm onSubmit={values => this.setState(values)} />
  </aside>
);

export default SideBar;
