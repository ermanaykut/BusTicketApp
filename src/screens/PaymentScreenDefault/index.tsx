import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { ISeat } from './interface';

const PaymentScreenDefault = ({ route }: any) => {
  const {
    seatPrice,
    seatPrices,
    totalPrice,
    selectedSeat,
    selectedSeats,
  } = route?.params ?? {};

  return (
    <SafeAreaView>
      <Text>Payment Screen Hoşgeldiniz</Text>
      <View>
        {selectedSeats.map((selectedSeat: ISeat) => (
          <Text key={selectedSeat.seatNumber}>
            Seat Number {selectedSeat.seatNumber} :
            {seatPrices[selectedSeat.seatNumber]} ₺
          </Text>
        ))}
        <Text>Total Price : {totalPrice}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreenDefault;