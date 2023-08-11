import {View, Text, FlatList, Pressable, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import { Icon } from 'custom-components/src';
import colors from '../../style/colors';


const BUS_LIST = [
  {
    id: 1,
    name: 'Kalkış Saati',
    seatType: 1,
    hour: '20.00',
    seats: [
      {
        id: 1,
        seatNumber: 1,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 2,
        seatNumber: 2,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 3,
        seatNumber: 3,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 4,
        seatNumber: 4,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 5,
        seatNumber: 5,
        is_active: true,
      },
      {
        id: 6,
        seatNumber: 6,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 7,
        seatNumber: 7,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 8,
        seatNumber: 8,
        is_active: true,
      },
      {
        id: 9,
        seatNumber: 9,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 10,
        seatNumber: 10,
        is_active: true,
      },
      {
        id: 11,
        seatNumber: 11,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 12,
        seatNumber: 12,
        is_active: true,
      },
      {
        id: 13,
        seatNumber: 13,
        is_active: true,
      },
      {
        id: 14,
        is_active: false,
      },
      {
        id: 15,
        is_active: false,
        is_door: true,
      },
      {
        id: 16,
        seatNumber: 14,
        is_active: true,
      },
      {
        id: 17,
        seatNumber: 15,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 18,
        seatNumber: 16,
        is_active: true,
      },
      {
        id: 19,
        seatNumber: 17,
        is_active: true,
      },
      {
        id: 20,
        seatNumber: 18,
        is_active: true,
      },
      {
        id: 21,
        seatNumber: 19,
        is_active: true,
      },
      {
        id: 22,
        seatNumber: 20,
        is_active: true,
      },
      {
        id: 23,
        seatNumber: 21,
        is_active: true,
      },
      {
        id: 24,
        seatNumber: 22,
        is_active: true,
      },
      {
        id: 25,
        seatNumber: 23,
        is_active: true,
      },
      {
        id: 26,
        seatNumber: 24,
        is_active: true,
      },
      {
        id: 27,
        seatNumber: 25,
        is_active: true,
      },
      {
        id: 28,
        seatNumber: 26,
        is_active: true,
      },
      {
        id: 29,
        seatNumber: 27,
        is_active: true,
      },
      {
        id: 30,
        seatNumber: 28,
        is_active: true,
      },
      {
        id: 31,
        seatNumber: 29,
        is_active: true,
      },
      {
        id: 32,
        seatNumber: 30,
        is_active: true,
      },
      {
        id: 33,
        seatNumber: 31,
        is_active: true,
      },
    ],
    seatPrice: 200,
    extraSeatPrice: 20,
  },
  {
    id: 2,
    name: 'Kalkış Saati',
    seatType: 2,
    hour: '21.00',
    seats: [
      {
        id: 1,
        seatNumber: 1,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 2,
        seatNumber: 2,
        is_active: true,
      },
      {
        id: 3,
        seatNumber: 3,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 4,
        seatNumber: 4,
        is_active: true,
      },
      {
        id: 5,
        seatNumber: 5,
        is_active: true,
      },
      {
        id: 6,
        seatNumber: 6,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 7,
        seatNumber: 7,
        is_active: true,
      },
      {
        id: 8,
        seatNumber: 8,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 9,
        seatNumber: 9,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 10,
        seatNumber: 10,
        is_active: true,
      },
      {
        id: 11,
        seatNumber: 11,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },

      {
        id: 12,
        seatNumber: 12,
        is_active: true,
      },
      {
        id: 13,
        seatNumber: 13,
        is_active: true,
      },
      {
        id: 14,
        seatNumber: 14,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 15,
        seatNumber: 15,
        is_active: true,
      },
      {
        id: 16,
        seatNumber: 16,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 17,
        seatNumber: 17,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 18,
        seatNumber: 18,
        is_active: true,
      },
      {
        id: 19,
        seatNumber: 19,
        is_active: true,
      },
      {
        id: 20,
        seatNumber: 20,
        is_active: true,
      },
      {
        id: 21,
        seatNumber: 21,
        is_active: true,
      },
      {
        id: 22,
        seatNumber: 22,
        is_active: true,
      },
      {
        id: 23,
        is_active: false,
      },
      {
        id: 24,
        is_active: false,
        is_door: true,
      },
      {
        id: 25,
        seatNumber: 23,
        is_active: true,
      },
      {
        id: 26,
        seatNumber: 24,
        is_active: true,
      },
      {
        id: 27,
        seatNumber: 25,
        is_active: true,
      },
      {
        id: 28,
        seatNumber: 26,
        is_active: true,
      },
      {
        id: 29,
        seatNumber: 27,
        is_active: true,
      },
      {
        id: 30,
        seatNumber: 28,
        is_active: true,
      },
      {
        id: 31,
        seatNumber: 29,
        is_active: true,
      },
      {
        id: 32,
        seatNumber: 30,
        is_active: true,
      },
      {
        id: 33,
        seatNumber: 31,
        is_active: true,
      },
      {
        id: 34,
        seatNumber: 32,
        is_active: true,
      },
      {
        id: 35,
        seatNumber: 33,
        is_active: true,
      },
      {
        id: 36,
        seatNumber: 34,
        is_active: true,
      },
      {
        id: 37,
        seatNumber: 35,
        is_active: true,
      },
      {
        id: 38,
        seatNumber: 36,
        is_active: true,
      },
      {
        id: 39,
        seatNumber: 37,
        is_active: true,
      },
      {
        id: 40,
        seatNumber: 38,
        is_active: true,
      },
    ],
    seatPrice: 200,
  },
  {
    id: 3,
    name: 'Kalkış Saati',
    seatType: 2,
    hour: '22.00',
    seats: [
      {
        id: 1,
        seatNumber: 1,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 2,
        seatNumber: 2,
        is_active: true,
      },
      {
        id: 3,
        seatNumber: 3,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 4,
        seatNumber: 4,
        is_active: true,
      },
      {
        id: 5,
        seatNumber: 5,
        is_active: true,
      },
      {
        id: 6,
        seatNumber: 6,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 7,
        seatNumber: 7,
        is_active: true,
      },
      {
        id: 8,
        seatNumber: 8,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 9,
        seatNumber: 9,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 10,
        seatNumber: 10,
        is_active: true,
      },
      {
        id: 11,
        seatNumber: 11,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },

      {
        id: 12,
        seatNumber: 12,
        is_active: true,
      },
      {
        id: 13,
        seatNumber: 13,
        is_active: true,
      },
      {
        id: 14,
        seatNumber: 14,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 15,
        seatNumber: 15,
        is_active: true,
      },
      {
        id: 16,
        seatNumber: 16,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 17,
        seatNumber: 17,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 18,
        seatNumber: 18,
        is_active: true,
      },
      {
        id: 19,
        seatNumber: 19,
        is_active: true,
      },
      {
        id: 20,
        seatNumber: 20,
        is_active: true,
      },
      {
        id: 21,
        seatNumber: 21,
        is_active: true,
      },
      {
        id: 22,
        seatNumber: 22,
        is_active: true,
      },
      {
        id: 23,
        is_active: false,
      },
      {
        id: 24,
        is_active: false,
        is_door: true,
      },
      {
        id: 25,
        seatNumber: 23,
        is_active: true,
      },
      {
        id: 26,
        seatNumber: 24,
        is_active: true,
      },
      {
        id: 27,
        seatNumber: 25,
        is_active: true,
      },
      {
        id: 28,
        seatNumber: 26,
        is_active: true,
      },
      {
        id: 29,
        seatNumber: 27,
        is_active: true,
      },
      {
        id: 30,
        seatNumber: 28,
        is_active: true,
      },
      {
        id: 31,
        seatNumber: 29,
        is_active: true,
      },
      {
        id: 32,
        seatNumber: 30,
        is_active: true,
      },
      {
        id: 33,
        seatNumber: 31,
        is_active: true,
      },
      {
        id: 34,
        seatNumber: 32,
        is_active: true,
      },
      {
        id: 35,
        seatNumber: 33,
        is_active: true,
      },
      {
        id: 36,
        seatNumber: 34,
        is_active: true,
      },
      {
        id: 37,
        seatNumber: 35,
        is_active: true,
      },
      {
        id: 38,
        seatNumber: 36,
        is_active: true,
      },
      {
        id: 39,
        seatNumber: 37,
        is_active: true,
      },
      {
        id: 40,
        seatNumber: 38,
        is_active: true,
      },
    ],
    seatPrice: 200,
  },
  {
    id: 4,
    name: 'Kalkış Saati',
    seatType: 1,
    hour: '23.00',
    seats: [
      {
        id: 1,
        seatNumber: 1,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 2,
        seatNumber: 2,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 3,
        seatNumber: 3,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 4,
        seatNumber: 4,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 5,
        seatNumber: 5,
        is_active: true,
      },
      {
        id: 6,
        seatNumber: 6,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 7,
        seatNumber: 7,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 8,
        seatNumber: 8,
        is_active: true,
      },
      {
        id: 9,
        seatNumber: 9,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 10,
        seatNumber: 10,
        is_active: true,
      },
      {
        id: 11,
        seatNumber: 11,
        is_active: true,
        taken: {
          id: 1,
          gender: 'male',
        },
      },
      {
        id: 12,
        seatNumber: 12,
        is_active: true,
      },
      {
        id: 13,
        seatNumber: 13,
        is_active: true,
      },
      {
        id: 14,
        is_active: false,
      },
      {
        id: 15,
        is_active: false,
        is_door: true,
      },
      {
        id: 16,
        seatNumber: 14,
        is_active: true,
      },
      {
        id: 17,
        seatNumber: 15,
        is_active: true,
        taken: {
          id: 2,
          gender: 'female',
        },
      },
      {
        id: 18,
        seatNumber: 16,
        is_active: true,
      },
      {
        id: 19,
        seatNumber: 17,
        is_active: true,
      },
      {
        id: 20,
        seatNumber: 18,
        is_active: true,
      },
      {
        id: 21,
        seatNumber: 19,
        is_active: true,
      },
      {
        id: 22,
        seatNumber: 20,
        is_active: true,
      },
      {
        id: 23,
        seatNumber: 21,
        is_active: true,
      },
      {
        id: 24,
        seatNumber: 22,
        is_active: true,
      },
      {
        id: 25,
        seatNumber: 23,
        is_active: true,
      },
      {
        id: 26,
        seatNumber: 24,
        is_active: true,
      },
      {
        id: 27,
        seatNumber: 25,
        is_active: true,
      },
      {
        id: 28,
        seatNumber: 26,
        is_active: true,
      },
      {
        id: 29,
        seatNumber: 27,
        is_active: true,
      },
      {
        id: 30,
        seatNumber: 28,
        is_active: true,
      },
      {
        id: 31,
        seatNumber: 29,
        is_active: true,
      },
      {
        id: 32,
        seatNumber: 30,
        is_active: true,
      },
      {
        id: 33,
        seatNumber: 31,
        is_active: true,
      },
    ],
    seatPrice: 200,
    extraSeatPrice: 20,
  }

];

const BusList = ({route}: any) => {
  const {fromCity, toCity, seatTypes} = route?.params ?? {};
  const navigation = useNavigation<any>();

  const navigateToSeats = (item: any) => {
    if (item?.seatType === 1)
      navigation.navigate('OnePlusTwo', {
        seats: item?.seats,
        seatPrice: item?.seatPrice,
        extraSeatPrice: item?.extraSeatPrice,
      });
    else
      navigation.navigate('TwoPlusTwo', {
        seats: item?.seats,
        seatPrice: item?.seatPrice,
      });
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <Pressable onPress={() => navigateToSeats(item)} style={styles.item}>
        <View style={styles.row}>
          <View>
            <Text style={styles.nameText}>{item?.name}</Text>
            <Text style={styles.hour}>{item?.hour}</Text>
          </View>
          <Text>
            {item?.seatType === 1 ? 'Koltuk Tipi: 2+1' : 'Koltuk Tipi: 2+2'}
          </Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="bus-side : materialcomm" size={50} color={colors.blue} />
        <Text style={styles.text}>{`Kalkış: ${fromCity}`}</Text>
        <View style={{width: 50}}></View>
      </View>
      <View style={styles.iconContainer2}>
        <Icon name="bus-stop : materialcomm" size={50} color={colors.darkred} />
        <Text style={styles.text}>{`Varış: ${toCity}`}</Text>
        <View style={{width: 50}}></View>
      </View>
      {/* <View style={styles.textContainer}>
        <Text>
          Mevcut Koltuk Tipleri:{' '}
          {seatTypes?.length === 0 ? (
            <Text>2+1, 2+2</Text>
          ) : (
            seatTypes.map((x: any) => {
              return <Text>{x === 1 ? '2+1' : '2+2'}, </Text>;
            })
          )}
        </Text>
      </View> */}
      <View>
        <FlatList
          data={
            seatTypes.length === 1
              ? BUS_LIST.filter(x => x.seatType === seatTypes?.[0])
              : BUS_LIST
          }
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default BusList;