import React from 'react'
import { View } from 'react-native'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ReduxInput from '../ReduxInput'
import { RkButton } from 'react-native-ui-kitten'
import PropTypes from 'prop-types'
import { ApplicationStyles } from '../../Themes'
import { Validate, Normalize } from '../../Lib'
import i18n from 'react-native-i18n'

const LoginForm = ({
    invalid, handleSubmit, onSubmit, processing, update, onRegister, onForgotPassword
}) => {

    return (
        <View>
            <View style={{marginBottom:8}}>
                <ReduxInput
                    key={1}
                    label={i18n.t('auth_username')}
                    name='username'
                    validate={[Validate.isMinLength6, Validate.isRequired]}
                    // keyboardType='email-address'
                    rkType="auth"
                />
                <ReduxInput
                    key={2}
                    label={i18n.t('auth_password')}
                    name='password'
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
                {i18n.t('auth_login')}
            </RkButton>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RkButton onPress={onRegister} rkType={'authLink stretch'}>{i18n.t('auth_register')}</RkButton>
                <RkButton onPress={onForgotPassword} rkType={'authLink stretch'}>{i18n.t('auth_forgotpassword')}</RkButton>
            </View>
        </View>

    )
}

LoginForm.propTypes = {
    onRegister : PropTypes.func.isRequired,
    onForgotPassword : PropTypes.func.isRequired
}

export default reduxForm({
    form: 'LoginForm',
})(LoginForm)



