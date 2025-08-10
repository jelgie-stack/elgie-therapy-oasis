import React, { useEffect } from 'react';
import { ContactModal } from './ContactModal';
import { useContactModal } from '@/hooks/useContactModal';
import { initContactBindings, cleanupContactBindings } from '@/lib/contactBindings';

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const { isOpen, openModal, closeModal, triggerRef } = useContactModal();

  useEffect(() => {
    // Initialize contact bindings when component mounts
    initContactBindings(openModal);
    
    // Cleanup on unmount
    return () => {
      cleanupContactBindings();
    };
  }, [openModal]);

  return (
    <>
      {children}
      <ContactModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        triggerRef={triggerRef}
      />
    </>
  );
}