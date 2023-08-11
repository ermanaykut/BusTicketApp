import {Text, Pressable, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import {CalendarList, LocaleConfig} from 'react-native-calendars';

import moment from 'moment';
import ChooseSeatTypeModal from './components/ChooseSeatTypeModal';
import colors from '../../style/colors';

const CalendarScreen = () => {
  const [selectedDay, setSelectedDay] = useState();
  const [visible, setVisible] = useState<boolean>(false);

  const today = moment().format('YYYY-MM-DD');
  const thirdMonthLater = moment().add(90, 'day').format('YYYY-MM-DD');
  LocaleConfig.locales['tr'] = {
    monthNames: [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ],
    monthNamesShort: [
      'Oca',
      'Şub',
      'Mart',
      'Nis',
      'May',
      'Haz',
      'Tem',
      'Ağu',
      'Eyl',
      'Ekim',
      'Kas',
      'Ara',
    ],
    dayNames: [
      'Pazar',
      'Pazartesi',
      'Salı',
      'Çarşamba',
      'Perşembe',
      'Cuma',
      'Cumartesi',
    ],
    dayNamesShort: ['Pzr', 'Pzt', 'Sal', 'Çrş', 'Prş', 'Cum', 'Cmt'],
    today: 'Bugün',
  };

  LocaleConfig.defaultLocale = 'tr';

  const onPressed = (time: any) => {
    setSelectedDay(time);
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
    setSelectedDay(undefined);
  };

  const renderHeader = (time: any) => {
    //toString() yapmamızın amacı time object olarak geliyor ama string gibi gözüküp bizi yanıltıyor.
    const title = moment(time.toString()).format('MMMM | YYYY');
    return <Text style={{color: colors.blue, fontSize: 20}}>{title}</Text>;
  };

  const renderArrow = (value: any) => {
    return <Text>{value === 'left' ? 'L' : 'R'}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <CalendarList
        onDayPress={onPressed}
        renderHeader={renderHeader}
        renderArrow={renderArrow}
        hideExtraDays
        firstDay={1}
        minDate={today}
        maxDate={thirdMonthLater}
      />
      <ChooseSeatTypeModal
        visible={visible}
        onDismiss={closeModal}
        date = {selectedDay}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;