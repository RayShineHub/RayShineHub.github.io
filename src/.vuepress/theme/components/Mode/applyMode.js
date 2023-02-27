import modeOptions from './modeOptions'

function render (mode) {
  const rootElement = document.querySelector(':root')
  const options = modeOptions[mode]
  const opposite = mode === 'dark' ? 'light' : 'dark'
  const display = mode === 'dark' ? 'block' : 'none'

  for (const k in options) {
    rootElement.style.setProperty(k, options[k])
  }

  rootElement.classList.remove(opposite)
  rootElement.classList.add(mode)

  nightMask(mode)
}

/**
 * @description: night-mask for website
 * @param {string} display
 */
 function nightMask (mode) {
  const opacity = mode === 'dark' ? 0.5 : 0
  const maskElement = document.querySelector('#night-mask')
  !maskElement && createNightMask(opacity)
  maskElement && maskElement.style.setProperty('opacity', opacity)
}

/**
 * @description: create element night-mask for website
 * @param {string} display
 */
function createNightMask (opacity = 0) {
  const maskDiv = document.createElement("div");
  maskDiv.innerHTML=`<style>.filter-blue{
    z-index:2147483646;
    mix-blend-mode:multiply;
    top:0px!important;
    left:0px!important;
    right:0px!important;
    bottom:0px!important;
    position:fixed!important;
    pointer-events:none!important;
    transition:opacity 1.5s ease 0s;
    background:rgb(255,185,105);
    overflow:hidden!important}</style>`;
    
  maskDiv.className="filter-blue";
  maskDiv.id = "night-mask";
  maskDiv.style.setProperty('opacity', opacity)
  document && document.body.appendChild(maskDiv)
}


/**
 * Sets a color scheme for the website.
 * If browser supports "prefers-color-scheme", 'auto' mode will respect the setting for light or dark mode
 * otherwise it will set a dark theme during night time
 */
export default function applyMode (mode) {
  if (mode !== 'auto') {
    render(mode)
    return
  }

  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches

  if (isDarkMode) render('dark')
  if (isLightMode) render('light')

  if (!isDarkMode && !isLightMode) {
    console.log('You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.')
    const hour = new Date().getHours()
    if (hour < 6 || hour >= 18) render('dark')
    else render('light')
  }
}
