import React, {useEffect, useRef} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import {colors} from '../../config';

interface Segment {
  icon: React.ReactNode;
  label: string;
}

interface SegmentedControlProps {
  segments: Segment[];
  currentIndex: number;
  onChange: (index: number) => void;
  badgeValues?: Array<number | null>;
  isRTL?: boolean;
  containerMargin?: number;
  activeTextStyle?: TextStyle;
  inactiveTextStyle?: TextStyle;
  segmentedControlWrapper?: ViewStyle;
  pressableWrapper?: ViewStyle;
  tileStyle?: ViewStyle;
  activeBadgeStyle?: ViewStyle;
  inactiveBadgeStyle?: ViewStyle;
  badgeTextStyle?: TextStyle;
}

const defaultShadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 1,
  },
  shadowOpacity: 0.025,
  shadowRadius: 1,
  elevation: 1,
};

const DEFAULT_SPRING_CONFIG = {
  stiffness: 150,
  damping: 20,
  mass: 1,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
};

const windowWidth = Dimensions.get('window').width;

const CustomSegmentedControl: React.FC<SegmentedControlProps> = ({
  segments,
  currentIndex,
  onChange,
  badgeValues = [],
  isRTL = false,
  containerMargin = 0,
  activeTextStyle,
  inactiveTextStyle,
  segmentedControlWrapper,
  pressableWrapper,
  tileStyle,
  activeBadgeStyle,
  inactiveBadgeStyle,
  badgeTextStyle,
}: SegmentedControlProps) => {
  const width = windowWidth - containerMargin * 2;
  const translateValue = width / segments.length;
  const tabTranslateValue = useSharedValue(0);

  const memoizedTabPressCallback = React.useCallback(
    index => {
      onChange(index);
    },
    [onChange],
  );

  useEffect(() => {
    const transitionMultiplier = isRTL ? -1 : 1;
    tabTranslateValue.value = withSpring(
      currentIndex * (translateValue * transitionMultiplier),
      DEFAULT_SPRING_CONFIG,
    );
  }, [currentIndex]);

  const tabTranslateAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: tabTranslateValue.value}],
    };
  });

  const getSegmentWidth = (index: number) => {
    if (index === 0 || index === 1) {
      return (width / segments.length - 4) / 2;
    }
    return width / segments.length - 4;
  };

  const finalisedActiveTextStyle: TextStyle = {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: tileStyle?.backgroundColor === colors.blue ? null : colors.white,
    ...activeTextStyle,
  };

  const finalisedInActiveTextStyle: TextStyle = {
    fontSize: 15,
    textAlign: 'center',
    color: tileStyle?.backgroundColor === colors.blue ? null : colors.black,
    ...inactiveTextStyle,
  };

  const finalisedActiveBadgeStyle: ViewStyle = {
    backgroundColor: '#27272a',
    marginLeft: 4,
    alignItems: 'center',
    justifyContent: 'center',
    ...activeBadgeStyle,
  };

  const finalisedInActiveBadgeStyle: ViewStyle = {
    backgroundColor: '#6b7280',
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
    ...inactiveBadgeStyle,
  };

  const finalisedBadgeTextStyle: TextStyle = {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
    ...badgeTextStyle,
  };

  return (
    <Animated.View
      style={[styles.defaultSegmentedControlWrapper, segmentedControlWrapper]}>
      <Animated.View
        style={[
          styles.movingSegmentStyle,
          defaultShadowStyle,
          tileStyle,
          StyleSheet.absoluteFill,
          {
            width: width / segments.length - 4,
          },
          tabTranslateAnimatedStyles,
        ]}
      />
      {segments.map((segment, index) => (
        <Pressable
          onPress={() => memoizedTabPressCallback(index)}
          key={index}
          style={[
            styles.touchableContainer,
            pressableWrapper,
            {width: getSegmentWidth(index)},
          ]}>
          <View style={styles.textWrapper}>
            <View style={styles.iconWrapper}>{segment.icon}</View>
            <Text
              style={[
                currentIndex === index
                  ? finalisedActiveTextStyle
                  : finalisedInActiveTextStyle,
              ]}>
              {segment.label}
            </Text>
            {badgeValues[index] && (
              <View
                style={[
                  styles.defaultBadgeContainerStyle,
                  currentIndex === index
                    ? finalisedActiveBadgeStyle
                    : finalisedInActiveBadgeStyle,
                ]}>
                <Text style={finalisedBadgeTextStyle}>
                  {badgeValues[index]}
                </Text>
              </View>
            )}
          </View>
        </Pressable>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  defaultSegmentedControlWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.white,
    marginTop: 16,
  },
  touchableContainer: {
    flex: 1,
    elevation: 9,
    paddingVertical: 12,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginRight: 10,
  },
  movingSegmentStyle: {
    top: 0,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 6,
    backgroundColor: colors.blue,
  },
  defaultBadgeContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 16,
    width: 16,
    borderRadius: 9999,
    alignContent: 'flex-end',
  },
});

export default CustomSegmentedControl;
