---
title: Bize Ulaşın

show_in_navigation: true
navigation_order: 3
---

{% include header.html
  title="İletişim bilgileri"
  image="contact"
%}

<main>
  <div id="contact">
    <div class="container md:px-8 mx-auto flex flex-wrap">
      <div class="w-full md:w-1/3 p-8 border text-center">
        <h4 class="text-lg font-semibold mb-2">Adres</h4>
        <p class="text-sm">{{ site.data.company.adress }}</p>
      </div>
      <div class="w-full md:w-1/3 p-8 border text-center">
        <h4 class="text-lg font-semibold mb-2">Telefon</h4>
        <p class="text-sm">{{ site.data.company.phone }}</p>
      </div>
      <div class="w-full md:w-1/3 p-8 border text-center">
        <h4 class="text-lg font-semibold mb-2">Mail</h4>
        <p class="text-sm">{{ site.data.company.email }}</p>
      </div>
    </div>
  </div>
  <section id="map" class="bg-gray-200">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12121.771259482737!2d30.80014109999999!3d40.5759801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e914572acd0792!2zw5xueWFwIE9ybWFuIMOccsO8bmxlcmk!5e0!3m2!1str!2str!4v1578006117918!5m2!1str!2str" frameBorder="0" style="border:0;height:500px;width:100%;" allowFullScreen=""></iframe>
  </section>
</main>

{% include footer.html %}