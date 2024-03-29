import {
  View,
  Text,
  FlatList,
  ViewToken,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, {FC, useCallback, useRef, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import stylesheet from './styles';
import {ThemeButton} from '../../components';
import {RootStackParamList} from '../../navigation/types';
import {images} from '../../config';

type Item = {
  id: number;
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
};

const OnBoarding: FC<
  NativeStackScreenProps<RootStackParamList, 'OnBoarding'>
> = ({navigation}) => {
  const {styles} = useStyles(stylesheet);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const scrollRef = useRef<FlatList>(null);

  const data = [
    {
      id: 1,
      title: 'Find Player in Your \n Neighbourhood',
      subTitle: 'Just like you did as a  kid',
      image: images.slider1,
    },
    {
      id: 2,
      title: 'Book Venues to Play \nwith Friends',
      subTitle: 'Get your Squad to play together',
      image: images.slider2,
    },
  ];

  /**
   * viewabilityConfig for flatlist
   */
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  /**
   * Handles flatlist viewable item change event
   */
  const onViewableItemsChanged = useCallback(
    ({
      viewableItems,
    }: {
      viewableItems: Array<ViewToken>;
      changed: Array<ViewToken>;
    }) => {
      setActiveIndex(viewableItems[0]?.index);
    },
    [],
  );

  const naigateToLogin = () => {
    navigation.navigate('Login');
  };

  const onNextPress = () => {
    if (typeof activeIndex === 'number') {
      if (activeIndex === data.length - 1) {
        naigateToLogin();
      } else {
        scrollRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }
  };

  const renderItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.item} key={item.id}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <View style={styles.container}>
        <FlatList
          ref={scrollRef}
          data={data}
          renderItem={renderItem}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
        <View style={styles.bottomView}>
          <View style={styles.pivotContainer}>
            {data.map((_item, index) => (
              <View style={styles.pivot(index, activeIndex)} key={index} />
            ))}
          </View>
          <View>
            <ThemeButton
              title="Next"
              style={styles.nextButton}
              onPress={onNextPress}
            />
            <Text style={styles.skipButton} onPress={naigateToLogin}>
              Skip
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
