import { useState, useRef } from 'react';

export function useContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  const openModal = (triggerElement?: HTMLElement) => {
    if (triggerElement) {
      triggerRef.current = triggerElement;
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    triggerRef,
  };
}