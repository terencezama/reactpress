import React from 'react';
import {
    RkText,
    RkTextInput,
} from 'react-native-ui-kitten';
import {
    View,
} from 'react-native';
export default function ReduxInputBase(props) {
    const { input, meta, meta: { valid, error, visited }, label } = props;
    const header = error && !valid && visited ? (
        <View style={{flexDirection:'row', alignItems:"center"}}>
            {/* <RkText style={{marginRight: 4,}}>{label}</RkText> */}
            <RkText style={{color:'white'}} rkType='basic'>{error}</RkText>
        </View>
    ) : (undefined)

    return (
        // <Hoshi 
        //   borderColor={valid?Colors.primary:Colors.error}
        //   onChangeText={input.onChange}
        //   onBlur={input.onBlur}
        //   onFocus={input.onFocus}
        //   value={input.value}

        //   {...props}
        //   label={error == undefined?label: `${label} (${error})`}
        //   // labelStyle={{color:error != undefined?Colors.error:Colors.text}}
        //   // blurOnSubmit={false}


        // />
        <View>



            {header}
            <RkTextInput
                {...props}
                // rkType="topLabel"
                 placeholder={label}
                // label={error && !valid && visited ?`${label}: ${error}`:label}
                label={undefined}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                // style={{backgroundColor:'transparent'}}

            />
        </View>
    );
}

