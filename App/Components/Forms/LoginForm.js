import React from 'react'
import {View} from 'react-native'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ReduxInput from '../ReduxInput'
import {RkButton } from 'react-native-ui-kitten'

import { ApplicationStyles } from '../../Themes'
import {Validate,Normalize} from '../../Lib'

const LoginForm = ({
    invalid, handleSubmit, onSubmit, processing, update
}) => {

    return (
        <View>
            <View>
                <ReduxInput
                    key={1}
                    label="Email"
                    name='email'
                    validate={[Validate.isEmail,Validate.isRequired]}
                    keyboardType='email-address'
                />
                <ReduxInput
                    key={2}
                    label="Password"
                    name='password'
                    secureTextEntry
                    validate={[Validate.isMinLength6,Validate.isRequired]}
                />
            </View>
            <RkButton
                rkType={invalid?'xlarge disable':'xlarge'}
                key={6}
                onPress={handleSubmit(onSubmit)}
                
                disabled={invalid}
            >Login
            </RkButton>
            
        </View>

    )
}

export default reduxForm({
    form: 'LoginForm',
})(LoginForm)



