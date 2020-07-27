import React from 'react';
import {ActivityIndicator, Alert, Button, Text, TextInput, View} from 'react-native';

class AddWordScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            native: '',
            foreign: '',
            words: [],
            isLoading: true,
        }

        global.storage.load({
            key: "wordslist"
        }).then(data => {
            this.setState({words: data.words});
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            this.setState({
                isLoading: false,
            });
        });
    }

    saveWord() {
        this.setState({
            isLoading: true,
        });
        const native = this.state.native;
        const foreign = this.state.foreign;
        const words = this.state.words;

        const newWord = {
            native,
            foreign,
        };

        words.push(newWord);

        global.storage.save({
            key: "wordslist",
            data: {words,}
        }).then(() => {
            this.props.navigation.navigate("Home");
            this.setState({
                native: '',
                foreign: '',
            });
        }).catch(err => {
            Alert.alert(':(', 'Error occured while saving new word.');
        }).finally(() => {
            this.setState({
                isLoading: false,
            });
        });
    }

    render() {
        return (
            <View style={{flex: 1, padding: 20}}>
                <Text style={styles.label}>English</Text>
                <TextInput onChangeText={text => this.setState({native: text})} style={styles.input}/>
                <Text style={styles.label}>Russian</Text>
                <TextInput onChangeText={text => this.setState({foreign: text})} style={styles.input}/>
                {this.state.isLoading ? <ActivityIndicator size={"large"} color={"#f4511e"}/> :
                    <Button
                        title="Save"
                        onPress={() => this.saveWord()}
                        color="#f4511e"
                    />}
            </View>
        );
    }
}

const styles = {
    label: {
        color: "#444444",
        fontSize: 16,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#bfbfbf',
        padding: 5,
        marginBottom: 20,
    }
};

export default AddWordScreen;
