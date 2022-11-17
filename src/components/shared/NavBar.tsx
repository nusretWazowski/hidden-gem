import View from '../../custom/View';
import { Style } from '../../util/types/props';
import { useSelector } from 'react-redux';
import { ThemeState } from '../../util/types/theme';
// import { setTheme } from '../../util/reducers/themeReducer';
import Button from '../../custom/Button';
import { theme } from '../../theme';
import { StyleSheet } from 'react-native';

interface Props {
  style?: Style;
}

interface ShadowStyle {
  [prop: string]: string;
}

const NavBar: React.FC<Props> = () => {
  const currentTheme = useSelector<ThemeState>((state) => state.theme);
  // const dispatch = useDispatch();

  const getShadow = (): ShadowStyle =>
    currentTheme === 'dark'
      ? { ...theme.colors.dark.shadow }
      : { ...theme.colors.default.shadow };

  const styles = StyleSheet.create({
    container: {
      ...getShadow(),
      shadowOpacity: 0.5,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 40
    },
  });

  // const themeChangeHandler: () => void = () => {
  //   if (currentTheme === 'light') {
  //     dispatch(setTheme('dark'));
  //     return;
  //   }
  //   dispatch(setTheme('light'));
  // };

  return <View style={styles.container}>
    <Button icon="home"></Button>
    <Button icon="plus"></Button>
    <Button icon="pencil"></Button>
    <Button icon="account"></Button>
  </View>;
};

export default NavBar;