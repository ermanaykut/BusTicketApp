import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { ISeat, ISeatStatus } from '../../interface';
import { IconTypes } from 'custom-components/src/Icon/types';
import { Icon } from 'custom-components/src';
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
  selectedSeat,
}: {
  item: ISeat;
  onPress: (item: ISeat) => void;
  selectedSeat?: number;
}) => {
  let gender = SEAT_STATUS.find((x) => x.id === item?.taken?.id);
  let iconName: IconTypes | null = null; 

  if (selectedSeat === 0 && typeof gender === 'undefined') {
    iconName = null; 
  } else if (selectedSeat === 0) {
    iconName = gender?.id === 1 ? 'male : fontisto' : 'female : fontisto';
  } else {
    iconName = selectedSeat === 1 ? 'male : fontisto' : 'female : fontisto';
  }

  let color =
    selectedSeat === 0
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
    <Pressable
      onPress={_onPress}
      style={[
        styles.container,
        item.id % 3 === 1 && styles.singleContainer,
        !item.is_active && styles.nullContainer,
      ]}
    >
      {iconName !== null && ( // Check if iconName is not null
        <Icon name={iconName} color={color} size={30} />
      )}
      {!item.is_active && item?.is_door && (
        <Icon name='md-exit-outline : ion' size={55} color={colors.darkgrey} />
      )}
      {item.is_active ? (<View style={styles.seatNumberContainer}>
        <Text>-{item.seatNumber}-</Text> 
        </View>
        ): null}
    </Pressable>
  );
};

export default Seat;
