function redirectTo(url) {
    window.location.href = url;
  }





  function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
  }
  
  document.addEventListener('scroll', updateProgressBar);
  const navElements = document.querySelectorAll('.navbtns header a');
  const navAnimation = document.querySelector('.navanimation');
  const navBtns = document.querySelector('.navbtns');
  
  navElements.forEach((element) => {
    element.addEventListener('click', () => {
      const elementWidth = element.offsetWidth;
      const containerOffsetLeft = navBtns.offsetLeft;
      const containerScrollLeft = navBtns.scrollLeft;
      const elementOffsetLeft = element.getBoundingClientRect().left - containerOffsetLeft + containerScrollLeft;
      const navAnimationWidth = navAnimation.offsetWidth;
      const animationLeftOffset = elementOffsetLeft + (elementWidth / 2) - (navAnimationWidth / 2);
  
      navAnimation.style.left = animationLeftOffset + 'px';
    });
  });
  
  

  
  
  
  