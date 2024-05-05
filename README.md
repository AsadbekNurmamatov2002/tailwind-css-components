# tailwind-css-components

## Padding

| Tailwind-css| 0 | 0.5 | 1 | 2 | 3 | 4 |5 |
| -------- | ---- |---- | ---- |---- |---- |---- |---- |
|\ `Css`| 0px |  2px | 4px | 8px | 12px | 16px | 20px | 

## Responsive design
Rivojlanayotgan CSS ramkasi bo'lgan Tailwind CSS yanada silliq yo'lni ta'minlaydi
veb-saytda sezgirlikka erishish. Biz amal qilishimiz kerak bo'lganidek, Mobile First
veb-sayt yaratish, uni turli xil qurilmalarda yaxshi his qilish uchun yondashuv
To'g'ridan-to'g'ri mobil telefondan kattaroq displeylarga qadar, Tailwind CSS-ning foydali sinflari maqsadni ta'minlaydi
to'xtash nuqtasi kalit so'zlari odatiy sinflarga qo'shiladi, shunda uslub variantlari bo'ladi
mos keladigan foydalanuvchi interfeyslarini yaratish uchun mos ravishda qo'shiladi.
Keling, Tailwind CSS standart to'xtash nuqtalari ro'yxatini ko'rib chiqaylik; bu yerda tushunishingiz mumkin
to'xtash nuqtalari, ular ishlashi mumkin bo'lgan ekranning maksimal kengligi va CSS
ushbu to'xtash nuqtasining media so'rovi:
| tailwind-css| width | css|
| -------- | -------- | -------- |
| sm |640px |'@media (min-width: 640px) {// CSS Rules} | 
| md |768px | @media (min-width: 768px) {// CSS Rules}| 
| lg |1024px |@media (min-width: 1024px) {// CSS Rules} | 
|xl |1280px |@media (min-width: 1280px) {// CSS Rules} | 
|2xl |1536px | @media (min-width: 1536px) {// CSS Rules}| 

## Text
Bu yerda tushuntirilgan quyidagi foydali sinflar to'plami uslubni boshqarish uchun ishlatiladi
matn mazmuni.
***Text align***
Ushbu yordam dasturlari matn tarkibini moslashtirishni hal qilish uchun ishlatiladi
element/konteyner. Quyidagi kabi oltita standart moslashtirish sinflari mavjud:
**text-left:** Bu sinf matnni elementning chap chetiga tekislash uchun ishlatiladi.
**text-center:**
Bu sinf matnni element markaziga tekislash uchun ishlatiladi.
**text-right:** uning klassi matnni elementning o'ng chetiga tekislash uchun ishlatiladi.
**text-justify:** Ushbu sinf matnni mavjud kengligi bilan oqlash uchun ishlatiladi element.
**text-start:** Agar yo'nalish chapdan o'ngga bo'lsa, chapga va o'ngga bo'lsa yo'nalishi o'ngdan chapga.
**text-end:** Agar yo'nalish chapdan o'ngga bo'lsa, o'ngga va chapga bo'lsa yo'nalishi o'ngdan chapga
![image](https://github.com/AsadbekNurmamatov2002/tailwind-css-components/assets/144318530/94bce994-59ac-4676-960c-d16ba9adf16b)
## Text color
Ushbu yordamchi dasturlar elementning matn tarkibiga rang qo'shish uchun ishlatiladi.
Ushbu standart ranglar o'z variantlari bilan matnni bo'yash uchun ham mavjud.
Konfiguratsiyadagi ranglarni kengaytirsangiz, ular matnni bo'yash uchun mavjud bo'ladi
shuningdek.
Rang uchun ixtiyoriy qiymatlarni o'tkazish rangning **hex** kodini o'tkazish kabi oddiy
rang qiymati uchun.
### Misol: text-[#44DD22] yoki text-[#fff] va hk ..
## Text decoration
***underline:*** 
![image](https://github.com/AsadbekNurmamatov2002/tailwind-css-components/assets/144318530/880506fc-cf00-4f73-b5ab-e908ef6ef949)

***overline:*** 
![image](https://github.com/AsadbekNurmamatov2002/tailwind-css-components/assets/144318530/72643c99-0c2d-4664-a5d2-ea791874a7c1)

***line-through:***
![image](https://github.com/AsadbekNurmamatov2002/tailwind-css-components/assets/144318530/22476fec-1fd2-46a4-9fd1-6417cd62dd93)

***no-underline:*** 
![image](https://github.com/AsadbekNurmamatov2002/tailwind-css-components/assets/144318530/76b0645f-9e91-4c17-8064-e089043946ed)

### Text decoration color
__decoration-[#55CC66]__
<p class="underline decoration-blue-500>hello word</p>
<p class=" underline decoration-[#225658]>hello word</p>
<a class="underline decoration-sky-500/30">my color </a>
<a class="underline decoration-indigo-500">my color </a>
