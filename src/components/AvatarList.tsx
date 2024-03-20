import {View, Image} from 'react-native';
import React from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type Props = {
  data: any[];
};

const AvatarList = ({data}: Props) => {
  const {styles} = useStyles(stylestheet);

  const renderAvatar = (item: any, index: number) => {
    return <Image key={item} style={[styles.imageStyle, {left: index * 24}]} />;
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => renderAvatar(item, index))}
    </View>
  );
};

export default AvatarList;

const stylestheet = createStyleSheet(({colors}) => ({
  container: {
    height: 34,
    flexDirection: 'row',
  },
  imageStyle: {
    height: 34,
    width: 34,
    backgroundColor: colors.lightBlue,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: colors.white,
    position: 'absolute',
  },
}));
