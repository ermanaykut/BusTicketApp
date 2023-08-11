import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ISeat, ISeatStatus} from '../../interface';
import {Icon} from 'custom-components/src';
import {IconTypes} from 'custom-components/src/Icon/types';
import colors from '../../../../style/colors';

import styles from './style';

const SEAT_STATUS: ISeatStatus[] = [
  {
    id: 1,
    gender: 'male',
  },
  {
    id: 2,
    gender: 'female',
  },
];

const Seat = ({
  item,
  onPress,
  _selectedSeat,

}: {
  item: ISeat;
  onPress: (item: ISeat) => void;
  _selectedSeat?: number;

}) => {

  let gender = SEAT_STATUS.find(x => x.id === item?.taken?.id);
  let iconName: IconTypes =

    _selectedSeat === 0
      ? typeof gender === 'undefined'
        ? 'seat : materialcomm'
        : gender.id === 1
        ? 'male : fontisto'
        : 'female : fontisto'
      : _selectedSeat === 1
      ? 'male : fontisto'
      : 'female : fontisto';

  let iconColor =
    _selectedSeat == 0
      ? typeof gender === 'undefined'
        ? colors.green
        : gender.id === 1
        ? colors.blue
        : colors.pink
      : colors.grey;

  const _onPress = () => {
    if (item.is_active && typeof gender === 'undefined') {
      onPress(item);
    }
  };

  return (
    <TouchableOpacity
      onPress={_onPress}
      style={[
        styles.container,
        item.id % 4 === 3 && styles.hallwayContainer,
        !item.is_active && styles.nullContainer,
      ]}>
      {item.is_active ? (
        <Icon name={iconName} color={iconColor} size={30}/>
      ) : (
        item?.is_door && (
          <Icon
            name="md-exit-outline : ion"
            size={55}
            color={colors.darkgrey}
          />
        )
      )}
      {item.is_active ? (
        <View style={styles.seatNumberContainer}>

          <Text>-{item.seatNumber}-</Text>
        </View>
      ):null}
    </TouchableOpacity>
  );
};

export default Seat;
