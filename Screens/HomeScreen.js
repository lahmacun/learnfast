import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import CardFlip from 'react-native-card-flip';
import LeftArrowIcon from "../Components/Icons/LeftArrowIcon";
import RightArrowIcon from "../Components/Icons/RightArrowIcon";

class HomeScreen extends React.Component {
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
            this.setState({words: this.shuffle(data.words)});
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

    shuffle(array) {
        for(let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }

        return array;
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.wrapper}>
                    {this.state.isLoading ? <ActivityIndicator size={"large"} color={"f4511e"} /> : <CardFlip style={styles.container} ref={(card) => this.card = card} >
                        <TouchableOpacity style={styles.card} onPress={() => this.card.flip()}>
                            <Text style={styles.text}>{this.state.words.length == 0 ? 'Add Your First Word' : this.state.words[this.state.currentWordIndex].foreign}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.card, ...{backgroundColor: '#f41e4c'}}} onPress={() => this.card.flip()}>
                            <Text style={styles.text}>{this.state.words.length == 0 ? 'Add Your First Word' : this.state.words[this.state.currentWordIndex].native}</Text>
                        </TouchableOpacity>
                    </CardFlip>}
                </View>
                <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        const currentIndex = this.state.currentWordIndex;
                        this.setState({
                            currentWordIndex: currentIndex == 0 ? this.state.words.length - 1 : currentIndex - 1,
                        });
                    }}><LeftArrowIcon /></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        const currentIndex = this.state.currentWordIndex;
                        this.setState({
                            currentWordIndex: currentIndex == this.state.words.length - 1 ? 0 : currentIndex + 1,
                        });
                    }}><RightArrowIcon /></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles= {
    wrapper: {
        width: 80 + '%',
        height: 50 + '%',
        justifyContent: 'center',
    },
    container: {
        width: 100 + '%',
        height: 80 + '%',
        backgroundColor: '#f4511e',
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    bottomBar: {
        width: 80 + '%',
        height: 20 + '%',
        marginTop: 3 + '%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 50,
        padding: 30,
        backgroundColor: '#f4511e',
    },
}

export default HomeScreen;
