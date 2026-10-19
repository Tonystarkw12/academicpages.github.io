/**
 * i18n.js - AcademicPages lightweight bilingual switcher (ZH / EN)
 * Pure vanilla JS, zero external dependencies.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'site_lang';

  function getSavedLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'zh' || saved === 'en') {
        return saved;
      }
    } catch (e) {
      /* localStorage might be blocked in private mode */
    }
    // Default to 'zh' if browser is Chinese, else 'en'
    var navLang = navigator.language || navigator.userLanguage || '';
    return navLang.toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function setLanguage(lang) {
    if (lang !== 'zh' && lang !== 'en') {
      lang = 'zh';
    }
    document.documentElement.setAttribute('data-lang', lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    // Update toggle button text if present
    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      var textSpan = toggleBtn.querySelector('.lang-btn-text');
      if (textSpan) {
        textSpan.textContent = lang === 'zh' ? 'EN' : '中';
      }
      toggleBtn.setAttribute('title', lang === 'zh' ? 'Switch to English' : '切换为中文');
      toggleBtn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
    }

    // Dispatch a custom event in case other components (e.g. dynamic canvas or plots) need to respond
    window.dispatchEvent(new CustomEvent('site-language-change', { detail: { lang: lang } }));
  }

  // Early initialization (run immediately)
  var initialLang = getSavedLanguage();
  setLanguage(initialLang);

  // Bind toggle click once DOM is ready
  function initToggle() {
    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      // Re-apply to ensure button label reflects current state
      setLanguage(document.documentElement.getAttribute('data-lang') || initialLang);

      toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var currentLang = document.documentElement.getAttribute('data-lang') || 'zh';
        var nextLang = currentLang === 'zh' ? 'en' : 'zh';
        setLanguage(nextLang);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();
