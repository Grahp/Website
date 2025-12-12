/// If the user has sufficient bandwidth/internet speed, cache pages when they hover over them

const app = document.getElementById('app')
if (!app) throw new Error("Router: 'app' element cannot be found.")

/// path: something like "/", "/pinchord"
/// fullPath: something like "/pinchord#heading"
/// fragment: {fragmentHTML, title}

/// path -> fragment
const fragmentCache = new Map()

/// path -> {x, y}
const scrollPositions = new Map()

function scrollToHash(hash) {
  if (!hash) return window.scrollTo(0, 0)
  const id = decodeURIComponent(hash.slice(1))
  let el = null
  try {
    el = document.getElementById(id) || document.querySelector(`#${CSS.escape(id)}`)
  } catch (err) {
    el = document.getElementById(id)
  }
  if (!el) {
    el = document.querySelector(`[name="${id}"]`)
  }
  if (el) {
    if (!el.tabIndex || el.tabIndex < 0) el.tabIndex = -1
    el.scrollIntoView({behavior: 'auto', block: 'start'})
    el.focus({preventScroll: true})
  } else {
    window.scrollTo(0, 0)
  }
}

function isCurrentPage(path) {
  const url = new URL(fullPath, location.href)
  return url.origin   === location.origin
      && url.pathname === location.pathname
      && url.search   === location.search
}

/// I think this needs to also see if path is the current page and then scroll to the heading?
function restoreScroll(fullPath) {
  const path = stripPath(fullPath)
  const pos = scrollPositions.get(path) || {x: 0, y: 0}
  window.scrollTo(pos.x, pos.y)
}

/// Idempotently strips the path from a full path
function stripPath(fullPath) {
  const [path] = fullPath.split("#")
  return path || location.pathname
}

function getHash(fullPath) {
  return fullPath.split("#")[1]
}

/// Gets the app HTML from the path, or undefined if it fails
async function getAppHTML(path) {
  const res = await fetch(path, {method: "GET"})
  if (res.ok) {
    const html = await res.text()
    const doc = new DOMParser().parseFromString(html, "text/html")
    const newApp = doc.getElementById('app')
    return {app: newApp, title: doc.title}
  }
}

/// Returns the fragment from path
/// If the fragment has been cached, returns it, otherwise does a GET
/// Returns null/undefined if it fails
async function getFragment(path) {
  const fragment = fragmentCache.get(path)
  if (fragment) {
    return fragment
  } else {
    const res = await getAppHTML(path)
    if (res?.app) {
      const fragmentHTML = res.app.innerHTML
      const title = res.title || document.title
      const fragment = {fragmentHTML, title}
      fragmentCache.set(path, fragment)
      return fragment
    }
  }
}

function saveScroll() {
  scrollPositions.set(location.pathname, {x: window.scrollX, y: window.scrollY})
}

/// Right now this takes the whole file and the strips out the part it doesn't need...
/// Perhaps it should just take the actual app component and not even pull in the rest?
/// Then there would be problems like if you needed to load another font...
async function navigate(fullPath, push = true) {
  /// I think this is where it should check whether you're on the same page and then don't do anything...
  saveScroll()
  const path = stripPath(fullPath)

  const fragment = await getFragment(path)
  if (fragment) {
    app.innerHTML = fragment.fragmentHTML
    document.title = fragment.title || document.title
    if (push) { 
      history.pushState(null, "", fullPath)
      scrollToHash(getHash(fullPath))
    } else {
      restoreScroll(path)
      scrollToHash(getHash(fullPath))
    }
  } else {
    location.href = fullPath
  }
}

document.addEventListener('click', e => {
  const a = e.target.closest('a')
  if (a && a.target !== '_blank' && !e.metaKey && !e.ctrlKey) {
    const url = new URL(a.href, location.href)
    /// If the link refers to the current site
    if (url.origin === location.origin) {
      e.preventDefault()
      const fullPath = url.pathname + url.search + url.hash
      /// If clicking somewhere on the current page
      if (url.pathname === location.pathname && url.search === location.search && url.hash) {
        history.pushState(null, "", fullPath)
        /// Here it needs to scroll to the correct point given the heading so make a function for that
        scrollToHash(url.hash)
      } else {
        navigate(fullPath)
        restoreScroll(fullPath)
      }
    }
  }
})

window.addEventListener("popstate", () => {
  navigate(location.pathname + location.search + location.hash, false)
})
