import { useLayoutEffect, useRef, useState } from 'react';
import { Fade } from 'react-bootstrap';
import i18n, { resources } from '../../languages/config';
import './style.scss';

interface IFlagSelector {
  innerFlagSelector?: boolean;
}

const FlagSelector: React.FC<IFlagSelector> = ({ innerFlagSelector }) => {
  // Ref
  const ref = useRef<any>(null);

  // States
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.resolvedLanguage);
  const [notSelectedLanguages, setNotSelectedLanguages] = useState<string[]>([]);

  // Effects
  useLayoutEffect(() => {
    // List of Not Selected Languages
    const languages = Object.keys(resources);
    setNotSelectedLanguages(languages.filter(language => language !== selectedLanguage));

    // Detect Click Outside
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [selectedLanguage]);

  // Handles
  const handleChangeLanguage = async (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
    setOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const altTextLanguage = (lang: string) => {
    const languagesArr = Object.entries(resources);
    const selectedLanguageArr: any = languagesArr.filter(translate => translate[0] === lang);
    if (selectedLanguageArr[0]) {
      return selectedLanguageArr[0][1].description;
    }
    return '';
  };

  return (
    <span ref={ref} className="flag-selector">
      <div onClick={() => setOpen(!open)}>
        <img alt={altTextLanguage(selectedLanguage)} src={`${window.location.origin}/${selectedLanguage}.png`} width="26" height="26" />
      </div>
      <Fade in={open}>
        <div>
          {notSelectedLanguages.map(lang => (
            <div key={lang} className="not-selected-flag" onClick={() => handleChangeLanguage(lang)}>
              <img alt={altTextLanguage(lang)} src={`${window.location.origin}/${lang}.png`} width="26" height="26" />
            </div>
          ))}
        </div>
      </Fade>
    </span>
  );
};

export { FlagSelector };
