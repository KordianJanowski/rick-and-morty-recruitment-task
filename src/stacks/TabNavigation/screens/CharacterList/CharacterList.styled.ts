import {StyleSheet} from 'react-native';
import colors from '../../../../utils/constants/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.LightGreen
  },
  characterCard: {
    backgroundColor: colors.LightGreen,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 200,
    borderRadius: 24,
    marginBottom: 25,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: colors.PrimaryGreen,
  },
  characterCardInfoBox: {
    width: "45%",
    height: "100%",
    padding: 16,
  },
  characterCardImageBox: {
    width: "55%",
    padding: 10
  },
  characterCardInfoBoxLabel: {
    fontSize: 12,
    fontFamily: "DMMono_500Medium",
    color: colors.MediumGreen,
    textTransform: "uppercase",
    letterSpacing: 1
  },
  characterCardInfoBoxText: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: colors.DarkGreen,
    marginBottom: 8
  },
  characterCardImage: {
    height: "100%",
    aspectRatio: 1,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.PrimaryGreen,
  }
});
