import PropTypes from 'prop-types'
import React from 'react'
import { Field } from 'redux-form'
import ReduxBarcodeInputBase from './Base/ReduxBarcodeInputBase'

const ReduxBarcodeInput = ({ name, label, ...props }) => (
  <Field
    {...props}
    label={label}
    name={name}
    component={ReduxBarcodeInputBase}
  />
)

ReduxBarcodeInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string
}

export default ReduxBarcodeInput
