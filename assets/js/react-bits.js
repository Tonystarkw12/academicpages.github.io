/**
 * react-bits.js - Modern creative UI effects inspired by React Bits
 * Features:
 * 1. Background Interactive Constellation / Particle Web (Canvas)
 * 2. Spotlight Card Glow (Mouse-following radial gradient)
 * 3. Click Spark (Subtle geometric particle burst on interaction)
 * 
 * Vanilla JS, lightweight, responsive, respects prefers-reduced-motion.
 */
(function () {
  'use strict';

  // Check user motion preferences
  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. Interactive Particles Canvas Background (React Bits Particles/Canvas)
     ========================================================================== */
  function initParticlesBackground() {
    if (prefersReducedMotion) return;

    var canvas = document.createElement('canvas');
    canvas.id = 'react-bits-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0';
    canvas.style.opacity = '0.55';
    document.body.prepend(canvas);

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var width, height, dpr;
    var particles = [];
    var particleCount = 45; // balanced for performance and visual elegance
    var maxDistance = 120;
    var mouse = { x: -9999, y: -9999, radius: 100 };
    var isRunning = true;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Adjust particle count for smaller screens
      particleCount = width < 768 ? 22 : 45;
      createParticles();
    }

    function createParticles() {
      particles = [];
      for (var i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.6 + 0.8
        });
      }
    }

    function getThemeColors() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return {
        dot: isDark ? 'rgba(0, 200, 215, 0.45)' : 'rgba(0, 146, 202, 0.4)',
        line: isDark ? 'rgba(0, 200, 215, ' : 'rgba(0, 146, 202, '
      };
    }

    function animate() {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      var colors = getThemeColors();

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundary
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        var dxMouse = mouse.x - p.x;
        var dyMouse = mouse.y - p.y;
        var distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          var force = (mouse.radius - distMouse) / mouse.radius;
          p.x -= (dxMouse / distMouse) * force * 1.5;
          p.y -= (dyMouse / distMouse) * force * 1.5;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.dot;
        ctx.fill();

        // Connect with nearby particles
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            var alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = colors.line + alpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', function () {
      mouse.x = -9999;
      mouse.y = -9999;
    });

    // Pause animation when tab is inactive to save battery
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        isRunning = false;
      } else {
        isRunning = true;
        requestAnimationFrame(animate);
      }
    });

    resize();
    requestAnimationFrame(animate);
  }

  /* ==========================================================================
     2. Spotlight Card Glow (React Bits Spotlight Card)
     ========================================================================== */
  function initSpotlightCards() {
    var cards = document.querySelectorAll(
      '.archive__item, .page__content > blockquote, .notice--info, .spotlight-card'
    );

    cards.forEach(function (card) {
      if (!card.classList.contains('spotlight-card')) {
        card.classList.add('spotlight-card');
      }

      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
      });
    });
  }

  /* ==========================================================================
     3. Click Spark (React Bits Click Spark)
     ========================================================================== */
  function initClickSpark() {
    if (prefersReducedMotion) return;

    var sparkCanvas = document.createElement('canvas');
    sparkCanvas.id = 'react-bits-spark-canvas';
    sparkCanvas.style.position = 'fixed';
    sparkCanvas.style.top = '0';
    sparkCanvas.style.left = '0';
    sparkCanvas.style.width = '100vw';
    sparkCanvas.style.height = '100vh';
    sparkCanvas.style.pointerEvents = 'none';
    sparkCanvas.style.zIndex = '9999';
    document.body.appendChild(sparkCanvas);

    var ctx = sparkCanvas.getContext('2d');
    if (!ctx) return;

    var sparks = [];
    var animating = false;

    function resizeSparkCanvas() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      sparkCanvas.width = window.innerWidth * dpr;
      sparkCanvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resizeSparkCanvas);
    resizeSparkCanvas();

    function createSparks(x, y) {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var color = isDark ? '#00e1ec' : '#0092ca';
      var count = 8;

      for (var i = 0; i < count; i++) {
        var angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        var speed = Math.random() * 2.5 + 1.5;
        sparks.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 2 + 1.2,
          alpha: 1,
          color: color
        });
      }

      if (!animating) {
        animating = true;
        requestAnimationFrame(updateSparks);
      }
    }

    function updateSparks() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (var i = sparks.length - 1; i >= 0; i--) {
        var s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05; // slight gravity
        s.alpha -= 0.035;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (sparks.length > 0) {
        requestAnimationFrame(updateSparks);
      } else {
        animating = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    }

    window.addEventListener('click', function (e) {
      createSparks(e.clientX, e.clientY);
    });
  }

  // Initialize all effects when DOM is loaded
  function initAll() {
    initParticlesBackground();
    initSpotlightCards();
    initClickSpark();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
