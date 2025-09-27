const app = document.getElementById('app');

async function navigate(url, push = true) {
  const res = await fetch(url);
  if (!res.ok) return (location.href = url);

  const html = await res.text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const newApp = doc.getElementById('app') || doc.querySelector('main');
  if (!newApp) return (location.href = url);

  app.innerHTML = newApp.innerHTML;
  document.title = doc.title || document.title;
  if (push) history.pushState(null, '', url);
  window.scrollTo(0, 0);
}

document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  if (a.target === '_blank' || e.metaKey || e.ctrlKey) return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin) return;
  e.preventDefault();
  navigate(url.pathname);
});

window.addEventListener('popstate', () => navigate(location.pathname, false));
