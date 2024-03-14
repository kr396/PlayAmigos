import {FlatList, Modal, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import CheckBox from '@react-native-community/checkbox';

import {useAppSelector} from '../../../redux/hooks';
import {getSkillsList} from '../../../redux/commonSlice/commonSlice';
import {Skill} from '../../../types';
import {ThemeButton} from '../../../components';
import Toast from 'react-native-toast-message';
import {strings} from '../../../config';

type Props = {
  visible: boolean;
  onRequestClose: () => void;
  onSkillSelect: (skillId: number) => void;
};

const LevelModal = ({visible, onRequestClose, onSkillSelect}: Props) => {
  const {styles, theme} = useStyles(stylesheet);
  const skills = useAppSelector(getSkillsList);
  const [selectedSkill, setSelectedSkill] = useState<null | number>(null);

  const onSkillPress = (id: number) => {
    setSelectedSkill(id);
  };

  const onAddSkillPress = () => {
    if (selectedSkill) {
      onSkillSelect(selectedSkill);
    } else {
      Toast.show({
        type: 'error',
        text1: strings.validationError,
        text2: 'Please select level',
      });
    }
  };

  const renderSkill = ({item: skill}: {item: Skill}) => {
    return (
      <Pressable
        style={styles.levelButton}
        onPress={() => onSkillPress(skill.id)}>
        <View>
          <Text style={styles.buttonTitle}>{skill.name}</Text>
          <Text style={styles.desc}>{skill.description}</Text>
        </View>
        <CheckBox
          value={selectedSkill === skill.id}
          style={styles.checkbox}
          tintColors={{
            true: theme.colors.primary,
            false: theme.colors.border,
          }}
        />
      </Pressable>
    );
  };

  const getDivider = () => <View style={styles.divider} />;

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.container}>
        <Pressable style={styles.bgButton} onPress={onRequestClose} />
        <View style={styles.content}>
          <Text style={styles.title}>
            What’s Your Table Tennis Skill Level?
          </Text>
          <FlatList
            data={skills}
            renderItem={renderSkill}
            bounces={false}
            ItemSeparatorComponent={getDivider}
          />
          <ThemeButton
            title="Add Skill"
            style={styles.submitBtn}
            onPress={onAddSkillPress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LevelModal;

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: theme.colors.white,
    padding: theme.margins.xl,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: theme.fonts.semiBold,
    lineHeight: 22.5,
    marginBottom: theme.margins.xl,
  },
  levelButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.margins.xl,
    gap: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  buttonTitle: {
    fontSize: 13,
    fontFamily: theme.fonts.semiBold,
    color: theme.colors.typography,
  },
  desc: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: theme.fonts.regular,
    color: theme.colors.typography2,
    marginTop: 8,
  },
  checkbox: {
    height: 20,
    width: 20,
  },
  divider: {
    height: 16,
  },
  submitBtn: {
    marginTop: 32,
    marginBottom: 16,
  },
  bgButton: {flex: 1},
}));
