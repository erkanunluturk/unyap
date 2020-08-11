---
title: Hakkımızda
description: Fabrikaların, üretim tesislerinin ihtiyaçlarına yönelik hizmetler sunan, sevkiyat kalitesini artıran ve kendini sürekli olarak geliştiren Ünyap, girişimci, yenilikçi ve sorumluluk taşıyan vizyoner ruhuyla 2018 yılında kurulmuştur.

show_in_navigation: true
navigation_order: 1
---

{% assign head = site.data.about | first %}

{% include header.html
  subtitle=head.subtitle
  title=head.title
  description=head.text
  image="about"
%}

<main>
  <section>
    <div class="container md:px-8 mx-auto flex">
      <aside class="hidden md:block md:w-1/4">
        <nav class="flex flex-col md:py-16 sticky top-0">
          {% for section in site.data.about %}
            {% if section.type %}
              <a class="px-8 py-2 border-l-2 border-gray-400 text-base font-semibold hover:text-orange-600 hover:border-orange-600" href="#{{ section.url }}">{{ section.title }}</a>
            {% endif %}
          {% endfor %}
        </nav>
      </aside>
      <div class="w-full md:w-3/4 md:border-l border-gray-400">
        {% assign other = site.data.about | where: "type", "other" %}
        {% for section in other %}
          <div id="{{ section.url }}" class="px-8 py-8 md:py-16 border-b border-gray-400">
            <h4 class="text-xl font-semibold mb-2">{{ section.title }}</h4>
            <hr class="w-16 border-t-2 border-orange-600 mb-4">
            <p class="text-base">{{ section.text }}</p>
          </div>
        {% endfor %}
        {% assign list = site.data.about | where: "type", "list" %}
        {% for section in list %}
          <div id="{{ section.url }}" class="px-8 py-8 md:py-16 border-b border-gray-400">
            <h4 class="text-xl font-semibold mb-2">{{ section.title }}</h4>
            <hr class="w-16 border-t-2 border-orange-600 mb-4">
            <ul class="list-disc pl-4">
              {% for list in section.list %}
              <li class="mb-2 text-sm font-semibold">{{ list.title }}</li>
              {% endfor %}
            </ul>
          </div>
        {% endfor %}
      </div>
    </div>
  </section>
  {% include request.html
    title="Projeniz için kaliteli ve uygun fiyatlı bir hizmet mi arıyorsunuz?"
    button="Teklif isteyin"
  %}
</main>

{% include footer.html %}
