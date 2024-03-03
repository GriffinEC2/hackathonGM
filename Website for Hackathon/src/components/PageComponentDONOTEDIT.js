import { useMemo } from "react";
import styles from "./PageComponentDONOTEDIT.module.css";

const PageComponentDONOTEDIT = ({
  mediaCirclesPlayCircles,
  mediaCirclesPlayCircles1,
  handPointFinger,
  handPointFinger1,
  menuSquare,
  menuSquare1,
  image,
  image1,
  menuNineCircles,
  menuNineCircles1,
  patternLock,
  patternLock1,
  creditCardDoubleLeft,
  creditCardDoubleLeft1,
  settings2,
  settings21,
  help,
  help1,
  pageComponentDONOTEDITDisplay,
  pageComponentDONOTEDITFlexDirection,
  pageComponentDONOTEDITPadding,
  pageComponentDONOTEDITAlignSelf,
  pageComponentDONOTEDITFlex,
  pageComponentDONOTEDITWidth,
  pageComponentDONOTEDITPosition,
  pageComponentDONOTEDITHeight,
  sidebarPosition,
  sidebarTop,
  sidebarLeft,
  sidebarHeight,
  sidebarPadding,
  sidebarAlignSelf,
  sidebarGap,
  frameDivFlex,
  frameDivPadding,
  logoFooterWidth,
  logoFooterAlignSelf,
  logoFooterPadding,
  glowIconOverflow,
  appBlocksIconLeft,
  sideMenuMargin,
  sideMenuFlex,
  sideMenuPadding,
  glowWidth,
  glowHeight,
  outlineWidth,
  outlineHeight,
  buttonMenuBorder,
  buttonMenuPadding,
  buttonMenuBackgroundColor,
  buttonMenuMarginLeft,
  buttonMenuFlex,
  buttonMenuWidth,
  buttonMenuAlignSelf,
  buttonMenuBackground,
  buttonMenuBorderLeft,
  glowHeight1,
  glowFilter,
  glowBackgroundColor,
  buttonMenuBorder1,
  buttonMenuPadding1,
  buttonMenuBackgroundColor1,
  buttonMenuMarginLeft1,
  buttonMenuFlex1,
  buttonMenuBackground1,
  buttonMenuBorderLeft1,
  buttonMenuWidth1,
  buttonMenuAlignSelf1,
  handPointFingerWidth,
  handPointFingerHeight,
  glowHeight2,
  glowFilter1,
  glowBackgroundColor1,
  buttonMenuBorder2,
  buttonMenuPadding2,
  buttonMenuBackgroundColor2,
  buttonMenuMarginLeft2,
  buttonMenuFlex2,
  buttonMenuWidth2,
  buttonMenuAlignSelf2,
  buttonMenuBackground2,
  buttonMenuBorderLeft2,
  menuSquareIconWidth,
  menuSquareIconHeight,
  glowHeight3,
  glowFilter2,
  glowBackgroundColor2,
  buttonMenuBorder3,
  buttonMenuPadding3,
  buttonMenuBackgroundColor3,
  buttonMenuMarginLeft3,
  buttonMenuFlex3,
  buttonMenuWidth3,
  buttonMenuAlignSelf3,
  glowHeight4,
  buttonMenuBorder4,
  buttonMenuPadding4,
  buttonMenuBackgroundColor4,
  buttonMenuMarginLeft4,
  buttonMenuFlex4,
  buttonMenuWidth4,
  buttonMenuAlignSelf4,
  glowHeight5,
  buttonMenuBorder5,
  buttonMenuPadding5,
  buttonMenuBackgroundColor5,
  buttonMenuMarginLeft5,
  buttonMenuFlex5,
  buttonMenuWidth5,
  buttonMenuAlignSelf5,
  glowHeight6,
  buttonMenuBorder6,
  buttonMenuPadding6,
  buttonMenuBackgroundColor6,
  buttonMenuMarginLeft6,
  buttonMenuMarginRight,
  buttonMenuMarginBottom,
  buttonMenuFlex6,
  buttonMenuWidth6,
  buttonMenuAlignSelf6,
  glowHeight7,
  sideMenuHeight,
  sideMenuPadding1,
  glowWidth1,
  glowHeight8,
  outlineWidth1,
  outlineHeight1,
  dividerWidth,
  dividerPosition,
  dividerHeight,
  dividerAlignSelf,
  dividerDisplay,
  dividerFlexDirection,
  linePosition,
  lineHeight,
  lineWidth,
  lineTop,
  lineRight,
  lineBottom,
  lineLeft,
  lineFlex,
  buttonMenuBorder7,
  buttonMenuPadding7,
  buttonMenuBackgroundColor7,
  buttonMenuMarginLeft7,
  buttonMenuFlex7,
  buttonMenuWidth7,
  buttonMenuAlignSelf7,
  glowHeight9,
  buttonMenuBorder8,
  buttonMenuPadding8,
  buttonMenuBackgroundColor8,
  buttonMenuMarginLeft8,
  buttonMenuMarginBottom1,
  buttonMenuHeight,
  buttonMenuWidth8,
  buttonMenuAlignSelf8,
  glowHeight10,
  onLogoFooterContainerClick,
  onButtonMenuClick,
  onButtonMenu1Click,
  onButtonMenu2Click,
  onButtonMenu3Click,
}) => {
  const pageComponentDONOTEDITStyle = useMemo(() => {
    return {
      display: pageComponentDONOTEDITDisplay,
      flexDirection: pageComponentDONOTEDITFlexDirection,
      padding: pageComponentDONOTEDITPadding,
      alignSelf: pageComponentDONOTEDITAlignSelf,
      flex: pageComponentDONOTEDITFlex,
      width: pageComponentDONOTEDITWidth,
      position: pageComponentDONOTEDITPosition,
      height: pageComponentDONOTEDITHeight,
    };
  }, [
    pageComponentDONOTEDITDisplay,
    pageComponentDONOTEDITFlexDirection,
    pageComponentDONOTEDITPadding,
    pageComponentDONOTEDITAlignSelf,
    pageComponentDONOTEDITFlex,
    pageComponentDONOTEDITWidth,
    pageComponentDONOTEDITPosition,
    pageComponentDONOTEDITHeight,
  ]);

  const sidebarStyle = useMemo(() => {
    return {
      position: sidebarPosition,
      top: sidebarTop,
      left: sidebarLeft,
      height: sidebarHeight,
      padding: sidebarPadding,
      alignSelf: sidebarAlignSelf,
      gap: sidebarGap,
    };
  }, [
    sidebarPosition,
    sidebarTop,
    sidebarLeft,
    sidebarHeight,
    sidebarPadding,
    sidebarAlignSelf,
    sidebarGap,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: frameDivFlex,
      padding: frameDivPadding,
    };
  }, [frameDivFlex, frameDivPadding]);

  const logoFooterStyle = useMemo(() => {
    return {
      width: logoFooterWidth,
      alignSelf: logoFooterAlignSelf,
      padding: logoFooterPadding,
    };
  }, [logoFooterWidth, logoFooterAlignSelf, logoFooterPadding]);

  const glowIconStyle = useMemo(() => {
    return {
      overflow: glowIconOverflow,
    };
  }, [glowIconOverflow]);

  const appBlocksIconStyle = useMemo(() => {
    return {
      left: appBlocksIconLeft,
    };
  }, [appBlocksIconLeft]);

  const sideMenuStyle = useMemo(() => {
    return {
      margin: sideMenuMargin,
      flex: sideMenuFlex,
      padding: sideMenuPadding,
    };
  }, [sideMenuMargin, sideMenuFlex, sideMenuPadding]);

  const glowStyle = useMemo(() => {
    return {
      width: glowWidth,
      height: glowHeight,
    };
  }, [glowWidth, glowHeight]);

  const outlineStyle = useMemo(() => {
    return {
      width: outlineWidth,
      height: outlineHeight,
    };
  }, [outlineWidth, outlineHeight]);

  const buttonMenuStyle = useMemo(() => {
    return {
      border: buttonMenuBorder,
      padding: buttonMenuPadding,
      backgroundColor: buttonMenuBackgroundColor,
      marginLeft: buttonMenuMarginLeft,
      flex: buttonMenuFlex,
      width: buttonMenuWidth,
      alignSelf: buttonMenuAlignSelf,
      background: buttonMenuBackground,
      borderLeft: buttonMenuBorderLeft,
    };
  }, [
    buttonMenuBorder,
    buttonMenuPadding,
    buttonMenuBackgroundColor,
    buttonMenuMarginLeft,
    buttonMenuFlex,
    buttonMenuWidth,
    buttonMenuAlignSelf,
    buttonMenuBackground,
    buttonMenuBorderLeft,
  ]);

  const glow1Style = useMemo(() => {
    return {
      height: glowHeight1,
      filter: glowFilter,
      backgroundColor: glowBackgroundColor,
    };
  }, [glowHeight1, glowFilter, glowBackgroundColor]);

  const buttonMenu1Style = useMemo(() => {
    return {
      border: buttonMenuBorder1,
      padding: buttonMenuPadding1,
      backgroundColor: buttonMenuBackgroundColor1,
      marginLeft: buttonMenuMarginLeft1,
      flex: buttonMenuFlex1,
      background: buttonMenuBackground1,
      borderLeft: buttonMenuBorderLeft1,
      width: buttonMenuWidth1,
      alignSelf: buttonMenuAlignSelf1,
    };
  }, [
    buttonMenuBorder1,
    buttonMenuPadding1,
    buttonMenuBackgroundColor1,
    buttonMenuMarginLeft1,
    buttonMenuFlex1,
    buttonMenuBackground1,
    buttonMenuBorderLeft1,
    buttonMenuWidth1,
    buttonMenuAlignSelf1,
  ]);

  const handPointFingerStyle = useMemo(() => {
    return {
      width: handPointFingerWidth,
      height: handPointFingerHeight,
    };
  }, [handPointFingerWidth, handPointFingerHeight]);

  const glow2Style = useMemo(() => {
    return {
      height: glowHeight2,
      filter: glowFilter1,
      backgroundColor: glowBackgroundColor1,
    };
  }, [glowHeight2, glowFilter1, glowBackgroundColor1]);

  const buttonMenu2Style = useMemo(() => {
    return {
      border: buttonMenuBorder2,
      padding: buttonMenuPadding2,
      backgroundColor: buttonMenuBackgroundColor2,
      marginLeft: buttonMenuMarginLeft2,
      flex: buttonMenuFlex2,
      width: buttonMenuWidth2,
      alignSelf: buttonMenuAlignSelf2,
      background: buttonMenuBackground2,
      borderLeft: buttonMenuBorderLeft2,
    };
  }, [
    buttonMenuBorder2,
    buttonMenuPadding2,
    buttonMenuBackgroundColor2,
    buttonMenuMarginLeft2,
    buttonMenuFlex2,
    buttonMenuWidth2,
    buttonMenuAlignSelf2,
    buttonMenuBackground2,
    buttonMenuBorderLeft2,
  ]);

  const menuSquareIconStyle = useMemo(() => {
    return {
      width: menuSquareIconWidth,
      height: menuSquareIconHeight,
    };
  }, [menuSquareIconWidth, menuSquareIconHeight]);

  const glow3Style = useMemo(() => {
    return {
      height: glowHeight3,
      filter: glowFilter2,
      backgroundColor: glowBackgroundColor2,
    };
  }, [glowHeight3, glowFilter2, glowBackgroundColor2]);

  const buttonMenu3Style = useMemo(() => {
    return {
      border: buttonMenuBorder3,
      padding: buttonMenuPadding3,
      backgroundColor: buttonMenuBackgroundColor3,
      marginLeft: buttonMenuMarginLeft3,
      flex: buttonMenuFlex3,
      width: buttonMenuWidth3,
      alignSelf: buttonMenuAlignSelf3,
    };
  }, [
    buttonMenuBorder3,
    buttonMenuPadding3,
    buttonMenuBackgroundColor3,
    buttonMenuMarginLeft3,
    buttonMenuFlex3,
    buttonMenuWidth3,
    buttonMenuAlignSelf3,
  ]);

  const glow4Style = useMemo(() => {
    return {
      height: glowHeight4,
    };
  }, [glowHeight4]);

  const buttonMenu4Style = useMemo(() => {
    return {
      border: buttonMenuBorder4,
      padding: buttonMenuPadding4,
      backgroundColor: buttonMenuBackgroundColor4,
      marginLeft: buttonMenuMarginLeft4,
      flex: buttonMenuFlex4,
      width: buttonMenuWidth4,
      alignSelf: buttonMenuAlignSelf4,
    };
  }, [
    buttonMenuBorder4,
    buttonMenuPadding4,
    buttonMenuBackgroundColor4,
    buttonMenuMarginLeft4,
    buttonMenuFlex4,
    buttonMenuWidth4,
    buttonMenuAlignSelf4,
  ]);

  const glow5Style = useMemo(() => {
    return {
      height: glowHeight5,
    };
  }, [glowHeight5]);

  const buttonMenu5Style = useMemo(() => {
    return {
      border: buttonMenuBorder5,
      padding: buttonMenuPadding5,
      backgroundColor: buttonMenuBackgroundColor5,
      marginLeft: buttonMenuMarginLeft5,
      flex: buttonMenuFlex5,
      width: buttonMenuWidth5,
      alignSelf: buttonMenuAlignSelf5,
    };
  }, [
    buttonMenuBorder5,
    buttonMenuPadding5,
    buttonMenuBackgroundColor5,
    buttonMenuMarginLeft5,
    buttonMenuFlex5,
    buttonMenuWidth5,
    buttonMenuAlignSelf5,
  ]);

  const glow6Style = useMemo(() => {
    return {
      height: glowHeight6,
    };
  }, [glowHeight6]);

  const buttonMenu6Style = useMemo(() => {
    return {
      border: buttonMenuBorder6,
      padding: buttonMenuPadding6,
      backgroundColor: buttonMenuBackgroundColor6,
      marginLeft: buttonMenuMarginLeft6,
      marginRight: buttonMenuMarginRight,
      marginBottom: buttonMenuMarginBottom,
      flex: buttonMenuFlex6,
      width: buttonMenuWidth6,
      alignSelf: buttonMenuAlignSelf6,
    };
  }, [
    buttonMenuBorder6,
    buttonMenuPadding6,
    buttonMenuBackgroundColor6,
    buttonMenuMarginLeft6,
    buttonMenuMarginRight,
    buttonMenuMarginBottom,
    buttonMenuFlex6,
    buttonMenuWidth6,
    buttonMenuAlignSelf6,
  ]);

  const glow7Style = useMemo(() => {
    return {
      height: glowHeight7,
    };
  }, [glowHeight7]);

  const sideMenu1Style = useMemo(() => {
    return {
      height: sideMenuHeight,
      padding: sideMenuPadding1,
    };
  }, [sideMenuHeight, sideMenuPadding1]);

  const glow8Style = useMemo(() => {
    return {
      width: glowWidth1,
      height: glowHeight8,
    };
  }, [glowWidth1, glowHeight8]);

  const outline1Style = useMemo(() => {
    return {
      width: outlineWidth1,
      height: outlineHeight1,
    };
  }, [outlineWidth1, outlineHeight1]);

  const dividerStyle = useMemo(() => {
    return {
      width: dividerWidth,
      position: dividerPosition,
      height: dividerHeight,
      alignSelf: dividerAlignSelf,
      display: dividerDisplay,
      flexDirection: dividerFlexDirection,
    };
  }, [
    dividerWidth,
    dividerPosition,
    dividerHeight,
    dividerAlignSelf,
    dividerDisplay,
    dividerFlexDirection,
  ]);

  const lineStyle = useMemo(() => {
    return {
      position: linePosition,
      height: lineHeight,
      width: lineWidth,
      top: lineTop,
      right: lineRight,
      bottom: lineBottom,
      left: lineLeft,
      flex: lineFlex,
    };
  }, [
    linePosition,
    lineHeight,
    lineWidth,
    lineTop,
    lineRight,
    lineBottom,
    lineLeft,
    lineFlex,
  ]);

  const buttonMenu7Style = useMemo(() => {
    return {
      border: buttonMenuBorder7,
      padding: buttonMenuPadding7,
      backgroundColor: buttonMenuBackgroundColor7,
      marginLeft: buttonMenuMarginLeft7,
      flex: buttonMenuFlex7,
      width: buttonMenuWidth7,
      alignSelf: buttonMenuAlignSelf7,
    };
  }, [
    buttonMenuBorder7,
    buttonMenuPadding7,
    buttonMenuBackgroundColor7,
    buttonMenuMarginLeft7,
    buttonMenuFlex7,
    buttonMenuWidth7,
    buttonMenuAlignSelf7,
  ]);

  const glow9Style = useMemo(() => {
    return {
      height: glowHeight9,
    };
  }, [glowHeight9]);

  const buttonMenu8Style = useMemo(() => {
    return {
      border: buttonMenuBorder8,
      padding: buttonMenuPadding8,
      backgroundColor: buttonMenuBackgroundColor8,
      marginLeft: buttonMenuMarginLeft8,
      marginBottom: buttonMenuMarginBottom1,
      height: buttonMenuHeight,
      width: buttonMenuWidth8,
      alignSelf: buttonMenuAlignSelf8,
    };
  }, [
    buttonMenuBorder8,
    buttonMenuPadding8,
    buttonMenuBackgroundColor8,
    buttonMenuMarginLeft8,
    buttonMenuMarginBottom1,
    buttonMenuHeight,
    buttonMenuWidth8,
    buttonMenuAlignSelf8,
  ]);

  const glow10Style = useMemo(() => {
    return {
      height: glowHeight10,
    };
  }, [glowHeight10]);

  return (
    <div
      className={styles.pageComponentDoNotEdit}
      style={pageComponentDONOTEDITStyle}
    >
      <div className={styles.sidebar} style={sidebarStyle}>
        <div className={styles.logoFooterParent} style={frameDivStyle}>
          <div
            className={styles.logoFooter}
            onClick={onLogoFooterContainerClick}
            style={logoFooterStyle}
          >
            <img
              className={styles.glowIcon}
              alt=""
              src="/glow.svg"
              style={glowIconStyle}
            />
            <div className={styles.logoDesigncode}>
              <img
                className={styles.appBlocksIcon}
                alt=""
                src="/app-blocks.svg"
                style={appBlocksIconStyle}
              />
            </div>
            <b className={styles.company}> Hackathon</b>
          </div>
          <div className={styles.sideMenu} style={sideMenuStyle}>
            <div className={styles.glow} style={glowStyle} />
            <div className={styles.outline} style={outlineStyle} />
            <button
              className={styles.buttonMenu}
              onClick={onButtonMenuClick}
              style={buttonMenuStyle}
            >
              <img
                className={styles.mediaCirclesPlayCircles}
                alt=""
                src={mediaCirclesPlayCircles}
              />
              <div className={styles.account}>Home</div>
              <img
                className={styles.mediaCirclesPlayCircles1}
                alt=""
                src={mediaCirclesPlayCircles1}
              />
              <div className={styles.glow1} style={glow1Style} />
            </button>
            <button
              className={styles.buttonMenu1}
              onClick={onButtonMenu1Click}
              style={buttonMenu1Style}
            >
              <img
                className={styles.handPointFinger}
                alt=""
                src={handPointFinger}
              />
              <div className={styles.account1}>Choose Eviroment</div>
              <img
                className={styles.handPointFinger1}
                alt=""
                src={handPointFinger1}
                style={handPointFingerStyle}
              />
              <div className={styles.glow2} style={glow2Style} />
            </button>
            <button
              className={styles.buttonMenu2}
              onClick={onButtonMenu2Click}
              style={buttonMenu2Style}
            >
              <img className={styles.menuSquareIcon} alt="" src={menuSquare} />
              <div className={styles.account2}>Change Hyper-Parameters</div>
              <img
                className={styles.menuSquareIcon1}
                alt=""
                src={menuSquare1}
                style={menuSquareIconStyle}
              />
              <div className={styles.glow3} style={glow3Style} />
            </button>
            <button
              className={styles.buttonMenu3}
              onClick={onButtonMenu3Click}
              style={buttonMenu3Style}
            >
              <img className={styles.imageIcon} alt="" src={image} />
              <div className={styles.account3}>Graphs Page(rename)</div>
              <img className={styles.imageIcon1} alt="" src={image1} />
              <div className={styles.glow4} style={glow4Style} />
            </button>
            <button className={styles.buttonMenu4} style={buttonMenu4Style}>
              <img
                className={styles.menuNineCircles}
                alt=""
                src={menuNineCircles}
              />
              <div className={styles.account4}>Place holder</div>
              <img
                className={styles.menuNineCircles1}
                alt=""
                src={menuNineCircles1}
              />
              <div className={styles.glow5} style={glow5Style} />
            </button>
            <button className={styles.buttonMenu5} style={buttonMenu5Style}>
              <img
                className={styles.patternLockIcon}
                alt=""
                src={patternLock}
              />
              <div className={styles.account5}>Place holder</div>
              <img
                className={styles.patternLockIcon1}
                alt=""
                src={patternLock1}
              />
              <div className={styles.glow6} style={glow6Style} />
            </button>
            <button className={styles.buttonMenu6} style={buttonMenu6Style}>
              <img
                className={styles.creditCardDoubleLeft}
                alt=""
                src={creditCardDoubleLeft}
              />
              <div className={styles.account6}>Place holder</div>
              <img
                className={styles.creditCardDoubleLeft1}
                alt=""
                src={creditCardDoubleLeft1}
              />
              <div className={styles.glow7} style={glow7Style} />
            </button>
          </div>
        </div>
        <div className={styles.sideMenu1} style={sideMenu1Style}>
          <div className={styles.glow8} style={glow8Style} />
          <div className={styles.outline1} style={outline1Style} />
          <div className={styles.divider} style={dividerStyle}>
            <div className={styles.line} style={lineStyle} />
          </div>
          <button className={styles.buttonMenu7} style={buttonMenu7Style}>
            <img className={styles.settings2Icon} alt="" src={settings2} />
            <div className={styles.account7}>Settings</div>
            <img className={styles.settings2Icon1} alt="" src={settings21} />
            <div className={styles.glow9} style={glow9Style} />
          </button>
          <button className={styles.buttonMenu8} style={buttonMenu8Style}>
            <img className={styles.helpIcon} alt="" src={help} />
            <div className={styles.account8}>Help center</div>
            <img className={styles.helpIcon1} alt="" src={help1} />
            <div className={styles.glow10} style={glow10Style} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageComponentDONOTEDIT;
