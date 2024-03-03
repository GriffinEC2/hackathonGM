import { useMemo } from "react";
import styles from "./LogoFooter.module.css";

const LogoFooter = ({
  appBlocksIconWidth,
  appBlocksIconAlignSelf,
  appBlocksIconPadding,
  companyOverflow,
  propLeft,
  onLogoFooterContainerClick,
}) => {
  const logoFooter1Style = useMemo(() => {
    return {
      width: appBlocksIconWidth,
      alignSelf: appBlocksIconAlignSelf,
      padding: appBlocksIconPadding,
    };
  }, [appBlocksIconWidth, appBlocksIconAlignSelf, appBlocksIconPadding]);

  const glowIcon1Style = useMemo(() => {
    return {
      overflow: companyOverflow,
    };
  }, [companyOverflow]);

  const appBlocksIcon1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={styles.logoFooter}
      onClick={onLogoFooterContainerClick}
      style={logoFooter1Style}
    >
      <img
        className={styles.glowIcon}
        alt=""
        src="/glow.svg"
        style={glowIcon1Style}
      />
      <div className={styles.logoDesigncode}>
        <img
          className={styles.appBlocksIcon}
          alt=""
          src="/app-blocks.svg"
          style={appBlocksIcon1Style}
        />
      </div>
      <b className={styles.company}> Hackathon</b>
    </div>
  );
};

export default LogoFooter;
