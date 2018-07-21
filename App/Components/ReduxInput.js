import PropTypes from 'prop-types'
import React from 'react'
import { Field } from 'redux-form'
import ReduxInputBase from './Base/ReduxInputBase'

const ReduxInput = ({ name, label, ...props }) => (
  <Field
    {...props}
    label={label}
    name={name}
    component={ReduxInputBase}
  />
)

ReduxInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

export default ReduxInput
