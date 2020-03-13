const stateModule = (() => {
  const aboutmeSection = document.querySelector(".aboutme");

  let state = {
    isReverseText: false,
    transform: -50,
    textIntervalAnimate: null,
    isAboutmeTextAnimate: false,
    aboutmeFromTop: aboutmeSection.offsetTop,
    aboutmeHeight: aboutmeSection.clientHeight,
    previousScrollYPosition: 0,
    circleSize: 300,
    previousCircleSize: 300
  };
  const pub = {};

  pub.changeState = newState => {
    state = newState;
  };
  pub.getState = () => {
    return state;
  };

  return pub;
})();

const animateText = (speed = 0.15) => {
  let transformProgress;
  const { isReverseText, transform } = stateModule.getState();
  const aboutmeText = document.querySelector(".aboutme__photo__title--text");

  if (!isReverseText) {
    if (transform + speed > 50) {
      aboutmeText.style.transform = `translateX(50%)`;
      return stateModule.changeState({
        ...stateModule.getState(),
        isReverseText: true
      });
    }
    transformProgress = transform + speed;
    aboutmeText.style.transform = `translateX(${transformProgress}%)`;
    stateModule.changeState({
      ...stateModule.getState(),
      transform: transformProgress
    });
  } else if (isReverseText) {
    if (transform - speed < -50) {
      aboutmeText.style.transform = `translateX(-50%)`;
      return stateModule.changeState({
        ...stateModule.getState(),
        isReverseText: false
      });
    }
    transformProgress = transform - speed;
    aboutmeText.style.transform = `translateX(${transformProgress}%)`;
    stateModule.changeState({
      ...stateModule.getState(),
      transform: transformProgress
    });
  }
};

const scrollAnimationText = event => {
  animateText(0.3);
  animateText(0.3);
};

let textIntervalAnimate;

const managmentAnimationText = type => {
  const { textIntervalAnimate } = stateModule.getState();
  if (type === "start") {
    stateModule.changeState({
      ...stateModule.getState(),
      textIntervalAnimate: setInterval(animateText, 30)
    });
    window.addEventListener("scroll", scrollAnimationText);
  } else if (type === "remove") {
    clearInterval(textIntervalAnimate);
    window.removeEventListener("scroll", scrollAnimationText);
  }
};

window.addEventListener("scroll", () => {
  const {
    isAboutmeTextAnimate,
    aboutmeFromTop,
    aboutmeHeight
  } = stateModule.getState();

  const scrollY = window.scrollY;
  const heightWindow = window.innerHeight;

  if (
    scrollY > aboutmeFromTop - heightWindow &&
    scrollY < aboutmeFromTop + aboutmeHeight
  ) {
    if (!isAboutmeTextAnimate) {
      managmentAnimationText("start");
      stateModule.changeState({
        ...stateModule.getState(),
        isAboutmeTextAnimate: true
      });
    }
  } else {
    managmentAnimationText("remove");
    stateModule.changeState({
      ...stateModule.getState(),
      isAboutmeTextAnimate: false
    });
  }
});

const circleAnimatePhoto = () => {
  const glass = document.querySelector(".aboutme_photo--maginfier-glass");
  const {
    aboutmeFromTop,
    aboutmeHeight,
    circleSize,
    previousCircleSize
  } = stateModule.getState();
  if (
    window.scrollY + window.innerHeight < aboutmeFromTop ||
    window.scrollY > aboutmeFromTop + aboutmeHeight
  ) {
    return false;
  }

  const blowUpPhoto = () => {
    glass.style.width = previousCircleSize * 1.2 + "px";
    glass.style.height = previousCircleSize * 1.2 + "px";
  };

  const zoomOutPhoto = () => {
    glass.style.width = previousCircleSize + "px";
    glass.style.height = previousCircleSize + "px";
  };

  glass.addEventListener("mousemove", blowUpPhoto);
  glass.addEventListener("mouseout", zoomOutPhoto);
  let distanseToMiddle =
    aboutmeFromTop +
    aboutmeHeight / 2 -
    (window.scrollY + window.innerHeight / 2);
  distanseToMiddle =
    distanseToMiddle < 0 ? distanseToMiddle * -1 : distanseToMiddle;
  let scaleAboutSection;

  const nowposition = window.scrollY + window.innerHeight - aboutmeFromTop;
  const aboutCenterPosition =
    (aboutmeFromTop + aboutmeHeight / 2 - aboutmeFromTop) * 2;

  if (nowposition > aboutCenterPosition) {
    scaleAboutSection =
      (nowposition - 2 * (nowposition - aboutCenterPosition)) /
      aboutCenterPosition;
  } else {
    scaleAboutSection = nowposition / aboutCenterPosition;
  }

  const newCircleSize = scaleAboutSection * circleSize + 100;

  glass.style.width = newCircleSize + "px";
  glass.style.height = newCircleSize + "px";
  glass.style.opacity = scaleAboutSection * 1.5;

  stateModule.changeState({
    ...stateModule.getState(),
    previousCircleSize: newCircleSize
  });
};

addEventListener("scroll", circleAnimatePhoto);
