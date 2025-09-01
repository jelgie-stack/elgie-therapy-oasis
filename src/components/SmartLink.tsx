import React from 'react';
import { useNavigate } from 'react-router-dom';
import { normalizeUrl } from '@/utils/normalizeUrl';

interface SmartLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  to?: string;
  children: React.ReactNode;
}

/**
 * Smart link component that automatically normalizes internal URLs
 * and uses React Router navigation for internal links, regular anchors for external
 */
export const SmartLink: React.FC<SmartLinkProps> = ({ 
  href, 
  to, 
  children, 
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();
  const url = href || to || '';
  const normalizedUrl = normalizeUrl(url);
  
  // Determine if this is an external link
  const isExternal = /^https?:\/\/(?!(?:www\.)?elgietherapy\.com)/.test(url);
  
  // Handle click for internal links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    // If it's an internal link and not opening in new tab
    if (!isExternal && !e.defaultPrevented && !props.target) {
      e.preventDefault();
      navigate(normalizedUrl);
    }
  };
  
  return (
    <a 
      href={normalizedUrl}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmartLink;