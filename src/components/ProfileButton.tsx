import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ProfileButton: React.FC = () => {
  const navigation = useNavigation();
  return <Button title="profile" onPress={() => navigation.navigate('profile')} />;
};

export default ProfileButton;
