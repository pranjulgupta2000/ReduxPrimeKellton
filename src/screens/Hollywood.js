
import React from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput, Image, ImageBackground
} from 'react-native';
import BollywoodC from './Bollywood2';
import FilmDetails from './FilmDetails';


import { addToCart, loadHollywood } from '../../actions';


// const initialState = {
//     name: '',
//     genre: '',
//     rating:'',
//     imgUrl:'',
// }


class Hollywood extends React.Component {
    // state = initialState;

    // updateInput = (key, value) => {
    //     this.setState({
    //         ...this.state,
    //         [key]: value
    //     })
    // }

    addToCart = (id) => {
        this.props.dispatchAddBook(this.id);
        //this.setState(initialState);
        this.details();
        console.log(id);
    }


    loadHollywood = () => {
        this.props.dispatchLoadProducts(this.state);
    }

    details = () => {
        this.props.navigation.navigate('FilmDetails')
    }
    render() {
        const { hMovies } = this.props;


        return (
            <View style={styles.container}>
                {
                    <View>
                        <BollywoodC />
                    </View>
                }


                <ScrollView style={styles.BooksContainer}>
                    {hMovies.map((hMovies, index) => (
                        <View style={styles.book} key={index}>
                            <View>
                                <ImageBackground
                                    style={{ height: 120, width: 100 }}
                                    source={{
                                        uri: hMovies.imgUrl,
                                    }}
                                >
                                    <TouchableOpacity><Image source={require('../assets/heart.png')} style={styles.imageBackStyle} />
                                    </TouchableOpacity>
                                </ImageBackground>
                            </View>

                            <View style={{ padding: 5 }}>
                                <Text style={styles.name}>{hMovies.name}</Text>
                                <Text style={styles.details}>GENRE = {hMovies.genre}</Text>
                                <Text style={styles.details}>RATING = {hMovies.imdbRating}</Text>
                                <Text style={styles.details}>DIRECTOR= {hMovies.director}</Text>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity><Image source={require('../assets/diskette.png')} style={styles.imageStyle} /></TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: 20 }}><Image source={require('../assets/send.png')} style={styles.imageStyle} /></TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity onPress={this.details}>
                                    <Image source={require('../assets/direction-arrow.png')} style={styles.imageStyle} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                    }
                </ScrollView>
            </View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        paddingTop: 30,
        paddingBootom: 20,
        fontSize: 20,
        textAlign: 'center',
    },

    BooksContainer: {
        borderWidth: 1,
        borderTopColor: 'red',
        flex: 1,
        backgroundColor:'lightblue'
    },
    imageStyle: {
        width: 25,
        height: 25,
    },
    imageBackStyle: {
        height: 25,
        width: 25,
        alignSelf: 'flex-end',
    },
    buttonView:{
        flexDirection: 'row', 
        marginTop: 10,
    },

    book: {
        padding: 20,
        flexDirection: 'row',
        borderBottomWidth: 2

    },
    name: {
        fontSize: 15,
        color: 'black',
        marginRight: 10
    },
    details: {
        fontSize: 14,
        color: 'grey',
    },
});

const mapDispatchToProps = {
    dispatchLoadProducts: (hMovies) => loadHollywood(hMovies),
    dispatchAddBook: (hMovies) => addToCart(hMovies),

}

const mapStateToProps = (state) => ({
    hMovies: state.HollywoodReducer.hMovies
})

export default connect(mapStateToProps, mapDispatchToProps)(Hollywood);


