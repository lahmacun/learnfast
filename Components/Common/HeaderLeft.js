import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import WordBankIcon from "../Icons/WordBankIcon";
import * as RootNavigation from '../../RootNavigation';

class HeaderLeft extends React.Component {
    render() {
        return (
            <View style={{width: 40, height: 40, marginLeft: 5, alignItems: 'center', justifyContent: 'center', padding: 5}}>
                <TouchableOpacity style={{width: 100 + '%', height: 100 + '%'}} onPress={() => {
                    RootNavigation.navigate("WordList")
                }}>
                    <WordBankIcon/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HeaderLeft;
