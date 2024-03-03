import { useMemo } from "react";
import ModeLightStateNormalSize from "./ModeLightStateNormalSize";
import styles from "./SideMenu.module.css";

const SideMenu = ({
  settings21,
  help1,
  propMarginLeft,
  propWidth,
  propAlignSelf,
  propMarginLeft1,
  propWidth1,
  propAlignSelf1,
}) => {
  const modeLightStateNormalSizeStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propMarginLeft, propWidth, propAlignSelf]);

  const modeLightStateNormalSizeStyle1 = useMemo(() => {
    return {
      marginLeft: propMarginLeft1,
      width: propWidth1,
      alignSelf: propAlignSelf1,
    };
  }, [propMarginLeft1, propWidth1, propAlignSelf1]);

  return (
    <div className={styles.sideMenu}>
      <div className={styles.glow} />
      <div className={styles.outline} />
      <div className={styles.divider}>
        <div className={styles.line} />
      </div>
      <ModeLightStateNormalSize
        iconDimensions="/settings-2.svg"
        text="Settings"
        dimensionIdentifier="/settings-2.svg"
        showRightIcon={false}
        showGlow
        showLeftIcon
        modeLightStateNormalSizeWidth="253px"
        modeLightStateNormalSizeBorder="unset"
        modeLightStateNormalSizeBackgroundColor="unset"
        modeLightStateNormalSizePadding="0px var(--padding-6xl) 0px 0px"
        modeLightStateNormalSizeMarginLeft="-7px"
        modeLightStateNormalSizeFlex="1"
        modeLightStateNormalSizeBackground="unset"
        modeLightStateNormalSizeBorderLeft="unset"
        modeLightStateNormalSizeMarginRight="unset"
        modeLightStateNormalSizeMarginBottom="unset"
        modeLightStateNormalSizeHeight="unset"
        modeLightStateNormalSizeAlignSelf="unset"
        userIconWidth="var(--button-icon-size)"
        userIconHeight="var(--button-icon-size)"
        glowHeight="100%"
        glowFilter="blur(10.48px)"
        glowBackgroundColor="unset"
      />
      <ModeLightStateNormalSize
        iconDimensions="/help.svg"
        text="Help center"
        dimensionIdentifier="/help.svg"
        showRightIcon={false}
        showGlow
        showLeftIcon
        modeLightStateNormalSizeWidth="265px"
        modeLightStateNormalSizeBorder="unset"
        modeLightStateNormalSizeBackgroundColor="unset"
        modeLightStateNormalSizePadding="0px var(--padding-5xl) 0px 0px"
        modeLightStateNormalSizeMarginLeft="-13px"
        modeLightStateNormalSizeFlex="unset"
        modeLightStateNormalSizeBackground="unset"
        modeLightStateNormalSizeBorderLeft="unset"
        modeLightStateNormalSizeMarginRight="unset"
        modeLightStateNormalSizeMarginBottom="-1px"
        modeLightStateNormalSizeHeight="29px"
        modeLightStateNormalSizeAlignSelf="unset"
        userIconWidth="var(--button-icon-size)"
        userIconHeight="var(--button-icon-size)"
        glowHeight="100%"
        glowFilter="blur(10.48px)"
        glowBackgroundColor="unset"
      />
    </div>
  );
};

export default SideMenu;
