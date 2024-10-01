const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 0,
		disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
		reverseDirection: true, // 逆方向有効化
  },
  loop: true,
	spaceBetween: 10,
	// loopedSlides: 14, //設定すると途中で止まる
  slidesPerView: 7,
  speed: 3000,
  allowTouchMove: false, // スワイプ無効,
});

const swiper2 = new Swiper(".swiper2", {
	autoplay: {
    delay: 0, // 途切れなくループ
		disableOnInteraction: false, //ユーザーがスワイプなどの操作しても止まらない
  },
  loop: true, // ループ有効
	spaceBetween: 10,
	// loopedSlides: 14, //設定すると途中で止まる
  slidesPerView: 7, // 一度に表示する枚数
  speed: 3000, // ループの時間
  allowTouchMove: false, // スワイプ無効
});