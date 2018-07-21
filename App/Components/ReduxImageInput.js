import PropTypes from 'prop-types'
import React from 'react'
import { Field } from 'redux-form'
import ReduxImageInputBase from './Base/ReduxImageInputBase'

const ReduxImageInput = ({ name, label, ...props }) => (
  <Field
    {...props}
    label={label}
    name={name}
    component={ReduxImageInputBase}
  />
)

ReduxImageInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

export default ReduxImageInput
