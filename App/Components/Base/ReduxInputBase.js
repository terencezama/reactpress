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
    console.log(meta)
    const header = error && !valid && visited ? (
        <View style={{flexDirection:'row', alignItems:"center"}}>
            <RkText style={{marginRight: 4,}}>{label}</RkText>
            <RkText rkType='error'>{error}</RkText>
        </View>
    ) : <RkText >{label}</RkText>

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
                //  placeholder={label}
                label={undefined}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}


            />
        </View>
    );
}

