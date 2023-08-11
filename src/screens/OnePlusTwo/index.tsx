import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {ISeat, ISeatStatus} from './interface';

import ChooseGenderModal from './components/ChooseGenderModal';

import colors from '../../style/colors';
import Seat from './components/Seat';
import {Icon} from 'custom-components/src';
import {Button} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

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

const OnePlusTwo = ({route}: any) => {
  const {seats}: {seats: ISeat[]} = route?.params ?? {};
  const {seatPrice}: {seatPrice: number} = route?.params;
  const {extraSeatPrice}: {extraSeatPrice: number} = route?.params;
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<ISeat>();
  const [visible, setVisible] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const [seatPrices, setSeatPrices] = useState<any[]>([]);


  const navigation = useNavigation<any>()

  useEffect(() => {
    calculateSeatPrice();
  }, [selectedSeats]);

  const calculateSeatPrice = () => {
    let price = 0;
    selectedSeats.forEach(selectedSeat => {
      const {seatNumber}: any = selectedSeat || {};
      let seatSubTotal = seatPrice;
      if (selectedSeat)
      if (selectedSeat.id % 3 === 1) {
        seatSubTotal = seatPrice + extraSeatPrice
        price += seatSubTotal ;
      } else {
        seatSubTotal = seatPrice 
        price += seatSubTotal;
      }
      seatPrices[seatNumber] = seatSubTotal;
    });
    setSeatPrices(seatPrices); 
    setTotalPrice(price);
  };

  const onPress = (item: ISeat) => {
    if (selectedSeats.find(x => x.id === item?.id)) {
      setSelectedSeats(x => [...x.filter(x => x.id != item?.id)]);
    } else {
      setVisible(true);
      setSelectedSeat(item);
    }
  };
  const isDisabled = () => {
    if (selectedSeat)
      if (selectedSeat.id % 3 === 2) {
        let nearSeat = seats.find(x => x.id === selectedSeat.id + 1);
        if (nearSeat?.taken?.id === 1) {
          return 2;
        } else if (nearSeat?.taken?.id === 2) {
          return 1;
        }
      } else if (selectedSeat.id % 3 === 0) {
        let nearSeat = seats.find(x => x.id === selectedSeat.id - 1);
        if (nearSeat?.taken?.id === 1) {
          return 2;
        } else if (nearSeat?.taken?.id === 2) {
          return 1;
        }
      }
  };

  const onPressGender = (type: number) => {
    if (selectedSeat) {
      if (selectedSeat.id % 3 === 1)
        setSelectedSeats(x => [
          ...x,
          {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
        ]);
      else if (selectedSeat.id % 3 === 2) {
        let nearSeat = seats.find(x => x.id === selectedSeat.id + 1);
        if (!nearSeat?.taken) {
          setSelectedSeats(x => [
            ...x,
            {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
          ]);
        } else {
          if (nearSeat?.taken?.id === 2 && type === 2) {
            setSelectedSeats(x => [
              ...x,
              {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
            ]);
          } else if (nearSeat?.taken?.id === 1 && type === 1) {
            setSelectedSeats(x => [
              ...x,
              {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
            ]);
          }
        }
      } else {
        let nearSeat = seats.find(x => x.id === selectedSeat.id - 1);

        if (!nearSeat?.taken) {
          setSelectedSeats(x => [
            ...x,
            {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
          ]);
        } else {
          if (nearSeat?.taken?.id === 2 && type === 2) {
            setSelectedSeats(x => [
              ...x,
              {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
            ]);
          } else if (nearSeat?.taken?.id === 1 && type === 1) {
            setSelectedSeats(x => [
              ...x,
              {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
            ]);
          }
        }
      }

      setVisible(false);
    }
  };

  const onDismiss = () => {
    setVisible(false);
  };

  const renderSeat = ({item}: {item: ISeat}) => {
    let gender = 0;
    selectedSeats.map(x => {
      if (x.id == item.id) {
        if (x.taken && x?.taken?.id == 1) gender = 1;
        else gender = 2;
      }
    });

    return <Seat item={item} onPress={onPress} selectedSeat={gender} />;
  };


  const navToPayment = ()=>{
    navigation.navigate('PaymentScreen', {
      seatPrices, totalPrice, selectedSeat, selectedSeats
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name="steering : materialcomm"
            size={50}
            color={colors.darkgrey}
          />
           {totalPrice > 0 && (
            <View style={styles.totalPriceContanier}>
              <Text style={styles.text}>Toplam Tutar : {totalPrice}₺</Text>
              <TouchableOpacity activeOpacity={0.7} style={styles.paymentTextContainder} onPress={navToPayment}>
                <Text style={styles.paymentText}>Ödeme Yap</Text>
              </TouchableOpacity>
            </View>
          )}

          <Icon
            name="md-exit-outline : ion"
            size={55}
            color={colors.darkgrey}
          />
        </View>
        <FlatList data={seats} renderItem={renderSeat} numColumns={3} />
        <View style={styles.verticalTextContainer}>
          <Icon
            name="chevron-up : ion"
            size={50}
            color={colors.darkgrey + 50}
            style={styles.textIcon}
          />
          <View>
            <Text style={styles.verticalText}>
              Tekli Koltuk Ekstra ücreti +20₺
            </Text>
          </View>
          <Icon
            name="chevron-down : ion"
            size={50}
            color={colors.darkgrey + 50}
            style={styles.textIcon2}

          />
        </View>
        <ChooseGenderModal
          visible={visible}
          onDismiss={onDismiss}
          onPress={onPressGender}
          disabled={isDisabled()}
        />
      </View>

    </SafeAreaView>
  );
};

export default OnePlusTwo;
