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
import Seat from './components/Seat';
import ChooseGenderModal from './components/ChooseGenderModal';
import {Icon} from 'custom-components/src';
import colors from '../../style/colors';

import {useNavigation} from '@react-navigation/native';

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

const TwoPlusTwo = ({route}: any) => {
  const {seats}: {seats: ISeat[]} = route?.params ?? {};
  const {seatPrice}: {seatPrice: number} = route?.params ?? 200;
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<ISeat>();
  const [visible, setVisible] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<any>(0);
  const [seatPrices, setSeatPrices] = useState<any[]>([]);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedSeats]);

  const navigation = useNavigation<any>();

  const calculateTotalPrice = () => {
    let price = 0;

    selectedSeats.forEach(x => {
      const {seatAmount = 1, seatNumber}: any = x;
      const seatSubTotal = Number(seatAmount) * seatPrice;
      seatPrices[seatNumber] = seatSubTotal; // Store the individual seat price in the object
      price += seatSubTotal; // Accumulate the total price
    });
    setSeatPrices(seatPrices); // Store the object with seatNumber -> price mapping in your state
    setTotalPrice(price);
  };

  const onPress = (item: ISeat) => {
    if (selectedSeats.find(x => x.id === item?.id)) {
      setSelectedSeats(x => [...x.filter(x => x.id != item.id)]);
    } else {
      setVisible(true);
      setSelectedSeat(item);
    }
  };

  const isDisabled = () => {
    if (selectedSeat)
      if (selectedSeat.id % 4 === 1) {
        let nearSeat = seats.find(x => x.id === selectedSeat.id + 1);
        if (nearSeat?.taken?.id === 1) {
          return 2; // 2 is a female it's disabled in this scenario
        } else if (nearSeat?.taken?.id === 2) {
          return 1; // 1 is a male it's disabled in this scenario
        }
      } else if (selectedSeat.id % 4 === 2) {
        let nearSeat = seats.find(x => x.id === selectedSeat.id - 1);
        if (nearSeat?.taken?.id === 1) {
          return 2;
        } else if (nearSeat?.taken?.id === 2) {
          return 1;
        }
      } else if (selectedSeat.id % 4 === 3) {
        let nearSeat = seats.find(x => x.id === selectedSeat.id + 1);
        if (nearSeat?.taken?.id === 1) {
          return 2;
        } else if (nearSeat?.taken?.id === 2) {
          return 1;
        }
      } else if (selectedSeat.id % 4 === 0) {
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
      if (selectedSeat.id % 4 === 1) {
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
          } else {
            if (nearSeat?.taken?.id === 1 && type === 1) {
              setSelectedSeats(x => [
                ...x,
                {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
              ]);
            }
          }
        }
      } else if (selectedSeat.id % 4 === 2) {
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
          } else {
            if (nearSeat?.taken?.id === 1 && type === 1) {
              setSelectedSeats(x => [
                ...x,
                {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
              ]);
            }
          }
        }
      } else if (selectedSeat.id % 4 === 3) {
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
          } else {
            if (nearSeat?.taken?.id === 1 && type === 1) {
              setSelectedSeats(x => [
                ...x,
                {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
              ]);
            }
          }
        }
      } else {
        // (selectedSeat.id % 4 === 0)
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
          } else {
            if (nearSeat?.taken?.id === 1 && type === 1) {
              setSelectedSeats(x => [
                ...x,
                {...selectedSeat, taken: SEAT_STATUS.find(x => x.id === type)},
              ]);
            }
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
        if (x.taken && x?.taken.id == 1) gender = 1;
        else gender = 2;
      }
    });

    return <Seat _selectedSeat={gender} onPress={onPress} item={item} />;
  };

  const navToPayment = () => {
    navigation.navigate('PaymentScreen', {
      seatPrices,
      totalPrice,
      selectedSeat,
      selectedSeats,
    });
  };

  return (
    <SafeAreaView>
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
            size={50}
            color={colors.darkgrey}
          />
        </View>
        <FlatList
          scrollEnabled={false}
          data={seats}
          renderItem={renderSeat}
          numColumns={4}
        />
        <ChooseGenderModal
          onDismiss={onDismiss}
          visible={visible}
          onPress={onPressGender}
          disabled={isDisabled()}
        />
      </View>
    </SafeAreaView>
  );
};

export default TwoPlusTwo;
