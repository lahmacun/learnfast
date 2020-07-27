import React from 'react';
import {TouchableOpacity, View} from "react-native";
import AddIcon from "../Icons/AddIcon";
import * as RootNavigation from "../../RootNavigation";

class HeaderRight extends React.Component {
    render() {
        return (
            <View style={{width: 40, height: 40, marginRight: 5, alignItems: 'center', justifyContent: 'center', padding: 5}}>
                <TouchableOpacity onPress={() => {
                    RootNavigation.navigate("AddWord")
                }}>
                    <AddIcon/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HeaderRight;
