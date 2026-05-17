const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-top">
        <div>
          <img src="assets/logo_web/chinh1.png" alt="Deuzy Logo"
            style="height: 35px; width: auto; object-fit: contain; margin-bottom: 12px; filter: brightness(0) invert(1);">
          <div class="footer-brand-desc">Tinh giản việc học – Tối đa kết quả. Deuzy đồng hành cùng bạn trên hành trình
            chinh phục tiếng Đức và ước mơ.</div>
          <div style="font-size:13px;color:rgba(255,255,255,0.55);">📧 info@deuzy.vn<br>🏠 Việt Nam</div>
        </div>
        <div class="footer-col">
          <h4>Khóa học</h4>
          <ul>
            <li><a onclick="window.location.href='courses.html'">Tiếng Đức A1</a></li>
            <li><a onclick="window.location.href='courses.html'">Tiếng Đức A2</a></li>
            <li><a onclick="window.location.href='courses.html'">Tiếng Đức B1</a></li>
            <li><a onclick="window.location.href='courses.html'">Tiếng Đức B2</a></li>
            <li><a onclick="window.location.href='courses.html'">Ôn thi Goethe/TELC</a></li>
            <li><a onclick="window.location.href='courses.html'">Tutor 1:1</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Dịch vụ</h4>
          <ul>
            <li><a onclick="window.location.href='germany.html'">Du học đại học</a></li>
            <li><a onclick="window.location.href='germany.html'">Du học nghề</a></li>
            <li><a onclick="window.location.href='germany.html'">Tư vấn visa</a></li>
            <li><a onclick="window.location.href='register.html'">Tư vấn miễn phí</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Khám phá</h4>
          <ul>
            <li><a onclick="window.location.href='about.html'">Về Deuzy</a></li>
            <li><a onclick="window.location.href='about.html'">Founder Khánh Linh</a></li>
            <li><a onclick="window.location.href='recruit.html'">Tuyển dụng</a></li>
            <li><a onclick="window.location.href='register.html'">Liên hệ</a></li>
          </ul>
        </div>
      </div>
      <hr class="footer-hr">
      <div class="footer-bottom">
        <div>© 2025 Deuzy – Deutsch Made Easy by Lê Minh Mạnh.</div>
        <div class="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=61589723679771" class="social-btn" target="_blank" style="text-decoration:none;"><img src="assets/icons/facebook.png" alt="Facebook" style="width: 16px; height: 16px; object-fit: contain; "></a>
          <a href="#" class="social-btn" target="_blank" style="text-decoration:none;"><img src="assets/icons/youtobe.png" alt="YouTube" style="width: 16px; height: 16px; object-fit: contain; "></a>
          <a href="https://www.tiktok.com/@deuzy.de" class="social-btn" target="_blank" style="text-decoration:none;"><img src="assets/icons/tiktok.png" alt="TikTok" style="width: 16px; height: 16px; object-fit: contain; "></a>
        </div>
      </div>
    </div>
  </footer>
`;

document.addEventListener("DOMContentLoaded", function() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
});
