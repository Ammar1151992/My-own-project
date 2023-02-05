//This code for the footer
const template = document.createElement("template");

template.innerHTML = `
<div>

  <footer class="footer text-center text-lg-start ">
  <div class="container d-flex justify-content-center py-3">
  <table>
    <tr>
      <td >
          <ul class="about-footer">
            <li><a href="#">تواصل معنا</a></li>
            <li><a href="#">استفسارات</a></li>
            <li><a href="#">موقع الجامعة</a></li>
          </ul>
   
      </td>
      <td>
        <div class="logo-content">
          <img class="logo" src="../css/image/logo.png" alt="logo">
        </div>
      </td>
      <td>
          <ul class="footer-list">
            <li><spsn class="span-footer"> | </spsn> <a href="#"> الرئيسية </a></li>
            <li><spsn class="span-footer"> | </spsn> <a href="#" >  جدول الدروس </a></li>
            <li><spsn class="span-footer"> </spsn> <a href="#"> الدرجات</a></li>
          </ul>
          <div class="clear"></div>
          <ul class="footer-list">
            <li><spsn class="span-footer"> | </spsn> <a href="#"> الغيابات</a></li>
            <li><spsn class="span-footer"> | </spsn> <a href="#"> المحاضرات</a></li>
            <li><spsn class="span-footer">  </spsn> <a href="#"> الاعدادات</a></li>
        </ul>
        <div class="clear"></div>
      </td>
    </tr>
  </table>
</div>


    <!-- Copyright -->
    <div class="text-center text-white p-3 text-footer" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2023 All Rights Reserved by Baghdad unversity
    </div>
    <!-- Copyright -->
  </footer>
  
</div>
<!-- End of .container -->
`;

document.body.appendChild(template.content);



$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});