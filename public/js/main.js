/* ════════════════════════════════════════════
   Sun Solutions – main.js
   ════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Custom Cursor ── */
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (cur && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function animCursor() {
      cur.style.left  = mx + 'px';
      cur.style.top   = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animCursor);
    })();
  }

  /* ── Progress bar + Nav scroll + Back-to-top ── */
  const pb  = document.getElementById('progress-bar');
  const nav = document.getElementById('nav');
  const bt  = document.getElementById('back-top');
  window.addEventListener('scroll', () => {
    const s = document.documentElement;
    if (pb)  pb.style.transform = 'scaleX(' + (s.scrollTop / (s.scrollHeight - s.clientHeight)) + ')';
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
    if (bt)  bt.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  /* ── Scroll Reveal ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── Counter animation ── */
  function animCount(el, target) {
    let start;
    const run = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + '+';
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animCount(e.target, +e.target.dataset.count); countObs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

  /* ── Testimonials ── */
  const testimonialsData = [
    { stars:'★★★★★', text:'Sun Solutions đã giúp đội nhóm chúng tôi <em>rút ngắn 60% thời gian phát triển</em> với quy trình Agile bài bản và đội ngũ dev chất lượng cao.', name:'Nguyễn Minh Tuấn', role:'CTO – TechCorp Vietnam', init:'MT' },
    { stars:'★★★★★', text:'Chương trình đào tạo AI rất thực chiến. Sau 2 tháng, <em>team của tôi đã triển khai chatbot tự động</em> xử lý 70% yêu cầu CSKH.', name:'Trần Thị Hoa', role:'CEO – Retail Plus', init:'TH' },
    { stars:'★★★★☆', text:'Thực tập tại Sun Solutions là quyết định đúng đắn nhất của tôi. <em>Được làm việc trên dự án thật</em>, có mentor tận tâm và lộ trình rõ ràng.', name:'Lê Văn Đức', role:'Software Engineer – FPT', init:'VĐ' },
    { stars:'★★★★★', text:'Đội gia công phần mềm của Sun Solutions <em>deliver đúng hạn 100%</em> trong 18 tháng hợp tác. Code quality và communication đều xuất sắc.', name:'David Chen', role:'Product Manager – SingTech', init:'DC' },
    { stars:'★★★★★', text:'Workshop AI cho leadership rất ấn tượng. <em>Ban giám đốc đã có thể tự đánh giá và triển khai use case</em> phù hợp với doanh nghiệp.', name:'Phạm Quốc Hùng', role:'Director – ManufactureVN', init:'QH' },
    { stars:'★★★★★', text:'Sun Solutions không chỉ làm outsourcing, họ <em>thực sự hiểu business của chúng tôi</em> và đề xuất giải pháp tối ưu về chi phí lẫn hiệu quả.', name:'Sarah Johnson', role:'VP Engineering – Global Startup', init:'SJ' },
  ];
  const track = document.getElementById('testi-track');
  if (track) {
    [...testimonialsData, ...testimonialsData].forEach(t => {
      const c = document.createElement('div');
      c.className = 'testi-card';
      c.innerHTML =
        '<div class="testi-stars">' + t.stars + '</div>' +
        '<p class="testi-text">' + t.text + '</p>' +
        '<div class="testi-author">' +
          '<div class="testi-avatar">' + t.init + '</div>' +
          '<div><div class="testi-name">' + t.name + '</div>' +
          '<div class="testi-role">' + t.role + '</div></div>' +
        '</div>';
      track.appendChild(c);
    });
  }

  /* ── Hero parallax orb ── */
  const orb = document.querySelector('.hero-orb');
  window.addEventListener('scroll', () => {
    if (orb) orb.style.transform = 'translateY(' + (window.scrollY * 0.3) + 'px)';
  }, { passive: true });

});
