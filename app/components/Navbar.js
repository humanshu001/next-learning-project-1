import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container p-0">
  <header className="border-bottom lh-1 px-5 py-3">
    <div className="row flex-nowrap justify-content-between align-items-center">
      <div className="col-4 pt-1">
        <a className="link-dark" href="#">Subscribe</a>
      </div>
      <div className="col-4 text-center">
        <a className="blog-header-logo text-body-emphasis text-decoration-none" href="#">Large</a>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <a className="link-dark" href="#" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
        </a>
        <a className="btn btn-sm btn-outline-dark" href="#">Sign up</a>
      </div>
    </div>
  </header>

  <div className="nav-scroller py-1 mb-3 border-bottom px-5">
    <nav className="nav nav-underline justify-content-between">
      <Link className="nav-item nav-link link-body-emphasis" href="/world">World</Link>
      <Link className="nav-item nav-link link-body-emphasis" href="/us">U.S.</Link>
      <Link className="nav-item nav-link link-body-emphasis" href="/technology">Technology</Link>
      <Link className="nav-item nav-link link-body-emphasis" href="/culture">Culture</Link>
      <Link className="nav-item nav-link link-body-emphasis" href="/business">Business</Link>
      <Link className="nav-item nav-link link-body-emphasis" href="/politics">Politics</Link>
      <Link className="nav-item nav-link link-body-emphasis" href="/science">Science</Link>
      <Link className="nav-item nav-link link-body-emphasis" href="/health">Health</Link>
    </nav>
  </div>
</div>
  )
}
