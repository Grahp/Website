/// Make cache of page scrolls and remove old broken scrolling behavior
/// Cache page contents, try to use cache and only do a request if the page hasn't been cached
/// If the user has sufficient bandwidth/internet speed, cache pages when they hover over them
/// Rewrite all of this to be clearer and better an such

const app = document.getElementById('app');

function scrollToHash(hash) {
  if (!hash) return window.scrollTo(0, 0);
  const id = decodeURIComponent(hash.slice(1));
  let el = null;
  try {
    el = document.getElementById(id) || document.querySelector(`#${CSS.escape(id)}`);
  } catch (err) {
    el = document.getElementById(id);
  }
  if (!el) {
    el = document.querySelector(`[name="${id}"]`);
  }
  if (el) {
    if (!el.tabIndex || el.tabIndex < 0) el.tabIndex = -1;
    el.scrollIntoView({ behavior: 'auto', block: 'start' });
    el.focus({ preventScroll: true });
  } else {
    window.scrollTo(0, 0);
  }
}

async function navigate(fullPath, push = true) {
  const [fetchPath] = fullPath.split('#');
  const urlForFetch = fetchPath || location.pathname + location.search;
  const res = await fetch(urlForFetch, { method: 'GET' });
  if (!res.ok) return (location.href = fullPath); // fallback to full navigation

  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const newApp = doc.getElementById('app') || doc.querySelector('main');
  if (!newApp) return (location.href = fullPath);

  app.innerHTML = newApp.innerHTML;
  document.title = doc.title || document.title;

  if (push) history.pushState(null, '', fullPath);
  const hash = fullPath.includes('#') ? '#' + fullPath.split('#').slice(1).join('#') : '';
  scrollToHash(hash);
}

document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  if (a.target === '_blank' || e.metaKey || e.ctrlKey) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return;

  if (url.pathname === location.pathname && url.search === location.search && url.hash) {
    e.preventDefault();
    const fullPath = url.pathname + url.search + url.hash;
    history.pushState(null, '', fullPath);
    scrollToHash(url.hash);
    return;
  }

  e.preventDefault();
  const fullPath = url.pathname + url.search + url.hash;
  navigate(fullPath);
});

window.addEventListener('popstate', () => {
  navigate(location.pathname + location.search + location.hash, false);
});
