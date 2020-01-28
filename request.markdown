---
layout: default

title: Teklif Alın

show_in_navigation: false
---

{% include header.html
  subtitle="Palet, sandık, makara satın al"
  title="Aşağıda bir teklif isteyin"
  description="Ünyap ile çalışmaya gösterdiğiniz ilgi için teşekkür ederiz. Size hizmet etmeyi dört gözle bekliyoruz. Formu doldurun, yakında sizinle iletişime geçeceğiz."
  image="products"
%}

<main class="pt-8">
  <div class="container px-8 mx-auto">
    <div class="w-full max-w-lg">
      <form action="https://getform.io/f/ccea2e4b-3f1f-419e-a96a-bb3995402f23" method="POST" class="mb-4">
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="urun">Şunu almak istiyorum</label>
          <select name="urun" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="urun" required="required">
            <option>Palet</option>
            <option>Sandık</option>
            <option>Makara</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="ayrinti">Ayrıntılar</label>
          <textarea name="ayrinti" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ayrinti" required="required">
          </textarea>
        </div>
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="nerden">Ünyap'ı nasıl duydun?</label>
          <input name="nerden" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nerden" type="text" required="required">
        </div>
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="mail">İşletme E-postası</label>
          <input name="mail" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mail" type="text" required="required">
        </div>
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="sirket">Şirket Adı</label>
          <input name="sirket" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="sirket" type="text" required="required">
        </div>
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="tel">Telefon</label>
          <input name="telefon" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="tel" type="text" required="required">
        </div>
        <div class="">
          <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 focus:outline-none" type="submit">Gönder</button>
        </div>
      </form>
    </div>
  </div>
</main>

{% include footer.html %}