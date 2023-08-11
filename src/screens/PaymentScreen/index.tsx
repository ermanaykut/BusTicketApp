import {View, Text, SafeAreaView, TouchableOpacity, Alert, Keyboard} from 'react-native';
import React, { useState } from 'react';
import {ISeat} from './interface';
import styles from './style';
import Input from '../../components/Input';
import CardNumberInput from './components/CardNumberInput';
import ValidDateInput from './components/ValidDateInput';

const PaymentScreen = ({route}: any) => {
  const {seatPrices, totalPrice, selectedSeats} = route?.params ?? {};
  const [inputs, setInputs] = useState<any>({
    name:'',
    CVV:'',
    cardNumber:'',
    validDate:''
  })

  const sortedSeatNumbers = selectedSeats
    .map((selectedSeat: ISeat) => selectedSeat.seatNumber)
    .sort((a: number, b: number) => a - b);

    const updateCardNumber = (cardNumber:string) => {
      setInputs({...inputs, cardNumber})
    }

    const updateValidDate = (validDate:string)=>{
      setInputs({...inputs, validDate})
    }

  const thankyou = () => {
    Keyboard.dismiss();
    if (!inputs.name && !inputs.cardNumber && !inputs.validDate && !inputs.CVV) {
      Alert.alert('Lütfen boş alanları doldurunuz');
      return;
    }
    if (!inputs.name) {
      Alert.alert('Kart Üzerindeki Ad ve Soyadı yazınız');
      return;
    }
    if (!inputs.cardNumber) {
      Alert.alert('Kart Numaranızı yazınız');
      return;
    }
    if (!inputs.validDate) {
      Alert.alert('Tarih yazınız');
      return;
    }
    if (!inputs.CVV) {
      Alert.alert('CVV yazınız');
      return;
    }
    
    Alert.alert('Ödemeniz alındı teşekkürler')
  }  

  return (
    <SafeAreaView>
      <View style={styles.seatTextContainer}>
        {sortedSeatNumbers.map((seatNumber: number) => (
          <View style={styles.eachSeat}>
            <Text style={styles.seatText} key={seatNumber}>
              Koltuk No {seatNumber.toString().padStart(2, '0')} -------{' '}
            </Text>
            <Text style={styles.seatPriceText}>
              {' '}
              {seatPrices[seatNumber]} ₺
            </Text>
          </View>
        ))}
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>
            Toplam Tutar: {totalPrice} ₺
          </Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.midText}>Kredi kartı bilgilerinizi giriniz</Text>
      </View>
      <View style={styles.creditCardForm}>
        <Input
          label="Ad Soyad:"
          onChangeText={text => setInputs({...inputs, name:text})}
          placeholder="Ad ve Soyadınızı Giriniz"
          autoCapitalize="words"
          style={styles.nameInput}
        />
        <CardNumberInput
          
          onCardNumberChange = {updateCardNumber}
        />
        <View style={styles.row}>
          <ValidDateInput
          onDateChange = {updateValidDate}
          />
          <Input
            label="CVV:"
            onChangeText={text => setInputs({...inputs, CVV:text})}
            placeholder="CVV"
            maxLength={3}
            keyboardType="numeric"
            style={styles.cvvInput}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={thankyou}
        activeOpacity={0.8}
        style={styles.buttonContainer}>
        <Text style={styles.midText}>Ödeme Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PaymentScreen;
