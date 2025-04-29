import {StyleSheet} from 'react-native';
import colors from '../../utils/constants/colors';

export const styles = StyleSheet.create({
  characterInfoTile: {
    backgroundColor: colors.LightGreen,
    borderRadius: 10,
    padding: 8,
    marginBottom: 12,
    flex: 1
  },
  characterInfoTileLabel: {
    color: colors.MediumGreen,
    fontFamily: "DMMono_500Medium",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  characterInfoTileText: {
    color: colors.DarkGreen,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    letterSpacing: -0.5
  },
  tileMarginRight: {
    marginRight: 6
  },
  tileMarginLeft: {
    marginLeft: 6
  },
});
