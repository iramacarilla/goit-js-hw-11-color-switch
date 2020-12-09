const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const start = document.querySelector('[data-action="start"]');
  const stopColors = document.querySelector('[data-action="stop"]');
  const body = document.querySelector('body');
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let num = null;
  let activeOn = false;

  const startSwitch = () => {
    if (activeOn) {return}
    num = setInterval(() => {
      activeOn = true;
      let colorChooser = randomIntegerFromInterval(0, colors.length);
      body.style.background = colors[colorChooser];
    }, 1000)}

    start.addEventListener('click', startSwitch);

    const stopSwitch = () => {
      clearInterval(num);
      activeOn = false;
    }

    stopColors.addEventListener('click', stopSwitch);
  

 
  