---
layout: default
---

{% include header.html
  title="Uzun ömürlü, sağlam malzeme, minimum zayiat, maksimum verim."
  description="Geniş ürün yelpazemiz ve profesyonel ekibimizle hemen hemen her sektörden müşteriye hizmet vermekte ve vermeye de devam ediyoruz."
  image="home"
%}

<main>
  <div id="features">
    {% for feature in site.data.features %}
      {% include feature.html
        title=feature.title
        text=feature.text
        image=feature.image
        reverse=feature.reverse
      %}
    {% endfor %}
  </div>
  {% include request.html %}
</main>

{% include footer.html %}