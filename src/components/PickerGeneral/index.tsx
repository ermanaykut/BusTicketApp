import {View, Text, Pressable, FlatList} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from './style';
import {Modal, Portal} from 'react-native-paper';
import colors from '../../style/colors';

const PickerGeneral = ({
  placeholder = 'Varış Noktası',
  dataList,
  data,
  setData,
}: {
  placeholder?: string;
  dataList?: string[];
  data: any;
  setData: Dispatch<SetStateAction<any>>;
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const onPressData = (item: string) => {
    setData(item);
    closeModal();
  };

  const renderData = ({item}: {item: string}) => {
    return (
      <Pressable
        onPress={() => onPressData(item)}
        style={[
          styles.itemContainer,
          data == item && {backgroundColor: colors.lightBlue + 50},
        ]}>
        <Text style={styles.item}>{item}</Text>
      </Pressable>
    );
  };
  return (
    <>
      <Pressable onPress={openModal} style={styles.container}>
        <Text style={styles.placeholder}>{data ?? placeholder}</Text>
      </Pressable>
      <Portal>
        <Modal visible={modalVisible} onDismiss={closeModal}>
          <View style={styles.modal}>
            <Text style={styles.title}>{placeholder}</Text>
            <FlatList data={dataList} renderItem={renderData} />
          </View>
        </Modal>
      </Portal>
    </>
  );
};

export default PickerGeneral;