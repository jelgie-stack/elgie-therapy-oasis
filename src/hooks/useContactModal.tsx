import { useState, useEffect, useCallback } from 'react';

interface UseContactModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  pageTitle: string;
  pageUrl: string;
}

export const useContactModal = (): UseContactModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const [pageUrl, setPageUrl] = useState('');

  const openModal = useCallback(() => {
    setPageTitle(document.title);
    setPageUrl(window.location.href);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const modalContent = target.closest('[role="dialog"]');
      
      if (!modalContent) {
        closeModal();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    pageTitle,
    pageUrl
  };
};