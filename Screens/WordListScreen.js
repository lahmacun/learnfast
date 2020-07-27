import React from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';

const Row = (props) => {
    return (
        <View style={styles.tableRow}>
            <View style={{...styles.tableCell, ...{borderRightColor: "#bfbfbf", borderRightWidth: 1}}}><Text
                style={styles.text}>{props.firstWord}</Text></View>
            <View style={styles.tableCell}><Text style={styles.text}>{props.secondWord}</Text></View>
        </View>
    );
}

class WordListScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            words: [],
            currentWordIndex: 0,
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
            })
        });
    }

    componentDidMount() {
        global.storage.load({
            key: "wordslist"
        }).then(data => {
            this.setState({words: this.shuffle(data.words)});
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            this.setState({
                isLoading: false,
            })
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 40}}>
                    {this.state.isLoading ? <ActivityIndicator size={"large"} color={"#f4511e"} /> : <Row firstWord={"English"} secondWord={"Russian"}/>}
                    {this.state.words.map(item => {
                        return (
                            <Row firstWord={item.native} secondWord={item.foreign} key={item.native} />
                        );
                    })}
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        width: 100 + '%',
        borderBottomWidth: 0,
    },
    tableCell: {
        width: 50 + '%',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#bfbfbf',
    },
    text: {
        fontSize: 16,
        color: "#444444",
    }
}

export default WordListScreen;
