---
layout: default

title: Ürünler

show_in_navigation: true
navigation_order: 2
---

{% include header.html
  title="Ürünler"
  image="products"
%}

<main>
  <nav class="border-b sticky top-0 bg-gray-100">
    <div class="container md:px-8 mx-auto flex">
      {% for product in site.data.products %}
        <a href="#" class="px-8 py-4 border-l hover:bg-white font-semibold text-base text-gray-600">{% include_relative assets/images/iconpalet.svg %} {{ product.title }}</a>
      {% endfor %}
    </div>
  </nav>
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