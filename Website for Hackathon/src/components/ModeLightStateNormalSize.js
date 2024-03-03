import { useMemo } from "react";
import styles from "./ModeLightStateNormalSize.module.css";

const ModeLightStateNormalSize = ({
  iconDimensions,
  text = "Account",
  dimensionIdentifier,
  showRightIcon = true,
  showGlow = true,
  showLeftIcon = false,
  modeLightStateNormalSizeWidth,
  modeLightStateNormalSizeBorder,
  modeLightStateNormalSizeBackgroundColor,
  modeLightStateNormalSizePadding,
  modeLightStateNormalSizeMarginLeft,
  modeLightStateNormalSizeFlex,
  modeLightStateNormalSizeBackground,
  modeLightStateNormalSizeBorderLeft,
  modeLightStateNormalSizeMarginRight,
  modeLightStateNormalSizeMarginBottom,
  modeLightStateNormalSizeHeight,
  modeLightStateNormalSizeAlignSelf,
  userIconWidth,
  userIconHeight,
  glowHeight,
  glowFilter,
  glowBackgroundColor,
  onButtonMenu1Click,
}) => {
  const modeLightStateNormalSizeStyle = useMemo(() => {
    return {
      width: modeLightStateNormalSizeWidth,
      border: modeLightStateNormalSizeBorder,
      backgroundColor: modeLightStateNormalSizeBackgroundColor,
      padding: modeLightStateNormalSizePadding,
      marginLeft: modeLightStateNormalSizeMarginLeft,
      flex: modeLightStateNormalSizeFlex,
      background: modeLightStateNormalSizeBackground,
      borderLeft: modeLightStateNormalSizeBorderLeft,
      marginRight: modeLightStateNormalSizeMarginRight,
      marginBottom: modeLightStateNormalSizeMarginBottom,
      height: modeLightStateNormalSizeHeight,
      alignSelf: modeLightStateNormalSizeAlignSelf,
    };
  }, [
    modeLightStateNormalSizeWidth,
    modeLightStateNormalSizeBorder,
    modeLightStateNormalSizeBackgroundColor,
    modeLightStateNormalSizePadding,
    modeLightStateNormalSizeMarginLeft,
    modeLightStateNormalSizeFlex,
    modeLightStateNormalSizeBackground,
    modeLightStateNormalSizeBorderLeft,
    modeLightStateNormalSizeMarginRight,
    modeLightStateNormalSizeMarginBottom,
    modeLightStateNormalSizeHeight,
    modeLightStateNormalSizeAlignSelf,
  ]);

  const userIconStyle = useMemo(() => {
    return {
      width: userIconWidth,
      height: userIconHeight,
    };
  }, [userIconWidth, userIconHeight]);

  const glow11Style = useMemo(() => {
    return {
      height: glowHeight,
      filter: glowFilter,
      backgroundColor: glowBackgroundColor,
    };
  }, [glowHeight, glowFilter, glowBackgroundColor]);

  return (
    <div
      className={styles.modelightStatenormalSize}
      style={modeLightStateNormalSizeStyle}
      onClick={onButtonMenu1Click}
    >
      {showLeftIcon && (
        <img className={styles.userIcon} alt="" src={iconDimensions} />
      )}
      <div className={styles.account}>{text}</div>
      {showRightIcon && (
        <img
          className={styles.userIcon1}
          alt=""
          src={dimensionIdentifier}
          style={userIconStyle}
        />
      )}
      {showGlow && <div className={styles.glow} style={glow11Style} />}
    </div>
  );
};

export default ModeLightStateNormalSize;
