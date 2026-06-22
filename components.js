// Dynamic Navigation and Style Injector
document.addEventListener("DOMContentLoaded", function() {
    // 1. Inject the shared responsive styles into the head
    const style = document.createElement('style');
    style.textContent = `
        .navbar {
            background-color: #1b263b;
            padding: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            border-bottom: 3px solid #e0a96d;
        }
        .navbar .brand {
            color: #e0a96d;
            font-size: 1.4rem;
            font-weight: bold;
            text-decoration: none;
            white-space: nowrap;
        }
        .nav-links {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }
        .nav-links a {
            color: #e0e1dd;
            text-decoration: none;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 4px;
        }
        .nav-links a:hover, .nav-links a.active {
            color: #e0a96d;
            background-color: rgba(224, 169, 109, 0.1);
        }
        @media (max-width: 600px) {
            .navbar { flex-direction: column; text-align: center; padding: 12px; }
            .nav-links { justify-content: center; width: 100%; gap: 8px; }
            .nav-links a { font-size: 0.95rem; padding: 8px 12px; }
        }
    `;
    document.head.appendChild(style);

    // 2. Identify current page to set the highlight "active" class
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // 3. Construct and inject the Navigation Bar HTML
    const navHTML = `
        <nav class="navbar">
            <a href="index.html" class="brand">WWW.TREDEGAR.CO.UK</a>
            <div class="nav-links">
                <a href="index.html" class="${currentPage === 'index.html' ? 'active' : ''}">Home</a>
                <a href="about-us.html" class="${currentPage === 'about-us.html' ? 'active' : ''}">About Us</a>
                <a href="history.html" class="${currentPage === 'history.html' ? 'active' : ''}">History</a>
                <a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a>
            </div>
        </nav>
    `;

    // Find the placeholder tag and replace it with our menu
    const placeholder = document.getElementById("nav-placeholder");
    if (placeholder) {
        placeholder.outerHTML = navHTML;
    }
});
