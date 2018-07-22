import React from 'react'
import { View } from 'react-native'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ReduxInput from '../ReduxInput'
import { RkButton } from 'react-native-ui-kitten'

import { ApplicationStyles } from '../../Themes'
import { Validate, Normalize } from '../../Lib'
import i18n from 'react-native-i18n'
const RegisterForm = ({
    invalid, handleSubmit, onSubmit, processing, update
}) => {

    return (
        <View>
            <View style={{marginBottom:8}}>
                <ReduxInput
                    key={1}
                    label={i18n.t('auth_username')}
                    name='username'
                    validate={[Validate.isAlphanumeric, Validate.isMinLength6, Validate.isRequired]}
                    rkType="auth"
                />
                <ReduxInput
                    key={2}
                    label="Email"
                    name='email'
                    validate={[Validate.isEmail, Validate.isRequired]}
                    keyboardType='email-address'
                    rkType="auth"
                />
                <ReduxInput
                    key={3}
                    label={i18n.t('auth_firstname')}
                    name='firstname'
                    validate={[ Validate.isRequired]}
                    rkType="auth"
                />
                <ReduxInput
                    key={4}
                    label={i18n.t('auth_lastname')}
                    name='lastname'
                    validate={[Validate.isRequired]}
                    rkType="auth"
                />
                <ReduxInput
                    key={5}
                    label={i18n.t('auth_password')}
                    name='password'
                    secureTextEntry
                    validate={[Validate.isMinLength6, Validate.isRequired]}
                    rkType="auth"
                />
                <ReduxInput
                    key={6}
                    label={i18n.t('auth_confirmpassword')}
                    name='cpassword'
                    secureTextEntry
                    validate={[Validate.isMinLength6, Validate.isRequired]}
                    rkType="auth"
                />

            </View>
            <RkButton
                rkType={invalid ? 'xlarge auth authDisable' : 'xlarge auth'}
                key={6}
                onPress={handleSubmit(onSubmit)}
                style={{ marginBottom: 10, }}
                disabled={invalid}
            >
                {i18n.t('auth_register')}
            </RkButton>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RkButton rkType={'authLink stretch'} disabled>{''}</RkButton>
                <RkButton rkType={'authLink stretch'}>{i18n.t('auth_login')}</RkButton>
            </View>
        </View>

    )
}

export default reduxForm({
    form: 'RegisterForm',
})(RegisterForm)



