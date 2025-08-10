// Contact modal binding utility
// Automatically binds contact modal triggers to CTAs with "Contact for Questions" text or data-contact-cta="true"

let bindingObserver: MutationObserver | null = null;
let openModalFunction: ((triggerElement?: HTMLElement) => void) | null = null;
const boundElements = new WeakSet<Element>();

export function initContactBindings(openModal: (triggerElement?: HTMLElement) => void) {
  openModalFunction = openModal;
  
  // Bind to existing elements
  bindToExistingElements();
  
  // Set up observer for dynamic content
  setupMutationObserver();
}

export function cleanupContactBindings() {
  if (bindingObserver) {
    bindingObserver.disconnect();
    bindingObserver = null;
  }
  openModalFunction = null;
}

function bindToExistingElements() {
  if (!openModalFunction) return;
  
  const elements = findContactCTAs();
  elements.forEach(element => bindToElement(element));
}

function findContactCTAs(): Element[] {
  const elements: Element[] = [];
  
  // Find by text content (case-insensitive)
  const allElements = document.querySelectorAll('button, a, [role="button"]');
  allElements.forEach(element => {
    const text = element.textContent?.trim().toLowerCase();
    if (text === 'contact for questions') {
      elements.push(element);
    }
  });
  
  // Find by data attribute
  const dataElements = document.querySelectorAll('[data-contact-cta="true"]');
  dataElements.forEach(element => elements.push(element));
  
  return elements;
}

function bindToElement(element: Element) {
  if (boundElements.has(element) || !openModalFunction) {
    return; // Already bound or no open function available
  }
  
  const handleClick = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (openModalFunction) {
      openModalFunction(element as HTMLElement);
    }
  };
  
  element.addEventListener('click', handleClick);
  boundElements.add(element);
  
  // Add visual indicator that this is a modal trigger
  element.setAttribute('aria-haspopup', 'dialog');
  element.setAttribute('aria-expanded', 'false');
}

function setupMutationObserver() {
  if (bindingObserver) {
    bindingObserver.disconnect();
  }
  
  bindingObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            // Check if the added element itself is a contact CTA
            const text = element.textContent?.trim().toLowerCase();
            if (
              (text === 'contact for questions' && 
               (element.tagName === 'BUTTON' || element.tagName === 'A' || element.hasAttribute('role'))) ||
              element.hasAttribute('data-contact-cta')
            ) {
              bindToElement(element);
            }
            
            // Check descendants
            const descendants = findContactCTAs();
            descendants.forEach(desc => bindToElement(desc));
          }
        });
      }
    });
  });
  
  bindingObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}