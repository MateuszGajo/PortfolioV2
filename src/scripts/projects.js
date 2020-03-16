const stateModule = (() => {
  let state = {
    transformProjectsPosition: 0,
    transformTitlePosition: 0,
    isScrollOn: true
  };
  const pub = {};

  pub.getState = () => {
    return state;
  };

  pub.changeState = newState => {
    state = newState;
  };

  return pub;
})();

const projectSection = document.querySelector(".projects");
const projects = document.querySelector(".projects__items");
const projectsItem = document.querySelectorAll(".projects__items__item");
const projectsTitle = document.querySelector(".projects__title h1");
const projectsWidth = projects.offsetWidth;
const windowWidth = window.innerWidth;
const sizeOutOfScreen = projectsWidth - windowWidth + 100;

const moveProjects = e => {
  const {
    transformProjectsPosition,
    transformTitlePosition
  } = stateModule.getState();
  let newTransformProjectsPosition;
  let newTransformTitlePosition;

  if (e.deltaY < 0) {
    if (transformProjectsPosition + 20 < 0) {
      newTransformTitlePosition = transformTitlePosition + 2;
      newTransformProjectsPosition = transformProjectsPosition + 20;
      projectsTitle.style.transform = `translateX(${newTransformTitlePosition}px)`;
      projects.style.transform = `translateX(${newTransformProjectsPosition -
        15}px)`;
      projects.style.transform = `translateX(${newTransformProjectsPosition -
        10}px)`;
      projects.style.transform = `translateX(${newTransformProjectsPosition -
        5}px)`;
    } else {
      projectsTitle.style.transform = `translateX(${0}px)`;
      newTransformTitlePosition = 0;
      newTransformProjectsPosition = 0;
    }
  } else {
    if ((transformProjectsPosition - 20) * -1 < sizeOutOfScreen) {
      newTransformTitlePosition = transformTitlePosition - 2;
      newTransformProjectsPosition = transformProjectsPosition - 20;
      projectsTitle.style.transform = `translateX(${newTransformTitlePosition}px)`;
      projects.style.transform = `translateX(${newTransformProjectsPosition +
        15}px)`;
      projects.style.transform = `translateX(${newTransformProjectsPosition +
        10}px)`;
      projects.style.transform = `translateX(${newTransformProjectsPosition +
        5}px)`;
      projects.style.transform = `translateX(${newTransformProjectsPosition}px)`;
    } else {
      newTransformTitlePosition = transformTitlePosition;
      newTransformProjectsPosition = -sizeOutOfScreen;
    }
  }
  stateModule.changeState({
    ...stateModule.getState(),
    transformProjectsPosition: newTransformProjectsPosition,
    transformTitlePosition: newTransformTitlePosition
  });

  projectsItem.forEach(item => {
    item.style.transform = "scale(0.999)";
    item.style.transform = "scale(0.998)";
    item.style.transform = "scale(0.997)";
    item.style.transform = "scale(0.996)";
    item.style.transform = "scale(0.995)";
    item.style.transform = "scale(0.994)";
    item.style.transform = "scale(0.993)";
    item.style.transform = "scale(0.992)";
    item.style.transform = "scale(0.991)";
    item.style.transform = "scale(0.990)";
    setTimeout(() => {
      item.style.transform = "scale(0.990)";
      item.style.transform = "scale(0.991)";
      item.style.transform = "scale(0.992)";
      item.style.transform = "scale(0.993)";
      item.style.transform = "scale(0.994)";
      item.style.transform = "scale(0.995)";
      item.style.transform = "scale(0.996)";
      item.style.transform = "scale(0.997)";
      item.style.transform = "scale(0.998)";
      item.style.transform = "scale(0.999)";
      item.style.transform = "scale(1.0)";
    }, 200);
  });
};

const scrollProject = action => {
  if (action === "on") {
    addEventListener("wheel", moveProjects);
    stateModule.changeState({
      ...stateModule.getState(),
      isScrollOn: false
    });
  } else if (action === "off") {
    removeEventListener("wheel", moveProjects);
    stateModule.changeState({
      ...stateModule.getState(),
      isScrollOn: true
    });
  }
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

addEventListener("wheel", e => {
  const {
    transformProjectsPosition,
    isScrollOn
  } = stateModule.getState();
  if (window.scrollY === projectSection.offsetTop && isScrollOn)
    scrollProject("on");
  else if (window.scrollY < projectSection.offsetTopt && !isScrollOn)
    scrollProject("off");

  if (transformProjectsPosition < 0) {
    if (window.removeEventListener)
      window.addEventListener("DOMMouseScroll", preventDefault, false);
    document.addEventListener("wheel", preventDefault, {
      passive: false
    });
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove = preventDefault;
    document.onkeydown = preventDefaultForScrollKeys;
    document.querySelector("body").style.overflow = "hidden";
  } else if (transformProjectsPosition === 0) {
    if (window.removeEventListener)
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
    document.removeEventListener("wheel", preventDefault, {
      passive: false
    });
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
    document.querySelector("body").style.overflow = "visible";
  }
});