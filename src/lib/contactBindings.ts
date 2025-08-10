/**
 * Contact Modal Auto-Binding System
 * Automatically binds contact modal to CTAs site-wide
 */

type ModalTrigger = () => void;

interface ContactBinding {
  element: HTMLElement;
  originalHandler?: (event: Event) => void;
  bound: boolean;
}

class ContactModalBinder {
  private static instance: ContactModalBinder;
  private modalTrigger: ModalTrigger | null = null;
  private bindings: Map<HTMLElement, ContactBinding> = new Map();
  private observer: MutationObserver | null = null;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): ContactModalBinder {
    if (!ContactModalBinder.instance) {
      ContactModalBinder.instance = new ContactModalBinder();
    }
    return ContactModalBinder.instance;
  }

  /**
   * Initialize the binder with modal trigger function
   */
  initialize(modalTrigger: ModalTrigger): void {
    if (this.isInitialized) return;

    this.modalTrigger = modalTrigger;
    this.setupObserver();
    this.bindExistingElements();
    this.isInitialized = true;
  }

  /**
   * Clean up all bindings and observers
   */
  destroy(): void {
    this.unbindAllElements();
    this.observer?.disconnect();
    this.observer = null;
    this.modalTrigger = null;
    this.isInitialized = false;
  }

  /**
   * Set up mutation observer to detect new elements
   */
  private setupObserver(): void {
    this.observer = new MutationObserver((mutations) => {
      let shouldCheck = false;

      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          shouldCheck = true;
        }
      });

      if (shouldCheck) {
        // Debounce to avoid excessive checking
        setTimeout(() => this.bindExistingElements(), 100);
      }
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Find and bind all relevant elements on the page
   */
  private bindExistingElements(): void {
    if (!this.modalTrigger) return;

    // Find elements by text content (case-insensitive)
    const textElements = this.findElementsByText('Contact for Questions');
    
    // Find elements by data attribute
    const dataElements = document.querySelectorAll('[data-contact-cta="true"]');

    // Combine both sets
    const allElements = new Set([...textElements, ...dataElements]);

    allElements.forEach((element) => {
      this.bindElement(element as HTMLElement);
    });
  }

  /**
   * Find elements containing specific text
   */
  private findElementsByText(searchText: string): HTMLElement[] {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const text = node.textContent?.trim().toLowerCase() || '';
          const target = searchText.toLowerCase();
          
          if (text.includes(target)) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_REJECT;
        }
      }
    );

    const elements: HTMLElement[] = [];
    let textNode: Text | null;

    while (textNode = walker.nextNode() as Text) {
      let parent = textNode.parentElement;
      
      // Find the closest interactive element (button, link, etc.)
      while (parent && !this.isInteractiveElement(parent)) {
        parent = parent.parentElement;
      }

      if (parent && !elements.includes(parent)) {
        elements.push(parent);
      }
    }

    return elements;
  }

  /**
   * Check if element is interactive (button, link, etc.)
   */
  private isInteractiveElement(element: HTMLElement): boolean {
    const tagName = element.tagName.toLowerCase();
    const role = element.getAttribute('role');
    
    return (
      tagName === 'button' ||
      tagName === 'a' ||
      role === 'button' ||
      element.hasAttribute('onclick') ||
      element.style.cursor === 'pointer' ||
      element.classList.contains('btn') ||
      element.classList.contains('button')
    );
  }

  /**
   * Bind modal trigger to a specific element
   */
  private bindElement(element: HTMLElement): void {
    if (!this.modalTrigger || this.bindings.has(element)) {
      return;
    }

    // Store original click handler if exists
    const originalHandler = element.onclick;

    const newHandler = (event: Event) => {
      event.preventDefault();
      event.stopPropagation();
      
      if (this.modalTrigger) {
        this.modalTrigger();
      }
    };

    // Replace the click handler
    element.onclick = newHandler;
    
    // Store binding info
    this.bindings.set(element, {
      element,
      originalHandler: originalHandler || undefined,
      bound: true
    });

    // Add visual indicator (optional)
    element.setAttribute('data-contact-modal-bound', 'true');
  }

  /**
   * Unbind modal trigger from a specific element
   */
  private unbindElement(element: HTMLElement): void {
    const binding = this.bindings.get(element);
    if (!binding) return;

    // Restore original handler
    if (binding.originalHandler) {
      element.onclick = binding.originalHandler;
    } else {
      element.onclick = null;
    }

    // Remove binding
    this.bindings.delete(element);
    element.removeAttribute('data-contact-modal-bound');
  }

  /**
   * Unbind all elements
   */
  private unbindAllElements(): void {
    this.bindings.forEach((_, element) => {
      this.unbindElement(element);
    });
  }

  /**
   * Get current binding status
   */
  getBindingInfo(): { totalBindings: number; elements: HTMLElement[] } {
    return {
      totalBindings: this.bindings.size,
      elements: Array.from(this.bindings.keys())
    };
  }
}

// Export singleton instance
export const contactModalBinder = ContactModalBinder.getInstance();

/**
 * Initialize contact modal binding system
 */
export const initializeContactBindings = (modalTrigger: ModalTrigger): void => {
  contactModalBinder.initialize(modalTrigger);
};

/**
 * Clean up contact modal binding system
 */
export const destroyContactBindings = (): void => {
  contactModalBinder.destroy();
};

/**
 * Manually trigger a rebind of all elements (useful after dynamic content updates)
 */
export const rebindContactElements = (): void => {
  if (contactModalBinder) {
    (contactModalBinder as any).bindExistingElements();
  }
};

/**
 * Get current binding statistics
 */
export const getContactBindingStats = () => {
  return contactModalBinder.getBindingInfo();
};