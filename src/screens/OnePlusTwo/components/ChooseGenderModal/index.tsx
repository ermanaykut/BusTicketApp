import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Modal, Portal} from 'react-native-paper';
import styles from '../../style';

import colors from '../../../../style/colors';
import { Icon } from 'custom-components/src';

const ChooseGenderModal = ({
  visible,
  onDismiss,
  onPress,
  disabled,
}: {
  visible: boolean;
  onDismiss: () => void;
  onPress: (type: number) => void;
  disabled?: number;
}) => {
  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss}>
        <View style={styles.modalContainer}>
          <Text>Cinsiyet Seçiniz</Text>
          <Pressable
            disabled={disabled === 1}
            onPress={() => onPress(1)}
            style={[styles.gender, disabled === 1 && {opacity: 0.5}]}>
            <Icon name="male : fontisto" size={30} color={colors.blue} />
            <Text>Erkek</Text>
          </Pressable>

          <Pressable
            disabled={disabled === 2}
            onPress={() => onPress(2)}
            style={[styles.gender, disabled === 2 && {opacity: 0.5}]}>
            <Icon name="female : fontisto" size={30} color={colors.pink} />
            <Text>Kadın</Text>
          </Pressable>
        </View>
      </Modal>
    </Portal>
  );
};

export default ChooseGenderModal;