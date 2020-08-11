---
title: Ürünler
description: Sipariş için bize ulaşın

show_in_navigation: true
navigation_order: 2
---

{% include header.html
  title="Ürünler"
  image="products"
%}

<main>
  <div id="products">
    {% for product in site.data.products %}
      {% include product.html
        title=product.title
        text=product.text
        image=product.image
        reverse=product.reverse
      %}
    {% endfor %}
  </div>
  {% include request.html
    title="Şirketinizin verimliliğini artırmaya hazır mısınız?"
    button="Teklif isteyin"
  %}
</main>

{% include footer.html %}