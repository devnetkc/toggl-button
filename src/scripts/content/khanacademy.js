'use strict';

togglbutton.render(
  '#tutorial-content [data-reactid="6"]:not(.toggl)',
  {},
  function (elem) {
    // remove child nodes. Keep only textContent
    function cloneText (node) {
      let i;
      let n;
      const textNode = node.cloneNode(true);
      for (i = 0, n = textNode.children.length; i < n; i += 1) {
        textNode.removeChild(textNode.children[i]);
      }
      return textNode;
    }

    const topic = cloneText(elem).textContent.trim();
    const project = elem
      .querySelector('[role="navigation"] span:first-child a')
      .textContent.trim();

    const link = togglbutton.createTimerLink({
      className: 'khanacademy',
      buttonType: 'minimal',
      description: topic,
      projectName: project
    });

    elem.style.position = 'relative';
    elem.appendChild(link);
  }
);
