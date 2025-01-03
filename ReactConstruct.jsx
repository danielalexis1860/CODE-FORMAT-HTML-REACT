import React from 'react';

function App() {
  return (
    <div>
      {/* 1. Header */}
      <header>
        <h1>Welcome to My Website</h1>
        <p>A simple website built with React</p>
      </header>

      {/* 2. Navigation */}
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 3. Main Content */}
      <main>
        {/* 4. Section */}
        <section id="about">
          <h2>About Us</h2>
          <p>This website demonstrates the use of basic HTML elements to create a functional webpage.</p>
        </section>

        {/* 5. Image */}
        <section>
          <h2>Our Work</h2>
          <img src="https://via.placeholder.com/400x200" alt="Sample Work" width="400" height="200" />
        </section>

        {/* 6. Unordered List */}
        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Web Design</li>
            <li>SEO Optimization</li>
            <li>Content Creation</li>
          </ul>
        </section>

        {/* 7. Ordered List */}
        <section>
          <h3>How to Get Started</h3>
          <ol>
            <li>Contact us through the form below.</li>
            <li>Discuss your project requirements.</li>
            <li>Launch your website with us!</li>
          </ol>
        </section>

        {/* 8. Form */}
        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            {/* 9. Input */}
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required /><br /><br />

            {/* 10. Email */}
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required /><br /><br />

            {/* 11. Textarea */}
            <label htmlFor="message">Message:</label><br />
            <textarea id="message" name="message" rows="5" placeholder="Write your message here"></textarea><br /><br />

            {/* 12. Button */}
            <button type="submit">Submit</button>
          </form>
        </section>

        {/* 13. Table */}
        <section>
          <h2>Pricing Table</h2>
          <table border="1" cellpadding="5">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Design</td>
                <td>$500</td>
              </tr>
              <tr>
                <td>SEO Optimization</td>
                <td>$300</td>
              </tr>
              <tr>
                <td>Content Creation</td>
                <td>$200</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      {/* 14. Footer */}
      <footer>
        <p>&copy; 2024 My Website | All Rights Reserved</p>
      </footer>

      {/* 15. Script */}
      <script>
        console.log("Website Loaded Successfully!");
      </script>
    </div>
  );
}

export default App;
