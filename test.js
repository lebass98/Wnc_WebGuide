(function () {
    "use strict";

    // Initialize custom fade slider after DOM is loaded
    document.addEventListener("DOMContentLoaded", function () {
        const slides = document.querySelectorAll(".list_kv_img .img-wrap");
        if (slides.length === 0) return;

        let currentIndex = 0;
        const slideCount = slides.length;
        const autoplayDelay = 4000;   // 슬라이드 대기 시간 4초
        const transitionDuration = 3000; // 페이드 트랜지션 3초
        let autoplayTimer = null;

        let lastIndex = -1; // 직전 활성화되었던 슬라이드 인덱스 추적

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add("active");
                    slide.classList.remove("last-active");
                } else if (i === lastIndex) {
                    slide.classList.add("last-active");
                    slide.classList.remove("active");
                } else {
                    slide.classList.remove("active", "last-active");
                }
            });
            lastIndex = index; // 현재 인덱스를 직전 인덱스로 갱신
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            showSlide(currentIndex);
        }

        function startAutoplay() {
            // 첫 번째 이미지는 3초(3000ms) 뒤에 바로 다음 이미지로 페이드 전환을 시작합니다.
            autoplayTimer = setTimeout(function () {
                nextSlide();
                // 두 번째 이미지부터는 대기 시간 4초 + 트랜지션 3초인 7초 주기로 계속 동작합니다.
                autoplayTimer = setInterval(nextSlide, autoplayDelay + transitionDuration);
            }, 3000);
        }

        // 초기 실행: 첫 번째 이미지의 줌아웃 transition이 트리거되도록 렌더링 후 100ms 지연 실행합니다.
        setTimeout(function () {
            showSlide(currentIndex);
        }, 100);
        
        startAutoplay();
    });

    // 1. 필요한 DOM 요소 선택
    const kvSection = document.querySelector(".mainVisual");
    const kvImgList = document.querySelector(".list_kv_img");

    // KV(Key Visual) 섹션이나 이미지 리스트가 없으면 스크립트 실행 중단
    if (!kvSection || !kvImgList) return;

    // 2. 스크롤에 따른 축소/확대 및 투명도 조절 함수
    const handleKvAnimation = () => {
        const kvHeight = kvSection.offsetHeight; // KV 섹션의 높이
        const scrollY = window.scrollY;          // 현재 스크롤 위치

        // 스크롤이 최상단에 있을 때 초기화
        if (scrollY <= 0) {
            kvImgList.style.transform = "scale(1)";
            kvImgList.style.opacity = "1";
            return;
        }

        // 스크롤이 KV 섹션 높이를 넘어섰을 때는 연산 불필요
        if (scrollY >= kvHeight) return;

        // 0과 1 사이의 스크롤 비율 계산 (최상단 0 ~ KV 끝 지점 1)
        const scrollRatio = Math.min(1, Math.max(0, scrollY / kvHeight));

        // 스크롤될수록 크기는 1에서 최대 1.5배까지 커짐
        const nextScale = 1 + (0.5 * scrollRatio);
        // 스크롤될수록 투명도는 1에서 0으로 흐려짐
        const nextOpacity = 1 - scrollRatio;

        // 스타일 적용
        kvImgList.style.transform = `scale(${nextScale})`;
        kvImgList.style.opacity = `${nextOpacity}`;
    };

    // 3. 이벤트 리스너 등록
    // 스크롤 최적화를 위해 { passive: true } 옵션 유지
    window.addEventListener("scroll", handleKvAnimation, { passive: true });
    
    // 페이지 로드 완료 시 초기 위치에 맞게 한 번 실행
    window.addEventListener("load", handleKvAnimation);
})();
