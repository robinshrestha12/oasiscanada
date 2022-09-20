import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { DropdownButton, Dropdown, MenuItem } from "react-bootstrap";
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    
    <div className="select " >
    <label htmlFor="selectLanguage"><h5></h5></label>
      <select 
        //value={i18n.language}
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)

        } className="custom-select my-select"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        {/* <option value="it">Italiano</option> */}
        {/* <option value="sp">Español</option>
        <option value="kr">Kirundi</option> */}
      </select>
    </div>
  );
}
export default LanguageSwitcher;