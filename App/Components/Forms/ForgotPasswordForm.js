import React from 'react'
import {View} from 'react-native'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ReduxInput from '../ReduxInput'
import {RkButton } from 'react-native-ui-kitten'

import { ApplicationStyles } from '../../Themes'
import {Validate,Normalize} from '../../Lib'
import i18n from 'react-native-i18n'
import PropTypes from 'prop-types'

const ForgotPasswordForm = ({
    invalid, handleSubmit, onSubmit, processing, update,
    onLogin,onRegister
}) => {

    return (
        <View>
            <View style={{marginBottom:8}}>
                <ReduxInput
                    key={1}
                    label="Email"
                    name='email'
                    validate={[Validate.isEmail, Validate.isRequired]}
                    keyboardType='email-address'
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
                {i18n.t('auth_submit')}
            </RkButton>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <RkButton onPress={onRegister} rkType={'authLink stretch'}>{i18n.t('auth_register')}</RkButton>
                <RkButton onPress={onLogin} rkType={'authLink stretch'}>{i18n.t('auth_login')}</RkButton>
            </View>
        </View>

    )
}

ForgotPasswordForm.propTypes = {
    onLogin:PropTypes.func.isRequired,
    onRegister:PropTypes.func.isRequired,
}



export default reduxForm({
    form: 'ForgotPasswordForm',
})(ForgotPasswordForm)



