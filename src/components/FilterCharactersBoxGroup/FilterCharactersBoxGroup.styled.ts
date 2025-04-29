import {StyleSheet} from 'react-native';
import colors from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  filterCharactersBoxGroup: {
    marginBottom: 16
  },
  filterCharactersBoxOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterCharactersBoxLabel: {
    fontSize: 14,
    fontFamily: "DMMono_500Medium",
    color: colors.MediumGreen,
    textTransform: "uppercase",
    marginBottom: 8
  },
  filterCharactersBoxText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: colors.DarkGreen,
  },
});
