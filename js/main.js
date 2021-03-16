const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// select tab content item
function selectItem(e){
  // Add the border to current tab 
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  // Grab content items from DOM 
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}
// remove the tab-border
function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'))
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem))

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'))
}

