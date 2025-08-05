# Accessibility Issues Report

This report summarizes the accessibility issues found on your website (index.html) using axe-core and Playwright, with a focus on WCAG 2.0 'A' and 'AA' compliance. Each issue includes its criticality and recommended fix.

---

## Table of Issues

| Issue ID         | Description                                         | WCAG Level | Criticality | Affected Element(s)         | Recommendation |
|------------------|-----------------------------------------------------|------------|-------------|-----------------------------|----------------|
| button-name      | Ensure buttons have discernible text                | A          | Critical    | Search, Cart Close          | Add `aria-label` or visible text to icon-only buttons |
| link-name        | Ensure links have discernible text                  | A          | Serious     | Social Media Links          | Add `aria-label` or visible text to icon-only links |
| select-name      | Ensure select element has an accessible name        | A          | Critical    | Category, Sort Filters      | Add `<label>` or `aria-label` to select elements |
| color-contrast   | Ensure sufficient color contrast (4.5:1 for AA)     | AA         | Serious     | Shop Now Button             | Increase contrast between text and background |

---

## Detailed Issues

### 1. **Buttons Without Accessible Names**
- **WCAG Level:** A
- **Criticality:** Critical
- **Elements:**
  - `<button class="search-btn" id="searchBtn"><i class="fas fa-search"></i></button>`
  - `<button class="cart-close" id="cartClose"><i class="fas fa-times"></i></button>`
- **Recommendation:**
  - Add an `aria-label` attribute describing the button’s function, e.g.:
    ```html
    <button class="search-btn" id="searchBtn" aria-label="Search">
      <i class="fas fa-search"></i>
    </button>
    <button class="cart-close" id="cartClose" aria-label="Close cart">
      <i class="fas fa-times"></i>
    </button>
    ```

### 2. **Links Without Discernible Text**
- **WCAG Level:** A
- **Criticality:** Serious
- **Elements:**
  - Social media links (Facebook, Twitter, Instagram, LinkedIn):
    ```html
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    ```
- **Recommendation:**
  - Add an `aria-label` attribute to each link, e.g.:
    ```html
    <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
    ```

### 3. **Select Elements Without Accessible Names**
- **WCAG Level:** A
- **Criticality:** Critical
- **Elements:**
  - `<select id="categoryFilter">`
  - `<select id="sortFilter">`
- **Recommendation:**
  - Add a `<label>` element for each select, or use `aria-label` if a visible label is not desired, e.g.:
    ```html
    <label for="categoryFilter">Category</label>
    <select id="categoryFilter" aria-label="Category">
      ...
    </select>
    <label for="sortFilter">Sort</label>
    <select id="sortFilter" aria-label="Sort">
      ...
    </select>
    ```

### 4. **Insufficient Color Contrast**
- **WCAG Level:** AA
- **Criticality:** Serious
- **Elements:**
  - `<button class="cta-btn" onclick="scrollToProducts()">Shop Now</button>`
    - Foreground color: `#667eea`
    - Background color: `#ffffff`
    - Contrast ratio: 3.66 (should be at least 4.5:1 for normal text)
- **Recommendation:**
  - Increase the contrast between the button text and its background. For example, use a darker shade of blue or a darker text color.

---

## Notes
- All issues above are required for WCAG 2.0 'A' or 'AA' compliance.
- Fixing these will improve accessibility for all users.
- After applying fixes, re-run the accessibility scan to verify resolution. 