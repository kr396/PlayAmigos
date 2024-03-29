import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';
import {useStyles} from 'react-native-unistyles';

import stylesheet from './styles';
import {Header} from '../../components';
import DatePicker from 'react-native-date-picker';

type Props = {};

const CreateGame = (props: Props) => {
  const {styles} = useStyles(stylesheet);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Create Game" />
      <View style={styles.container}>
        <Text>CreateGame</Text>
        <Button title="Open" onPress={() => setOpen(true)} />
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateGame;
