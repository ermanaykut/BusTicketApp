import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Button, Modal, Portal} from 'react-native-paper';

import moment from 'moment';

import {useNavigation} from '@react-navigation/native';
import colors from '../../../../style/colors';
import {CITIES} from '../../../../assets/constants/cities';
import PickerGeneral from '../../../../components/PickerGeneral';
import {Icon} from 'custom-components/src';
import styles from './style';

const ChooseSeatTypeModal = ({
  visible,
  onDismiss,
  date,
}: {
  visible: boolean;
  onDismiss: () => void;
  date?: any;
}) => {
  const [fromCity, setFromCity] = useState<string>('İSTANBUL');
  const [toCity, setToCity] = useState<string>('ANTALYA');
  const [seatTypes, setSeatTypes] = useState<number[]>([]);

  const navigation = useNavigation<any>();
  const onPress = (item: number) => {
    setSeatTypes(arr => {
      if (arr.find(x => x == item)) {
        arr = arr.filter(x => x != item);
        return arr;
      } else {
        return [...arr, item];
      }
    });
  };

  const navigateToBusList = () => {
    onDismiss();
    navigation.navigate('BusList', {fromCity, toCity, seatTypes});
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss}>
        <View style={styles.modalContainer}>
          <Text>{moment(date?.dateString).format('DD.MM.YYYY')}</Text>
          <PickerGeneral
            placeholder="Kalkış Noktası seçiniz"
            dataList={CITIES.filter(x => x != toCity)}
            data={fromCity}
            setData={setFromCity}
          />
          <PickerGeneral
            placeholder="Varış Noktası seçiniz"
            dataList={CITIES.filter(x => x != fromCity)}
            data={toCity}
            setData={setToCity}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginTop: 20,
            }}>
            <Pressable
              onPress={() => onPress(1)}
              style={[styles.seat, seatTypes.includes(1) && styles.seatType]}>
              <Icon name="bus : fontisto" size={25} color={colors.darkgrey} />
              <Text>2+1</Text>
            </Pressable>

            <Pressable
              onPress={() => onPress(2)}
              style={[styles.seat, seatTypes.includes(2) && styles.seatType]}>
              <Icon name="bus : fontisto" size={25} color={colors.darkgrey} />
              <Text>2+2</Text>
            </Pressable>
          </View>
          <View style={styles.button}>
            <Button
              onPress={navigateToBusList}
              mode="elevated"
              icon="text-search"
              textColor={colors.blue}
              >
              Bilet Ara
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ChooseSeatTypeModal;
