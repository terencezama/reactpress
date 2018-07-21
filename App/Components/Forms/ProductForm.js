import React from 'react'
import {View} from 'react-native'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import ReduxInput from '../ReduxInput'
import ReduxBarcodeInput from '../ReduxBarcodeInput'
import ReduxImageInput from '../ReduxImageInput'
import {RkButton } from 'react-native-ui-kitten'

import { ApplicationStyles } from '../../Themes'
import {Validate,Normalize} from '../../Lib'

const ProductForm = ({
    invalid, handleSubmit, onSubmit, processing, update
}) => {

    return (
        <View style={{flex:1, justifyContent:'space-around'}}>
            <View style={{flex:0.8}}>
                
                <ReduxBarcodeInput
                    key={1}
                    label="Barcode"
                    name='barcode'
                    validate={[Validate.isRequired]}
                />
                <ReduxInput
                    key={2}
                    label="Name"
                    name='name'
                    validate={[Validate.isRequired]}
                />
                <ReduxInput
                    key={3}
                    label="Description"
                    name='description'
                    validate={[Validate.isRequired]}
                    multiline={true}
                    numberOfLines={4}
                />
                <ReduxImageInput
                    key={4}
                    label="Image"
                    name='image'
                    validate={[Validate.isRequired]}
                />
            </View>
            <RkButton
                rkType={invalid?'xlarge disable':'xlarge'}
                key={6}
                onPress={handleSubmit(onSubmit)}
                
                disabled={invalid}
            >Submit
            </RkButton>
            
        </View>

    )
}

export default reduxForm({
    form: 'ProductForm',
})(ProductForm)



