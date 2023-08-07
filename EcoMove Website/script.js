// Animated statistics for decimals (count up)

let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = 12; // Representing 1.2 as 12 tenths
  let step = 1; // Step size for calculations
  let duration = Math.floor(interval / (endValue / step));
  let counter = setInterval(function () {
    startValue += step;
    valueDisplay.textContent = (startValue / 10).toFixed(1); // Convert to decimal format
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// Animated statistics for percentages (count up)
let valueDisplays1 = document.querySelectorAll(".percent");
let interval1 = 4000;
valueDisplays1.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval1 / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue + "%";
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


  // background animation
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollRatio = scrollTop / scrollHeight;

    var startColor = [80, 200, 120]; // Emerald Green: RGB(80, 200, 120)
    var endColor = [115, 171, 149]; // Light Blue: RGB(135, 206, 235)

    var currentR = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollRatio);
    var currentG = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollRatio);
    var currentB = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollRatio);

    var currentColor = 'rgb(' + currentR + ',' + currentG + ',' + currentB + ')';

    document.body.style.backgroundColor = currentColor;
});

// Create a new Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animate-scroll class when the element is in the viewport
            entry.target.classList.add('animate-scroll');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
});

