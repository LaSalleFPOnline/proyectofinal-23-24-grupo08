import React from "react";
import { footerContent, footerTitle } from "./content";
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer> 
      {footerContent.map((section, index) => (
        <div key={index} className={styles.footerSections}>
          <span className={styles.sectionTitles}>{section.section}</span>
          <ul>
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};