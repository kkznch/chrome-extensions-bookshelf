import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const openInNewTabAtom = atomWithStorage('bookshelf-open-in-new-tab', false);

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
