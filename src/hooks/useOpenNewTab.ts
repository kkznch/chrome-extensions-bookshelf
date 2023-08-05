import { atom, useAtom } from 'jotai';

const openInNewTabAtom = atom(false);

export const useOpenNewTab = () => {
  const [openInNewTab, setOpenInNewTab] = useAtom(openInNewTabAtom);

  const toggleOpenNewTab = () => {
    setOpenInNewTab(!openInNewTab);
  };

  return {
    openInNewTab,
    toggleOpenNewTab,
  };
};
