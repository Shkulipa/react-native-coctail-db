import React, {useEffect} from 'react';
import {StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {useDispatch, useSelector} from "react-redux";
import {toggleCheckBox, loadedList, request} from "./store/action";


export const FilterScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const LoadedList = useSelector(state => state.drinks.loadedList);
    const listFilters = useSelector(state => state.drinks.listFilters);
    const listFiltersTrue = useSelector(state => state.drinks.listFiltersTrue);
    useEffect(() => {
        if(LoadedList === false) {
            dispatch(loadedList());
        }
    });

    return (
        <ScrollView>
            {listFilters.map(item => {
                const checkBoxImg = item.checkBox ? <FontAwesome name="check" size={24} color="black"/> : null;
                return (
                    <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.7}
                        style={styles.item}
                        onPress={() => dispatch(toggleCheckBox(item.id, item.title))}>

                        <Text style={styles.text}>{item.title}</Text>
                        {checkBoxImg}
                    </TouchableOpacity>
                )
            })}

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => {
                    dispatch(request(listFiltersTrue));
                    return navigation.navigate('Drinks');
                }}>
                <Text style={styles.textButton}>Apply</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        marginVertical: 30,
        height: 30
    },
    text: {
        fontSize: 16,
        color: '#7E7E7E'
    },
    button: {
        backgroundColor: '#272727',
        margin: 30,
        paddingVertical: 15,
        paddingHorizontal: 150
    },
    textButton: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    }
})