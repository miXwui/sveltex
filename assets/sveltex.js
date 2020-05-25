const context = require.context("../../../assets/js/svelte", false, /\.svelte/);
window.onload = function () {
  context.keys().forEach(file => {
    const componentName = file.replace(/\.\/|\.svelte/g, "");
    const svelteContainerId = `sveltex-${componentName}`;

    const svelteContainer = document.getElementById(svelteContainerId);
    if (!svelteContainer) {
      return;
    }

    const { props, targetId } = svelteContainer.dataset;
    if (props) {
      parsedProps = JSON.parse(props);
    }
    if (targetId) {
      svelteContainer.remove();
    }

    const requiredApp = require(`../../../assets/js/svelte/${componentName}.svelte`);

    new requiredApp.default({
      target: targetId ? document.getElementById(targetId) : svelteContainer,
      props: parsedProps
    });
  });
};
