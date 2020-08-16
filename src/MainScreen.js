import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image, SectionList} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "./components/AppHeaderIcon";
import {useSelector} from "react-redux";

export const MainScreen = ({navigation}) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item title={'Booked'}
                              iconName={'filter'}
                              onPress={() => {
                                  navigation.navigate('Filters')
                              }}
                        />
                    </HeaderButtons>
                )
            },
        });
    }, [navigation]);

    const listDrinks = useSelector(state => state.drinks.listDrinks);

    console.log(listDrinks);
    return (
        <SectionList
            sections={listDrinks}
            keyExtractor={(item) => item.idDrink}
            renderItem={({item}) => {
                return (
                    <View style={styles.item}>
                        <Image
                            source={{uri: item.strDrinkThumb}}
                            style={styles.img}/>
                        <Text style={styles.title}>{item.strDrink}</Text>
                    </View>
                )
            }}

            renderSectionHeader={({section: {title}}) => (
                <Text style={styles.categoryTitle}>{title}</Text>
            )}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 20
    },
    img: {
        width: 100,
        height: 100,
        marginRight: 20
    },
    title: {
        fontSize: 16,
        color: '#7E7E7E'
    },
    categoryTitle: {
        fontSize: 14,
        color: '#7E7E7E',
        margin: 20,
        marginBottom: 0
    }
});