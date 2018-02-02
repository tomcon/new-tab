/**
 * Open the location in a new tab.
 * @param {string} url The new URL.
 */
function openNewTab(url) {
  chrome.tabs.create({ url });
}

/**
 * Update the location in the current tab.
 * @param {string} url The new URL.
 */
function updateTabLocation(url) {
  chrome.tabs.update({ url });
}

/**
 * Handle menu item click.
 * Special case for internal links in an extention.
 *
 * @param {MouseEvent} event the click event
 */
function onClick(event) {
  const { target, ctrlKey } = event;
  const url = target.href;

  if (target.target === '_blank' || ctrlKey) {
    openNewTab(url);
  } else {
    updateTabLocation(url);
  }

  event.preventDefault();
}

module.exports = {
  onClick,
};