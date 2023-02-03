/ This code for the footer
const template = document.createElement("template");

template.innerHTML = 
<div class="mt-5 pt-5 pb-5 footer d-flex align-items-center">
<div class="container">
  <div class="row main-footer">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>Heading</h2>
      <p class="pr-5 text-white-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        ante mollis quam tristique convallis
      </p>
      <p>
        <a href="#"><i class="fa fa-facebook-square mr-1"></i></a
        ><a href="#"><i class="fa fa-linkedin-square"></i></a>
      </p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Links</h4>
      <ul class="m-0 p-0">
        <li>- <a href="#">Lorem ipsum</a></li>
        <li>- <a href="#">Nam mauris velit</a></li>
        <li>- <a href="#">Etiam vitae mauris</a></li>
        <li>- <a href="#">Fusce scelerisque</a></li>
        <li>- <a href="#">Sed faucibus</a></li>
        <li>- <a href="#">Mauris efficitur nulla</a></li>
      </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <ul>
        <li><a href="#">الرئيسية</a></li>
        <li>| <a href="#">جدول الدروس</a></li>
        <li>| <a href="#">الدرجات</a></li>
        <br />
        <li><a href="#">الغيابات</a></li>
        <li>| <a href="#">المحاضرات</a></li>
        <li>| <a href="#">الاعدادات</a></li>
      </ul>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class="">
        <small class="text-white-50">© 2019. All Rights Reserved.</small>
      </p>
    </div>
  </div>
</div>
</div>
`;

document.body.appendChild(template.content);