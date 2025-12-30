import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize AOS globally after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-in-out'
  })
  
  // Navbar shrink effect ONLY
  window.addEventListener('scroll', () => {
    // Navbar shrink effect
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // MOBILE-FRIENDLY: Show icon after 100px scroll (not 400px)
    if (window.scrollY > 100) {
      showScrollTopButton();
    } else {
      hideScrollTopButton();
    }
  });
});

// Global button reference
let scrollTopBtn = null;

// Show Scroll-to-Top Button
function showScrollTopButton() {
  if (!scrollTopBtn) {
    scrollTopBtn = createScrollTopButton();
    document.body.appendChild(scrollTopBtn);
  }
}

// Hide Scroll-to-Top Button
function hideScrollTopButton() {
  if (scrollTopBtn) {
    scrollTopBtn.remove();
    scrollTopBtn = null;
  }
}

// Create Scroll-to-Top Button (MOBILE + NO REFRESH)
function createScrollTopButton() {
  const btn = document.createElement('button');
  btn.innerHTML = '<i class="bx bx-chevron-up"></i>';
  btn.className = 'scroll-top-btn';
  
  // FIXED: Jump to Hero ONLY (NO refresh)
  btn.onclick = () => {
    document.querySelector('.hero')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };
  
  // Responsive positioning hhn(Mobile-friendly)
  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '20px',        // Closer to bottom on mobile
    right: '20px',         // Closer to edge on mobile
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #c770ff, #ff4ecd)',
    border: 'none',
    color: 'white',
    fontSize: '1.8rem',    // Smaller on mobile
    cursor: 'pointer',
    zIndex: '99',
    boxShadow: '0 6px 20px rgba(199,112,255,0.4)',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });
  
  // Responsive hover/tap effects
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-2px) scale(1.08)';
    btn.style.boxShadow = '0 10px 30px rgba(199,112,255,0.6)';
  });
  
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0) scale(1)';
    btn.style.boxShadow = '0 6px 20px rgba(199,112,255,0.4)';
  });
  
  // Mobile tap feedback
  btn.addEventListener('touchstart', () => {
    btn.style.transform = 'scale(0.95)';
  });
  
  btn.addEventListener('touchend', () => {
    btn.style.transform = 'translateY(0) scale(1)';
  });
  
  return btn;
}
