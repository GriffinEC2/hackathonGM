import { useCallback } from "react";
import PageComponentDONOTEDIT from "../components/PageComponentDONOTEDIT";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const onLogoFooterContainerClick = useCallback(() => {
    // Please sync "Home Page 1" to the project
  }, []);

  const onButtonMenuClick = useCallback(() => {
    // Please sync "Home Page 1" to the project
  }, []);

  const onButtonMenu1Click = useCallback(() => {
    // Please sync "Carbon Footprint Calculator Page" to the project
  }, []);

  const onButtonMenu2Click = useCallback(() => {
    // Please sync "Learn" to the project
  }, []);

  const onButtonMenu3Click = useCallback(() => {
    // Please sync "What can i do page" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/env-page");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <main className={styles.frame}>
        <PageComponentDONOTEDIT
          mediaCirclesPlayCircles="/media-circles-play-circles.svg"
          mediaCirclesPlayCircles1="/media-circles-play-circles.svg"
          handPointFinger="/hand-point-finger.svg"
          handPointFinger1="/hand-point-finger.svg"
          menuSquare="/menu-square.svg"
          menuSquare1="/menu-square.svg"
          image="/image.svg"
          image1="/image.svg"
          menuNineCircles="/menu-nine-circles.svg"
          menuNineCircles1="/menu-nine-circles.svg"
          patternLock="/pattern-lock.svg"
          patternLock1="/pattern-lock.svg"
          creditCardDoubleLeft="/credit-card-double-left.svg"
          creditCardDoubleLeft1="/credit-card-double-left.svg"
          settings2="/settings-2.svg"
          settings21="/settings-2.svg"
          help="/help.svg"
          help1="/help.svg"
          pageComponentDONOTEDITDisplay="unset"
          pageComponentDONOTEDITFlexDirection="unset"
          pageComponentDONOTEDITPadding="unset"
          pageComponentDONOTEDITAlignSelf="unset"
          pageComponentDONOTEDITFlex="unset"
          pageComponentDONOTEDITWidth="1280px"
          pageComponentDONOTEDITPosition="relative"
          pageComponentDONOTEDITHeight="2821px"
          sidebarPosition="absolute"
          sidebarTop="0px"
          sidebarLeft="0px"
          sidebarHeight="900px"
          sidebarPadding="21px 20px 22px"
          sidebarAlignSelf="unset"
          sidebarGap="unset"
          frameDivFlex="unset"
          frameDivPadding="unset"
          logoFooterWidth="241.1px"
          logoFooterAlignSelf="unset"
          logoFooterPadding="unset"
          glowIconOverflow="hidden"
          appBlocksIconLeft="calc(50% - 12.7px)"
          sideMenuMargin="unset"
          sideMenuFlex="unset"
          sideMenuPadding="unset"
          glowWidth="calc(100% + 0.1px)"
          glowHeight="calc(100% + 0.7px)"
          outlineWidth="calc(100% + 0.1px)"
          outlineHeight="calc(100% + 0.7px)"
          buttonMenuBorder="none"
          buttonMenuPadding="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor="transparent"
          buttonMenuMarginLeft="unset"
          buttonMenuFlex="unset"
          buttonMenuWidth="252.7px"
          buttonMenuAlignSelf="unset"
          buttonMenuBackground="linear-gradient(90deg, rgba(38, 112, 233, 0.3), rgba(38, 112, 233, 0))"
          buttonMenuBorderLeft="1px solid var(--color-royalblue)"
          glowHeight1="100%"
          glowFilter="blur(10px)"
          glowBackgroundColor="#2670e9"
          buttonMenuBorder1="none"
          buttonMenuPadding1="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor1="transparent"
          buttonMenuMarginLeft1="unset"
          buttonMenuFlex1="unset"
          buttonMenuBackground1="unset"
          buttonMenuBorderLeft1="unset"
          buttonMenuWidth1="252.7px"
          buttonMenuAlignSelf1="unset"
          handPointFingerWidth="var(--button-icon-size)"
          handPointFingerHeight="var(--button-icon-size)"
          glowHeight2="100%"
          glowFilter1="blur(10.48px)"
          glowBackgroundColor1="unset"
          buttonMenuBorder2="none"
          buttonMenuPadding2="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor2="transparent"
          buttonMenuMarginLeft2="unset"
          buttonMenuFlex2="unset"
          buttonMenuWidth2="252.7px"
          buttonMenuAlignSelf2="unset"
          buttonMenuBackground2="unset"
          buttonMenuBorderLeft2="unset"
          menuSquareIconWidth="var(--button-icon-size)"
          menuSquareIconHeight="var(--button-icon-size)"
          glowHeight3="100%"
          glowFilter2="blur(10.48px)"
          glowBackgroundColor2="unset"
          buttonMenuBorder3="none"
          buttonMenuPadding3="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor3="transparent"
          buttonMenuMarginLeft3="unset"
          buttonMenuFlex3="unset"
          buttonMenuWidth3="252.7px"
          buttonMenuAlignSelf3="unset"
          glowHeight4="100%"
          buttonMenuBorder4="none"
          buttonMenuPadding4="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor4="transparent"
          buttonMenuMarginLeft4="unset"
          buttonMenuFlex4="unset"
          buttonMenuWidth4="252.7px"
          buttonMenuAlignSelf4="unset"
          glowHeight5="100%"
          buttonMenuBorder5="none"
          buttonMenuPadding5="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor5="transparent"
          buttonMenuMarginLeft5="unset"
          buttonMenuFlex5="unset"
          buttonMenuWidth5="252.7px"
          buttonMenuAlignSelf5="unset"
          glowHeight6="100%"
          buttonMenuBorder6="none"
          buttonMenuPadding6="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor6="transparent"
          buttonMenuMarginLeft6="unset"
          buttonMenuMarginRight="unset"
          buttonMenuMarginBottom="unset"
          buttonMenuFlex6="unset"
          buttonMenuWidth6="252.7px"
          buttonMenuAlignSelf6="unset"
          glowHeight7="100%"
          sideMenuHeight="unset"
          sideMenuPadding1="unset"
          glowWidth1="calc(100% + 0.1px)"
          glowHeight8="calc(100% + 0.3px)"
          outlineWidth1="calc(100% + 0.1px)"
          outlineHeight1="calc(100% + 0.3px)"
          dividerWidth="241.1px"
          dividerPosition="relative"
          dividerHeight="1px"
          dividerAlignSelf="unset"
          dividerDisplay="unset"
          dividerFlexDirection="unset"
          linePosition="absolute"
          lineHeight="100%"
          lineWidth="100%"
          lineTop="0%"
          lineRight="0%"
          lineBottom="0%"
          lineLeft="0%"
          lineFlex="unset"
          buttonMenuBorder7="none"
          buttonMenuPadding7="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor7="transparent"
          buttonMenuMarginLeft7="unset"
          buttonMenuFlex7="unset"
          buttonMenuWidth7="252.7px"
          buttonMenuAlignSelf7="unset"
          glowHeight9="100%"
          buttonMenuBorder8="none"
          buttonMenuPadding8="var(--button-vertical-padding) var(--button-horizontal-padding)"
          buttonMenuBackgroundColor8="transparent"
          buttonMenuMarginLeft8="unset"
          buttonMenuMarginBottom1="unset"
          buttonMenuHeight="unset"
          buttonMenuWidth8="264.8px"
          buttonMenuAlignSelf8="unset"
          glowHeight10="100%"
          onLogoFooterContainerClick={onLogoFooterContainerClick}
          onButtonMenuClick={onButtonMenuClick}
          onButtonMenu1Click={onButtonMenu1Click}
          onButtonMenu2Click={onButtonMenu2Click}
          onButtonMenu3Click={onButtonMenu3Click}
        />
        <div className={styles.frame1}>
          <div className={styles.body}>
            <div className={styles.welcomeToCrab}>
              Welcome to Crab Code AI, your personalized gateway to the world of
              coding and artificial intelligence! Aspiring coders, enthusiasts,
              and learners alike, embark on a seamless journey with our
              innovative platform designed to demystify the complexities of
              selecting coding environments and optimizing hyperparameters. At
              Crab Code AI, we understand that navigating the vast landscape of
              coding can be overwhelming, especially for newcomers. Our platform
              empowers users to tailor their coding experience by assisting them
              in selecting the most suitable coding environment. What sets us
              apart is our unique feature that allows individuals to customize
              hyperparameters and fine-tune them to minimize their loss
              functions, providing an interactive and dynamic learning
              experience. Whether you're venturing into the realms of machine
              learning or refining your coding skills, Crab Code AI is your
              companion on the path to coding excellence. Dive in, explore, and
              let Crab Code AI elevate your coding journey to new heights!
            </div>
            <button
              className={styles.chooseOrCreateAnEnvironmenWrapper}
              onClick={onFrameButtonClick}
            >
              <b className={styles.chooseOrCreate}>
                Choose or Create an Environment
              </b>
            </button>
          </div>
        </div>
      </main>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.welcomeToCrab1}>Welcome to Crab Code AI</div>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
    </div>
  );
};

export default HomePage;
